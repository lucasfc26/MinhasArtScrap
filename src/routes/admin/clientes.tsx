import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adminClientes, formatBRLAdmin } from "@/lib/mock/admin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/admin/clientes")({
  component: AdminClientesPage,
});

function AdminClientesPage() {
  return (
    <AdminLayout title="Clientes" subtitle="Base de clientes">
      <ScrollReveal>
        <Input placeholder="Buscar clientes…" className="mb-4 max-w-sm rounded-full" />
        <AdminTable>
          <table className="w-full text-sm">
            <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Nome</th><th className="p-4">E-mail</th><th className="p-4">Pedidos</th><th className="p-4">Total gasto</th><th className="p-4">Tag</th><th className="p-4" /></tr></thead>
            <tbody>
              {adminClientes.map((c) => (
                <tr key={c.email} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4 font-medium">{c.nome}</td>
                  <td className="p-4 text-muted-foreground">{c.email}</td>
                  <td className="p-4">{c.pedidos}</td>
                  <td className="p-4">{formatBRLAdmin(c.total)}</td>
                  <td className="p-4"><Badge className="bg-[color:var(--gold)]/25">{c.tag}</Badge></td>
                  <td className="p-4"><Button variant="ghost" size="sm">Ver perfil</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </ScrollReveal>
    </AdminLayout>
  );
}
