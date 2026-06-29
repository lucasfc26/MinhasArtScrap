import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Save } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/admin/cursos/novo")({
  component: NovoCursoPage,
});

function NovoCursoPage() {
  return (
    <AdminLayout title="Novo curso" subtitle="Criar curso online">
      <Link to="/admin/cursos" className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Voltar
      </Link>
      <ScrollReveal>
        <AdminCard className="p-6">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="space-y-4">
              <div><Label>Título do curso</Label><Input className="mt-1 rounded-xl" placeholder="Ex: Scrapbook do Zero" /></div>
              <div><Label>Descrição</Label><Textarea className="mt-1 rounded-xl min-h-[120px]" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Preço (R$)</Label><Input className="mt-1 rounded-xl" type="number" /></div>
                <div><Label>Nível</Label>
                  <Select><SelectTrigger className="mt-1 rounded-xl"><SelectValue placeholder="Selecionar" /></SelectTrigger>
                    <SelectContent>{["Iniciante", "Intermediário", "Avançado"].map((n) => <SelectItem key={n} value={n}>{n}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div><Label>Instrutor</Label>
                <Select><SelectTrigger className="mt-1 rounded-xl"><SelectValue placeholder="Selecionar" /></SelectTrigger>
                  <SelectContent>{["Marina Vidal", "Júlia Rezende", "Bruno Caldas"].map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Categoria</Label>
                <Select><SelectTrigger className="mt-1 rounded-xl"><SelectValue placeholder="Selecionar" /></SelectTrigger>
                  <SelectContent>{["Iniciante", "Intermediário", "Avançado", "Workshops"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="grid h-40 place-items-center rounded-xl border-2 border-dashed border-border bg-secondary/30 text-sm text-muted-foreground">
                Thumbnail do curso
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2 border-t border-border pt-5">
            <Button variant="outline" className="rounded-full">Rascunho</Button>
            <Button className="rounded-full gap-2"><Save className="h-4 w-4" /> Criar e editar currículo</Button>
          </div>
        </AdminCard>
      </ScrollReveal>
    </AdminLayout>
  );
}
