import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { AdminSectionNav, crmNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { crmFunil, crmCampanhas } from "@/lib/mock/crm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/crm/")({
  component: CrmOverview,
});

function CrmOverview() {
  return (
    <AdminLayout title="CRM" subtitle="Visão geral do relacionamento">
      <AdminSectionNav items={crmNav} />

      <MotionReveal>
        <AdminCard className="p-6">
          <h2 className="font-display text-xl">Funil de vendas</h2>
          <div className="mt-6 space-y-3">
            {crmFunil.map((f) => (
              <div key={f.etapa}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{f.etapa}</span>
                  <span className="text-muted-foreground">{f.qtd.toLocaleString("pt-BR")} ({f.pct}%)</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${f.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <Link to="/admin/crm/funil" className="mt-4 inline-block text-sm text-primary hover:underline">Detalhar funil →</Link>
        </AdminCard>
      </MotionReveal>

      <MotionReveal delay={80} className="mt-6">
        <AdminCard className="p-6">
          <div className="flex flex-wrap justify-between gap-3">
            <h2 className="font-display text-xl">Campanhas ativas</h2>
            <Link to="/admin/crm/campanhas"><Button className="rounded-full">Ver todas</Button></Link>
          </div>
          <table className="mt-4 w-full text-sm">
            <thead><tr className="border-b text-left text-xs uppercase text-muted-foreground"><th className="pb-2">Campanha</th><th className="pb-2">Tipo</th><th className="pb-2">Status</th><th className="pb-2">Conversões</th></tr></thead>
            <tbody>
              {crmCampanhas.map((c) => (
                <tr key={c.nome} className="border-b border-border/60"><td className="py-3">{c.nome}</td><td>{c.tipo}</td><td><Badge variant="outline">{c.status}</Badge></td><td>{c.conversoes}</td></tr>
              ))}
            </tbody>
          </table>
        </AdminCard>
      </MotionReveal>
    </AdminLayout>
  );
}
