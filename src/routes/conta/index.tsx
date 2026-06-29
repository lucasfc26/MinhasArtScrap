import { createFileRoute, Link } from "@tanstack/react-router";
import { Edit, MapPin, Package, Star } from "lucide-react";
import { ContaLayout, ContaCard } from "@/components/admin/ContaLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { clienteMock, enderecosMock, contaPedidos, pontosHistorico } from "@/lib/mock/conta";
import { formatBRL } from "@/lib/mock/loja";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/conta/")({
  head: () => ({ meta: [{ title: "Minha conta — Ateliê Papel" }] }),
  component: ContaIndex,
});

function ContaIndex() {
  const endereco = enderecosMock.find((e) => e.padrao)!;
  const ultimoPedido = contaPedidos[0];

  return (
    <ContaLayout title="Visão geral da sua conta.">
      <div className="grid gap-5 md:grid-cols-2">
        <ScrollReveal>
          <ContaCard premium className="md:col-span-1">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-[color:var(--rose)]/50 font-display text-2xl">
                {clienteMock.nome.charAt(0)}
              </div>
              <div>
                <h2 className="font-display text-2xl">{clienteMock.nome}</h2>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{clienteMock.nivel}</p>
                <p className="text-sm text-muted-foreground">Membro desde {clienteMock.membroDesde}</p>
              </div>
            </div>
            <dl className="mt-5 space-y-3 text-sm">
              <div><dt className="text-muted-foreground">E-mail</dt><dd>{clienteMock.email}</dd></div>
              <div><dt className="text-muted-foreground">Telefone</dt><dd>{clienteMock.telefone}</dd></div>
            </dl>
            <Link to="/conta/configuracoes">
              <Button variant="outline" className="mt-5 w-full rounded-full gap-2">
                <Edit className="h-4 w-4" /> Editar perfil
              </Button>
            </Link>
          </ContaCard>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <ContaCard>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg">Endereço principal</h3>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-3 text-sm">{endereco.rua}, {endereco.complemento}</p>
            <p className="text-sm text-muted-foreground">{endereco.bairro} · {endereco.cidade}/{endereco.estado}</p>
            <p className="text-sm text-muted-foreground">CEP {endereco.cep}</p>
            <Link to="/conta/enderecos" className="mt-4 inline-block text-sm text-primary hover:underline">Gerenciar endereços →</Link>
          </ContaCard>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <ContaCard>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg">Último pedido</h3>
              <Package className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-3 font-medium">{ultimoPedido.id}</p>
            <p className="text-sm text-muted-foreground">{ultimoPedido.data} · {ultimoPedido.status}</p>
            <p className="mt-1 font-display text-xl">{formatBRL(ultimoPedido.total)}</p>
            <Link to="/conta/pedidos" className="mt-4 inline-block text-sm text-primary hover:underline">Ver todos os pedidos →</Link>
          </ContaCard>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ContaCard>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg">Pontos Ateliê</h3>
              <Star className="h-4 w-4 text-accent" />
            </div>
            <p className="mt-3 font-display text-4xl text-accent">{clienteMock.pontos.toLocaleString("pt-BR")}</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
              <div className="h-full rounded-full bg-accent" style={{ width: `${(clienteMock.pontos / clienteMock.pontosProximoNivel) * 100}%` }} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Faltam {clienteMock.pontosProximoNivel - clienteMock.pontos} pts para o próximo nível
            </p>
            <Link to="/conta/pontos" className="mt-4 inline-block text-sm text-primary hover:underline">Ver histórico →</Link>
          </ContaCard>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={120} className="mt-5">
        <ContaCard>
          <h3 className="font-display text-lg">Atividade recente</h3>
          <ul className="mt-4 space-y-3">
            {pontosHistorico.slice(0, 3).map((h) => (
              <li key={h.data + h.descricao} className="flex justify-between border-b border-border/60 pb-3 text-sm last:border-0">
                <span className="text-muted-foreground">{h.descricao}</span>
                <span className={h.tipo === "ganho" ? "text-primary" : "text-muted-foreground"}>
                  {h.tipo === "ganho" ? "+" : ""}{h.pontos} pts
                </span>
              </li>
            ))}
          </ul>
        </ContaCard>
      </ScrollReveal>
    </ContaLayout>
  );
}
