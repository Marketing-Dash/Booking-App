import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Save, X, Upload } from "lucide-react";
import { useAutoTranslate, AutoTranslateButton } from "@/hooks/useAutoTranslate";

interface PortfolioItem {
  id: string;
  title_en: string;
  title_bm: string;
  title_zh: string;
  description_en: string;
  description_bm: string;
  description_zh: string;
  category: string;
  image_url: string | null;
  link: string | null;
  sort_order: number;
  is_active: boolean;
}

const categories = ["websites", "apps", "social", "branding"];

const AdminPortfolio = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<PortfolioItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploading, setUploading] = useState(false);

  const { translate, translating } = useAutoTranslate({
    onTranslated: (translations) => {
      if (!editing) return;
      const updated = { ...editing };
      if (translations.title) {
        updated.title_bm = translations.title.bm;
        updated.title_zh = translations.title.zh;
      }
      if (translations.description) {
        updated.description_bm = translations.description.bm;
        updated.description_zh = translations.description.zh;
      }
      setEditing(updated);
    },
  });

  const fetchItems = async () => {
    const { data, error } = await supabase.from("portfolio_items").select("*").order("sort_order");
    if (error) toast.error("Failed to load portfolio");
    else setItems((data as PortfolioItem[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0] || !editing) return;
    setUploading(true);
    const file = e.target.files[0];
    const ext = file.name.split(".").pop();
    const path = `portfolio/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("site-assets").upload(path, file);
    if (error) { toast.error("Upload failed"); setUploading(false); return; }
    const { data } = supabase.storage.from("site-assets").getPublicUrl(path);
    setEditing({ ...editing, image_url: data.publicUrl });
    setUploading(false);
    toast.success("Image uploaded!");
  };

  const handleSave = async () => {
    if (!editing) return;
    const { id, ...rest } = editing;
    if (isNew) {
      const { error } = await supabase.from("portfolio_items").insert([rest]);
      if (error) { toast.error(error.message); return; }
      toast.success("Portfolio item created!");
    } else {
      const { error } = await supabase.from("portfolio_items").update(rest).eq("id", id);
      if (error) { toast.error(error.message); return; }
      toast.success("Portfolio item updated!");
    }
    setEditing(null); setIsNew(false); fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    const { error } = await supabase.from("portfolio_items").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted!"); fetchItems(); }
  };

  const newItem = (): PortfolioItem => ({
    id: "", title_en: "", title_bm: "", title_zh: "",
    description_en: "", description_bm: "", description_zh: "",
    category: "websites", image_url: null, link: null,
    sort_order: items.length, is_active: true,
  });

  if (loading) return <div className="text-muted-foreground">Loading...</div>;

  if (editing) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-bold">{isNew ? "Add Portfolio Item" : "Edit Portfolio Item"}</h2>
          <button onClick={() => { setEditing(null); setIsNew(false); }}><X className="w-5 h-5 text-muted-foreground" /></button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Category</label>
              <select value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground">
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Link URL</label>
              <input value={editing.link || ""} onChange={(e) => setEditing({ ...editing, link: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Image</label>
            {editing.image_url && <img src={editing.image_url} alt="" className="w-40 h-24 object-cover rounded-lg mb-2" />}
            <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm cursor-pointer hover:bg-muted transition-colors">
              <Upload className="w-4 h-4" />
              {uploading ? "Uploading..." : "Upload Image"}
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>

          {/* English fields */}
          <div className="p-4 rounded-xl border border-border">
            <h3 className="text-sm font-bold uppercase text-primary mb-3">English</h3>
            <input placeholder="Title" value={editing.title_en}
              onChange={(e) => setEditing({ ...editing, title_en: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm mb-2" />
            <textarea placeholder="Description" value={editing.description_en}
              onChange={(e) => setEditing({ ...editing, description_en: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm" rows={2} />
          </div>

          {/* Auto translate button */}
          <AutoTranslateButton
            translating={translating}
            onClick={() => translate({ title: editing.title_en, description: editing.description_en })}
          />

          {/* BM & ZH fields */}
          {(["bm", "zh"] as const).map((lang) => (
            <div key={lang} className="p-4 rounded-xl border border-border">
              <h3 className="text-sm font-bold uppercase text-primary mb-3">{lang === "bm" ? "Bahasa Melayu" : "中文"}</h3>
              <input placeholder="Title" value={(editing as any)[`title_${lang}`]}
                onChange={(e) => setEditing({ ...editing, [`title_${lang}`]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm mb-2" />
              <textarea placeholder="Description" value={(editing as any)[`description_${lang}`]}
                onChange={(e) => setEditing({ ...editing, [`description_${lang}`]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm" rows={2} />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Sort Order</label>
              <input type="number" value={editing.sort_order}
                onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground" />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={editing.is_active}
                  onChange={(e) => setEditing({ ...editing, is_active: e.target.checked })} className="w-4 h-4" />
                <span className="text-sm font-semibold">Active</span>
              </label>
            </div>
          </div>

          <button onClick={handleSave} className="btn-primary inline-flex items-center gap-2">
            <Save className="w-4 h-4" /> Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground text-sm">{items.length} items</p>
        <button onClick={() => { setEditing(newItem()); setIsNew(true); }} className="btn-primary text-sm inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Item
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-border bg-card overflow-hidden">
            {item.image_url ? (
              <img src={item.image_url} alt="" className="w-full h-32 object-cover" />
            ) : (
              <div className="w-full h-32 bg-muted flex items-center justify-center text-muted-foreground text-sm">No image</div>
            )}
            <div className="p-4">
              <h3 className="font-bold text-foreground text-sm">{item.title_en}</h3>
              <p className="text-xs text-muted-foreground">{item.category}</p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setEditing(item)} className="text-xs text-primary hover:underline flex items-center gap-1">
                  <Pencil className="w-3 h-3" /> Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="text-xs text-destructive hover:underline flex items-center gap-1">
                  <Trash2 className="w-3 h-3" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && <p className="text-center text-muted-foreground py-12">No portfolio items yet.</p>}
    </div>
  );
};

export default AdminPortfolio;
