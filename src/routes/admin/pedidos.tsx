import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adminPedidos, formatBRLAdmin } from "@/lib/mock/admin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/pedidos")({
  component: AdminPedidosPage,
});

function AdminPedidosPage() {
  return (
    <AdminLayout title="Pedidos" subtitle="Gestão de vendas">
      <ScrollReveal>
        <AdminTable>
          <table className="w-full text-sm">
            <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Pedido</th><th className="p-4">Cliente</th><th className="p-4">Data</th><th className="p-4">Itens</th><th className="p-4">Total</th><th className="p-4">Status</th><th className="p-4" /></tr></thead>
            <tbody>
              {adminPedidos.map((p) => (
                <tr key={p.id} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4 font-medium">{p.id}</td>
                  <td className="p-4">{p.cliente}</td>
                  <td className="p-4 text-muted-foreground">{p.data}</td>
                  <td className="p-4">{p.itens}</td>
                  <td className="p-4">{formatBRLAdmin(p.total)}</td>
                  <td className="p-4"><Badge variant="outline">{p.status}</Badge></td>
                  <td className="p-4"><Button variant="ghost" size="sm">Detalhes</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </ScrollReveal>
    </AdminLayout>
  );
}
