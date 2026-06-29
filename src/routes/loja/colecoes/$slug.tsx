import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, PageHeader } from "@/components/site/PageChrome";
import { ProdutoCard } from "@/components/site/ProdutoCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { produtosDetalhados } from "@/lib/mock/loja";

export const Route = createFileRoute("/loja/colecoes/$slug")({
  component: ColecaoDetalhePage,
});

function ColecaoDetalhePage() {
  const { slug } = Route.useParams();
  const nome = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const produtos = produtosDetalhados.filter((p) => p.colecao === slug || slug.includes("doce"));

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[
            { label: "Loja", href: "/loja" },
            { label: "Coleções", href: "/loja/colecoes" },
            { label: nome },
          ]} />
          <PageHeader title={nome} subtitle="Peças selecionadas desta curadoria temática." />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {(produtos.length ? produtos : produtosDetalhados.slice(0, 4)).map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 50}>
              <ProdutoCard p={p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
