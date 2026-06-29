import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Save } from "lucide-react";
import { AdminLayout, AdminCard } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/admin/produtos/novo")({
  component: NovoProdutoPage,
});

function NovoProdutoPage() {
  return (
    <AdminLayout title="Novo produto" subtitle="Cadastro de produto">
      <div className="mb-4">
        <Link to="/admin/produtos" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Voltar à lista
        </Link>
      </div>

      <ScrollReveal>
        <AdminCard className="p-6">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="space-y-4">
              <div><Label>Nome do produto</Label><Input className="mt-1 rounded-xl" placeholder="Ex: Bloco Papel Estampado A4" /></div>
              <div><Label>Descrição</Label><Textarea className="mt-1 rounded-xl min-h-[120px]" placeholder="Descrição completa…" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Preço (R$)</Label><Input className="mt-1 rounded-xl" type="number" placeholder="0,00" /></div>
                <div><Label>Preço comparativo</Label><Input className="mt-1 rounded-xl" type="number" placeholder="Opcional" /></div>
              </div>
            </div>
            <div className="space-y-4">
              <div><Label>SKU</Label><Input className="mt-1 rounded-xl" placeholder="AP-XX-000" /></div>
              <div><Label>Categoria</Label>
                <Select><SelectTrigger className="mt-1 rounded-xl"><SelectValue placeholder="Selecionar" /></SelectTrigger>
                  <SelectContent>{["Papéis", "Washi", "Carimbos", "Kits"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Coleção</Label>
                <Select><SelectTrigger className="mt-1 rounded-xl"><SelectValue placeholder="Opcional" /></SelectTrigger>
                  <SelectContent>{["Doce Memória", "Herbário", "Jardim de Outono"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Estoque</Label><Input className="mt-1 rounded-xl" type="number" defaultValue={0} /></div>
                <div><Label>Status</Label>
                  <Select defaultValue="rascunho"><SelectTrigger className="mt-1 rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="rascunho">Rascunho</SelectItem><SelectItem value="publicado">Publicado</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid h-40 place-items-center rounded-xl border-2 border-dashed border-border bg-secondary/30 text-sm text-muted-foreground">
                Arraste imagens ou clique para upload
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2 border-t border-border pt-5">
            <Button variant="outline" className="rounded-full">Salvar rascunho</Button>
            <Button className="rounded-full gap-2"><Save className="h-4 w-4" /> Publicar produto</Button>
          </div>
        </AdminCard>
      </ScrollReveal>
    </AdminLayout>
  );
}
