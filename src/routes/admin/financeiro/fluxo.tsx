import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { AdminSectionNav, financeiroNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { fluxoDetalhado, formatBRL } from "@/lib/mock/financeiro";

export const Route = createFileRoute("/admin/financeiro/fluxo")({
  component: FluxoPage,
});

function FluxoPage() {
  return (
    <AdminLayout title="Fluxo de caixa" subtitle="Entradas, saídas e saldo">
      <AdminSectionNav items={financeiroNav} />

      <MotionReveal>
        <AdminCard className="overflow-x-auto p-5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="pb-3 pr-4">Período</th>
                <th className="pb-3 pr-4">Entradas</th>
                <th className="pb-3 pr-4">Saídas</th>
                <th className="pb-3">Saldo acumulado</th>
              </tr>
            </thead>
            <tbody>
              {fluxoDetalhado.map((f) => (
                <tr key={f.data} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="py-3 pr-4 font-medium">{f.data}</td>
                  <td className="py-3 pr-4 text-primary">{formatBRL(f.entrada)}</td>
                  <td className="py-3 pr-4 text-destructive">{formatBRL(f.saida)}</td>
                  <td className="py-3 font-medium">{formatBRL(f.saldo)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminCard>
      </MotionReveal>

      <MotionReveal delay={80} className="mt-6">
        <AdminCard className="p-5">
          <h2 className="font-display text-lg">Gráfico semanal</h2>
          <div className="mt-4 flex h-40 items-end gap-4">
            {fluxoDetalhado.map((f) => (
              <div key={f.data} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex w-full items-end justify-center gap-1 h-28">
                  <div className="w-4 rounded-t bg-primary/70 transition-all duration-500 hover:bg-primary" style={{ height: `${(f.entrada / 16000) * 100}%` }} />
                  <div className="w-4 rounded-t bg-destructive/40" style={{ height: `${(f.saida / 16000) * 100}%` }} />
                </div>
                <span className="text-[10px] text-muted-foreground">{f.data}</span>
              </div>
            ))}
          </div>
        </AdminCard>
      </MotionReveal>
    </AdminLayout>
  );
}
