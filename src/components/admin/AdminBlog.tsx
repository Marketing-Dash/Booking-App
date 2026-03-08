import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAllBlogPosts, BlogPost } from "@/hooks/useBlogPosts";
import { Plus, Pencil, Trash2, Eye, EyeOff, Save, X } from "lucide-react";
import { toast } from "sonner";

const emptyPost: Partial<BlogPost> = {
  slug: "",
  title_en: "",
  title_bm: "",
  title_zh: "",
  excerpt_en: "",
  excerpt_bm: "",
  excerpt_zh: "",
  content_en: "",
  content_bm: "",
  content_zh: "",
  cover_image_url: "",
  category: "marketing-tips",
  tags: [],
  is_published: false,
  author_name: "BrandSpeed Team",
  meta_description_en: "",
  meta_description_bm: "",
  meta_description_zh: "",
  meta_keywords: "",
};

const AdminBlog = () => {
  const { data: posts, isLoading } = useAllBlogPosts();
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [tagsInput, setTagsInput] = useState("");

  const startEdit = (post?: BlogPost) => {
    if (post) {
      setEditing({ ...post });
      setTagsInput((post.tags || []).join(", "));
    } else {
      setEditing({ ...emptyPost });
      setTagsInput("");
    }
  };

  const handleSave = async () => {
    if (!editing) return;
    const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    const payload = {
      ...editing,
      tags,
      published_at: editing.is_published && !editing.published_at ? new Date().toISOString() : editing.published_at,
    };
    delete (payload as any).id;
    delete (payload as any).created_at;
    delete (payload as any).updated_at;

    try {
      if (editing.id) {
        const { error } = await supabase
          .from("blog_posts")
          .update(payload as any)
          .eq("id", editing.id);
        if (error) throw error;
        toast.success("Post updated!");
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert(payload as any);
        if (error) throw error;
        toast.success("Post created!");
      }
      queryClient.invalidateQueries({ queryKey: ["blog-posts-admin"] });
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      setEditing(null);
    } catch (err: any) {
      toast.error(err.message || "Error saving post");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog post?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Post deleted");
      queryClient.invalidateQueries({ queryKey: ["blog-posts-admin"] });
    }
  };

  const togglePublish = async (post: BlogPost) => {
    const { error } = await supabase
      .from("blog_posts")
      .update({
        is_published: !post.is_published,
        published_at: !post.is_published ? new Date().toISOString() : post.published_at,
      } as any)
      .eq("id", post.id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(post.is_published ? "Unpublished" : "Published!");
      queryClient.invalidateQueries({ queryKey: ["blog-posts-admin"] });
    }
  };

  if (editing) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-heading font-bold">{editing.id ? "Edit Post" : "New Post"}</h2>
          <button onClick={() => setEditing(null)} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Slug</label>
            <input
              value={editing.slug || ""}
              onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              placeholder="my-blog-post-title"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Category</label>
            <input
              value={editing.category || ""}
              onChange={(e) => setEditing({ ...editing, category: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
            />
          </div>
        </div>

        {(["en", "bm", "zh"] as const).map((l) => (
          <div key={l} className="space-y-3 p-4 rounded-xl border border-border">
            <h3 className="font-bold text-sm text-primary uppercase">{l === "en" ? "English" : l === "bm" ? "Bahasa Malaysia" : "中文"}</h3>
            <div>
              <label className="text-xs text-muted-foreground">Title</label>
              <input
                value={(editing as any)[`title_${l}`] || ""}
                onChange={(e) => setEditing({ ...editing, [`title_${l}`]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Excerpt</label>
              <textarea
                value={(editing as any)[`excerpt_${l}`] || ""}
                onChange={(e) => setEditing({ ...editing, [`excerpt_${l}`]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                rows={2}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Content (Markdown)</label>
              <textarea
                value={(editing as any)[`content_${l}`] || ""}
                onChange={(e) => setEditing({ ...editing, [`content_${l}`]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm font-mono"
                rows={10}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Meta Description</label>
              <input
                value={(editing as any)[`meta_description_${l}`] || ""}
                onChange={(e) => setEditing({ ...editing, [`meta_description_${l}`]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Tags (comma separated)</label>
            <input
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              placeholder="seo, marketing, malaysia"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Meta Keywords</label>
            <input
              value={editing.meta_keywords || ""}
              onChange={(e) => setEditing({ ...editing, meta_keywords: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Cover Image URL</label>
            <input
              value={editing.cover_image_url || ""}
              onChange={(e) => setEditing({ ...editing, cover_image_url: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Author</label>
            <input
              value={editing.author_name || ""}
              onChange={(e) => setEditing({ ...editing, author_name: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={editing.is_published || false}
            onChange={(e) => setEditing({ ...editing, is_published: e.target.checked })}
            id="publish-toggle"
          />
          <label htmlFor="publish-toggle" className="text-sm font-medium">Publish immediately</label>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
        >
          <Save className="w-4 h-4" />
          {editing.id ? "Update Post" : "Create Post"}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">{posts?.length || 0} blog posts</p>
        <button
          onClick={() => startEdit()}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          New Post
        </button>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-muted rounded-xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading font-bold text-foreground truncate">{post.title_en}</h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      post.is_published ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {post.is_published ? "Published" : "Draft"}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">/blog/{post.slug}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button onClick={() => togglePublish(post)} className="p-2 rounded-lg hover:bg-muted transition-colors" title={post.is_published ? "Unpublish" : "Publish"}>
                  {post.is_published ? <EyeOff className="w-4 h-4 text-muted-foreground" /> : <Eye className="w-4 h-4 text-primary" />}
                </button>
                <button onClick={() => startEdit(post)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Pencil className="w-4 h-4 text-muted-foreground" />
                </button>
                <button onClick={() => handleDelete(post.id)} className="p-2 rounded-lg hover:bg-destructive/10 transition-colors">
                  <Trash2 className="w-4 h-4 text-destructive" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminBlog;
