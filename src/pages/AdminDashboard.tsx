import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Zap, LayoutDashboard, Briefcase, FolderOpen, MessageSquareQuote, FileText, PenSquare, LogOut, Menu, X } from "lucide-react";
import AdminServices from "@/components/admin/AdminServices";
import AdminPortfolio from "@/components/admin/AdminPortfolio";
import AdminTestimonials from "@/components/admin/AdminTestimonials";
import AdminSiteContent from "@/components/admin/AdminSiteContent";
import AdminBlog from "@/components/admin/AdminBlog";

type Tab = "services" | "portfolio" | "testimonials" | "content" | "blog";

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("services");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs: { key: Tab; label: string; icon: typeof Briefcase }[] = [
    { key: "services", label: "Services & Pricing", icon: Briefcase },
    { key: "portfolio", label: "Portfolio", icon: FolderOpen },
    { key: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
    { key: "content", label: "Site Content", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-lg font-heading font-black text-primary">BRANDSPEED</span>
          </Link>
          <p className="text-xs text-muted-foreground mt-1">Content Management</p>
        </div>

        <nav className="p-4 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <p className="text-xs text-muted-foreground truncate mb-2">{user?.email}</p>
          <button
            onClick={signOut}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <main className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 lg:px-8 py-4 flex items-center gap-4">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-foreground">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-primary" />
            <h1 className="text-lg font-heading font-bold text-foreground">
              {tabs.find((t) => t.key === activeTab)?.label}
            </h1>
          </div>
        </header>

        <div className="p-4 lg:p-8">
          {activeTab === "services" && <AdminServices />}
          {activeTab === "portfolio" && <AdminPortfolio />}
          {activeTab === "testimonials" && <AdminTestimonials />}
          {activeTab === "content" && <AdminSiteContent />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
