import { createFileRoute } from "@tanstack/react-router";
import { Package, Eye } from "lucide-react";
import { ContaLayout, ContaCard } from "@/components/admin/ContaLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { contaPedidos } from "@/lib/mock/conta";
import { formatBRL } from "@/lib/mock/loja";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/conta/pedidos")({
  component: ContaPedidosPage,
});

const statusColor: Record<string, string> = {
  Entregue: "bg-[color:var(--sage)]/30",
  "Em trânsito": "bg-[color:var(--gold)]/25",
  Processando: "bg-secondary",
};

function ContaPedidosPage() {
  return (
    <ContaLayout title="Acompanhe suas compras.">
      <div className="space-y-4">
        {contaPedidos.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 50}>
            <ContaCard className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--rose-soft)]">
                  <Package className="h-5 w-5 text-foreground/50" />
                </div>
                <div>
                  <p className="font-medium">{p.id}</p>
                  <p className="text-sm text-muted-foreground">{p.data} · {p.itens} item(ns)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className={statusColor[p.status] ?? "bg-secondary"}>{p.status}</Badge>
                <span className="font-display text-lg">{formatBRL(p.total)}</span>
                <button className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                  <Eye className="h-4 w-4" /> Detalhes
                </button>
              </div>
            </ContaCard>
          </ScrollReveal>
        ))}
      </div>
    </ContaLayout>
  );
}
