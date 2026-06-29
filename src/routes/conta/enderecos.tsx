import { createFileRoute } from "@tanstack/react-router";
import { Plus, MapPin, Check } from "lucide-react";
import { ContaLayout, ContaCard } from "@/components/admin/ContaLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { enderecosMock } from "@/lib/mock/conta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/conta/enderecos")({
  component: EnderecosPage,
});

function EnderecosPage() {
  return (
    <ContaLayout title="Gerencie seus endereços de entrega.">
      <div className="mb-5 flex justify-end">
        <Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Novo endereço</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {enderecosMock.map((e, i) => (
          <ScrollReveal key={e.id} delay={i * 60}>
            <ContaCard className={e.padrao ? "ring-2 ring-primary/30" : ""}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">{e.titulo}</h3>
                </div>
                {e.padrao && <Badge className="bg-[color:var(--sage)]/30 text-foreground">Padrão</Badge>}
              </div>
              <p className="mt-3 text-sm">{e.rua}</p>
              <p className="text-sm text-muted-foreground">{e.complemento}</p>
              <p className="text-sm text-muted-foreground">{e.bairro} · {e.cidade}/{e.estado}</p>
              <p className="text-sm text-muted-foreground">CEP {e.cep}</p>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="rounded-full">Editar</Button>
                {!e.padrao && (
                  <Button variant="ghost" size="sm" className="rounded-full gap-1">
                    <Check className="h-3.5 w-3.5" /> Tornar padrão
                  </Button>
                )}
              </div>
            </ContaCard>
          </ScrollReveal>
        ))}
      </div>
    </ContaLayout>
  );
}
