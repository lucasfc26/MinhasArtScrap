import { createFileRoute } from "@tanstack/react-router";
import { Plus, StickyNote } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { AdminSectionNav, crmNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { crmAnotacoes } from "@/lib/mock/crm";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/admin/crm/anotacoes")({
  component: CrmAnotacoesPage,
});

function CrmAnotacoesPage() {
  return (
    <AdminLayout title="Anotações" subtitle="Histórico de interações" actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Nova anotação</Button>}>
      <AdminSectionNav items={crmNav} />
      <MotionReveal>
        <AdminCard className="mb-4 p-4">
          <Textarea placeholder="Registrar nova anotação sobre um cliente…" className="min-h-[80px] rounded-xl" aria-label="Nova anotação" />
          <Button className="mt-3 rounded-full" size="sm">Salvar</Button>
        </AdminCard>
      </MotionReveal>
      <div className="space-y-3">
        {crmAnotacoes.map((a, i) => (
          <MotionReveal key={a.data + a.cliente} delay={i * 50}>
            <AdminCard className="p-4">
              <div className="flex items-start gap-3">
                <StickyNote className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="font-medium">{a.cliente}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.texto}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{a.autor} · {a.data}</p>
                </div>
              </div>
            </AdminCard>
          </MotionReveal>
        ))}
      </div>
    </AdminLayout>
  );
}
