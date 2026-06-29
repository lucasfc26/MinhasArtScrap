import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Item = { to: string; label: string; exact?: boolean };

export function AdminSectionNav({ items }: { items: Item[] }) {
  return (
    <nav aria-label="Seção" className="mb-6 flex gap-1 overflow-x-auto pb-1">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          activeOptions={{ exact: item.exact }}
          className={cn(
            "shrink-0 rounded-full px-4 py-2 text-sm transition-colors",
            "text-muted-foreground hover:bg-secondary hover:text-foreground",
            "[&.active]:bg-primary [&.active]:text-primary-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export const financeiroNav = [
  { to: "/admin/financeiro", label: "Dashboard", exact: true },
  { to: "/admin/financeiro/fluxo", label: "Fluxo de caixa" },
  { to: "/admin/financeiro/receitas", label: "Receitas" },
  { to: "/admin/financeiro/despesas", label: "Despesas" },
  { to: "/admin/financeiro/relatorios", label: "Relatórios" },
];

export const crmNav = [
  { to: "/admin/crm", label: "Visão geral", exact: true },
  { to: "/admin/crm/clientes", label: "Clientes" },
  { to: "/admin/crm/funil", label: "Funil" },
  { to: "/admin/crm/campanhas", label: "Campanhas" },
  { to: "/admin/crm/anotacoes", label: "Anotações" },
  { to: "/admin/crm/whatsapp", label: "WhatsApp" },
  { to: "/admin/crm/emails", label: "E-mails" },
  { to: "/admin/crm/tags", label: "Tags" },
  { to: "/admin/crm/segmentacao", label: "Segmentação" },
];
