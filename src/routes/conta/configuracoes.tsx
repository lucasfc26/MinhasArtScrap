import { createFileRoute } from "@tanstack/react-router";
import { ContaLayout, ContaCard } from "@/components/admin/ContaLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { clienteMock, preferenciasMock } from "@/lib/mock/conta";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/conta/configuracoes")({
  component: ConfiguracoesPage,
});

function ConfiguracoesPage() {
  return (
    <ContaLayout title="Preferências e dados pessoais.">
      <ScrollReveal>
        <ContaCard>
          <h3 className="font-display text-xl">Dados pessoais</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div><Label>Nome</Label><Input className="mt-1 rounded-xl" defaultValue={clienteMock.nome} /></div>
            <div><Label>E-mail</Label><Input className="mt-1 rounded-xl" type="email" defaultValue={clienteMock.email} /></div>
            <div><Label>Telefone</Label><Input className="mt-1 rounded-xl" defaultValue={clienteMock.telefone} /></div>
            <div><Label>CPF</Label><Input className="mt-1 rounded-xl" defaultValue={clienteMock.cpf} /></div>
          </div>
          <Button className="mt-5 rounded-full">Salvar alterações</Button>
        </ContaCard>
      </ScrollReveal>

      <ScrollReveal delay={80} className="mt-5">
        <ContaCard>
          <h3 className="font-display text-xl">Notificações</h3>
          <div className="mt-5 space-y-4">
            {[
              { key: "newsletter", label: "Newsletter e inspiração", default: preferenciasMock.newsletter },
              { key: "whatsapp", label: "WhatsApp — pedidos e entregas", default: preferenciasMock.whatsapp },
              { key: "sms", label: "SMS promocional", default: preferenciasMock.sms },
            ].map((p) => (
              <div key={p.key} className="flex items-center justify-between">
                <Label htmlFor={p.key}>{p.label}</Label>
                <Switch id={p.key} defaultChecked={p.default} />
              </div>
            ))}
          </div>
        </ContaCard>
      </ScrollReveal>

      <ScrollReveal delay={120} className="mt-5">
        <ContaCard>
          <h3 className="font-display text-xl">Preferências</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Idioma</Label>
              <Select defaultValue={preferenciasMock.idioma}>
                <SelectTrigger className="mt-1 rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-BR">Português (BR)</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Tema</Label>
              <Select defaultValue={preferenciasMock.tema}>
                <SelectTrigger className="mt-1 rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="claro">Claro</SelectItem>
                  <SelectItem value="escuro">Escuro</SelectItem>
                  <SelectItem value="sistema">Sistema</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </ContaCard>
      </ScrollReveal>
    </ContaLayout>
  );
}
