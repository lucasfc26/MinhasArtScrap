import {
  FileText, Ribbon, Feather, Scissors, BookHeart, Flower2, Palette, Gift,
  type LucideIcon,
} from "lucide-react";

export type ProdutoDetalhe = {
  slug: string;
  nome: string;
  preco: number;
  antigo?: number;
  parcela: string;
  tag?: string;
  Icon: LucideIcon;
  categoria: string;
  colecao?: string;
  descricao: string;
  estoque: number;
  sku: string;
  avaliacao: number;
  reviews: number;
  cores?: string[];
  tamanhos?: string[];
};

export const produtosDetalhados: ProdutoDetalhe[] = [
  {
    slug: "bloco-papel-doce-memoria",
    nome: "Bloco Papel Estampado A4 — Doce Memória",
    preco: 48.9,
    antigo: 64.9,
    parcela: "4x R$ 12,22",
    tag: "Best-seller",
    Icon: FileText,
    categoria: "papeis",
    colecao: "doce-memoria",
    descricao: "Bloco com 24 folhas dupla face em gramatura 180g. Estampas rosé, marfim e detalhes vintage pensados para álbuns de família.",
    estoque: 42,
    sku: "AP-PA-001",
    avaliacao: 4.9,
    reviews: 128,
    cores: ["Rosé", "Marfim", "Kraft"],
  },
  {
    slug: "kit-washi-botanico",
    nome: "Kit Washi Tape Botânico (6 un.)",
    preco: 36.5,
    parcela: "3x R$ 12,16",
    tag: "Novo",
    Icon: Ribbon,
    categoria: "washi",
    colecao: "herbario",
    descricao: "Seis fitas washi em tons botânicos com acabamento fosco e boa aderência em papéis texturizados.",
    estoque: 67,
    sku: "AP-WA-012",
    avaliacao: 4.8,
    reviews: 54,
  },
  {
    slug: "carimbo-cartas-amor",
    nome: "Carimbo Acrílico Cartas de Amor",
    preco: 29.9,
    parcela: "2x R$ 14,95",
    Icon: Feather,
    categoria: "carimbos",
    descricao: "Carimbo acrílico montado com frase em lettering delicado. Ideal para páginas românticas e álbuns de casamento.",
    estoque: 23,
    sku: "AP-CA-008",
    avaliacao: 4.7,
    reviews: 89,
  },
  {
    slug: "die-moldura-floral",
    nome: "Die de Corte Moldura Floral",
    preco: 79.0,
    antigo: 99.0,
    parcela: "5x R$ 15,80",
    tag: "-20%",
    Icon: Scissors,
    categoria: "dies",
    colecao: "jardim-outono",
    descricao: "Faca de corte compatível com máquinas populares. Moldura floral com folhas e detalhes finos.",
    estoque: 15,
    sku: "AP-DI-003",
    avaliacao: 4.9,
    reviews: 41,
  },
  {
    slug: "album-linho-rose",
    nome: "Álbum Costurado Linho Rosé 20x20",
    preco: 119.0,
    parcela: "6x R$ 19,83",
    Icon: BookHeart,
    categoria: "albuns",
    colecao: "doce-memoria",
    descricao: "Álbum com capa em linho rosé, 40 páginas brancas 200g e costura aparente artesanal.",
    estoque: 8,
    sku: "AP-AL-005",
    avaliacao: 5.0,
    reviews: 32,
    cores: ["Rosé", "Sálvia", "Creme"],
  },
  {
    slug: "embelezamentos-dourados",
    nome: "Embelezamentos Metálicos Dourados",
    preco: 24.5,
    parcela: "2x R$ 12,25",
    Icon: Flower2,
    categoria: "embelezamentos",
    descricao: "Mix de flores, arabescos e adesivos metálicos dourados para dar brilho sutil às páginas.",
    estoque: 91,
    sku: "AP-EM-021",
    avaliacao: 4.6,
    reviews: 67,
  },
  {
    slug: "spray-aquarela-salvia",
    nome: "Spray Aquarela Sálvia 60ml",
    preco: 32.0,
    parcela: "3x R$ 10,66",
    Icon: Palette,
    categoria: "tintas",
    colecao: "herbario",
    descricao: "Spray pigmentado de secagem rápida. Tom sálvia suave para fundos e efeitos aquarelados.",
    estoque: 34,
    sku: "AP-TI-007",
    avaliacao: 4.8,
    reviews: 22,
  },
  {
    slug: "kit-herbario-completo",
    nome: "Kit Coleção Herbário Completo",
    preco: 189.0,
    antigo: 229.0,
    parcela: "10x R$ 18,90",
    tag: "Kit",
    Icon: Gift,
    categoria: "kits",
    colecao: "herbario",
    descricao: "Kit completo com papéis, washi, embelezamentos e guia de projeto. Tudo da coleção Herbário em uma caixa.",
    estoque: 12,
    sku: "AP-KI-002",
    avaliacao: 4.9,
    reviews: 76,
  },
];

export const filtrosLoja = {
  categorias: ["Papéis", "Washi", "Carimbos", "Dies", "Álbuns", "Embelezamentos", "Tintas", "Kits"],
  colecoes: ["Doce Memória", "Herbário", "Jardim de Outono", "Mar Sereno", "Vintage"],
  precos: [
    { label: "Até R$ 30", min: 0, max: 30 },
    { label: "R$ 30 – R$ 60", min: 30, max: 60 },
    { label: "R$ 60 – R$ 100", min: 60, max: 100 },
    { label: "Acima de R$ 100", min: 100, max: 9999 },
  ],
  ordenacao: ["Relevância", "Menor preço", "Maior preço", "Mais vendidos", "Lançamentos"],
};

export const carrinhoMock = [
  { ...produtosDetalhados[0], qtd: 2 },
  { ...produtosDetalhados[1], qtd: 1 },
  { ...produtosDetalhados[3], qtd: 1 },
];

export const favoritosMock = produtosDetalhados.slice(0, 4);

export const comparacaoMock = produtosDetalhados.slice(0, 3);

export const pedidosMock = [
  {
    id: "AP-2024-1842",
    data: "12 Jun 2024",
    status: "Entregue",
    total: 234.8,
    itens: 4,
  },
  {
    id: "AP-2024-1791",
    data: "28 Mai 2024",
    status: "Em trânsito",
    total: 119.0,
    itens: 1,
  },
  {
    id: "AP-2024-1655",
    data: "03 Mai 2024",
    status: "Processando",
    total: 189.0,
    itens: 1,
  },
];

export function getProdutoBySlug(slug: string) {
  return produtosDetalhados.find((p) => p.slug === slug);
}

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
