import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, AdminCard, AdminTable } from "@/components/admin/AdminLayout";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  empresaConfig, usuariosAdmin, permissoesMock, integracoesMock, seoConfig, lgpdConfig,
} from "@/lib/mock/config";

export const Route = createFileRoute("/admin/configuracoes")({
  component: AdminConfigPage,
});

function AdminConfigPage() {
  return (
    <AdminLayout title="Configurações" subtitle="Sistema, integrações e conformidade">
      <MotionReveal>
        <Tabs defaultValue="empresa">
          <TabsList className="mb-4 flex h-auto flex-wrap gap-1 rounded-2xl bg-secondary/50 p-1">
            {[
              ["empresa", "Empresa"], ["usuarios", "Usuários"], ["permissoes", "Permissões"],
              ["tema", "Tema"], ["integracoes", "Integrações"], ["pagamentos", "Pagamentos"],
              ["frete", "Frete"], ["emails", "E-mails"], ["dominio", "Domínio"],
              ["seo", "SEO"], ["lgpd", "LGPD"],
            ].map(([v, l]) => (
              <TabsTrigger key={v} value={v} className="rounded-xl text-xs sm:text-sm">{l}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="empresa">
            <AdminCard className="space-y-4 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label htmlFor="razao">Razão social</Label><Input id="razao" className="mt-1 rounded-xl" defaultValue={empresaConfig.razaoSocial} /></div>
                <div><Label htmlFor="cnpj">CNPJ</Label><Input id="cnpj" className="mt-1 rounded-xl" defaultValue={empresaConfig.cnpj} /></div>
                <div><Label htmlFor="email-emp">E-mail</Label><Input id="email-emp" className="mt-1 rounded-xl" defaultValue={empresaConfig.email} /></div>
                <div><Label htmlFor="whatsapp">WhatsApp</Label><Input id="whatsapp" className="mt-1 rounded-xl" defaultValue={empresaConfig.whatsapp} /></div>
                <div className="sm:col-span-2"><Label htmlFor="endereco">Endereço</Label><Input id="endereco" className="mt-1 rounded-xl" defaultValue={empresaConfig.endereco} /></div>
              </div>
              <Button className="rounded-full">Salvar empresa</Button>
            </AdminCard>
          </TabsContent>

          <TabsContent value="usuarios">
            <AdminTable>
              <table className="w-full text-sm">
                <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Nome</th><th className="p-4">E-mail</th><th className="p-4">Papel</th><th className="p-4">Status</th><th className="p-4" /></tr></thead>
                <tbody>
                  {usuariosAdmin.map((u) => (
                    <tr key={u.email} className="border-b border-border/60"><td className="p-4 font-medium">{u.nome}</td><td className="p-4">{u.email}</td><td className="p-4">{u.papel}</td><td className="p-4"><Badge variant="outline">{u.status}</Badge></td><td className="p-4"><Button variant="ghost" size="sm">Editar</Button></td></tr>
                  ))}
                </tbody>
              </table>
            </AdminTable>
            <Button className="mt-4 rounded-full">Convidar usuário</Button>
          </TabsContent>

          <TabsContent value="permissoes">
            <AdminTable>
              <table className="w-full text-sm">
                <thead><tr className="border-b bg-secondary/40 text-left text-xs uppercase text-muted-foreground"><th className="p-4">Módulo</th><th className="p-4 text-center">Admin</th><th className="p-4 text-center">Instrutor</th><th className="p-4 text-center">Atendimento</th></tr></thead>
                <tbody>
                  {permissoesMock.map((p) => (
                    <tr key={p.modulo} className="border-b border-border/60">
                      <td className="p-4 font-medium">{p.modulo}</td>
                      <td className="p-4 text-center"><Switch defaultChecked={p.admin} aria-label={`${p.modulo} admin`} /></td>
                      <td className="p-4 text-center"><Switch defaultChecked={p.instrutor} aria-label={`${p.modulo} instrutor`} /></td>
                      <td className="p-4 text-center"><Switch defaultChecked={p.atendimento} aria-label={`${p.modulo} atendimento`} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AdminTable>
          </TabsContent>

          <TabsContent value="tema">
            <AdminCard className="space-y-4 p-6">
              <div className="flex items-center justify-between rounded-xl border border-border p-4"><span>Modo claro</span><Switch defaultChecked aria-label="Modo claro" /></div>
              <div className="flex items-center justify-between rounded-xl border border-border p-4"><span>Modo escuro automático</span><Switch aria-label="Modo escuro" /></div>
              <div><Label>Cor primária (preview)</Label>
                <div className="mt-2 flex gap-2">{["sálvia", "rosé", "dourado"].map((c) => (
                  <button key={c} type="button" className="h-10 w-10 rounded-full border-2 border-border bg-primary focus-visible:ring-2 focus-visible:ring-ring" aria-label={`Tema ${c}`} />
                ))}</div>
              </div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="integracoes">
            <div className="grid gap-4 sm:grid-cols-2">
              {integracoesMock.map((int) => (
                <AdminCard key={int.nome} className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-3"><span className="text-2xl" aria-hidden>{int.icon}</span><div><p className="font-medium">{int.nome}</p><p className="text-sm text-muted-foreground">{int.descricao}</p></div></div>
                  <Badge variant={int.status === "Conectado" ? "default" : "outline"}>{int.status}</Badge>
                </AdminCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pagamentos">
            <AdminCard className="space-y-4 p-6">
              {["Pix", "Cartão de crédito", "Boleto", "Parcelamento"].map((m) => (
                <div key={m} className="flex items-center justify-between rounded-xl border border-border p-4"><span>{m}</span><Switch defaultChecked={m !== "Boleto"} aria-label={m} /></div>
              ))}
            </AdminCard>
          </TabsContent>

          <TabsContent value="frete">
            <AdminCard className="space-y-4 p-6">
              <div><Label htmlFor="frete-gratis">Frete grátis acima de (R$)</Label><Input id="frete-gratis" className="mt-1 max-w-xs rounded-xl" defaultValue="199" /></div>
              {["Correios PAC", "Correios SEDEX", "Retirada no ateliê"].map((f) => (
                <div key={f} className="flex items-center justify-between"><span>{f}</span><Switch defaultChecked aria-label={f} /></div>
              ))}
            </AdminCard>
          </TabsContent>

          <TabsContent value="emails">
            <AdminCard className="space-y-4 p-6">
              <div><Label htmlFor="email-pedidos">E-mail de pedidos</Label><Input id="email-pedidos" className="mt-1 rounded-xl" defaultValue="pedidos@ateliepapel.com.br" /></div>
              <div><Label htmlFor="email-suporte">E-mail de suporte</Label><Input id="email-suporte" className="mt-1 rounded-xl" defaultValue="suporte@ateliepapel.com.br" /></div>
              <div><Label htmlFor="smtp">Servidor SMTP</Label><Input id="smtp" className="mt-1 rounded-xl" defaultValue="smtp.ateliepapel.com.br" /></div>
            </AdminCard>
          </TabsContent>

          <TabsContent value="dominio">
            <AdminCard className="p-6">
              <p className="text-sm text-muted-foreground">Domínio conectado</p>
              <p className="mt-1 text-lg font-medium">www.ateliepapel.com.br</p>
              <p className="mt-2 text-sm text-primary">SSL ativo · Renovação automática</p>
              <Button variant="outline" className="mt-4 rounded-full">Gerenciar DNS</Button>
            </AdminCard>
          </TabsContent>

          <TabsContent value="seo">
            <AdminCard className="space-y-4 p-6">
              <div><Label htmlFor="seo-title">Título do site</Label><Input id="seo-title" className="mt-1 rounded-xl" defaultValue={seoConfig.titulo} /></div>
              <div><Label htmlFor="seo-desc">Meta description</Label><Textarea id="seo-desc" className="mt-1 rounded-xl" defaultValue={seoConfig.descricao} /></div>
              <div><Label htmlFor="seo-keys">Palavras-chave</Label><Input id="seo-keys" className="mt-1 rounded-xl" defaultValue={seoConfig.keywords} /></div>
              <div><Label htmlFor="seo-robots">Robots</Label><Input id="seo-robots" className="mt-1 rounded-xl" defaultValue={seoConfig.robots} /></div>
              <Button className="rounded-full">Salvar SEO</Button>
            </AdminCard>
          </TabsContent>

          <TabsContent value="lgpd">
            <AdminCard className="space-y-4 p-6">
              <p className="text-sm text-muted-foreground">Política de privacidade atualizada em <strong>{lgpdConfig.politicaAtualizada}</strong></p>
              <div className="flex items-center justify-between rounded-xl border border-border p-4"><span>Cookies essenciais</span><Switch defaultChecked={lgpdConfig.cookiesEssenciais} disabled aria-label="Cookies essenciais" /></div>
              <div className="flex items-center justify-between rounded-xl border border-border p-4"><span>Cookies de analytics</span><Switch defaultChecked={lgpdConfig.cookiesAnalytics} aria-label="Cookies analytics" /></div>
              <div className="flex items-center justify-between rounded-xl border border-border p-4"><span>Cookies de marketing</span><Switch defaultChecked={lgpdConfig.cookiesMarketing} aria-label="Cookies marketing" /></div>
              <div><Label htmlFor="retencao">Retenção de dados</Label><Input id="retencao" className="mt-1 max-w-xs rounded-xl" defaultValue={lgpdConfig.retencaoDados} /></div>
              <Button variant="outline" className="rounded-full">Exportar dados do titular</Button>
            </AdminCard>
          </TabsContent>
        </Tabs>
      </MotionReveal>
    </AdminLayout>
  );
}
