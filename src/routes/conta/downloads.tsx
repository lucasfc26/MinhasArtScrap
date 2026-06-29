import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { ContaLayout, ContaCard } from "@/components/admin/ContaLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { contaDownloads } from "@/lib/mock/conta";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/conta/downloads")({
  component: ContaDownloadsPage,
});

function ContaDownloadsPage() {
  return (
    <ContaLayout title="Materiais dos seus cursos e compras.">
      <div className="space-y-3">
        {contaDownloads.map((d, i) => (
          <ScrollReveal key={d.nome} delay={i * 50}>
            <ContaCard className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--sage)]/30">
                  <d.Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">{d.tipo} · {d.tamanho}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-full gap-1">
                <Download className="h-4 w-4" /> Baixar
              </Button>
            </ContaCard>
          </ScrollReveal>
        ))}
      </div>
    </ContaLayout>
  );
}
