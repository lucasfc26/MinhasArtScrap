import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Save, Copy, Trash2, Plus, Image, Link2, History } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getProdutoBySlug } from "@/lib/mock/loja";
import { produtoVariacoes, produtoRelacionados, produtoHistorico } from "@/lib/mock/admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/produtos/$slug")({
  component: EditarProdutoPage,
});

function EditarProdutoPage() {
  const { slug } = Route.useParams();
  const p = getProdutoBySlug(slug) ?? getProdutoBySlug("bloco-papel-doce-memoria")!;

  return (
    <AdminLayout title="Editar produto" subtitle={p.nome}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Link to="/admin/produtos" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full gap-1"><Copy className="h-3.5 w-3.5" /> Duplicar</Button>
          <Button variant="outline" size="sm" className="rounded-full text-destructive gap-1"><Trash2 className="h-3.5 w-3.5" /> Excluir</Button>
          <Button size="sm" className="rounded-full gap-1"><Save className="h-3.5 w-3.5" /> Salvar</Button>
        </div>
      </div>

      <ScrollReveal>
        <Tabs defaultValue="geral">
          <TabsList className="mb-4 flex h-auto flex-wrap gap-1 rounded-2xl bg-secondary/50 p-1">
            <TabsTrigger value="geral" className="rounded-xl">Geral</TabsTrigger>
            <TabsTrigger value="variacoes" className="rounded-xl">Variações</TabsTrigger>
            <TabsTrigger value="galeria" className="rounded-xl">Galeria</TabsTrigger>
            <TabsTrigger value="seo" className="rounded-xl">SEO</TabsTrigger>
            <TabsTrigger value="relacionamentos" className="rounded-xl">Relacionamentos</TabsTrigger>
            <TabsTrigger value="historico" className="rounded-xl">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="geral">
            <AdminCard className="p-6">
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="space-y-4">
                  <div><Label>Nome</Label><Input className="mt-1 rounded-xl" defaultValue={p.nome} /></div>
                  <div><Label>Descrição</Label><Textarea className="mt-1 rounded-xl min-h-[140px]" defaultValue={p.descricao} /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Preço</Label><Input className="mt-1 rounded-xl" defaultValue={p.preco} /></div>
                    <div><Label>Estoque</Label><Input className="mt-1 rounded-xl" defaultValue={p.estoque} /></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div><Label>SKU</Label><Input className="mt-1 rounded-xl" defaultValue={p.sku} /></div>
                  <div><Label>Categoria</Label><Input className="mt-1 rounded-xl" defaultValue={p.categoria} /></div>
                  <div className="grid h-48 place-items-center rounded-xl bg-[color:var(--rose-soft)]">
                    <p.Icon className="h-20 w-20 text-foreground/30" />
                  </div>
                </div>
              </div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="variacoes">
            <AdminCard className="p-6">
              <div className="flex justify-between">
                <h3 className="font-display text-lg">Variações</h3>
                <Button size="sm" variant="outline" className="rounded-full gap-1"><Plus className="h-3.5 w-3.5" /> Adicionar</Button>
              </div>
              <table className="mt-4 w-full text-sm">
                <thead><tr className="border-b text-left text-xs uppercase text-muted-foreground"><th className="pb-2">Variação</th><th className="pb-2">SKU</th><th className="pb-2">Estoque</th><th className="pb-2">Preço</th></tr></thead>
                <tbody>
                  {(p.cores ? produtoVariacoes : produtoVariacoes.slice(0, 1)).map((v) => (
                    <tr key={v.sku} className="border-b border-border/60"><td className="py-3">{v.nome}</td><td>{v.sku}</td><td>{v.estoque}</td><td>R$ {v.preco.toFixed(2).replace(".", ",")}</td></tr>
                  ))}
                </tbody>
              </table>
            </AdminCard>
          </TabsContent>

          <TabsContent value="galeria">
            <AdminCard className="p-6">
              <div className="flex justify-between"><h3 className="font-display text-lg">Galeria de imagens</h3><Button size="sm" className="rounded-full gap-1"><Image className="h-3.5 w-3.5" /> Upload</Button></div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square rounded-xl bg-[color:var(--rose-soft)] grid place-items-center">
                    <p.Icon className="h-10 w-10 text-foreground/30" />
                  </div>
                ))}
                <div className="aspect-square rounded-xl border-2 border-dashed border-border grid place-items-center text-xs text-muted-foreground">+ Adicionar</div>
              </div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="seo">
            <AdminCard className="p-6 space-y-4">
              <div><Label>Título SEO</Label><Input className="mt-1 rounded-xl" defaultValue={p.nome} /></div>
              <div><Label>URL slug</Label><Input className="mt-1 rounded-xl" defaultValue={p.slug} /></div>
              <div><Label>Meta description</Label><Textarea className="mt-1 rounded-xl" defaultValue={p.descricao.slice(0, 160)} /></div>
              <div><Label>Palavras-chave</Label><Input className="mt-1 rounded-xl" defaultValue="scrapbook, papel estampado, doce memória" /></div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="relacionamentos">
            <AdminCard className="p-6">
              <div className="flex justify-between"><h3 className="font-display text-lg">Produtos relacionados</h3><Button size="sm" variant="outline" className="rounded-full gap-1"><Link2 className="h-3.5 w-3.5" /> Vincular</Button></div>
              <ul className="mt-4 space-y-2">
                {produtoRelacionados.map((r) => (
                  <li key={r.nome} className="flex items-center gap-3 rounded-xl border border-border p-3">
                    <r.Icon className="h-5 w-5 text-muted-foreground" />
                    <span className="flex-1 text-sm">{r.nome}</span>
                    <Button variant="ghost" size="sm" className="text-destructive">Remover</Button>
                  </li>
                ))}
              </ul>
            </AdminCard>
          </TabsContent>

          <TabsContent value="historico">
            <AdminCard className="p-6">
              <h3 className="font-display text-lg flex items-center gap-2"><History className="h-5 w-5" /> Histórico de alterações</h3>
              <ul className="mt-4 space-y-3">
                {produtoHistorico.map((h) => (
                  <li key={h.data + h.acao} className="flex flex-wrap justify-between gap-2 border-b border-border/60 pb-3 text-sm last:border-0">
                    <div>
                      <p className="font-medium">{h.acao}</p>
                      <p className="text-muted-foreground">{h.de} → {h.para}</p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <p>{h.usuario}</p>
                      <p>{h.data}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </AdminCard>
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </AdminLayout>
  );
}
