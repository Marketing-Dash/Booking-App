import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";

interface ContentMap {
  [key: string]: string;
}

export const useSiteContent = () => {
  const [content, setContent] = useState<ContentMap>({});
  const [loading, setLoading] = useState(true);
  const { lang: language } = useLanguage();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("site_content").select("*");
      if (data) {
        const map: ContentMap = {};
        data.forEach((item: any) => {
          const val = item.value;
          if (val && typeof val === "object" && !Array.isArray(val) && (val.en || val.bm || val.zh)) {
            map[item.key] = val[language] || val.en || "";
          } else if (typeof val === "string") {
            map[item.key] = val;
          } else {
            map[item.key] = JSON.stringify(val);
          }
        });
        setContent(map);
      }
      setLoading(false);
    };
    fetch();
  }, [language]);

  const get = (key: string, fallback = "") => content[key] || fallback;

  return { get, loading, content };
};

// Get raw (non-language-resolved) content for things like phone numbers
export const useRawSiteContent = () => {
  const [content, setContent] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("site_content").select("*");
      if (data) {
        const map: Record<string, any> = {};
        data.forEach((item: any) => {
          map[item.key] = item.value;
        });
        setContent(map);
      }
    };
    fetch();
  }, []);

  const get = (key: string, fallback = "") => {
    const val = content[key];
    if (!val) return fallback;
    if (typeof val === "object" && val.en) return val.en;
    if (typeof val === "string") return val;
    return fallback;
  };

  return { get, content };
};
