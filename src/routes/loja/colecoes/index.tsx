import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookHeart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, PageHeader } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { colecoes } from "@/lib/mock/data";

export const Route = createFileRoute("/loja/colecoes/")({
  head: () => ({ meta: [{ title: "Coleções — Ateliê Papel" }] }),
  component: ColecoesPage,
});

function ColecoesPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[{ label: "Loja", href: "/loja" }, { label: "Coleções" }]} />
          <PageHeader
            centered
            title="Nossas coleções"
            subtitle="Curadorias temáticas com papéis, fitas e embelezamentos que conversam entre si."
          />
        </ScrollReveal>

        <div className="mt-12 grid auto-rows-[280px] grid-cols-1 gap-6 md:grid-cols-12 md:auto-rows-[360px]">
          {colecoes.map((c, i) => {
            const slug = c.nome.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const spans = i === 0 ? "md:col-span-8" : i === 1 ? "md:col-span-4 md:row-span-2 premium-accent" : "md:col-span-4";
            return (
              <ScrollReveal key={c.nome} delay={i * 80} className={spans}>
                <Link
                  to="/loja/colecoes/$slug"
                  params={{ slug }}
                  className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br ${c.cor} p-6 shadow-soft bento-hover`}
                >
                  <span className="absolute right-5 top-5 rounded-full bg-card/85 px-3 py-1 text-[10px] uppercase tracking-widest">
                    {c.tag}
                  </span>
                  <div className="absolute inset-0 grid place-items-center opacity-30">
                    <BookHeart className="h-40 w-40" strokeWidth={0.8} />
                  </div>
                  <div className="relative glass-panel rounded-xl p-4">
                    <h2 className="font-display text-2xl">{c.nome}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{c.descricao}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
                      Explorar <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </SiteLayout>
  );
}
