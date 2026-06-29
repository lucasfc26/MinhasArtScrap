import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CursoAlunoLayout } from "@/components/site/CursoLayout";
import { GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { comentariosAluno } from "@/lib/mock/cursos";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/cursos/aluno/comentarios")({
  component: ComentariosPage,
});

function ComentariosPage() {
  return (
    <SiteLayout>
      <CursoAlunoLayout>
        <ScrollReveal>
          <h1 className="font-display text-4xl">Comentários</h1>
          <p className="mt-2 text-muted-foreground">Converse com instrutoras e colegas.</p>
        </ScrollReveal>

        <ScrollReveal delay={60} className="mt-8">
          <GlassCard className="p-5">
            <Textarea placeholder="Escreva um comentário ou dúvida…" className="min-h-[100px] rounded-xl" />
            <Button className="mt-3 rounded-full">Publicar</Button>
          </GlassCard>
        </ScrollReveal>

        <div className="mt-6 space-y-4">
          {comentariosAluno.map((c, i) => (
            <ScrollReveal key={c.autor + c.data} delay={i * 50}>
              <GlassCard className="p-5">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--rose)]/50 font-display text-sm">
                    {c.autor.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{c.autor}</span>
                      <span className="text-xs text-muted-foreground">· {c.curso}</span>
                      <span className="text-xs text-muted-foreground">· {c.data}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{c.texto}</p>
                    <button className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      <MessageCircle className="h-3 w-3" /> {c.respostas} resposta(s)
                    </button>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </CursoAlunoLayout>
    </SiteLayout>
  );
}
