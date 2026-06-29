import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adminColecoes } from "@/lib/mock/admin";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/colecoes")({
  component: AdminColecoesPage,
});

function AdminColecoesPage() {
  return (
    <AdminLayout title="Coleções" subtitle="Curadorias temáticas" actions={<Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Nova coleção</Button>}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {adminColecoes.map((c, i) => (
          <ScrollReveal key={c.nome} delay={i * 50}>
            <AdminCard className="p-5 bento-hover">
              <div className="flex justify-between"><Badge>{c.tag}</Badge><Badge variant="outline">{c.status}</Badge></div>
              <h3 className="mt-3 font-display text-xl">{c.nome}</h3>
              <p className="text-sm text-muted-foreground">{c.produtos} produtos</p>
              <Button variant="outline" size="sm" className="mt-4 rounded-full">Editar</Button>
            </AdminCard>
          </ScrollReveal>
        ))}
      </div>
    </AdminLayout>
  );
}
