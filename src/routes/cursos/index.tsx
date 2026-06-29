import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Infinity, FolderOpen, Users, PlayCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CursoCard } from "@/components/site/CursoLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cursosDetalhados, categoriasCursos } from "@/lib/mock/cursos";

export const Route = createFileRoute("/cursos/")({
  head: () => ({ meta: [{ title: "Cursos online — Ateliê Papel" }] }),
  component: CursosIndexPage,
});

const beneficios = [
  { icon: Infinity, titulo: "Acesso vitalício", desc: "Aprenda no seu ritmo" },
  { icon: FolderOpen, titulo: "Materiais exclusivos", desc: "PDFs, templates e guias" },
  { icon: Users, titulo: "Comunidade", desc: "Troque com outras alunas" },
];

function CursosIndexPage() {
  const destaque = cursosDetalhados[0];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden md:min-h-[560px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--rose-soft)] via-[color:var(--cream)] to-[color:var(--sage)]/25" />
        <div className="absolute inset-0 paper-texture opacity-50" />
        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-4xl md:text-6xl">Aprenda scrapbook com calma</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Cursos online detalhistas, no seu tempo, com certificado e materiais para download.
          </p>
          <a href="#cursos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-95">
            Explorar cursos <ArrowRight className="h-4 w-4" />
          </a>
        </ScrollReveal>
      </section>

      {/* Benefícios */}
      <section className="border-y border-border/60 bg-card/50 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {beneficios.map((b, i) => (
            <ScrollReveal key={b.titulo} delay={i * 80} className="flex items-center gap-4 justify-center md:justify-start">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--sage)]/30">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{b.titulo}</h3>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        {/* Destaque */}
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl">Workshop em destaque</h2>
        </ScrollReveal>
        <ScrollReveal delay={80} className="mt-6">
          <div className="premium-accent grid overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft md:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
              <span className="inline-flex w-fit rounded-full bg-[color:var(--gold)]/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">Masterclass</span>
              <h3 className="font-display text-3xl">{destaque.nome}</h3>
              <p className="text-muted-foreground">{destaque.resumo}</p>
              <p className="text-sm text-muted-foreground">por {destaque.instrutor}</p>
              <Link
                to="/cursos/$slug"
                params={{ slug: destaque.slug }}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Matricular — R$ {destaque.preco} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid min-h-[280px] place-items-center bg-gradient-to-br from-[color:var(--sage)]/40 to-[color:var(--cream)]">
              <PlayCircle className="h-20 w-20 text-foreground/40" strokeWidth={1} />
            </div>
          </div>
        </ScrollReveal>

        {/* Categorias */}
        <ScrollReveal className="mt-16">
          <h2 className="font-display text-3xl">Categorias</h2>
        </ScrollReveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoriasCursos.map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={i * 60}>
              <Link
                to="/cursos/categoria/$slug"
                params={{ slug: cat.slug }}
                className={`block rounded-2xl bg-gradient-to-br ${cat.cor} p-6 bento-hover shadow-soft`}
              >
                <h3 className="font-display text-xl">{cat.nome}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.descricao}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Grid cursos */}
        <ScrollReveal className="mt-16">
          <h2 id="cursos" className="font-display text-3xl">Todos os cursos</h2>
        </ScrollReveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cursosDetalhados.map((c, i) => (
            <ScrollReveal key={c.slug} delay={i * 50}>
              <CursoCard curso={c} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
