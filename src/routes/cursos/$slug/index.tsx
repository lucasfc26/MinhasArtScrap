import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, PlayCircle, Star, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getCursoBySlug } from "@/lib/mock/cursos";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/cursos/$slug/")({
  component: CursoDetalhePage,
});

function CursoDetalhePage() {
  const { slug } = Route.useParams();
  const curso = getCursoBySlug(slug) ?? getCursoBySlug("scrapbook-do-zero")!;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[
            { label: "Cursos", href: "/cursos" },
            { label: curso.nome },
          ]} />
        </ScrollReveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_380px]">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--sage)]/40 to-[color:var(--cream)] shadow-soft">
              <div className="grid aspect-video place-items-center">
                <PlayCircle className="h-24 w-24 text-foreground/40" strokeWidth={1} />
              </div>
            </div>

            <h1 className="mt-8 font-display text-4xl md:text-5xl">{curso.nome}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{curso.descricao}</p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {curso.duracao}</span>
              <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {curso.alunos} alunas</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-accent text-accent" /> {curso.avaliacao}</span>
            </div>

            <GlassCard className="mt-8 p-6">
              <h2 className="font-display text-2xl">Conteúdo do curso</h2>
              <Accordion type="single" collapsible className="mt-4">
                {curso.modulos.map((mod, i) => (
                  <AccordionItem key={mod.titulo} value={`m-${i}`}>
                    <AccordionTrigger className="text-left font-medium">{mod.titulo}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {mod.aulas.map((a) => (
                          <li key={a.titulo} className="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-secondary">
                            <span>{a.titulo}</span>
                            <span>{a.duracao}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={100}>
            <GlassCard className="sticky top-28 p-6 premium-accent">
              {curso.tag && <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">{curso.tag}</span>}
              <div className="mt-2 flex items-baseline gap-2">
                {curso.precoAntigo && <span className="text-muted-foreground line-through">R$ {curso.precoAntigo}</span>}
                <span className="font-display text-4xl">R$ {curso.preco}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{curso.aulas} aulas · {curso.nivel}</p>
              <p className="mt-4 text-sm">Instrutor(a): <strong>{curso.instrutor}</strong></p>
              <ul className="mt-4 space-y-2 text-sm">
                {curso.beneficios.map((b) => (
                  <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{b}</li>
                ))}
              </ul>
              <Link to="/cursos/$slug/player" params={{ slug: curso.slug }} className="mt-6 block">
                <Button className="w-full rounded-full gap-2">
                  Acessar aulas <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </SiteLayout>
  );
}
