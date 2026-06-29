import { Truck, Phone, Heart } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden border-b border-border/60 bg-[color:var(--sage)]/25 text-foreground/80 md:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs">
        <div className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5" />
          <span>Frete grátis para todo o Brasil acima de R$ 199</span>
        </div>
        <div className="flex items-center gap-5">
          <a className="inline-flex items-center gap-1.5 hover:text-foreground" href="#">
            <Phone className="h-3.5 w-3.5" /> Atendimento
          </a>
          <a className="inline-flex items-center gap-1.5 hover:text-foreground" href="/conta/wishlist">
            <Heart className="h-3.5 w-3.5" /> Lista de desejos
          </a>
          <a className="hover:text-foreground" href="/conta">Minha conta</a>
          <a className="hover:text-foreground" href="/admin">Painel</a>
        </div>
      </div>
    </div>
  );
}