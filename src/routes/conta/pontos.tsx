import { createFileRoute } from "@tanstack/react-router";
import { Gift, Star } from "lucide-react";
import { ContaLayout, ContaCard } from "@/components/admin/ContaLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { clienteMock, pontosHistorico } from "@/lib/mock/conta";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/conta/pontos")({
  component: PontosPage,
});

const recompensas = [
  { titulo: "Cupom R$ 20", pontos: 400 },
  { titulo: "Frete grátis", pontos: 600 },
  { titulo: "Kit surpresa mini", pontos: 1200 },
  { titulo: "Aula bônus exclusiva", pontos: 800 },
];

function PontosPage() {
  return (
    <ContaLayout title="Acumule pontos e troque por benefícios.">
      <ScrollReveal>
        <ContaCard premium className="text-center">
          <Star className="mx-auto h-8 w-8 text-accent" />
          <p className="mt-3 font-display text-5xl text-accent">{clienteMock.pontos.toLocaleString("pt-BR")}</p>
          <p className="text-sm text-muted-foreground">pontos disponíveis</p>
          <div className="mx-auto mt-4 max-w-xs">
            <div className="h-2 overflow-hidden rounded-full bg-border">
              <div className="h-full rounded-full bg-accent" style={{ width: `${(clienteMock.pontos / clienteMock.pontosProximoNivel) * 100}%` }} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {clienteMock.pontosProximoNivel - clienteMock.pontos} pts para Platinum
            </p>
          </div>
        </ContaCard>
      </ScrollReveal>

      <ScrollReveal delay={80} className="mt-6">
        <h3 className="font-display text-xl">Trocar pontos</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {recompensas.map((r) => (
            <ContaCard key={r.titulo} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Gift className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{r.titulo}</span>
              </div>
              <Button size="sm" variant="outline" className="rounded-full">{r.pontos} pts</Button>
            </ContaCard>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120} className="mt-8">
        <h3 className="font-display text-xl">Histórico</h3>
        <ContaCard className="mt-4">
          <ul className="divide-y divide-border">
            {pontosHistorico.map((h) => (
              <li key={h.data + h.descricao} className="flex justify-between py-3 text-sm first:pt-0 last:pb-0">
                <div>
                  <p>{h.descricao}</p>
                  <p className="text-xs text-muted-foreground">{h.data}</p>
                </div>
                <span className={h.tipo === "ganho" ? "font-medium text-primary" : "text-muted-foreground"}>
                  {h.tipo === "ganho" ? "+" : ""}{h.pontos}
                </span>
              </li>
            ))}
          </ul>
        </ContaCard>
      </ScrollReveal>
    </ContaLayout>
  );
}
