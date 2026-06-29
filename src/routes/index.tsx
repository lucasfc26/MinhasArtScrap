import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, PlayCircle, Sparkles, Instagram, Mail, Quote, BookHeart, Ribbon, Flower2, Scissors, Gift, FileText, Feather, Palette, PencilLine } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProdutoCard } from "@/components/site/ProdutoCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { categorias, colecoes, cursos, depoimentos, posts } from "@/lib/mock/data";
import { produtosDetalhados } from "@/lib/mock/loja";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ateliê Papel — Scrapbook, papelaria criativa & cursos online" },
      { name: "description", content: "Papéis estampados, washi tapes, carimbos, kits de coleção, álbuns e cursos. Curadoria delicada, embalagem com carinho, entrega para todo o Brasil." },
      { property: "og:title", content: "Ateliê Papel — Scrapbook & papelaria criativa" },
      { property: "og:description", content: "Papelaria criativa para quem guarda memória com as mãos." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Categorias />
      <Colecoes />
      <MaisVendidos />
      <Cursos />
      <Assinatura />
      <Lancamentos />
      <Promocoes />
      <Depoimentos />
      <Blog />
      <Instagrid />
      <Newsletter />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 paper-texture bg-[color:var(--rose-soft)]" />
      <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-[color:var(--sage)]/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <ScrollReveal className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Nova coleção · Doce Memória
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Papel,<br />
            <span className="italic text-primary">memória</span> &amp; <br />
            cuidado <span className="text-accent">·</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
            Papelaria criativa para quem guarda histórias com as mãos. Papéis estampados,
            washi tapes, carimbos e kits curados com afeto.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/loja" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]">
              Explorar a loja <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/cursos" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary">
              <PlayCircle className="h-4 w-4" /> Conhecer os cursos
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              {[0,1,2,3,4].map(i => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}
              <span className="ml-2">4,9 · 3.200 avaliações</span>
            </div>
            <span className="hidden h-3 w-px bg-border md:block" />
            <span className="hidden md:inline">Frete grátis acima de R$ 199</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={120} className="relative">
          <div className="absolute -top-6 left-6 z-10 rotate-[-6deg] rounded-md bg-[color:var(--rose)]/80 px-3 py-1 text-xs font-medium shadow-soft">
            feito à mão
          </div>
          <div className="grid h-[520px] grid-cols-6 grid-rows-6 gap-3">
            <div className="col-span-4 row-span-4 overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--kraft)]/70 to-[color:var(--cream)] shadow-lift bento-hover">
              <div className="grid h-full place-items-center"><BookHeart className="h-28 w-28 text-foreground/40" strokeWidth={1} /></div>
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden rounded-3xl bg-[color:var(--sage)]/40 shadow-soft bento-hover">
              <div className="grid h-full place-items-center"><Ribbon className="h-16 w-16 text-foreground/40" strokeWidth={1.1} /></div>
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden rounded-3xl bg-[color:var(--rose)]/55 shadow-soft bento-hover">
              <div className="grid h-full place-items-center"><Flower2 className="h-16 w-16 text-foreground/40" strokeWidth={1.1} /></div>
            </div>
            <div className="col-span-3 row-span-2 overflow-hidden rounded-3xl bg-card shadow-soft bento-hover">
              <div className="grid h-full place-items-center"><Scissors className="h-12 w-12 text-foreground/40" strokeWidth={1.1} /></div>
            </div>
            <div className="col-span-3 row-span-2 overflow-hidden rounded-3xl bg-[color:var(--gold)]/40 shadow-soft bento-hover premium-accent">
              <div className="grid h-full place-items-center"><Sparkles className="h-12 w-12 text-foreground/50" strokeWidth={1.1} /></div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Categorias() {
  return (
    <Section eyebrow="Navegar por" title="Categorias" subtitle="Tudo que você precisa para começar — ou aprofundar — sua prática de scrapbook.">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
        {categorias.map((c, i) => (
          <ScrollReveal key={c.slug} delay={i * 40}>
            <Link to="/loja" className={`group flex flex-col items-center gap-3 rounded-2xl border border-border/60 ${c.cor} p-5 text-center bento-hover`}>
              <div className="grid h-14 w-14 place-items-center rounded-full bg-card shadow-soft">
                <c.Icon className="h-6 w-6 text-foreground/80" strokeWidth={1.4} />
              </div>
              <span className="text-xs font-medium leading-tight">{c.nome}</span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

function Colecoes() {
  return (
    <Section eyebrow="Em destaque" title="Coleções" subtitle="Curadorias temáticas com papéis, fitas e embelezamentos que conversam entre si.">
      <div className="grid gap-5 md:grid-cols-3">
        {colecoes.map((c, i) => (
          <ScrollReveal key={c.nome} delay={i * 80}>
            <Link
              to="/loja/colecoes/$slug"
              params={{ slug: c.nome.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "") }}
              className={`group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br ${c.cor} p-6 shadow-soft bento-hover ${i === 1 ? "premium-accent" : ""}`}
            >
              <span className="absolute right-5 top-5 rounded-full bg-card/85 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/80">
                {c.tag}
              </span>
              <div className="absolute inset-0 grid place-items-center opacity-40"><BookHeart className="h-40 w-40 text-foreground" strokeWidth={0.9} /></div>
              <div className="relative glass-panel rounded-xl p-4">
                <h3 className="font-display text-2xl">{c.nome}</h3>
                <p className="mt-1 max-w-xs text-sm text-foreground/75">{c.descricao}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                  Ver coleção <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

function MaisVendidos() {
  const items = produtosDetalhados.slice(0, 4);
  return (
    <Section eyebrow="Queridinhos" title="Mais vendidos" subtitle="O que está saindo do ateliê esta semana.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p, i) => (
          <ScrollReveal key={p.slug} delay={i * 50}><ProdutoCard p={p} /></ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

function Lancamentos() {
  const items = produtosDetalhados.slice(2, 6);
  return (
    <Section eyebrow="Acabaram de chegar" title="Lançamentos" subtitle="Frescos do ateliê — antes de virarem favoritos.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p, i) => (
          <ScrollReveal key={p.slug} delay={i * 50}><ProdutoCard p={p} /></ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

function Promocoes() {
  const items = produtosDetalhados.filter(p => p.antigo).concat(produtosDetalhados.slice(0, 2)).slice(0, 4);
  return (
    <Section eyebrow="Por tempo limitado" title="Promoções da semana" subtitle="Achados especiais com preços de carinho.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p, i) => (
          <ScrollReveal key={p.slug + i} delay={i * 50}><ProdutoCard p={p} /></ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

function Cursos() {
  return (
    <section id="cursos" className="relative">
      <div className="absolute inset-0 -z-10 bg-[color:var(--sage)]/15" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <ScrollReveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-sage-deep">Aprenda com a gente</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Cursos online</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">Aulas calmas, detalhistas e no seu tempo. Com certificado.</p>
            </div>
            <Link to="/cursos" className="text-sm font-medium underline underline-offset-4">Ver todos →</Link>
          </div>
        </ScrollReveal>
        <div className="grid gap-5 md:grid-cols-3">
          {cursos.map((c, i) => (
            <ScrollReveal key={c.nome} delay={i * 80}>
              <article className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft bento-hover">
                <div className="relative grid aspect-[4/3] place-items-center bg-gradient-to-br from-[color:var(--sage)]/40 to-[color:var(--cream)]">
                  <PlayCircle className="h-14 w-14 text-foreground/80" strokeWidth={1.2} />
                  <span className="absolute right-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[10px] uppercase tracking-wider">
                    {c.nivel}
                  </span>
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs text-muted-foreground">por {c.instrutor} · {c.aulas} aulas</p>
                  <h3 className="font-display text-xl">{c.nome}</h3>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-display text-lg">{c.preco}</span>
                    <Link to="/cursos" className="text-sm font-medium text-primary">Matricular →</Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Assinatura() {
  return (
    <section id="assinatura" className="mx-auto max-w-7xl px-6 py-20">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--rose)]/50 via-[color:var(--cream)] to-[color:var(--gold)]/30 p-10 shadow-soft md:p-14">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-card/40 blur-2xl" />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">Kit do mês</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Assinatura Ateliê</h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Todo mês uma caixinha surpresa com curadoria temática: papéis exclusivos,
                washi tapes, embelezamentos e um mini projeto guiado.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["Curadoria exclusiva todo mês", "Frete grátis incluído", "Acesso a aulas bônus", "Cancele quando quiser"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{item}</li>
                ))}
              </ul>
              <a href="#" className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
                Assinar a partir de R$ 89/mês <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative grid place-items-center">
              <div className="rotate-3 rounded-3xl bg-card p-6 shadow-lift bento-hover">
                <div className="grid h-60 w-60 place-items-center rounded-2xl bg-[color:var(--rose-soft)]"><Gift className="h-24 w-24 text-foreground/50" strokeWidth={1} /></div>
                <p className="mt-3 text-center font-display text-lg">Caixa de Outubro</p>
                <p className="text-center text-xs text-muted-foreground">Tema: Herbário</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Depoimentos() {
  return (
    <Section eyebrow="Quem usa, conta" title="Depoimentos" subtitle="Histórias e álbuns que ganharam vida com nossas curadorias.">
      <div className="grid gap-5 md:grid-cols-3">
        {depoimentos.map((d, i) => (
          <ScrollReveal key={d.nome} delay={i * 80}>
            <figure className="relative rounded-3xl border border-border/60 bg-card p-6 shadow-soft bento-hover">
              <Quote className="absolute right-5 top-5 h-6 w-6 text-accent/60" />
              <blockquote className="font-display text-lg leading-snug text-foreground/90">"{d.texto}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--rose)]/50 font-display text-sm">
                  {d.nome.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">{d.cidade}</p>
                </div>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

function Blog() {
  return (
    <Section id="blog" eyebrow="No diário" title="Do nosso blog" subtitle="Tutoriais, inspiração e guias para a sua bancada.">
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((p, i) => (
          <ScrollReveal key={p.titulo} delay={i * 80}>
            <a href="#" className="group block overflow-hidden rounded-3xl border border-border/60 bg-card bento-hover">
              <div className="grid aspect-[16/10] place-items-center bg-gradient-to-br from-[color:var(--kraft)]/60 to-[color:var(--cream)]">
                <PencilLine className="h-14 w-14 text-foreground/40" strokeWidth={1.1} />
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-primary">{p.categoria}</span><span>·</span><span>{p.tempo} de leitura</span>
                </div>
                <h3 className="font-display text-xl leading-snug group-hover:underline">{p.titulo}</h3>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

function Instagrid() {
  const tiles = [
    { Icon: BookHeart, bg: "bg-[color:var(--rose-soft)]" },
    { Icon: Ribbon, bg: "bg-[color:var(--sage)]/35" },
    { Icon: Flower2, bg: "bg-[color:var(--rose)]/40" },
    { Icon: Scissors, bg: "bg-[color:var(--kraft)]/45" },
    { Icon: FileText, bg: "bg-[color:var(--gold)]/30" },
    { Icon: Feather, bg: "bg-[color:var(--cream)]" },
  ];
  return (
    <Section eyebrow="@ateliepapel" title="No Instagram" subtitle="Marque #meuateliepapel para aparecer por aqui." action={{ label: "Seguir", icon: <Instagram className="h-4 w-4" /> }}>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {tiles.map((t, i) => (
          <ScrollReveal key={i} delay={i * 40}>
            <a href="#" className={`group relative aspect-square overflow-hidden rounded-2xl ${t.bg} bento-hover`}>
              <div className="grid h-full w-full place-items-center">
                <t.Icon className="h-10 w-10 text-foreground/45" strokeWidth={1.1} />
              </div>
              <div className="absolute inset-0 grid place-items-center bg-foreground/0 opacity-0 transition-all group-hover:bg-foreground/30 group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-background" />
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card p-10 text-center shadow-soft md:p-14 paper-texture">
          <Mail className="mx-auto h-7 w-7 text-accent" />
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Receba inspiração no seu e-mail</h2>
          <p className="mt-2 text-sm text-muted-foreground">Curadorias, tutoriais e cupons exclusivos. Sem spam, com carinho.</p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
            <input type="email" required placeholder="seu@email.com" className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
            <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-95">
              Inscrever-me
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  action,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: { label: string; icon?: React.ReactNode };
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-20">
      <ScrollReveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">{title}</h2>
            {subtitle && <p className="mt-2 max-w-xl text-muted-foreground">{subtitle}</p>}
          </div>
          {action && (
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">
              {action.icon}{action.label} →
            </a>
          )}
        </div>
      </ScrollReveal>
      {children}
    </section>
  );
}
