import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Eye } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, PageHeader, GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { pedidosMock, formatBRL } from "@/lib/mock/loja";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/loja/pedidos")({
  head: () => ({ meta: [{ title: "Meus pedidos — Ateliê Papel" }] }),
  component: PedidosPage,
});

const statusColor: Record<string, string> = {
  Entregue: "bg-[color:var(--sage)]/30 text-foreground",
  "Em trânsito": "bg-[color:var(--gold)]/25 text-foreground",
  Processando: "bg-secondary text-secondary-foreground",
};

function PedidosPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[{ label: "Loja", href: "/loja" }, { label: "Pedidos" }]} />
          <PageHeader title="Meus pedidos" subtitle="Acompanhe suas compras e histórico." />
        </ScrollReveal>

        <div className="mt-10 space-y-4">
          {pedidosMock.map((pedido, i) => (
            <ScrollReveal key={pedido.id} delay={i * 60}>
              <GlassCard className="flex flex-wrap items-center justify-between gap-4 p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--rose-soft)]">
                    <Package className="h-5 w-5 text-foreground/60" />
                  </div>
                  <div>
                    <p className="font-medium">{pedido.id}</p>
                    <p className="text-sm text-muted-foreground">{pedido.data} · {pedido.itens} item(ns)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className={statusColor[pedido.status]}>{pedido.status}</Badge>
                  <span className="font-display text-lg">{formatBRL(pedido.total)}</span>
                  <button className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                    <Eye className="h-4 w-4" /> Detalhes
                  </button>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
