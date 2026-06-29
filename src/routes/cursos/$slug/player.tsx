import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle, Play, Pause, Volume2, Settings, Maximize, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getCursoBySlug } from "@/lib/mock/cursos";

export const Route = createFileRoute("/cursos/$slug/player")({
  component: PlayerPage,
});

function PlayerPage() {
  const { slug } = Route.useParams();
  const curso = getCursoBySlug(slug) ?? getCursoBySlug("scrapbook-do-zero")!;
  const modulos = curso.modulos.flatMap((m) =>
    m.aulas.map((a) => ({ ...a, modulo: m.titulo })),
  );

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <ScrollReveal>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">Módulo 2 · Composição</p>
              <h1 className="font-display text-3xl md:text-4xl">Layering de papéis</h1>
              <p className="mt-1 text-sm text-muted-foreground">{curso.nome}</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary">
                <ChevronLeft className="mr-1 inline h-4 w-4" /> Anterior
              </button>
              <button className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">
                Próxima <ChevronRight className="ml-1 inline h-4 w-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/60 bg-[color:var(--sage)]/20 shadow-soft">
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[color:var(--kraft)]/30 to-[color:var(--cream)]">
                <button className="grid h-20 w-20 place-items-center rounded-full bg-primary/90 text-primary-foreground shadow-lift transition-transform hover:scale-105">
                  <Play className="ml-1 h-8 w-8" />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-foreground/60 to-transparent p-4 text-background">
                <div className="flex items-center gap-3 text-xs">
                  <Pause className="h-4 w-4" />
                  <div className="h-1 w-32 rounded-full bg-background/30 md:w-48">
                    <div className="h-full w-1/3 rounded-full bg-primary" />
                  </div>
                  <span>12:34 / 25:00</span>
                </div>
                <div className="flex gap-3">
                  <Volume2 className="h-4 w-4" />
                  <Settings className="h-4 w-4" />
                  <Maximize className="h-4 w-4" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={80}>
            <GlassCard className="flex max-h-[480px] flex-col p-5">
              <h3 className="font-display text-xl">Conteúdo</h3>
              <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
                {modulos.map((aula) => (
                  <div
                    key={aula.titulo}
                    className={`flex items-start gap-3 rounded-xl p-3 text-sm ${
                      aula.atual ? "bg-primary/10 ring-1 ring-primary/30" :
                      aula.concluida ? "bg-secondary/60 opacity-80" : "hover:bg-secondary"
                    }`}
                  >
                    {aula.concluida ? (
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <Play className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                    <div>
                      <p className="font-medium">{aula.titulo}</p>
                      <p className="text-xs text-muted-foreground">{aula.duracao}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/cursos/aluno" className="mt-4 text-center text-sm text-primary hover:underline">
                Ir para área do aluno
              </Link>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </SiteLayout>
  );
}
