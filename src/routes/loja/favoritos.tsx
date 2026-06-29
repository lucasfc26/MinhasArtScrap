import { createFileRoute, Link } from "@tanstack/react-router";
import { GitCompare } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, PageHeader } from "@/components/site/PageChrome";
import { ProdutoCard } from "@/components/site/ProdutoCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { favoritosMock } from "@/lib/mock/loja";

export const Route = createFileRoute("/loja/favoritos")({
  head: () => ({ meta: [{ title: "Favoritos — Ateliê Papel" }] }),
  component: FavoritosPage,
});

function FavoritosPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[{ label: "Loja", href: "/loja" }, { label: "Favoritos" }]} />
          <PageHeader title="Lista de desejos" subtitle="Produtos que você salvou para depois." />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {favoritosMock.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 50}>
              <ProdutoCard p={p} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200} className="mt-8 text-center">
          <Link to="/loja/comparar" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <GitCompare className="h-4 w-4" /> Comparar produtos selecionados
          </Link>
        </ScrollReveal>
      </div>
    </SiteLayout>
  );
}
