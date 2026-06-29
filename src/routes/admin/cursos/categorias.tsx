import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { categoriasCursos } from "@/lib/mock/cursos";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/cursos/categorias")({
  component: AdminCursosCategoriasPage,
});

function AdminCursosCategoriasPage() {
  return (
    <AdminLayout title="Categorias de cursos" subtitle="Organize a plataforma de ensino" actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Nova categoria</Button>}>
      <ScrollReveal>
        <AdminTable>
          <table className="w-full text-sm">
            <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Nome</th><th className="p-4">Slug</th><th className="p-4">Descrição</th><th className="p-4" /></tr></thead>
            <tbody>
              {categoriasCursos.map((c) => (
                <tr key={c.slug} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4 font-medium">{c.nome}</td>
                  <td className="p-4 font-mono text-muted-foreground">{c.slug}</td>
                  <td className="p-4 text-muted-foreground">{c.descricao}</td>
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
