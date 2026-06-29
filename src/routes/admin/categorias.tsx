import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adminCategorias } from "@/lib/mock/admin";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/categorias")({
  component: AdminCategoriasPage,
});

function AdminCategoriasPage() {
  return (
    <AdminLayout title="Categorias" subtitle="Organize o catálogo" actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Nova categoria</Button>}>
      <ScrollReveal>
        <AdminTable>
          <table className="w-full text-sm">
            <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Nome</th><th className="p-4">Produtos</th><th className="p-4">Status</th><th className="p-4">Ações</th></tr></thead>
            <tbody>
              {adminCategorias.map((c) => (
                <tr key={c.nome} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4 font-medium">{c.nome}</td>
                  <td className="p-4">{c.produtos}</td>
                  <td className="p-4"><Badge variant="outline">{c.status}</Badge></td>
                  <td className="p-4"><Button variant="ghost" size="sm">Editar</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </ScrollReveal>
    </AdminLayout>
  );
}
