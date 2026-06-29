import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  LayoutDashboard, Package, FolderTree, Layers, BookOpen, ShoppingCart, Users,
  Wallet, BarChart3, Contact, Megaphone, Settings, Plus, Bell, Search, Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const nav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/produtos", label: "Produtos", icon: Package },
  { to: "/admin/categorias", label: "Categorias", icon: FolderTree },
  { to: "/admin/colecoes", label: "Coleções", icon: Layers },
  { to: "/admin/cursos", label: "Cursos", icon: BookOpen },
  { to: "/admin/pedidos", label: "Pedidos", icon: ShoppingCart },
  { to: "/admin/clientes", label: "Clientes", icon: Users },
  { to: "/admin/financeiro", label: "Financeiro", icon: Wallet },
  { to: "/admin/relatorios", label: "Relatórios", icon: BarChart3 },
  { to: "/admin/crm", label: "CRM", icon: Contact },
  { to: "/admin/marketing", label: "Marketing", icon: Megaphone },
  { to: "/admin/configuracoes", label: "Configurações", icon: Settings },
];

export function AdminLayout({
  children,
  title,
  subtitle,
  actions,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="min-h-dvh bg-background">
      {/* Sidebar desktop */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-border/60 bg-card shadow-soft md:flex" aria-label="Navegação administrativa">
        <div className="border-b border-border/60 p-6">
          <Link to="/admin" className="font-display text-xl">
            Ateliê <span className="italic text-primary">Admin</span>
          </Link>
          <p className="mt-1 text-xs text-muted-foreground">Painel de gestão</p>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto p-3" aria-label="Módulos do painel">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className={cn(
                "flex items-center gap-3 rounded-full px-4 py-2.5 text-sm transition-colors",
                "text-muted-foreground hover:bg-secondary hover:text-foreground",
                "[&.active]:bg-[color:var(--sage)]/25 [&.active]:text-foreground [&.active]:font-medium",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 border-t border-border/60 p-4">
          <Link
            to="/admin/produtos/novo"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95"
          >
            <Plus className="h-4 w-4" /> Novo produto
          </Link>
          <Link to="/" className="flex items-center gap-2 rounded-full px-4 py-2 text-xs text-muted-foreground hover:bg-secondary">
            ← Ver loja
          </Link>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border/60 bg-card/90 px-4 backdrop-blur safe-px md:hidden">
        <button
          type="button"
          onClick={() => setMobile(true)}
          className="touch-target rounded-full p-2"
          aria-label="Abrir menu"
          aria-expanded={mobile}
          aria-controls="admin-mobile-nav"
        >
          <Menu className="h-5 w-5" />
        </button>
        <span className="font-display text-lg">Admin</span>
        <Bell className="h-5 w-5 text-muted-foreground" />
      </header>

      {mobile && (
        <div className="fixed inset-0 z-50 md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/30"
            aria-label="Fechar menu"
            onClick={() => setMobile(false)}
          />
          <aside
            id="admin-mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu administrativo"
            className="absolute left-0 top-0 h-full w-72 max-w-[85vw] bg-card p-4 shadow-lift safe-px"
          >
            <p className="mb-4 font-display text-xl">Menu</p>
            <nav className="space-y-1" aria-label="Módulos do painel">
              {nav.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setMobile(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:bg-secondary">
                  <item.icon className="h-4 w-4" /> {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <div className="md:ml-64">
        <header className="sticky top-0 z-20 hidden h-16 items-center justify-between border-b border-border/60 bg-background/85 px-6 backdrop-blur md:flex">
          <div>
            {title && <h1 className="font-display text-xl">{title}</h1>}
            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Buscar…"
                aria-label="Buscar no painel"
                className="w-56 rounded-full border border-border bg-card py-2 pl-9 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <button className="rounded-full p-2 hover:bg-secondary"><Bell className="h-5 w-5" /></button>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--sage)]/40 text-xs font-medium">A</div>
          </div>
        </header>

        <main id="main-content" tabIndex={-1} className="safe-px safe-pb p-4 outline-none md:p-6 lg:p-8">
          {(title || actions) && (
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 md:hidden">
              <div>
                {title && <h1 className="font-display text-2xl">{title}</h1>}
                {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
              </div>
              {actions}
            </div>
          )}
          {actions && (
            <div className="mb-6 hidden justify-end md:flex">{actions}</div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}

export function AdminCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-border/60 bg-card shadow-soft", className)}>
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  trend,
}: {
  label: string;
  value: string;
  hint?: string;
  trend?: string;
}) {
  return (
    <AdminCard className="flex flex-col p-5">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="mt-2 font-display text-3xl">{value}</span>
      {(hint || trend) && (
        <p className="mt-auto pt-3 text-xs text-muted-foreground">
          {trend && <span className="text-primary">{trend} </span>}
          {hint}
        </p>
      )}
    </AdminCard>
  );
}

export function AdminTable({ children }: { children: ReactNode }) {
  return (
    <AdminCard className="overflow-hidden">
      <div className="overflow-x-auto">{children}</div>
    </AdminCard>
  );
}
