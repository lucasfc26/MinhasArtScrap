import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, PageHeader } from "@/components/site/PageChrome";
import { CursoCard } from "@/components/site/CursoLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { categoriasCursos, getCursosByCategoria, cursosDetalhados } from "@/lib/mock/cursos";

export const Route = createFileRoute("/cursos/categoria/$slug")({
  component: CategoriaCursosPage,
});

function CategoriaCursosPage() {
  const { slug } = Route.useParams();
  const cat = categoriasCursos.find((c) => c.slug === slug);
  const cursos = getCursosByCategoria(slug).length ? getCursosByCategoria(slug) : cursosDetalhados;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[
            { label: "Cursos", href: "/cursos" },
            { label: cat?.nome ?? slug },
          ]} />
          <PageHeader
            title={cat?.nome ?? "Categoria"}
            subtitle={cat?.descricao ?? "Cursos desta categoria."}
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((c, i) => (
            <ScrollReveal key={c.slug} delay={i * 60}>
              <CursoCard curso={c} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
