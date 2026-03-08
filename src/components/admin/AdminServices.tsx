import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { useAutoTranslate, AutoTranslateButton } from "@/hooks/useAutoTranslate";

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
  features: any[];
  pricing: any[];
  sort_order: number;
  is_active: boolean;
}

interface FeatureItem {
  en: string;
  bm: string;
  zh: string;
}

interface PricingItem {
  name_en: string;
  name_bm: string;
  name_zh: string;
  price: string;
  description_en: string;
  description_bm: string;
  description_zh: string;
}

const AdminServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Service | null>(null);
  const [isNew, setIsNew] = useState(false);

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

  const fetchServices = async () => {
    const { data, error } = await supabase.from("services").select("*").order("sort_order");
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
    setEditing(null); setIsNew(false); fetchServices();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this service?")) return;
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Service deleted!"); fetchServices(); }
  };

  const newService = (): Service => ({
    id: "", slug: "", title_en: "", title_bm: "", title_zh: "",
    description_en: "", description_bm: "", description_zh: "",
    icon: "Code", features: [], pricing: [],
    sort_order: services.length, is_active: true,
  });

  // Feature helpers
  const addFeature = () => {
    if (!editing) return;
    setEditing({ ...editing, features: [...(editing.features || []), { en: "", bm: "", zh: "" }] });
  };
  const removeFeature = (idx: number) => {
    if (!editing) return;
    setEditing({ ...editing, features: editing.features.filter((_: any, i: number) => i !== idx) });
  };
  const updateFeature = (idx: number, lang: string, value: string) => {
    if (!editing) return;
    const features = [...editing.features];
    features[idx] = { ...features[idx], [lang]: value };
    setEditing({ ...editing, features });
  };

  // Pricing helpers
  const addPricing = () => {
    if (!editing) return;
    setEditing({
      ...editing,
      pricing: [...(editing.pricing || []), {
        name_en: "", name_bm: "", name_zh: "",
        price: "", description_en: "", description_bm: "", description_zh: "",
      }],
    });
  };
  const removePricing = (idx: number) => {
    if (!editing) return;
    setEditing({ ...editing, pricing: editing.pricing.filter((_: any, i: number) => i !== idx) });
  };
  const updatePricing = (idx: number, field: string, value: string) => {
    if (!editing) return;
    const pricing = [...editing.pricing];
    pricing[idx] = { ...pricing[idx], [field]: value };
    setEditing({ ...editing, pricing });
  };

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
              <input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                placeholder="e.g. social-media-marketing" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Icon</label>
              <input value={editing.icon} onChange={(e) => setEditing({ ...editing, icon: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                placeholder="BarChart3, Code, Smartphone..." />
            </div>
          </div>

          {/* English */}
          <div className="p-4 rounded-xl border border-border">
            <h3 className="text-sm font-bold uppercase text-primary mb-3">English</h3>
            <input placeholder="Title" value={editing.title_en}
              onChange={(e) => setEditing({ ...editing, title_en: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm mb-2" />
            <textarea placeholder="Description" value={editing.description_en}
              onChange={(e) => setEditing({ ...editing, description_en: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm" rows={2} />
          </div>

          <AutoTranslateButton translating={translating}
            onClick={() => translate({ title: editing.title_en, description: editing.description_en })} />

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

          {/* Features - Friendly UI */}
          <div className="p-4 rounded-xl border border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase text-primary">Features</h3>
              <button type="button" onClick={addFeature}
                className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add Feature
              </button>
            </div>
            {(!editing.features || editing.features.length === 0) && (
              <p className="text-xs text-muted-foreground">No features yet. Click "Add Feature" to add one.</p>
            )}
            <div className="space-y-3">
              {(editing.features || []).map((feat: any, idx: number) => (
                <div key={idx} className="p-3 bg-muted/50 rounded-lg relative">
                  <button type="button" onClick={() => removeFeature(idx)}
                    className="absolute top-2 right-2 text-muted-foreground hover:text-destructive">
                    <X className="w-3 h-3" />
                  </button>
                  <input placeholder="Feature (English)" value={feat.en || ""}
                    onChange={(e) => updateFeature(idx, "en", e.target.value)}
                    className="w-full px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm mb-1" />
                  <input placeholder="Feature (BM)" value={feat.bm || ""}
                    onChange={(e) => updateFeature(idx, "bm", e.target.value)}
                    className="w-full px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm mb-1" />
                  <input placeholder="Feature (中文)" value={feat.zh || ""}
                    onChange={(e) => updateFeature(idx, "zh", e.target.value)}
                    className="w-full px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Pricing - Friendly UI */}
          <div className="p-4 rounded-xl border border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase text-primary">Pricing Plans</h3>
              <button type="button" onClick={addPricing}
                className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add Plan
              </button>
            </div>
            {(!editing.pricing || editing.pricing.length === 0) && (
              <p className="text-xs text-muted-foreground">No pricing plans yet. Click "Add Plan" to add one.</p>
            )}
            <div className="space-y-4">
              {(editing.pricing || []).map((plan: any, idx: number) => (
                <div key={idx} className="p-3 bg-muted/50 rounded-lg relative">
                  <button type="button" onClick={() => removePricing(idx)}
                    className="absolute top-2 right-2 text-muted-foreground hover:text-destructive">
                    <X className="w-3 h-3" />
                  </button>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <input placeholder="Plan Name (EN)" value={plan.name_en || ""}
                      onChange={(e) => updatePricing(idx, "name_en", e.target.value)}
                      className="px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm" />
                    <input placeholder="Price (e.g. RM299/mo)" value={plan.price || ""}
                      onChange={(e) => updatePricing(idx, "price", e.target.value)}
                      className="px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm" />
                  </div>
                  <input placeholder="Description (EN)" value={plan.description_en || ""}
                    onChange={(e) => updatePricing(idx, "description_en", e.target.value)}
                    className="w-full px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm mb-1" />
                  <input placeholder="Plan Name (BM)" value={plan.name_bm || ""}
                    onChange={(e) => updatePricing(idx, "name_bm", e.target.value)}
                    className="w-full px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm mb-1" />
                  <input placeholder="Description (BM)" value={plan.description_bm || ""}
                    onChange={(e) => updatePricing(idx, "description_bm", e.target.value)}
                    className="w-full px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm mb-1" />
                  <input placeholder="Plan Name (中文)" value={plan.name_zh || ""}
                    onChange={(e) => updatePricing(idx, "name_zh", e.target.value)}
                    className="w-full px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm mb-1" />
                  <input placeholder="Description (中文)" value={plan.description_zh || ""}
                    onChange={(e) => updatePricing(idx, "description_zh", e.target.value)}
                    className="w-full px-3 py-1.5 rounded border border-border bg-background text-foreground text-sm" />
                </div>
              ))}
            </div>
          </div>

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
        <button onClick={() => { setEditing(newService()); setIsNew(true); }}
          className="btn-primary text-sm inline-flex items-center gap-2">
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
