import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  User, MapPin, Package, BookOpen, Download, Heart, Star, Repeat, Settings,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { clienteMock } from "@/lib/mock/conta";
import { cn } from "@/lib/utils";

const links = [
  { to: "/conta", label: "Perfil", icon: User, exact: true },
  { to: "/conta/enderecos", label: "Endereços", icon: MapPin },
  { to: "/conta/pedidos", label: "Pedidos", icon: Package },
  { to: "/conta/cursos", label: "Cursos", icon: BookOpen },
  { to: "/conta/downloads", label: "Downloads", icon: Download },
  { to: "/conta/wishlist", label: "Wishlist", icon: Heart },
  { to: "/conta/pontos", label: "Pontos", icon: Star },
  { to: "/conta/assinaturas", label: "Assinaturas", icon: Repeat },
  { to: "/conta/configuracoes", label: "Configurações", icon: Settings },
];

export function ContaLayout({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl">
            Olá, {clienteMock.nome.split(" ")[0]}
          </h1>
          <p className="mt-1 text-muted-foreground">{title ?? "Gerencie sua conta e suas compras."}</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="lg:w-56 shrink-0">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-soft lg:hidden">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--rose)]/50 font-display">
                    {clienteMock.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{clienteMock.nome}</p>
                    <p className="text-xs text-accent">{clienteMock.nivel}</p>
                  </div>
                </div>
              </div>

              <nav className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0" aria-label="Área do cliente">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    activeOptions={{ exact: l.exact }}
                    className={cn(
                      "flex shrink-0 items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors min-h-11",
                      "text-muted-foreground hover:bg-secondary hover:text-foreground",
                      "[&.active]:bg-primary [&.active]:text-primary-foreground",
                    )}
                  >
                    <l.icon className="h-4 w-4" />
                    {l.label}
                  </Link>
                ))}
              </nav>

              <Link
                to="/"
                className="hidden items-center gap-2 rounded-xl px-3 py-2 text-xs text-muted-foreground hover:text-foreground lg:flex"
              >
                ← Voltar à loja
              </Link>
            </div>
          </aside>

          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </SiteLayout>
  );
}

export function ContaCard({
  children,
  className,
  premium,
}: {
  children: ReactNode;
  className?: string;
  premium?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-card p-5 shadow-soft md:p-6",
        premium && "premium-accent",
        className,
      )}
    >
      {children}
    </div>
  );
}
