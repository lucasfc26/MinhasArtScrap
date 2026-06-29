import { createFileRoute } from "@tanstack/react-router";
import { Repeat, Gift } from "lucide-react";
import { ContaLayout, ContaCard } from "@/components/admin/ContaLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { assinaturaMock } from "@/lib/mock/conta";
import { formatBRL } from "@/lib/mock/loja";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/conta/assinaturas")({
  component: AssinaturasPage,
});

function AssinaturasPage() {
  return (
    <ContaLayout title="Sua assinatura Ateliê Box.">
      <ScrollReveal>
        <ContaCard premium>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Repeat className="h-5 w-5 text-primary" />
                <Badge className="bg-[color:var(--sage)]/30">{assinaturaMock.status}</Badge>
              </div>
              <h2 className="mt-3 font-display text-2xl">{assinaturaMock.plano}</h2>
              <p className="text-sm text-muted-foreground">Próxima cobrança: {assinaturaMock.proximaCobranca}</p>
              <p className="mt-1 font-display text-3xl">{formatBRL(assinaturaMock.valor)}<span className="text-sm font-sans text-muted-foreground">/mês</span></p>
            </div>
            <div className="grid h-24 w-24 place-items-center rounded-2xl bg-[color:var(--rose-soft)]">
              <Gift className="h-10 w-10 text-foreground/40" />
            </div>
          </div>
          <p className="mt-4 text-sm">Tema atual: <strong>{assinaturaMock.temaAtual}</strong></p>
          <div className="mt-5 flex gap-2">
            <Button variant="outline" className="rounded-full">Pausar</Button>
            <Button variant="ghost" className="rounded-full text-destructive">Cancelar</Button>
          </div>
        </ContaCard>
      </ScrollReveal>

      <ScrollReveal delay={80} className="mt-6">
        <h3 className="font-display text-xl">Histórico de caixas</h3>
        <ContaCard className="mt-4">
          <ul className="divide-y divide-border">
            {assinaturaMock.historico.map((h) => (
              <li key={h.mes} className="flex justify-between py-3 text-sm first:pt-0 last:pb-0">
                <span>{h.mes} — {h.tema}</span>
                <Badge variant="outline">{h.status}</Badge>
              </li>
            ))}
          </ul>
        </ContaCard>
      </ScrollReveal>
    </ContaLayout>
  );
}
