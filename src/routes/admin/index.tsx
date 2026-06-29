import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { AdminLayout, StatCard, AdminCard } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adminStats, adminPedidos, formatBRLAdmin } from "@/lib/mock/admin";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Dashboard — Ateliê Admin" }] }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <AdminLayout title="Dashboard" subtitle="Visão geral do ateliê">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <ScrollReveal><StatCard label="Receita do mês" value={formatBRLAdmin(adminStats.receitaMes)} trend={`+${adminStats.receitaVariacao}%`} hint="vs. mês anterior" /></ScrollReveal>
        <ScrollReveal delay={50}><StatCard label="Pedidos" value={String(adminStats.pedidosMes)} trend={`+${adminStats.pedidosVariacao}%`} hint="este mês" /></ScrollReveal>
        <ScrollReveal delay={100}><StatCard label="Clientes ativos" value={adminStats.clientesAtivos.toLocaleString("pt-BR")} trend={`+${adminStats.clientesVariacao}%`} hint="com compra recente" /></ScrollReveal>
        <ScrollReveal delay={150}><StatCard label="Estoque baixo" value={String(adminStats.estoqueBaixo)} hint="produtos precisam reposição" /></ScrollReveal>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <ScrollReveal className="lg:col-span-2">
          <AdminCard className="p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl">Pedidos recentes</h2>
              <Link to="/admin/pedidos" className="text-sm text-primary hover:underline">Ver todos →</Link>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="pb-3 pr-4">Pedido</th>
                    <th className="pb-3 pr-4">Cliente</th>
                    <th className="pb-3 pr-4">Total</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {adminPedidos.slice(0, 5).map((p) => (
                    <tr key={p.id} className="border-b border-border/60 last:border-0">
                      <td className="py-3 pr-4 font-medium">{p.id}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{p.cliente}</td>
                      <td className="py-3 pr-4">{formatBRLAdmin(p.total)}</td>
                      <td className="py-3"><Badge variant="outline">{p.status}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AdminCard>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <AdminCard className="p-5">
            <h2 className="font-display text-xl">Acesso rápido</h2>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/admin/produtos/novo", label: "Cadastrar produto" },
                { to: "/admin/cursos/novo", label: "Novo curso" },
                { to: "/admin/pedidos", label: "Processar pedidos" },
                { to: "/admin/relatorios", label: "Ver relatórios" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm hover:bg-secondary">
                    {item.label} <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-[color:var(--sage)]/20 p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <TrendingUp className="h-4 w-4 text-primary" /> Destaque do mês
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Coleção Doce Memória — 45% das vendas</p>
            </div>
          </AdminCard>
        </ScrollReveal>
      </div>
    </AdminLayout>
  );
}
