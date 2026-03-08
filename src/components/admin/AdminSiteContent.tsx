import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { useAutoTranslate, AutoTranslateButton } from "@/hooks/useAutoTranslate";

interface ContentItem {
  id: string;
  key: string;
  value: any;
  category: string;
}

const defaultCategories = ["hero", "about", "contact", "footer", "pricing", "general"];

const AdminSiteContent = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<ContentItem | null>(null);
  const [isNew, setIsNew] = useState(false);

  // Detect if value has en/bm/zh structure
  const isMultilang = (val: any) =>
    val && typeof val === "object" && !Array.isArray(val) && ("en" in val || "bm" in val || "zh" in val);

  const { translate, translating } = useAutoTranslate({
    onTranslated: (translations) => {
      if (!editing) return;
      const updated = { ...editing };
      if (isMultilang(updated.value) && translations.content) {
        updated.value = {
          ...updated.value,
          bm: translations.content.bm,
          zh: translations.content.zh,
        };
      }
      setEditing(updated);
    },
  });

  const fetchItems = async () => {
    const { data, error } = await supabase.from("site_content").select("*").order("category");
    if (error) toast.error("Failed to load");
    else setItems((data as ContentItem[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    const { id, ...rest } = editing;
    if (isNew) {
      const { error } = await supabase.from("site_content").insert([rest]);
      if (error) { toast.error(error.message); return; }
      toast.success("Created!");
    } else {
      const { error } = await supabase.from("site_content").update(rest).eq("id", id);
      if (error) { toast.error(error.message); return; }
      toast.success("Updated!");
    }
    setEditing(null); setIsNew(false); fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete?")) return;
    const { error } = await supabase.from("site_content").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted!"); fetchItems(); }
  };

  const newItem = (): ContentItem => ({
    id: "", key: "", value: { en: "", bm: "", zh: "" }, category: "general",
  });

  if (loading) return <div className="text-muted-foreground">Loading...</div>;

  if (editing) {
    const multilang = isMultilang(editing.value);

    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-bold">{isNew ? "Add Content" : "Edit Content"}</h2>
          <button onClick={() => { setEditing(null); setIsNew(false); }}><X className="w-5 h-5 text-muted-foreground" /></button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Key</label>
              <input value={editing.key}
                onChange={(e) => setEditing({ ...editing, key: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                placeholder="e.g. hero.headline" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Category</label>
              <select value={editing.category}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground">
                {defaultCategories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {multilang ? (
            <>
              {/* Friendly language fields */}
              <div className="p-4 rounded-xl border border-border">
                <h3 className="text-sm font-bold uppercase text-primary mb-3">English</h3>
                <textarea
                  placeholder="Enter English text..."
                  value={editing.value?.en || ""}
                  onChange={(e) => setEditing({ ...editing, value: { ...editing.value, en: e.target.value } })}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                  rows={3}
                />
              </div>

              <AutoTranslateButton translating={translating}
                onClick={() => translate({ content: editing.value?.en || "" })} />

              <div className="p-4 rounded-xl border border-border">
                <h3 className="text-sm font-bold uppercase text-primary mb-3">Bahasa Melayu</h3>
                <textarea
                  placeholder="Enter BM text..."
                  value={editing.value?.bm || ""}
                  onChange={(e) => setEditing({ ...editing, value: { ...editing.value, bm: e.target.value } })}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                  rows={3}
                />
              </div>

              <div className="p-4 rounded-xl border border-border">
                <h3 className="text-sm font-bold uppercase text-primary mb-3">中文</h3>
                <textarea
                  placeholder="Enter Chinese text..."
                  value={editing.value?.zh || ""}
                  onChange={(e) => setEditing({ ...editing, value: { ...editing.value, zh: e.target.value } })}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                  rows={3}
                />
              </div>
            </>
          ) : (
            /* Fallback for non-multilang values */
            <div>
              <label className="block text-sm font-semibold mb-1">Value</label>
              <textarea
                value={typeof editing.value === "string" ? editing.value : JSON.stringify(editing.value, null, 2)}
                onChange={(e) => {
                  try { setEditing({ ...editing, value: JSON.parse(e.target.value) }); } catch {
                    setEditing({ ...editing, value: e.target.value });
                  }
                }}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm font-mono"
                rows={6}
              />
            </div>
          )}

          <button onClick={handleSave} className="btn-primary inline-flex items-center gap-2">
            <Save className="w-4 h-4" /> Save
          </button>
        </div>
      </div>
    );
  }

  const grouped = defaultCategories.map((cat) => ({
    category: cat,
    items: items.filter((i) => i.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground text-sm">{items.length} content entries</p>
        <button onClick={() => { setEditing(newItem()); setIsNew(true); }} className="btn-primary text-sm inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Content
        </button>
      </div>

      {grouped.length > 0 ? grouped.map((group) => (
        <div key={group.category} className="mb-6">
          <h3 className="text-sm font-bold uppercase text-primary mb-3">{group.category}</h3>
          <div className="space-y-2">
            {group.items.map((item) => (
              <div key={item.id} className="p-3 rounded-lg border border-border bg-card flex items-center justify-between">
                <div>
                  <span className="font-mono text-sm text-foreground">{item.key}</span>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-md">
                    {typeof item.value === "object" && item.value?.en ? item.value.en.substring(0, 80) : JSON.stringify(item.value).substring(0, 80)}
                  </p>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => setEditing(item)} className="p-2 text-muted-foreground hover:text-primary"><Pencil className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )) : (
        <p className="text-center text-muted-foreground py-12">No content entries yet. Add content to manage your website text.</p>
      )}
    </div>
  );
};

export default AdminSiteContent;
