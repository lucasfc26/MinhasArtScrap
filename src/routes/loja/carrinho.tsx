import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ArrowRight, Tag } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { carrinhoMock, formatBRL } from "@/lib/mock/loja";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/loja/carrinho")({
  head: () => ({ meta: [{ title: "Carrinho — Ateliê Papel" }] }),
  component: CarrinhoPage,
});

function CarrinhoPage() {
  const subtotal = carrinhoMock.reduce((s, i) => s + i.preco * i.qtd, 0);
  const frete = subtotal >= 199 ? 0 : 18.9;
  const total = subtotal + frete;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[{ label: "Loja", href: "/loja" }, { label: "Carrinho" }]} />
          <h1 className="font-display text-4xl">Seu carrinho</h1>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {carrinhoMock.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 60}>
                <GlassCard className="flex gap-4 p-4 md:p-5">
                  <div className="grid h-24 w-24 shrink-0 place-items-center rounded-xl bg-[color:var(--rose-soft)]">
                    <item.Icon className="h-10 w-10 text-foreground/40" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between gap-2">
                      <Link to="/loja/produto/$slug" params={{ slug: item.slug }} className="text-sm font-medium hover:text-primary">
                        {item.nome}
                      </Link>
                      <button className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-border">
                        <button className="p-1.5"><Minus className="h-3.5 w-3.5" /></button>
                        <span className="w-7 text-center text-sm">{item.qtd}</span>
                        <button className="p-1.5"><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                      <span className="font-display text-lg">{formatBRL(item.preco * item.qtd)}</span>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="left" delay={100}>
            <GlassCard className="sticky top-28 h-fit p-6">
              <h2 className="font-display text-xl">Resumo</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>{formatBRL(subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Frete</dt><dd>{frete === 0 ? "Grátis" : formatBRL(frete)}</dd></div>
                <div className="flex justify-between border-t border-border pt-2 font-medium">
                  <dt>Total</dt><dd className="font-display text-xl">{formatBRL(total)}</dd>
                </div>
              </dl>
              <div className="mt-4 flex gap-2">
                <Input placeholder="Cupom" className="rounded-full" />
                <Button variant="outline" className="rounded-full shrink-0"><Tag className="h-4 w-4" /></Button>
              </div>
              <Link to="/loja/checkout" className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:opacity-95">
                Finalizar compra <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </SiteLayout>
  );
}
