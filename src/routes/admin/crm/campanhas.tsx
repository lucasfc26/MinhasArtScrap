import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { AdminSectionNav, crmNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { crmCampanhas } from "@/lib/mock/crm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/crm/campanhas")({
  component: CrmCampanhasPage,
});

function CrmCampanhasPage() {
  return (
    <AdminLayout title="Campanhas" subtitle="Marketing e conversão" actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Nova campanha</Button>}>
      <AdminSectionNav items={crmNav} />
      <MotionReveal>
        <AdminTable>
          <table className="w-full text-sm">
            <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Campanha</th><th className="p-4">Tipo</th><th className="p-4">Status</th><th className="p-4">Abertura</th><th className="p-4">Conversões</th><th className="p-4">Orçamento</th></tr></thead>
            <tbody>
              {crmCampanhas.map((c) => (
                <tr key={c.nome} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4 font-medium">{c.nome}</td>
                  <td className="p-4">{c.tipo}</td>
                  <td className="p-4"><Badge variant="outline">{c.status}</Badge></td>
                  <td className="p-4">{c.abertura}</td>
                  <td className="p-4">{c.conversoes}</td>
                  <td className="p-4">R$ {c.orcamento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </MotionReveal>
    </AdminLayout>
  );
}
