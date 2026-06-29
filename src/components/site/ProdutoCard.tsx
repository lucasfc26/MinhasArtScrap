import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ProdutoDetalhe } from "@/lib/mock/loja";
import { cn } from "@/lib/utils";

export function ProdutoCard({
  p,
  className,
  linkTo,
}: {
  p: Pick<ProdutoDetalhe, "slug" | "nome" | "preco" | "antigo" | "parcela" | "tag" | "Icon">;
  className?: string;
  linkTo?: string;
}) {
  const href = linkTo ?? `/loja/produto/${p.slug}`;

  return (
    <div className={cn("group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card bento-hover", className)}>
      {p.tag && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
          {p.tag}
        </span>
      )}
      <button aria-label="Favoritar" className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-card/80 backdrop-blur transition-colors hover:bg-secondary">
        <Heart className="h-4 w-4" />
      </button>
      <Link to={href} className="grid aspect-square place-items-center bg-[color:var(--rose-soft)] transition-transform duration-500 group-hover:scale-[1.02]">
        <p.Icon className="h-16 w-16 text-foreground/40" strokeWidth={1.1} />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to={href} className="line-clamp-2 min-h-[2.5rem] text-sm font-medium leading-snug hover:text-primary">
          {p.nome}
        </Link>
        <div className="mt-auto">
          <div className="flex items-baseline gap-2">
            {p.antigo && <span className="text-xs text-muted-foreground line-through">R$ {p.antigo.toFixed(2).replace(".", ",")}</span>}
            <span className="font-display text-xl text-foreground">R$ {p.preco.toFixed(2).replace(".", ",")}</span>
          </div>
          <p className="text-xs text-muted-foreground">ou {p.parcela} sem juros</p>
        </div>
        <button className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground/95 px-3 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.02]">
          <ShoppingBag className="h-3.5 w-3.5" /> Adicionar
        </button>
      </div>
    </div>
  );
}

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}