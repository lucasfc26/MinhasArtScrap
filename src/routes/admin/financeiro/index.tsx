import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminLayout, StatCard, AdminCard } from "@/components/admin/AdminLayout";
import { AdminSectionNav, financeiroNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { adminFinanceiro, formatBRLAdmin } from "@/lib/mock/admin";
import { receitasMock, despesasMock, formatBRL } from "@/lib/mock/financeiro";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/financeiro/")({
  head: () => ({ meta: [{ title: "Financeiro — Admin" }] }),
  component: FinanceiroDashboard,
});

function FinanceiroDashboard() {
  return (
    <AdminLayout title="Financeiro" subtitle="Dashboard financeiro">
      <AdminSectionNav items={financeiroNav} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MotionReveal><StatCard label="Receitas (Jun)" value={formatBRLAdmin(adminFinanceiro.receitas)} trend="+12%" /></MotionReveal>
        <MotionReveal delay={50}><StatCard label="Despesas (Jun)" value={formatBRLAdmin(adminFinanceiro.despesas)} /></MotionReveal>
        <MotionReveal delay={100}><StatCard label="Lucro líquido" value={formatBRLAdmin(adminFinanceiro.lucro)} hint="margem 71%" /></MotionReveal>
        <MotionReveal delay={150}><StatCard label="Saldo em caixa" value={formatBRL(46420)} hint="atualizado hoje" /></MotionReveal>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <MotionReveal delay={80}>
          <AdminCard className="p-5">
            <h2 className="font-display text-lg">Últimas receitas</h2>
            <ul className="mt-4 space-y-2">
              {receitasMock.slice(0, 4).map((r) => (
                <li key={r.id} className="flex justify-between border-b border-border/60 py-2 text-sm last:border-0">
                  <span className="truncate pr-2">{r.descricao}</span>
                  <span className="shrink-0 font-medium text-primary">{formatBRL(r.valor)}</span>
                </li>
              ))}
            </ul>
            <Link to="/admin/financeiro/receitas" className="mt-3 inline-block text-sm text-primary hover:underline">Ver todas →</Link>
          </AdminCard>
        </MotionReveal>

        <MotionReveal delay={120}>
          <AdminCard className="p-5">
            <h2 className="font-display text-lg">Últimas despesas</h2>
            <ul className="mt-4 space-y-2">
              {despesasMock.slice(0, 4).map((d) => (
                <li key={d.id} className="flex justify-between border-b border-border/60 py-2 text-sm last:border-0">
                  <span className="truncate pr-2">{d.descricao}</span>
                  <span className="shrink-0 font-medium text-destructive">{formatBRL(d.valor)}</span>
                </li>
              ))}
            </ul>
            <Link to="/admin/financeiro/despesas" className="mt-3 inline-block text-sm text-primary hover:underline">Ver todas →</Link>
          </AdminCard>
        </MotionReveal>
      </div>
    </AdminLayout>
  );
}
