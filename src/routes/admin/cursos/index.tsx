import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Pencil } from "lucide-react";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adminCursos, formatBRLAdmin } from "@/lib/mock/admin";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/cursos/")({
  component: AdminCursosPage,
});

function AdminCursosPage() {
  return (
    <AdminLayout
      title="Cursos"
      subtitle="Plataforma de ensino"
      actions={
        <div className="flex gap-2">
          <Link to="/admin/cursos/categorias"><Button variant="outline" className="rounded-full">Categorias</Button></Link>
          <Link to="/admin/cursos/novo"><Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Novo curso</Button></Link>
        </div>
      }
    >
      <ScrollReveal>
        <AdminTable>
          <table className="w-full text-sm">
            <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Curso</th><th className="p-4">Instrutor</th><th className="p-4">Alunos</th><th className="p-4">Receita</th><th className="p-4">Status</th><th className="p-4" /></tr></thead>
            <tbody>
              {adminCursos.map((c) => (
                <tr key={c.slug} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4"><Link to="/admin/cursos/$slug" params={{ slug: c.slug }} className="font-medium hover:text-primary">{c.nome}</Link></td>
                  <td className="p-4 text-muted-foreground">{c.instrutor}</td>
                  <td className="p-4">{c.alunos.toLocaleString("pt-BR")}</td>
                  <td className="p-4">{formatBRLAdmin(c.receita)}</td>
                  <td className="p-4"><Badge variant="outline">{c.status}</Badge></td>
                  <td className="p-4"><Link to="/admin/cursos/$slug" params={{ slug: c.slug }}><Button variant="ghost" size="sm" className="gap-1"><Pencil className="h-3.5 w-3.5" /> Editor</Button></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </ScrollReveal>
    </AdminLayout>
  );
}
