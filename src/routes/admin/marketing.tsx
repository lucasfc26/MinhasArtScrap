import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adminMarketing } from "@/lib/mock/admin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/marketing")({
  component: AdminMarketingPage,
});

function AdminMarketingPage() {
  return (
    <AdminLayout title="Marketing" subtitle="Cupons e banners">
      <ScrollReveal>
        <AdminCard className="p-6">
          <div className="flex justify-between"><h2 className="font-display text-xl">Cupons</h2><Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Novo cupom</Button></div>
          <table className="mt-4 w-full text-sm">
            <thead><tr className="border-b text-left text-xs uppercase text-muted-foreground"><th className="pb-2">Código</th><th className="pb-2">Desconto</th><th className="pb-2">Usos</th><th className="pb-2">Limite</th><th className="pb-2">Status</th></tr></thead>
            <tbody>
              {adminMarketing.cupons.map((c) => (
                <tr key={c.codigo} className="border-b border-border/60"><td className="py-3 font-mono font-medium">{c.codigo}</td><td>{c.desconto}</td><td>{c.usos}</td><td>{c.limite}</td><td><Badge variant="outline">{c.status}</Badge></td></tr>
              ))}
            </tbody>
          </table>
        </AdminCard>
      </ScrollReveal>

      <ScrollReveal delay={80} className="mt-6">
        <AdminCard className="p-6">
          <h2 className="font-display text-xl">Banners e promoções</h2>
          <ul className="mt-4 space-y-3">
            {adminMarketing.banners.map((b) => (
              <li key={b.titulo} className="flex items-center justify-between rounded-xl border border-border p-4">
                <div><p className="font-medium">{b.titulo}</p><p className="text-sm text-muted-foreground">{b.posicao}</p></div>
                <Badge variant="outline">{b.status}</Badge>
              </li>
            ))}
          </ul>
        </AdminCard>
      </ScrollReveal>
    </AdminLayout>
  );
}
