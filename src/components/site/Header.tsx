import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Heart, Menu, X } from "lucide-react";
import { megaMenu } from "@/lib/mock/data";

const nav = [
  { label: "Loja", href: "/loja", mega: true },
  { label: "Coleções", href: "/loja/colecoes" },
  { label: "Cursos", href: "/cursos" },
  { label: "Assinatura", href: "/#assinatura" },
  { label: "Blog", href: "/#blog" },
  { label: "Sobre", href: "/#sobre" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 shadow-soft backdrop-blur-md safe-px">
      <div
        className="relative"
        onMouseLeave={() => setMega(false)}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-4 md:px-6">
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={mobile}
            aria-controls="site-mobile-nav"
            onClick={() => setMobile(true)}
            className="touch-target rounded-full p-2 text-foreground/80 hover:bg-secondary md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="font-display text-2xl font-semibold tracking-tight md:text-[26px]">
            Ateliê <span className="italic text-primary">Papel</span>
          </Link>

          <nav className="ml-6 hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                onMouseEnter={() => setMega(!!n.mega)}
                className="relative py-2 text-sm font-medium uppercase tracking-wide text-foreground/75 transition-colors hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="relative ml-auto hidden flex-1 max-w-md items-center gap-2 rounded-full border border-border bg-card px-4 py-2 lg:flex">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar papéis, washi, kits…"
              aria-label="Buscar produtos"
              onFocus={() => setOpen(true)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
            />
            {open && (
              <div className="absolute left-1/2 top-full mt-2 w-[min(540px,90vw)] -translate-x-1/2 rounded-2xl border border-border bg-popover p-3 text-sm shadow-lift">
                <p className="px-2 pb-2 text-xs uppercase tracking-wider text-muted-foreground">Buscas populares</p>
                {["washi botânico", "papel kraft", "kit doce memória", "carimbo lettering"].map((t) => (
                  <Link key={t} to="/loja/busca" search={{ q: t }} className="block rounded-lg px-2 py-1.5 hover:bg-secondary">{t}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="ml-auto flex items-center gap-1 lg:ml-2">
            <Link to="/conta" className="hidden rounded-full p-2.5 text-foreground/80 hover:bg-secondary md:inline-flex" aria-label="Conta">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/loja/favoritos" className="hidden rounded-full p-2.5 text-foreground/80 hover:bg-secondary md:inline-flex" aria-label="Favoritos">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/loja/carrinho" className="relative rounded-full p-2.5 text-foreground/80 hover:bg-secondary" aria-label="Carrinho">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Mega menu — ponte invisível (pt-2) evita fechar ao mover o mouse */}
        {mega && (
          <div className="absolute left-0 right-0 top-full hidden pt-2 md:block" role="region" aria-label="Menu da loja">
            <div className="animate-fade-in border-t border-border bg-card/95 shadow-lift backdrop-blur-md">
              <div className="mx-auto grid max-w-7xl grid-cols-5 gap-8 px-6 py-10">
                {megaMenu.map((col) => (
                  <div key={col.coluna}>
                    <h4 className="font-display text-sm font-semibold text-foreground">{col.coluna}</h4>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {col.itens.map((i) => (
                        <li key={i}>
                          <Link to="/loja" className="block rounded-md px-1 py-0.5 hover:bg-secondary hover:text-foreground">
                            {i}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="rounded-2xl bg-[color:var(--rose-soft)] p-5 premium-accent">
                  <p className="text-xs uppercase tracking-widest text-primary">Coleção do mês</p>
                  <p className="mt-1 font-display text-xl">Doce Memória</p>
                  <p className="mt-2 text-xs text-muted-foreground">Rosé, marfim e dourado para álbuns delicados.</p>
                  <Link to="/loja/colecoes/doce-memoria" className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline">
                    Explorar →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobile && (
        <div className="fixed inset-0 z-50 md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/30"
            aria-label="Fechar menu"
            onClick={() => setMobile(false)}
          />
          <aside
            id="site-mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="absolute left-0 top-0 h-full w-[82%] max-w-sm bg-card p-6 shadow-lift safe-px safe-pb"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-xl">Ateliê <span className="italic text-primary">Papel</span></span>
              <button aria-label="Fechar" onClick={() => setMobile(false)} className="rounded-full p-2 hover:bg-secondary">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-5 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input className="w-full bg-transparent text-sm outline-none" placeholder="Buscar…" />
            </div>
            <nav className="space-y-1" aria-label="Navegação principal">
              {nav.map((n) => (
                <Link key={n.label} to={n.href} onClick={() => setMobile(false)} className="block rounded-xl px-3 py-3 text-base hover:bg-secondary">
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
              <Link to="/conta" className="block py-2">Minha conta</Link>
              <Link to="/loja/favoritos" className="block py-2">Lista de desejos</Link>
              <Link to="/admin" className="block py-2">Painel administrativo</Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
