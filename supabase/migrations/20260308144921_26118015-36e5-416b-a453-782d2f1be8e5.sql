
-- Blog posts table
CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title_en text NOT NULL,
  title_bm text NOT NULL DEFAULT '',
  title_zh text NOT NULL DEFAULT '',
  excerpt_en text NOT NULL DEFAULT '',
  excerpt_bm text NOT NULL DEFAULT '',
  excerpt_zh text NOT NULL DEFAULT '',
  content_en text NOT NULL DEFAULT '',
  content_bm text NOT NULL DEFAULT '',
  content_zh text NOT NULL DEFAULT '',
  cover_image_url text,
  category text NOT NULL DEFAULT 'marketing-tips',
  tags text[] NOT NULL DEFAULT '{}',
  is_published boolean NOT NULL DEFAULT false,
  published_at timestamp with time zone,
  author_name text NOT NULL DEFAULT 'BrandSpeed Team',
  meta_description_en text NOT NULL DEFAULT '',
  meta_description_bm text NOT NULL DEFAULT '',
  meta_description_zh text NOT NULL DEFAULT '',
  meta_keywords text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read published posts
CREATE POLICY "Anyone can read published blog posts"
  ON public.blog_posts FOR SELECT
  USING (true);

-- Admin CRUD
CREATE POLICY "Admins can insert blog posts"
  ON public.blog_posts FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update blog posts"
  ON public.blog_posts FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete blog posts"
  ON public.blog_posts FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Updated at trigger
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
