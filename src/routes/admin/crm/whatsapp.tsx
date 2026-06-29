import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { AdminSectionNav, crmNav } from "@/components/admin/AdminSectionNav";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { crmWhatsApp } from "@/lib/mock/crm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/admin/crm/whatsapp")({
  component: CrmWhatsAppPage,
});

function CrmWhatsAppPage() {
  return (
    <AdminLayout title="WhatsApp" subtitle="Conversas com clientes">
      <AdminSectionNav items={crmNav} />
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <MotionReveal>
          <AdminCard className="divide-y divide-border">
            {crmWhatsApp.map((w) => (
              <button key={w.contato} type="button" className="flex w-full items-start gap-3 p-4 text-left hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--sage)]/30"><MessageCircle className="h-4 w-4" /></div>
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between gap-2"><span className="font-medium">{w.contato}</span><span className="text-xs text-muted-foreground">{w.hora}</span></div>
                  <p className="truncate text-sm text-muted-foreground">{w.mensagem}</p>
                  <Badge variant="outline" className="mt-1 text-[10px]">{w.status}</Badge>
                </div>
              </button>
            ))}
          </AdminCard>
        </MotionReveal>
        <MotionReveal delay={80}>
          <AdminCard className="flex min-h-[360px] flex-col p-4">
            <p className="text-sm text-muted-foreground">Selecione uma conversa ou inicie um novo atendimento.</p>
            <div className="mt-auto flex gap-2">
              <Input placeholder="Digite sua mensagem…" className="rounded-full" aria-label="Mensagem WhatsApp" />
              <Button size="icon" className="shrink-0 rounded-full" aria-label="Enviar"><Send className="h-4 w-4" /></Button>
            </div>
          </AdminCard>
        </MotionReveal>
      </div>
    </AdminLayout>
  );
}
