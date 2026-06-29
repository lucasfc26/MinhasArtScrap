import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Heart, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getProdutoBySlug } from "@/lib/mock/loja";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/loja/produto/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${params.slug.replace(/-/g, " ")} — Ateliê Papel` }],
  }),
  component: ProdutoPage,
});

function ProdutoPage() {
  const { slug } = Route.useParams();
  const p = getProdutoBySlug(slug) ?? getProdutoBySlug("bloco-papel-doce-memoria")!;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[
            { label: "Loja", href: "/loja" },
            { label: p.categoria, href: "/loja" },
            { label: p.nome },
          ]} />
        </ScrollReveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[color:var(--rose-soft)] shadow-soft">
              {p.tag && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {p.tag}
                </span>
              )}
              <div className="grid aspect-square place-items-center">
                <p.Icon className="h-40 w-40 text-foreground/35" strokeWidth={0.9} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(p.avaliacao) ? "fill-accent text-accent" : "text-border"}`} />
                ))}
                <span className="ml-1">{p.avaliacao} · {p.reviews} avaliações</span>
              </div>
              <h1 className="mt-3 font-display text-3xl md:text-4xl">{p.nome}</h1>
              <p className="mt-3 text-muted-foreground">{p.descricao}</p>

              <div className="mt-6 flex items-baseline gap-3">
                {p.antigo && <span className="text-lg text-muted-foreground line-through">R$ {p.antigo.toFixed(2).replace(".", ",")}</span>}
                <span className="font-display text-4xl">R$ {p.preco.toFixed(2).replace(".", ",")}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">ou {p.parcela} sem juros · SKU {p.sku}</p>

              {p.cores && (
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Cor</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.cores.map((c) => (
                      <button key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm hover:border-primary">{c}</button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center rounded-full border border-border">
                  <button className="p-2.5"><Minus className="h-4 w-4" /></button>
                  <span className="w-8 text-center text-sm">1</span>
                  <button className="p-2.5"><Plus className="h-4 w-4" /></button>
                </div>
                <Button className="flex-1 rounded-full gap-2">
                  <ShoppingBag className="h-4 w-4" /> Adicionar ao carrinho
                </Button>
                <button className="rounded-full border border-border p-3 hover:bg-secondary"><Heart className="h-5 w-5" /></button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">{p.estoque} unidades em estoque · Frete grátis acima de R$ 199</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={150} className="mt-14">
          <Tabs defaultValue="descricao">
            <TabsList className="rounded-full">
              <TabsTrigger value="descricao" className="rounded-full">Descrição</TabsTrigger>
              <TabsTrigger value="avaliacoes" className="rounded-full">Avaliações</TabsTrigger>
              <TabsTrigger value="envio" className="rounded-full">Envio</TabsTrigger>
            </TabsList>
            <TabsContent value="descricao" className="mt-4">
              <GlassCard className="p-6">
                <p className="text-muted-foreground">{p.descricao}</p>
              </GlassCard>
            </TabsContent>
            <TabsContent value="avaliacoes" className="mt-4">
              <GlassCard className="p-6">
                <p className="text-sm text-muted-foreground">128 avaliações com média {p.avaliacao} estrelas.</p>
              </GlassCard>
            </TabsContent>
            <TabsContent value="envio" className="mt-4">
              <GlassCard className="p-6">
                <p className="text-sm text-muted-foreground">Enviamos para todo o Brasil. Prazo estimado: 5–12 dias úteis.</p>
              </GlassCard>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </SiteLayout>
  );
}
