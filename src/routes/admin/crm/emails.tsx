import { createFileRoute } from "@tanstack/react-router";
import { Plus, Mail } from "lucide-react";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { AdminSectionNav, crmNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { crmEmails } from "@/lib/mock/crm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/crm/emails")({
  component: CrmEmailsPage,
});

function CrmEmailsPage() {
  return (
    <AdminLayout title="E-mails" subtitle="Campanhas e transacionais" actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Novo e-mail</Button>}>
      <AdminSectionNav items={crmNav} />
      <MotionReveal>
        <AdminTable>
          <table className="w-full text-sm">
            <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Assunto</th><th className="p-4">Destinatários</th><th className="p-4">Abertura</th><th className="p-4">Status</th><th className="p-4">Data</th></tr></thead>
            <tbody>
              {crmEmails.map((e) => (
                <tr key={e.assunto} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4"><div className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" />{e.assunto}</div></td>
                  <td className="p-4">{e.destinatarios.toLocaleString("pt-BR")}</td>
                  <td className="p-4">{e.abertura}</td>
                  <td className="p-4"><Badge variant="outline">{e.status}</Badge></td>
                  <td className="p-4 text-muted-foreground">{e.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </MotionReveal>
    </AdminLayout>
  );
}
