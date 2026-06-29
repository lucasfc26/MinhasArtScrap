import { createFileRoute } from "@tanstack/react-router";
import { Plus, Users } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { AdminSectionNav, crmNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { crmSegmentos } from "@/lib/mock/crm";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/crm/segmentacao")({
  component: CrmSegmentacaoPage,
});

function CrmSegmentacaoPage() {
  return (
    <AdminLayout title="Segmentação" subtitle="Grupos dinâmicos de clientes" actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Novo segmento</Button>}>
      <AdminSectionNav items={crmNav} />
      <div className="space-y-4">
        {crmSegmentos.map((s, i) => (
          <MotionReveal key={s.nome} delay={i * 50}>
            <AdminCard className="flex flex-wrap items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--sage)]/25"><Users className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="font-medium">{s.nome}</p>
                  <p className="text-sm text-muted-foreground">{s.criterio}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl">{s.clientes}</p>
                <p className="text-xs text-muted-foreground">Atualizado {s.ultimaExecucao}</p>
              </div>
            </AdminCard>
          </MotionReveal>
        ))}
      </div>
    </AdminLayout>
  );
}
