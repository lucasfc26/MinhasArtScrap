import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { AdminSectionNav, financeiroNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { receitasMock, formatBRL } from "@/lib/mock/financeiro";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/financeiro/receitas")({
  component: ReceitasPage,
});

function ReceitasPage() {
  return (
    <AdminLayout
      title="Receitas"
      subtitle="Entradas financeiras"
      actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Nova receita</Button>}
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
              {receitasMock.map((r) => (
                <tr key={r.id} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4 font-medium">{r.descricao}</td>
                  <td className="p-4 text-muted-foreground">{r.categoria}</td>
                  <td className="p-4 text-muted-foreground">{r.data}</td>
                  <td className="p-4 font-medium text-primary">{formatBRL(r.valor)}</td>
                  <td className="p-4"><Badge variant="outline">{r.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </MotionReveal>
    </AdminLayout>
  );
}
