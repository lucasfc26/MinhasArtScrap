export const receitasMock = [
  { id: "R-001", descricao: "Venda #AP-2024-1899", categoria: "Loja", valor: 234.8, data: "29 Jun 2024", status: "Confirmada" },
  { id: "R-002", descricao: "Matrícula — Scrapbook do Zero", categoria: "Cursos", valor: 197.0, data: "29 Jun 2024", status: "Confirmada" },
  { id: "R-003", descricao: "Assinatura Ateliê Box", categoria: "Assinatura", valor: 89.0, data: "28 Jun 2024", status: "Confirmada" },
  { id: "R-004", descricao: "Venda #AP-2024-1897", categoria: "Loja", valor: 189.0, data: "28 Jun 2024", status: "Confirmada" },
  { id: "R-005", descricao: "Venda #AP-2024-1895", categoria: "Loja", valor: 356.0, data: "27 Jun 2024", status: "Pendente" },
];

export const despesasMock = [
  { id: "D-001", descricao: "Fornecedor — Papéis Premium", categoria: "Estoque", valor: 4200.0, data: "28 Jun 2024", status: "Paga" },
  { id: "D-002", descricao: "Frete Correios", categoria: "Logística", valor: 890.5, data: "27 Jun 2024", status: "Paga" },
  { id: "D-003", descricao: "Anúncios Instagram", categoria: "Marketing", valor: 650.0, data: "25 Jun 2024", status: "Paga" },
  { id: "D-004", descricao: "Hospedagem e domínio", categoria: "Infraestrutura", valor: 189.9, data: "20 Jun 2024", status: "Paga" },
  { id: "D-005", descricao: "Embalagens kraft", categoria: "Estoque", valor: 340.0, data: "18 Jun 2024", status: "Agendada" },
];

export const fluxoDetalhado = [
  { data: "01 Jun", entrada: 12400, saida: 3200, saldo: 9200 },
  { data: "08 Jun", entrada: 8900, saida: 2100, saldo: 16000 },
  { data: "15 Jun", entrada: 15200, saida: 4800, saldo: 26400 },
  { data: "22 Jun", entrada: 11800, saida: 3900, saldo: 34300 },
  { data: "29 Jun", entrada: 14550, saida: 2430, saldo: 46420 },
];

export const relatoriosFinanceiros = [
  { titulo: "DRE — Demonstrativo de Resultado", periodo: "Jun 2024", formato: "PDF" },
  { titulo: "Fluxo de caixa consolidado", periodo: "Jan–Jun 2024", formato: "Excel" },
  { titulo: "Receitas por categoria", periodo: "Jun 2024", formato: "CSV" },
  { titulo: "Despesas por fornecedor", periodo: "Jun 2024", formato: "PDF" },
];

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
