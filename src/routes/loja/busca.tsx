import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, PageHeader } from "@/components/site/PageChrome";
import { ProdutoCard } from "@/components/site/ProdutoCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { produtosDetalhados } from "@/lib/mock/loja";

export const Route = createFileRoute("/loja/busca")({
  validateSearch: (s: Record<string, unknown>) => ({
    q: typeof s.q === "string" ? s.q : "",
  }),
  head: () => ({ meta: [{ title: "Busca — Ateliê Papel" }] }),
  component: BuscaPage,
});

function BuscaPage() {
  const { q } = Route.useSearch();
  const termo = q || "washi";
  const resultados = produtosDetalhados.filter((p) =>
    p.nome.toLowerCase().includes(termo.toLowerCase()) ||
    p.categoria.toLowerCase().includes(termo.toLowerCase()),
  );
  const items = resultados.length ? resultados : produtosDetalhados.slice(0, 4);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[{ label: "Loja", href: "/loja" }, { label: "Busca" }]} />
          <PageHeader title="Resultados da busca" subtitle={`Exibindo resultados para "${termo}"`} />
        </ScrollReveal>

        <ScrollReveal delay={80} className="mx-auto mt-8 max-w-xl">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-soft">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              defaultValue={termo}
              placeholder="Buscar produtos…"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </ScrollReveal>

        <p className="mt-8 text-sm text-muted-foreground">{items.length} produto(s) encontrado(s)</p>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 50}>
              <ProdutoCard p={p} />
            </ScrollReveal>
          ))}
        </div>

        {!resultados.length && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Nenhum resultado exato — veja sugestões abaixo ou{" "}
            <Link to="/loja" className="text-primary underline">explorar toda a loja</Link>.
          </p>
        )}
      </div>
    </SiteLayout>
  );
}
