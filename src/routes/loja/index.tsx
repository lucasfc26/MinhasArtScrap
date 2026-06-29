import { createFileRoute } from "@tanstack/react-router";
import { SlidersHorizontal, Grid3X3, LayoutGrid } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, PageHeader } from "@/components/site/PageChrome";
import { ProdutoCard } from "@/components/site/ProdutoCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { produtosDetalhados, filtrosLoja } from "@/lib/mock/loja";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/loja/")({
  head: () => ({
    meta: [{ title: "Loja — Ateliê Papel" }],
  }),
  component: LojaPage,
});

function LojaPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[{ label: "Loja" }]} />
          <PageHeader
            title="Nossa loja"
            subtitle="Papéis, washi, carimbos, kits e tudo para o seu ateliê — curadoria delicada, entrega com carinho."
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
          <ScrollReveal direction="left" className="hidden lg:block">
            <aside className="sticky top-28 space-y-6 rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Categorias</h3>
                <ul className="mt-3 space-y-2">
                  {filtrosLoja.categorias.map((c) => (
                    <li key={c}>
                      <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                        <Checkbox id={c} />
                        <Label htmlFor={c} className="cursor-pointer font-normal">{c}</Label>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border pt-5">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Coleções</h3>
                <ul className="mt-3 space-y-2">
                  {filtrosLoja.colecoes.map((c) => (
                    <li key={c}>
                      <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                        <Checkbox id={`col-${c}`} />
                        <Label htmlFor={`col-${c}`} className="cursor-pointer font-normal">{c}</Label>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border pt-5">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Preço</h3>
                <ul className="mt-3 space-y-2">
                  {filtrosLoja.precos.map((p) => (
                    <li key={p.label}>
                      <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                        <Checkbox id={p.label} />
                        <Label htmlFor={p.label} className="cursor-pointer font-normal">{p.label}</Label>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={100}>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">{produtosDetalhados.length} produtos</p>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium lg:hidden">
                    <SlidersHorizontal className="h-3.5 w-3.5" /> Filtros
                  </button>
                  <Select defaultValue="Relevância">
                    <SelectTrigger className="h-9 w-[160px] rounded-full text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {filtrosLoja.ordenacao.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="hidden items-center gap-1 rounded-full border border-border bg-card p-1 sm:flex">
                    <button className="rounded-full bg-secondary p-1.5"><Grid3X3 className="h-3.5 w-3.5" /></button>
                    <button className="rounded-full p-1.5 text-muted-foreground"><LayoutGrid className="h-3.5 w-3.5" /></button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {produtosDetalhados.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 60}>
                  <ProdutoCard p={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
