import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { AdminSectionNav, crmNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { crmFunil } from "@/lib/mock/crm";

export const Route = createFileRoute("/admin/crm/funil")({
  component: CrmFunilPage,
});

function CrmFunilPage() {
  return (
    <AdminLayout title="Funil de vendas" subtitle="Conversão por etapa">
      <AdminSectionNav items={crmNav} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {crmFunil.map((f, i) => (
          <MotionReveal key={f.etapa} delay={i * 50}>
            <AdminCard className="p-5 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{f.etapa}</p>
              <p className="mt-2 font-display text-3xl">{f.qtd.toLocaleString("pt-BR")}</p>
              <p className="mt-1 text-sm text-primary">{f.pct}%</p>
            </AdminCard>
          </MotionReveal>
        ))}
      </div>
      <MotionReveal delay={120} className="mt-6">
        <AdminCard className="p-6">
          <h2 className="font-display text-lg">Visualização do funil</h2>
          <div className="mx-auto mt-6 flex max-w-lg flex-col items-center gap-2">
            {crmFunil.map((f, i) => (
              <div
                key={f.etapa}
                className="rounded-xl bg-primary/80 py-3 text-center text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                style={{ width: `${100 - i * 18}%` }}
              >
                {f.etapa} — {f.pct}%
              </div>
            ))}
          </div>
        </AdminCard>
      </MotionReveal>
    </AdminLayout>
  );
}
