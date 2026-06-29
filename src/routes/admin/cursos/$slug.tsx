import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Save, Plus, GripVertical, PlayCircle, Upload, Award, Star, Trash2 } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getCursoBySlug } from "@/lib/mock/cursos";
import {
  cursoModulosAdmin, cursoInstrutores, cursoAvaliacoesAdmin, cursoUploads,
} from "@/lib/mock/admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/admin/cursos/$slug")({
  component: EditarCursoPage,
});

function EditarCursoPage() {
  const { slug } = Route.useParams();
  const curso = getCursoBySlug(slug) ?? getCursoBySlug("scrapbook-do-zero")!;

  return (
    <AdminLayout title="Editor de curso" subtitle={curso.nome}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Link to="/admin/cursos" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <Button className="rounded-full gap-2"><Save className="h-4 w-4" /> Salvar curso</Button>
      </div>

      <ScrollReveal>
        <Tabs defaultValue="editor">
          <TabsList className="mb-4 flex h-auto flex-wrap gap-1 rounded-2xl bg-secondary/50 p-1">
            <TabsTrigger value="editor" className="rounded-xl">Editor</TabsTrigger>
            <TabsTrigger value="modulos" className="rounded-xl">Módulos</TabsTrigger>
            <TabsTrigger value="aulas" className="rounded-xl">Aulas</TabsTrigger>
            <TabsTrigger value="uploads" className="rounded-xl">Uploads</TabsTrigger>
            <TabsTrigger value="instrutores" className="rounded-xl">Instrutores</TabsTrigger>
            <TabsTrigger value="avaliacoes" className="rounded-xl">Avaliações</TabsTrigger>
            <TabsTrigger value="certificados" className="rounded-xl">Certificados</TabsTrigger>
          </TabsList>

          <TabsContent value="editor">
            <AdminCard className="p-6">
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="space-y-4">
                  <div><Label>Título</Label><Input className="mt-1 rounded-xl" defaultValue={curso.nome} /></div>
                  <div><Label>Resumo</Label><Input className="mt-1 rounded-xl" defaultValue={curso.resumo} /></div>
                  <div><Label>Descrição</Label><Textarea className="mt-1 rounded-xl min-h-[140px]" defaultValue={curso.descricao} /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Preço</Label><Input className="mt-1 rounded-xl" defaultValue={curso.preco} /></div>
                    <div><Label>Nível</Label><Input className="mt-1 rounded-xl" defaultValue={curso.nivel} /></div>
                  </div>
                </div>
                <div className="grid h-56 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--sage)]/30 to-[color:var(--cream)]">
                  <curso.Icon className="h-16 w-16 text-foreground/30" />
                </div>
              </div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="modulos">
            <AdminCard className="p-6">
              <div className="flex justify-between"><h3 className="font-display text-lg">Módulos do currículo</h3><Button size="sm" className="rounded-full gap-1"><Plus className="h-3.5 w-3.5" /> Novo módulo</Button></div>
              <div className="mt-4 space-y-3">
                {cursoModulosAdmin.map((m) => (
                  <div key={m.id} className="rounded-xl border border-border p-4">
                    <div className="flex items-center gap-2">
                      <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                      <Input className="flex-1 rounded-xl font-medium" defaultValue={m.titulo} />
                      <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                    </div>
                    <p className="mt-2 pl-6 text-xs text-muted-foreground">{m.aulas.length} aulas</p>
                  </div>
                ))}
              </div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="aulas">
            <AdminCard className="p-6">
              <div className="flex justify-between"><h3 className="font-display text-lg">Aulas</h3><Button size="sm" className="rounded-full gap-1"><Plus className="h-3.5 w-3.5" /> Nova aula</Button></div>
              <div className="mt-4 space-y-2">
                {cursoModulosAdmin.flatMap((m) => m.aulas.map((a) => ({ ...a, modulo: m.titulo }))).map((a) => (
                  <div key={a.id} className="flex items-center gap-3 rounded-xl border border-border p-3 hover:bg-secondary/30">
                    <GripVertical className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <PlayCircle className="h-4 w-4 shrink-0 text-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{a.titulo}</p>
                      <p className="text-xs text-muted-foreground">{a.modulo} · {a.duracao}</p>
                    </div>
                    <Badge variant="outline">{a.tipo}</Badge>
                    <Button variant="ghost" size="sm">Editar</Button>
                  </div>
                ))}
              </div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="uploads">
            <AdminCard className="p-6">
              <div className="flex justify-between"><h3 className="font-display text-lg">Arquivos do curso</h3><Button size="sm" className="rounded-full gap-1"><Upload className="h-3.5 w-3.5" /> Upload</Button></div>
              <ul className="mt-4 space-y-2">
                {cursoUploads.map((u) => (
                  <li key={u.nome} className="flex items-center justify-between rounded-xl border border-border p-3 text-sm">
                    <span>{u.nome}</span>
                    <span className="text-muted-foreground">{u.tipo} · {u.tamanho}</span>
                  </li>
                ))}
              </ul>
            </AdminCard>
          </TabsContent>

          <TabsContent value="instrutores">
            <AdminCard className="p-6">
              <div className="flex justify-between"><h3 className="font-display text-lg">Instrutores</h3><Button size="sm" variant="outline" className="rounded-full">Vincular</Button></div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {cursoInstrutores.map((i) => (
                  <div key={i.nome} className="flex items-center gap-3 rounded-xl border border-border p-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--sage)]/30 font-display">{i.avatar}</div>
                    <div><p className="font-medium">{i.nome}</p><p className="text-xs text-muted-foreground">{i.bio}</p><p className="text-xs text-primary">{i.cursos} cursos</p></div>
                  </div>
                ))}
              </div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="avaliacoes">
            <AdminCard className="p-6">
              <h3 className="font-display text-lg flex items-center gap-2"><Star className="h-5 w-5 text-accent" /> Avaliações dos alunos</h3>
              <div className="mt-4 space-y-3">
                {cursoAvaliacoesAdmin.map((a) => (
                  <div key={a.autor + a.data} className="rounded-xl border border-border p-4">
                    <div className="flex justify-between">
                      <div><p className="font-medium">{a.autor}</p><p className="text-xs text-muted-foreground">{a.data} · {"★".repeat(a.nota)}</p></div>
                      <Badge variant={a.status === "Publicada" ? "outline" : "secondary"}>{a.status}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{a.texto}</p>
                    {a.status === "Pendente" && (
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" className="rounded-full">Publicar</Button>
                        <Button size="sm" variant="outline" className="rounded-full">Ocultar</Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="certificados">
            <AdminCard className="p-6 space-y-4">
              <h3 className="font-display text-lg flex items-center gap-2"><Award className="h-5 w-5 text-accent" /> Certificado</h3>
              <div className="flex items-center justify-between rounded-xl border border-border p-4">
                <span>Emitir certificado ao concluir</span>
                <Switch defaultChecked />
              </div>
              <div><Label>Título no certificado</Label><Input className="mt-1 rounded-xl" defaultValue={curso.nome} /></div>
              <div><Label>Carga horária</Label><Input className="mt-1 rounded-xl" defaultValue={curso.duracao} /></div>
              <div className="grid h-40 place-items-center rounded-xl border-2 border-dashed border-border bg-secondary/20 text-sm text-muted-foreground">
                Preview do certificado
              </div>
            </AdminCard>
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </AdminLayout>
  );
}
