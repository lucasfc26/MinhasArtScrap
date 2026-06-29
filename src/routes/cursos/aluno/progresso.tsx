import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CursoAlunoLayout } from "@/components/site/CursoLayout";
import { GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { progressoAluno, cursosDetalhados } from "@/lib/mock/cursos";

export const Route = createFileRoute("/cursos/aluno/progresso")({
  component: ProgressoPage,
});

function ProgressoPage() {
  return (
    <SiteLayout>
      <CursoAlunoLayout>
        <ScrollReveal>
          <h1 className="font-display text-4xl">Progresso</h1>
          <p className="mt-2 text-muted-foreground">Acompanhe sua evolução nos cursos.</p>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-8">
          <GlassCard className="p-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Curso em andamento</p>
                <h2 className="font-display text-2xl">{progressoAluno.cursoAtual}</h2>
              </div>
              <span className="font-display text-4xl text-primary">{progressoAluno.percentual}%</span>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-border">
              <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progressoAluno.percentual}%` }} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {progressoAluno.aulasConcluidas} de {progressoAluno.totalAulas} aulas concluídas
            </p>
          </GlassCard>
        </ScrollReveal>

        <div className="mt-8 space-y-4">
          {cursosDetalhados.slice(0, 3).map((c, i) => {
            const pct = i === 0 ? 34 : i === 1 ? 100 : 0;
            return (
              <ScrollReveal key={c.slug} delay={i * 60}>
                <GlassCard className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-medium">{c.nome}</h3>
                    <span className="text-sm font-medium">{pct}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </CursoAlunoLayout>
    </SiteLayout>
  );
}
