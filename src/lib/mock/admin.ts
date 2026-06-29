import { Ribbon, BookHeart, Gift } from "lucide-react";
import { produtosDetalhados } from "@/lib/mock/loja";

export const adminStats = {
  receitaMes: 42850.0,
  receitaVariacao: 12.4,
  pedidosMes: 186,
  pedidosVariacao: 8.2,
  clientesAtivos: 1240,
  clientesVariacao: 5.1,
  estoqueBaixo: 14,
  cursosAtivos: 4,
};

export const adminPedidos = [
  { id: "AP-2024-1899", cliente: "Camila R.", total: 234.8, status: "Pago", data: "Hoje, 14:32", itens: 3 },
  { id: "AP-2024-1898", cliente: "Renata P.", total: 119.0, status: "Processando", data: "Hoje, 11:15", itens: 1 },
  { id: "AP-2024-1897", cliente: "Helena S.", total: 189.0, status: "Enviado", data: "Ontem", itens: 2 },
  { id: "AP-2024-1896", cliente: "Ana Paula", total: 48.9, status: "Pago", data: "Ontem", itens: 1 },
  { id: "AP-2024-1895", cliente: "Fernanda L.", total: 356.0, status: "Entregue", data: "10 Jun", itens: 5 },
];

export const adminClientes = [
  { nome: "Camila R.", email: "camila@email.com", pedidos: 12, total: 2340.0, tag: "VIP", desde: "2022" },
  { nome: "Renata P.", email: "renata@email.com", pedidos: 8, total: 1890.0, tag: "Premium", desde: "2023" },
  { nome: "Helena S.", email: "helena@email.com", pedidos: 5, total: 980.0, tag: "Regular", desde: "2024" },
  { nome: "Ana Paula", email: "ana@email.com", pedidos: 3, total: 420.0, tag: "Novo", desde: "2024" },
  { nome: "Fernanda L.", email: "fernanda@email.com", pedidos: 15, total: 3120.0, tag: "VIP", desde: "2021" },
];

export const adminCategorias = [
  { nome: "Papéis Estampados", produtos: 48, status: "Ativa" },
  { nome: "Washi Tapes", produtos: 36, status: "Ativa" },
  { nome: "Carimbos", produtos: 24, status: "Ativa" },
  { nome: "Dies de Corte", produtos: 18, status: "Ativa" },
  { nome: "Álbuns", produtos: 12, status: "Ativa" },
  { nome: "Kits & Coleções", produtos: 8, status: "Rascunho" },
];

export const adminColecoes = [
  { nome: "Doce Memória", produtos: 12, tag: "Best-seller", status: "Publicada" },
  { nome: "Herbário", produtos: 10, tag: "Novo", status: "Publicada" },
  { nome: "Jardim de Outono", produtos: 8, tag: "Sazonal", status: "Publicada" },
  { nome: "Mar Sereno", produtos: 6, tag: "Em breve", status: "Rascunho" },
];

export const adminProdutos = produtosDetalhados.map((p) => ({
  ...p,
  status: p.estoque > 10 ? "Publicado" : p.estoque > 0 ? "Estoque baixo" : "Esgotado",
}));

export const adminCursos = [
  { slug: "scrapbook-do-zero", nome: "Scrapbook do Zero", alunos: 1240, receita: 244280, status: "Publicado", instrutor: "Marina Vidal" },
  { slug: "albuns-de-viagem", nome: "Álbuns de Viagem", alunos: 680, receita: 99960, status: "Publicado", instrutor: "Júlia Rezende" },
  { slug: "lettering-para-scrap", nome: "Lettering para Scrap", alunos: 920, receita: 116840, status: "Publicado", instrutor: "Bruno Caldas" },
  { slug: "encadernacao-artesanal", nome: "Encadernação Artesanal", alunos: 340, receita: 84660, status: "Rascunho", instrutor: "Marina Vidal" },
];

export const adminFinanceiro = {
  receitas: 42850,
  despesas: 12430,
  lucro: 30420,
  fluxo: [
    { mes: "Jan", receita: 32000, despesa: 9800 },
    { mes: "Fev", receita: 28500, despesa: 10200 },
    { mes: "Mar", receita: 35200, despesa: 11000 },
    { mes: "Abr", receita: 38100, despesa: 11500 },
    { mes: "Mai", receita: 40200, despesa: 11800 },
    { mes: "Jun", receita: 42850, despesa: 12430 },
  ],
};

