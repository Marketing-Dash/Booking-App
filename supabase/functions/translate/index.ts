import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { texts } = await req.json();
    // texts is an object like { title: "My Title", description: "My description" }
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const prompt = `Translate the following English texts into two languages:
1. Bahasa Malaysia (bm)
2. Mandarin Chinese (zh)

Input texts:
${Object.entries(texts).map(([key, val]) => `- ${key}: "${val}"`).join("\n")}

You MUST respond using the suggest_translations tool. Translate naturally, not word-by-word.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: "You are a professional translator. Translate accurately and naturally." },
          { role: "user", content: prompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "suggest_translations",
              description: "Return translations for each text field in BM and ZH",
              parameters: {
                type: "object",
                properties: {
                  translations: {
                    type: "object",
                    description: "Object where each key matches input key, value has bm and zh",
                    additionalProperties: {
                      type: "object",
                      properties: {
                        bm: { type: "string" },
                        zh: { type: "string" },
                      },
                      required: ["bm", "zh"],
                    },
                  },
                },
                required: ["translations"],
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "suggest_translations" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI error:", response.status, t);
      throw new Error("Translation failed");
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No translation returned");

    const result = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(result.translations), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("translate error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
