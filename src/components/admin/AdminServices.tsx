import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";

interface Service {
  id: string;
  slug: string;
  title_en: string;
  title_bm: string;
  title_zh: string;
  description_en: string;
  description_bm: string;
  description_zh: string;
  icon: string;
  features: any;
  pricing: any;
  sort_order: number;
  is_active: boolean;
}

const AdminServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Service | null>(null);
  const [isNew, setIsNew] = useState(false);

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("sort_order");
    if (error) toast.error("Failed to load services");
    else setServices((data as Service[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchServices(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    const { id, ...rest } = editing;

    if (isNew) {
      const { error } = await supabase.from("services").insert([rest]);
      if (error) { toast.error(error.message); return; }
      toast.success("Service created!");
    } else {
      const { error } = await supabase.from("services").update(rest).eq("id", id);
      if (error) { toast.error(error.message); return; }
      toast.success("Service updated!");
    }
    setEditing(null);
    setIsNew(false);
    fetchServices();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this service?")) return;
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Service deleted!"); fetchServices(); }
  };

  const newService = (): Service => ({
    id: "",
    slug: "",
    title_en: "",
    title_bm: "",
    title_zh: "",
    description_en: "",
    description_bm: "",
    description_zh: "",
    icon: "Code",
    features: [],
    pricing: [],
    sort_order: services.length,
    is_active: true,
  });

  if (loading) return <div className="text-muted-foreground">Loading...</div>;

  if (editing) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-bold text-foreground">
            {isNew ? "Add Service" : "Edit Service"}
          </h2>
          <button onClick={() => { setEditing(null); setIsNew(false); }} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Slug</label>
              <input
                value={editing.slug}
                onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                placeholder="e.g. social-media-marketing"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Icon</label>
              <input
                value={editing.icon}
                onChange={(e) => setEditing({ ...editing, icon: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                placeholder="BarChart3, Code, Smartphone..."
              />
            </div>
          </div>

          {(["en", "bm", "zh"] as const).map((lang) => (
            <div key={lang} className="p-4 rounded-xl border border-border">
              <h3 className="text-sm font-bold uppercase text-primary mb-3">{lang === "en" ? "English" : lang === "bm" ? "Bahasa Melayu" : "中文"}</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">Title</label>
                  <input
                    value={(editing as any)[`title_${lang}`]}
                    onChange={(e) => setEditing({ ...editing, [`title_${lang}`]: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Description</label>
                  <textarea
                    value={(editing as any)[`description_${lang}`]}
                    onChange={(e) => setEditing({ ...editing, [`description_${lang}`]: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                    rows={2}
                  />
                </div>
              </div>
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold mb-1">Features (JSON)</label>
            <textarea
              value={JSON.stringify(editing.features, null, 2)}
              onChange={(e) => {
                try { setEditing({ ...editing, features: JSON.parse(e.target.value) }); } catch {}
              }}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm font-mono"
              rows={6}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Pricing (JSON)</label>
            <textarea
              value={JSON.stringify(editing.pricing, null, 2)}
              onChange={(e) => {
                try { setEditing({ ...editing, pricing: JSON.parse(e.target.value) }); } catch {}
              }}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm font-mono"
              rows={6}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Sort Order</label>
              <input
                type="number"
                value={editing.sort_order}
                onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground"
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editing.is_active}
                  onChange={(e) => setEditing({ ...editing, is_active: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm font-semibold">Active</span>
              </label>
            </div>
          </div>

          <button onClick={handleSave} className="btn-primary inline-flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Service
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground text-sm">{services.length} services</p>
        <button
          onClick={() => { setEditing(newService()); setIsNew(true); }}
          className="btn-primary text-sm inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      <div className="space-y-3">
        {services.map((s) => (
          <div key={s.id} className="flex items-center justify-between p-4 rounded-xl border border-border bg-card">
            <div>
              <h3 className="font-heading font-bold text-foreground">{s.title_en}</h3>
              <p className="text-sm text-muted-foreground">{s.slug} · Order: {s.sort_order}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-1 rounded-full ${s.is_active ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                {s.is_active ? "Active" : "Inactive"}
              </span>
              <button onClick={() => setEditing(s)} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <Pencil className="w-4 h-4" />
              </button>
              <button onClick={() => handleDelete(s.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        {services.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No services yet. Click "Add Service" to create one.</p>
        )}
      </div>
    </div>
  );
};

export default AdminServices;
