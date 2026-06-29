import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, PageHeader, GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EmptyState } from "@/components/ui/empty-state";
import { comparacaoMock, formatBRL } from "@/lib/mock/loja";
import { Button } from "@/components/ui/button";
import { Check, X, GitCompare } from "lucide-react";

export const Route = createFileRoute("/loja/comparar")({
  head: () => ({ meta: [{ title: "Comparar — Ateliê Papel" }] }),
  component: CompararPage,
});

function CompararPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[{ label: "Loja", href: "/loja" }, { label: "Comparar" }]} />
          <PageHeader title="Comparar produtos" subtitle="Veja lado a lado as diferenças entre os itens selecionados." />
        </ScrollReveal>

        {comparacaoMock.length === 0 ? (
          <EmptyState
            icon={<GitCompare className="h-10 w-10" />}
            title="Nenhum produto para comparar"
            description="Adicione itens da loja ou da sua lista de desejos para comparar características lado a lado."
            action={
              <Link to="/loja">
                <Button className="rounded-full">Explorar loja</Button>
              </Link>
            }
            className="mt-10"
          />
        ) : (
        <ScrollReveal delay={80} className="mt-10 overflow-x-auto">
          <GlassCard className="min-w-[640px] p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-normal text-muted-foreground" />
                  {comparacaoMock.map((p) => (
                    <th key={p.slug} className="p-4 text-left">
                      <div className="grid h-20 w-20 place-items-center rounded-xl bg-[color:var(--rose-soft)]">
                        <p.Icon className="h-8 w-8 text-foreground/40" />
                      </div>
                      <p className="mt-2 max-w-[160px] font-medium leading-snug">{p.nome}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">Preço</td>
                  {comparacaoMock.map((p) => (
                    <td key={p.slug} className="p-4 font-display text-lg">{formatBRL(p.preco)}</td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">Categoria</td>
                  {comparacaoMock.map((p) => (
                    <td key={p.slug} className="p-4 capitalize">{p.categoria}</td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">Avaliação</td>
                  {comparacaoMock.map((p) => (
                    <td key={p.slug} className="p-4">{p.avaliacao} ★</td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">Estoque</td>
                  {comparacaoMock.map((p) => (
                    <td key={p.slug} className="p-4">
                      {p.estoque > 10 ? <Check className="h-4 w-4 text-primary" /> : <X className="h-4 w-4 text-muted-foreground" />}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4" />
                  {comparacaoMock.map((p) => (
                    <td key={p.slug} className="p-4">
                      <Link to="/loja/produto/$slug" params={{ slug: p.slug }}>
                        <Button size="sm" className="rounded-full">Ver produto</Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </GlassCard>
        </ScrollReveal>
        )}
      </div>
    </SiteLayout>
  );
}
