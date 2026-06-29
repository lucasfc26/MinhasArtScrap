import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { AdminSectionNav, crmNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { crmClientes } from "@/lib/mock/crm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/admin/crm/clientes")({
  component: CrmClientesPage,
});

function CrmClientesPage() {
  return (
    <AdminLayout title="Clientes CRM" subtitle="Base de relacionamento">
      <AdminSectionNav items={crmNav} />
      <Input placeholder="Buscar clientes…" className="mb-4 max-w-sm rounded-full" aria-label="Buscar clientes" />
      <MotionReveal>
        <AdminTable>
          <table className="w-full text-sm">
            <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Cliente</th><th className="p-4">Tag</th><th className="p-4">Pedidos</th><th className="p-4">LTV</th><th className="p-4">Último contato</th><th className="p-4" /></tr></thead>
            <tbody>
              {crmClientes.map((c) => (
                <tr key={c.id} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4"><p className="font-medium">{c.nome}</p><p className="text-xs text-muted-foreground">{c.email}</p></td>
                  <td className="p-4"><Badge className="bg-[color:var(--gold)]/25">{c.tag}</Badge></td>
                  <td className="p-4">{c.pedidos}</td>
                  <td className="p-4">R$ {c.ltv.toLocaleString("pt-BR")}</td>
                  <td className="p-4 text-muted-foreground">{c.ultimoContato}</td>
                  <td className="p-4"><Button variant="ghost" size="sm">Perfil</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </MotionReveal>
    </AdminLayout>
  );
}
