import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { AdminSectionNav, financeiroNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { relatoriosFinanceiros } from "@/lib/mock/financeiro";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/financeiro/relatorios")({
  component: FinanceiroRelatoriosPage,
});

function FinanceiroRelatoriosPage() {
  return (
    <AdminLayout title="Relatórios financeiros" subtitle="Exportações e demonstrativos">
      <AdminSectionNav items={financeiroNav} />
      <div className="grid gap-4 md:grid-cols-2">
        {relatoriosFinanceiros.map((r, i) => (
          <MotionReveal key={r.titulo} delay={i * 60}>
            <AdminCard className="flex items-start justify-between gap-4 p-5">
              <div>
                <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /><h3 className="font-medium">{r.titulo}</h3></div>
                <p className="mt-1 text-sm text-muted-foreground">{r.periodo}</p>
                <p className="mt-1 text-xs text-muted-foreground">{r.formato}</p>
              </div>
              <Button variant="outline" size="sm" className="shrink-0 rounded-full gap-1"><Download className="h-3.5 w-3.5" /> Gerar</Button>
            </AdminCard>
          </MotionReveal>
        ))}
      </div>
    </AdminLayout>
  );
}