export const adminCrm = {
  funil: [
    { etapa: "Visitantes", qtd: 8420, pct: 100 },
    { etapa: "Carrinho", qtd: 1240, pct: 14.7 },
    { etapa: "Checkout", qtd: 680, pct: 8.1 },
    { etapa: "Compra", qtd: 420, pct: 5.0 },
  ],
  campanhas: [
    { nome: "Doce Memória — Lançamento", status: "Ativa", abertura: "42%", conversoes: 89 },
    { nome: "Kit do mês — Herbário", status: "Agendada", abertura: "—", conversoes: 0 },
    { nome: "Black Friday 2023", status: "Encerrada", abertura: "38%", conversoes: 234 },
  ],
};

export const adminMarketing = {
  cupons: [
    { codigo: "DOCE10", desconto: "10%", usos: 89, limite: 200, status: "Ativo" },
    { codigo: "BEMVINDA", desconto: "R$ 20", usos: 156, limite: 500, status: "Ativo" },
    { codigo: "HERBARIO", desconto: "15%", usos: 34, limite: 100, status: "Expirado" },
  ],
  banners: [
    { titulo: "Hero — Doce Memória", posicao: "Home", status: "Ativo" },
    { titulo: "Barra promo frete grátis", posicao: "Top bar", status: "Ativo" },
    { titulo: "Popup newsletter", posicao: "Modal", status: "Pausado" },
  ],
};

export const produtoHistorico = [
  { acao: "Preço alterado", de: "R$ 64,90", para: "R$ 48,90", usuario: "Admin", data: "10 Jun 2024" },
  { acao: "Estoque atualizado", de: "38", para: "42", usuario: "Admin", data: "05 Jun 2024" },
  { acao: "Produto publicado", de: "—", para: "Publicado", usuario: "Marina", data: "01 Mar 2024" },
  { acao: "Produto criado", de: "—", para: "Rascunho", usuario: "Marina", data: "28 Fev 2024" },
];

export const produtoVariacoes = [
  { nome: "Rosé", sku: "AP-PA-001-R", estoque: 18, preco: 48.9 },
  { nome: "Marfim", sku: "AP-PA-001-M", estoque: 14, preco: 48.9 },
  { nome: "Kraft", sku: "AP-PA-001-K", estoque: 10, preco: 52.9 },
];

export const produtoRelacionados = [
  { nome: "Kit Washi Tape Botânico", Icon: Ribbon },
  { nome: "Embelezamentos Metálicos", Icon: Gift },
  { nome: "Kit Coleção Herbário", Icon: BookHeart },
];

export const cursoModulosAdmin = [
  {
    id: "m1",
    titulo: "Módulo 1 — Materiais e bancada",
    aulas: [
      { id: "a1", titulo: "Boas-vindas ao ateliê", duracao: "8 min", tipo: "Vídeo" },
      { id: "a2", titulo: "Materiais essenciais", duracao: "18 min", tipo: "Vídeo" },
      { id: "a3", titulo: "Organizando sua bancada", duracao: "12 min", tipo: "Vídeo" },
    ],
  },
  {
    id: "m2",
    titulo: "Módulo 2 — Composição e layering",
    aulas: [
      { id: "a4", titulo: "Regra dos terços", duracao: "22 min", tipo: "Vídeo" },
      { id: "a5", titulo: "Layering de papéis", duracao: "25 min", tipo: "Vídeo" },
    ],
  },
];

export const cursoInstrutores = [
  { nome: "Marina Vidal", bio: "Artesã e educadora há 12 anos", cursos: 3, avatar: "M" },
  { nome: "Júlia Rezende", bio: "Scrapbooker e viajante", cursos: 1, avatar: "J" },
  { nome: "Bruno Caldas", bio: "Lettering artist", cursos: 1, avatar: "B" },
];

export const cursoAvaliacoesAdmin = [
  { autor: "Camila R.", nota: 5, texto: "Curso maravilhoso, muito detalhista!", data: "12 Jun 2024", status: "Publicada" },
  { autor: "Helena S.", nota: 5, texto: "Aprendi demais em poucas semanas.", data: "08 Jun 2024", status: "Publicada" },
  { autor: "Anônimo", nota: 3, texto: "Gostaria de mais aulas sobre encadernação.", data: "01 Jun 2024", status: "Pendente" },
];

export const cursoUploads = [
  { nome: "Guia de materiais.pdf", tipo: "PDF", tamanho: "2,4 MB" },
  { nome: "Templates A4.zip", tipo: "ZIP", tamanho: "8,1 MB" },
  { nome: "Thumb curso.jpg", tipo: "Imagem", tamanho: "420 KB" },
];

export function formatBRLAdmin(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
