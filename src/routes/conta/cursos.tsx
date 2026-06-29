import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle, ArrowRight } from "lucide-react";
import { ContaLayout, ContaCard } from "@/components/admin/ContaLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { contaCursos } from "@/lib/mock/conta";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/conta/cursos")({
  component: ContaCursosPage,
});

function ContaCursosPage() {
  return (
    <ContaLayout title="Seus cursos matriculados.">
      <div className="space-y-4">
        {contaCursos.map((c, i) => (
          <ScrollReveal key={c.slug} delay={i * 60}>
            <ContaCard>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-[color:var(--sage)]/30">
                    <c.Icon className="h-7 w-7 text-foreground/50" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.nivel} · {c.instrutor}</p>
                    <h3 className="font-display text-xl">{c.nome}</h3>
                    <p className="text-sm text-muted-foreground">{c.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{c.progresso}%</p>
                    <div className="mt-1 h-2 w-32 overflow-hidden rounded-full bg-border">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${c.progresso}%` }} />
                    </div>
                  </div>
                  <Link to="/cursos/$slug/player" params={{ slug: c.slug }}>
                    <Button className="rounded-full gap-2">
                      <PlayCircle className="h-4 w-4" /> Acessar
                    </Button>
                  </Link>
                </div>
              </div>
            </ContaCard>
          </ScrollReveal>
        ))}
      </div>
      <Link to="/cursos" className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        Explorar mais cursos <ArrowRight className="h-4 w-4" />
      </Link>
    </ContaLayout>
  );
}
