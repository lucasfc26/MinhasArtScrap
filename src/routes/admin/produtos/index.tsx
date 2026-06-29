import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Search, Pencil, Copy, Trash2 } from "lucide-react";
import { AdminLayout, AdminTable } from "@/components/admin/AdminLayout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adminProdutos, formatBRLAdmin } from "@/lib/mock/admin";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/admin/produtos/")({
  component: AdminProdutosPage,
});

function AdminProdutosPage() {
  return (
    <AdminLayout
      title="Produtos"
      subtitle="Gerencie o catálogo da loja"
      actions={
        <Link to="/admin/produtos/novo">
          <Button className="rounded-full gap-2"><Plus className="h-4 w-4" /> Novo produto</Button>
        </Link>
      }
    >
      <ScrollReveal>
        <div className="mb-4 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar produtos…" className="rounded-full pl-9" />
          </div>
          <div className="flex gap-2">
            {["Todos", "Publicados", "Estoque baixo", "Rascunhos"].map((f, i) => (
              <button key={f} className={`rounded-full px-4 py-1.5 text-xs font-medium ${i === 0 ? "bg-primary text-primary-foreground" : "border border-border hover:bg-secondary"}`}>{f}</button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <AdminTable>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="p-4">Produto</th>
                <th className="p-4">SKU</th>
                <th className="p-4">Preço</th>
                <th className="p-4">Estoque</th>
                <th className="p-4">Status</th>
                <th className="p-4 w-32">Ações</th>
              </tr>
            </thead>
            <tbody>
              {adminProdutos.map((p) => (
                <tr key={p.slug} className="border-b border-border/60 hover:bg-secondary/30">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--rose-soft)]">
                        <p.Icon className="h-5 w-5 text-foreground/40" />
                      </div>
                      <Link to="/admin/produtos/$slug" params={{ slug: p.slug }} className="font-medium hover:text-primary">{p.nome}</Link>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{p.sku}</td>
                  <td className="p-4">{formatBRLAdmin(p.preco)}</td>
                  <td className="p-4">{p.estoque}</td>
                  <td className="p-4"><Badge variant="outline">{p.status}</Badge></td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <Link to="/admin/produtos/$slug" params={{ slug: p.slug }}><Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-3.5 w-3.5" /></Button></Link>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Copy className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTable>
      </ScrollReveal>
    </AdminLayout>
  );
}
