import { createFileRoute } from "@tanstack/react-router";
import { Plus, Tag } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { AdminSectionNav, crmNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { crmTags } from "@/lib/mock/crm";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/crm/tags")({
  component: CrmTagsPage,
});

function CrmTagsPage() {
  return (
    <AdminLayout title="Tags" subtitle="Segmentação por etiquetas" actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Nova tag</Button>}>
      <AdminSectionNav items={crmNav} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {crmTags.map((t, i) => (
          <MotionReveal key={t.nome} delay={i * 50}>
            <AdminCard className="flex items-center justify-between p-5">
              <div className="flex items-center gap-3">
                <div className={`grid h-10 w-10 place-items-center rounded-full ${t.cor}`}><Tag className="h-4 w-4" /></div>
                <div><p className="font-medium">{t.nome}</p><p className="text-sm text-muted-foreground">{t.clientes} clientes</p></div>
              </div>
              <Button variant="ghost" size="sm">Editar</Button>
            </AdminCard>
          </MotionReveal>
        ))}
      </div>
    </AdminLayout>
  );
}
