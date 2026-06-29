import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, MapPin, Truck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumb, GlassCard } from "@/components/site/PageChrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { carrinhoMock, formatBRL } from "@/lib/mock/loja";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Route = createFileRoute("/loja/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Ateliê Papel" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const subtotal = carrinhoMock.reduce((s, i) => s + i.preco * i.qtd, 0);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <Breadcrumb items={[
            { label: "Loja", href: "/loja" },
            { label: "Carrinho", href: "/loja/carrinho" },
            { label: "Checkout" },
          ]} />
          <h1 className="font-display text-4xl">Finalizar compra</h1>
          <p className="mt-2 text-sm text-muted-foreground">Somente visual — pagamento simulado.</p>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <ScrollReveal>
              <GlassCard className="p-6">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-primary" /> Endereço de entrega
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div><Label>Nome</Label><Input className="mt-1 rounded-xl" defaultValue="Maria Silva" /></div>
                  <div><Label>CEP</Label><Input className="mt-1 rounded-xl" defaultValue="60160-120" /></div>
                  <div className="sm:col-span-2"><Label>Endereço</Label><Input className="mt-1 rounded-xl" defaultValue="Rua Barbosa de Freitas, 123" /></div>
                  <div><Label>Cidade</Label><Input className="mt-1 rounded-xl" defaultValue="Fortaleza" /></div>
                  <div><Label>Estado</Label><Input className="mt-1 rounded-xl" defaultValue="CE" /></div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Truck className="h-4 w-4 text-primary" /> Frete
                </div>
                <RadioGroup defaultValue="pac" className="mt-4 space-y-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-3">
                    <RadioGroupItem value="pac" />
                    <span className="flex-1 text-sm">PAC — 8 a 12 dias · Grátis</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-3">
                    <RadioGroupItem value="sedex" />
                    <span className="flex-1 text-sm">SEDEX — 3 a 5 dias · R$ 24,90</span>
                  </label>
                </RadioGroup>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CreditCard className="h-4 w-4 text-primary" /> Pagamento
                </div>
                <RadioGroup defaultValue="pix" className="mt-4 space-y-2">
                  {["Pix", "Cartão de crédito", "Boleto"].map((m) => (
                    <label key={m} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-3">
                      <RadioGroupItem value={m.toLowerCase()} />
                      <span className="text-sm">{m}</span>
                    </label>
                  ))}
                </RadioGroup>
              </GlassCard>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={100}>
            <GlassCard className="sticky top-28 p-6">
              <h2 className="font-display text-xl">Resumo do pedido</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {carrinhoMock.map((i) => (
                  <li key={i.slug} className="flex justify-between gap-2 text-muted-foreground">
                    <span className="line-clamp-1">{i.qtd}x {i.nome}</span>
                    <span>{formatBRL(i.preco * i.qtd)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between border-t border-border pt-3 font-medium">
                <span>Total</span>
                <span className="font-display text-xl">{formatBRL(subtotal)}</span>
              </div>
              <Button className="mt-4 w-full rounded-full">Confirmar pedido</Button>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </SiteLayout>
  );
}
