import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CursoAlunoLayout } from "@/components/site/CursoLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cursosDetalhados, progressoAluno } from "@/lib/mock/cursos";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/cursos/aluno/")({
  head: () => ({ meta: [{ title: "Área do aluno — Ateliê Papel" }] }),
  component: AlunoIndexPage,
});

function AlunoIndexPage() {
  const matriculados = cursosDetalhados.slice(0, 2);

  return (
    <SiteLayout>
      <CursoAlunoLayout>
        <ScrollReveal>
          <h1 className="font-display text-4xl">Meus cursos</h1>
          <p className="mt-2 text-muted-foreground">Continue de onde parou.</p>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-8">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-[color:var(--rose-soft)] to-card p-6 shadow-soft">
            <p className="text-xs uppercase tracking-widest text-primary">Continuar assistindo</p>
            <h2 className="mt-2 font-display text-2xl">{progressoAluno.aulaAtual}</h2>
            <p className="text-sm text-muted-foreground">{progressoAluno.moduloAtual}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-border">
              <div className="h-full rounded-full bg-primary" style={{ width: `${progressoAluno.percentual}%` }} />
            </div>
            <Link to="/cursos/$slug/player" params={{ slug: "scrapbook-do-zero" }}>
              <Button className="mt-4 rounded-full gap-2">
                <PlayCircle className="h-4 w-4" /> Retomar aula
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {matriculados.map((c, i) => (
            <ScrollReveal key={c.slug} delay={i * 60}>
              <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft bento-hover">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">{c.nivel} · {c.aulas} aulas</p>
                    <h3 className="mt-1 font-display text-xl">{c.nome}</h3>
                  </div>
                  <c.Icon className="h-8 w-8 text-foreground/30" strokeWidth={1.2} />
                </div>
                <Link to="/cursos/$slug/player" params={{ slug: c.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Acessar <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </CursoAlunoLayout>
    </SiteLayout>
  );
}
