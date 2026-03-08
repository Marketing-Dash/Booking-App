import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  slug: string;
  title_en: string;
  title_bm: string;
  title_zh: string;
  excerpt_en: string;
  excerpt_bm: string;
  excerpt_zh: string;
  content_en: string;
  content_bm: string;
  content_zh: string;
  cover_image_url: string | null;
  category: string;
  tags: string[];
  is_published: boolean;
  published_at: string | null;
  author_name: string;
  meta_description_en: string;
  meta_description_bm: string;
  meta_description_zh: string;
  meta_keywords: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data as unknown as BlogPost[];
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();
      if (error) throw error;
      return data as unknown as BlogPost;
    },
    enabled: !!slug,
  });
};

export const useAllBlogPosts = () => {
  return useQuery({
    queryKey: ["blog-posts-admin"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as unknown as BlogPost[];
    },
  });
};
