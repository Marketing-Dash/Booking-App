import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { useAutoTranslate, AutoTranslateButton } from "@/hooks/useAutoTranslate";

interface Testimonial {
  id: string;
  quote_en: string;
  quote_bm: string;
  quote_zh: string;
  name: string;
  company_en: string;
  company_bm: string;
  company_zh: string;
  avatar_url: string | null;
  sort_order: number;
  is_active: boolean;
}

const AdminTestimonials = () => {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [isNew, setIsNew] = useState(false);

  const { translate, translating } = useAutoTranslate({
    onTranslated: (translations) => {
      if (!editing) return;
      const updated = { ...editing };
      if (translations.quote) {
        updated.quote_bm = translations.quote.bm;
        updated.quote_zh = translations.quote.zh;
      }
      if (translations.company) {
        updated.company_bm = translations.company.bm;
        updated.company_zh = translations.company.zh;
      }
      setEditing(updated);
    },
  });

  const fetchItems = async () => {
    const { data, error } = await supabase.from("testimonials").select("*").order("sort_order");
    if (error) toast.error("Failed to load");
    else setItems((data as Testimonial[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    const { id, ...rest } = editing;
    if (isNew) {
      const { error } = await supabase.from("testimonials").insert([rest]);
      if (error) { toast.error(error.message); return; }
      toast.success("Created!");
    } else {
      const { error } = await supabase.from("testimonials").update(rest).eq("id", id);
      if (error) { toast.error(error.message); return; }
      toast.success("Updated!");
    }
    setEditing(null); setIsNew(false); fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete?")) return;
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted!"); fetchItems(); }
  };

  const newItem = (): Testimonial => ({
    id: "", quote_en: "", quote_bm: "", quote_zh: "",
    name: "", company_en: "", company_bm: "", company_zh: "",
    avatar_url: null, sort_order: items.length, is_active: true,
  });

  if (loading) return <div className="text-muted-foreground">Loading...</div>;

  if (editing) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-bold">{isNew ? "Add Testimonial" : "Edit Testimonial"}</h2>
          <button onClick={() => { setEditing(null); setIsNew(false); }}><X className="w-5 h-5 text-muted-foreground" /></button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Client Name</label>
            <input value={editing.name}
              onChange={(e) => setEditing({ ...editing, name: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground" />
          </div>

          {/* English */}
          <div className="p-4 rounded-xl border border-border">
            <h3 className="text-sm font-bold uppercase text-primary mb-3">English</h3>
            <textarea placeholder="Quote" value={editing.quote_en}
              onChange={(e) => setEditing({ ...editing, quote_en: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm mb-2" rows={2} />
            <input placeholder="Company / Title" value={editing.company_en}
              onChange={(e) => setEditing({ ...editing, company_en: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm" />
          </div>

          <AutoTranslateButton
            translating={translating}
            onClick={() => translate({ quote: editing.quote_en, company: editing.company_en })}
          />

          {(["bm", "zh"] as const).map((lang) => (
            <div key={lang} className="p-4 rounded-xl border border-border">
              <h3 className="text-sm font-bold uppercase text-primary mb-3">{lang === "bm" ? "Bahasa Melayu" : "中文"}</h3>
              <textarea placeholder="Quote" value={(editing as any)[`quote_${lang}`]}
                onChange={(e) => setEditing({ ...editing, [`quote_${lang}`]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm mb-2" rows={2} />
              <input placeholder="Company / Title" value={(editing as any)[`company_${lang}`]}
                onChange={(e) => setEditing({ ...editing, [`company_${lang}`]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm" />
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
        <p className="text-muted-foreground text-sm">{items.length} testimonials</p>
        <button onClick={() => { setEditing(newItem()); setIsNew(true); }} className="btn-primary text-sm inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Testimonial
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="p-4 rounded-xl border border-border bg-card flex items-center justify-between">
            <div>
              <p className="text-foreground font-medium text-sm">"{item.quote_en.substring(0, 80)}..."</p>
              <p className="text-xs text-muted-foreground mt-1">— {item.name}, {item.company_en}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing(item)} className="p-2 text-muted-foreground hover:text-primary"><Pencil className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(item.id)} className="p-2 text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-center text-muted-foreground py-12">No testimonials yet.</p>}
      </div>
    </div>
  );
};

export default AdminTestimonials;
