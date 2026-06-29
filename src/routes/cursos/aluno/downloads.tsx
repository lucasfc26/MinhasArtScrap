import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CursoAlunoLayout } from "@/components/site/CursoLayout";
import { GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { downloadsAluno } from "@/lib/mock/cursos";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/cursos/aluno/downloads")({
  component: DownloadsPage,
});

function DownloadsPage() {
  return (
    <SiteLayout>
      <CursoAlunoLayout>
        <ScrollReveal>
          <h1 className="font-display text-4xl">Downloads</h1>
          <p className="mt-2 text-muted-foreground">Materiais complementares dos seus cursos.</p>
        </ScrollReveal>

        <div className="mt-8 space-y-3">
          {downloadsAluno.map((d, i) => (
            <ScrollReveal key={d.nome} delay={i * 50}>
              <GlassCard className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--sage)]/30">
                    <d.Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{d.nome}</p>
                    <p className="text-xs text-muted-foreground">{d.tipo} · {d.tamanho}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="rounded-full gap-1">
                  <Download className="h-4 w-4" /> Baixar
                </Button>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </CursoAlunoLayout>
    </SiteLayout>
  );
}
