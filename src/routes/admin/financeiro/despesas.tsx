import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { AdminSectionNav, financeiroNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { despesasMock, formatBRL } from "@/lib/mock/financeiro";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/financeiro/despesas")({
  component: DespesasPage,
});

function DespesasPage() {
  return (
    <AdminLayout
      title="Despesas"
      subtitle="Saídas financeiras"
      actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Nova despesa</Button>}
    >
      <AdminSectionNav items={financeiroNav} />
      <MotionReveal>
        <AdminTable>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground">
                <th className="p-4">Descrição</th>
                <th className="p-4">Categoria</th>
                <th className="p-4">Data</th>
                <th className="p-4">Valor</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {despesasMock.map((d) => (
                <tr key={d.id} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4 font-medium">{d.descricao}</td>
                  <td className="p-4 text-muted-foreground">{d.categoria}</td>
                  <td className="p-4 text-muted-foreground">{d.data}</td>
                  <td className="p-4 font-medium text-destructive">{formatBRL(d.valor)}</td>
                  <td className="p-4"><Badge variant="outline">{d.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </MotionReveal>
    </AdminLayout>
  );
}
