import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Languages, Loader2 } from "lucide-react";

interface UseAutoTranslateOptions {
  onTranslated: (translations: Record<string, { bm: string; zh: string }>) => void;
}

export const useAutoTranslate = ({ onTranslated }: UseAutoTranslateOptions) => {
  const [translating, setTranslating] = useState(false);

  const translate = async (texts: Record<string, string>) => {
    // Filter out empty values
    const nonEmpty = Object.fromEntries(
      Object.entries(texts).filter(([, v]) => v.trim().length > 0)
    );
    if (Object.keys(nonEmpty).length === 0) {
      toast.error("Please fill in the English fields first");
      return;
    }

    setTranslating(true);
    try {
      const { data, error } = await supabase.functions.invoke("translate", {
        body: { texts: nonEmpty },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      onTranslated(data);
      toast.success("Auto-translated to BM & 中文!");
    } catch (err: any) {
      console.error("Translation error:", err);
      toast.error(err.message || "Translation failed");
    } finally {
      setTranslating(false);
    }
  };

  return { translate, translating };
};

export const AutoTranslateButton = ({
  onClick,
  translating,
}: {
  onClick: () => void;
  translating: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={translating}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors disabled:opacity-50"
  >
    {translating ? (
      <Loader2 className="w-4 h-4 animate-spin" />
    ) : (
      <Languages className="w-4 h-4" />
    )}
    {translating ? "Translating..." : "🪄 Auto Translate from English"}
  </button>
);
