import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { AdminLayout, AdminCard, StatCard } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adminStats, formatBRLAdmin } from "@/lib/mock/admin";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/relatorios")({
  component: AdminRelatoriosPage,
});

const relatorios = [
  { titulo: "Vendas por período", desc: "Receita, pedidos e ticket médio", formato: "PDF / Excel" },
  { titulo: "Produtos mais vendidos", desc: "Ranking e margem por SKU", formato: "PDF / CSV" },
  { titulo: "Clientes — LTV", desc: "Lifetime value e recorrência", formato: "Excel" },
  { titulo: "Cursos — matrículas", desc: "Conversão e conclusão", formato: "PDF" },
  { titulo: "Estoque e reposição", desc: "Itens críticos e giro", formato: "CSV" },
];

function AdminRelatoriosPage() {
  return (
    <AdminLayout title="Relatórios" subtitle="Exportações e KPIs">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <ScrollReveal><StatCard label="Receita (mês)" value={formatBRLAdmin(adminStats.receitaMes)} /></ScrollReveal>
        <ScrollReveal delay={50}><StatCard label="Pedidos" value={String(adminStats.pedidosMes)} /></ScrollReveal>
        <ScrollReveal delay={100}><StatCard label="Ticket médio" value={formatBRLAdmin(adminStats.receitaMes / adminStats.pedidosMes)} /></ScrollReveal>
        <ScrollReveal delay={150}><StatCard label="Cursos ativos" value={String(adminStats.cursosAtivos)} /></ScrollReveal>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {relatorios.map((r, i) => (
          <ScrollReveal key={r.titulo} delay={i * 50}>
            <AdminCard className="flex items-start justify-between gap-4 p-5">
              <div>
                <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /><h3 className="font-medium">{r.titulo}</h3></div>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                <p className="mt-2 text-xs text-muted-foreground">{r.formato}</p>
              </div>
              <Button variant="outline" size="sm" className="shrink-0 rounded-full gap-1"><Download className="h-3.5 w-3.5" /> Gerar</Button>
            </AdminCard>
          </ScrollReveal>
        ))}
      </div>
    </AdminLayout>
  );
}
