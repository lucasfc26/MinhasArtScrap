import { createFileRoute } from "@tanstack/react-router";
import { Download, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CursoAlunoLayout } from "@/components/site/CursoLayout";
import { GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { certificadosAluno } from "@/lib/mock/cursos";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/cursos/aluno/certificados")({
  component: CertificadosPage,
});

function CertificadosPage() {
  return (
    <SiteLayout>
      <CursoAlunoLayout>
        <ScrollReveal>
          <h1 className="font-display text-4xl">Certificados</h1>
          <p className="mt-2 text-muted-foreground">Conquistas dos cursos concluídos.</p>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {certificadosAluno.map((cert, i) => (
            <ScrollReveal key={cert.curso} delay={i * 60}>
              <GlassCard className="premium-accent p-6">
                <Award className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-display text-xl">{cert.curso}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Emitido em {cert.data} · {cert.carga}</p>
                <Button variant="outline" className="mt-4 rounded-full gap-2">
                  <Download className="h-4 w-4" /> Baixar PDF
                </Button>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </CursoAlunoLayout>
    </SiteLayout>
  );
}
