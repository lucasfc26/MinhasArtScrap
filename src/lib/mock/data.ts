import {
  FileText, Ribbon, Feather, Scissors, BookHeart, Flower2, Palette, Gift,
  type LucideIcon,
} from "lucide-react";

export type Categoria = { nome: string; slug: string; Icon: LucideIcon; cor: string };

export const categorias: Categoria[] = [
  { nome: "Papéis Estampados", slug: "papeis", Icon: FileText, cor: "bg-[color:var(--rose-soft)]" },
  { nome: "Washi Tapes", slug: "washi", Icon: Ribbon, cor: "bg-[color:var(--sage)]/30" },
  { nome: "Carimbos", slug: "carimbos", Icon: Feather, cor: "bg-[color:var(--kraft)]/40" },
  { nome: "Dies de Corte", slug: "dies", Icon: Scissors, cor: "bg-[color:var(--rose-soft)]" },
  { nome: "Álbuns", slug: "albuns", Icon: BookHeart, cor: "bg-[color:var(--gold)]/25" },
  { nome: "Embelezamentos", slug: "embelezamentos", Icon: Flower2, cor: "bg-[color:var(--sage)]/30" },
  { nome: "Tintas & Sprays", slug: "tintas", Icon: Palette, cor: "bg-[color:var(--kraft)]/40" },
  { nome: "Kits & Coleções", slug: "kits", Icon: Gift, cor: "bg-[color:var(--rose-soft)]" },
];

export const colecoes = [
  {
    nome: "Jardim de Outono",
    descricao: "Folhas secas, tons terrosos e dourado envelhecido.",
    tag: "Sazonal",
    cor: "from-[color:var(--kraft)]/60 to-[color:var(--rose-soft)]",
  },
  {
    nome: "Doce Memória",
    descricao: "Rosé, marfim e detalhes vintage para álbuns de família.",
    tag: "Best-seller",
    cor: "from-[color:var(--rose)]/60 to-[color:var(--cream)]",
  },
  {
    nome: "Herbário",
    descricao: "Botânica delicada em verde sálvia e creme.",
    tag: "Novo",
    cor: "from-[color:var(--sage)]/55 to-[color:var(--cream)]",
  },
];

export type Produto = {
  nome: string; preco: number; antigo?: number; parcela: string; tag?: string; Icon: LucideIcon;
};
export const produtos: Produto[] = [
  { nome: "Bloco Papel Estampado A4 — Doce Memória", preco: 48.9, antigo: 64.9, parcela: "4x R$ 12,22", tag: "Best-seller", Icon: FileText },
  { nome: "Kit Washi Tape Botânico (6 un.)", preco: 36.5, parcela: "3x R$ 12,16", tag: "Novo", Icon: Ribbon },
  { nome: "Carimbo Acrílico Cartas de Amor", preco: 29.9, parcela: "2x R$ 14,95", Icon: Feather },
  { nome: "Die de Corte Moldura Floral", preco: 79.0, antigo: 99.0, parcela: "5x R$ 15,80", tag: "-20%", Icon: Scissors },
  { nome: "Álbum Costurado Linho Rosé 20x20", preco: 119.0, parcela: "6x R$ 19,83", Icon: BookHeart },
  { nome: "Embelezamentos Metálicos Dourados", preco: 24.5, parcela: "2x R$ 12,25", Icon: Flower2 },
  { nome: "Spray Aquarela Sálvia 60ml", preco: 32.0, parcela: "3x R$ 10,66", Icon: Palette },
  { nome: "Kit Coleção Herbário Completo", preco: 189.0, antigo: 229.0, parcela: "10x R$ 18,90", tag: "Kit", Icon: Gift },
];

export const cursos = [
  { nome: "Scrapbook do Zero", aulas: 28, nivel: "Iniciante", preco: "R$ 197", instrutor: "Marina Vidal" },
  { nome: "Álbuns de Viagem", aulas: 14, nivel: "Intermediário", preco: "R$ 147", instrutor: "Júlia Rezende" },
  { nome: "Lettering para Scrap", aulas: 18, nivel: "Todos", preco: "R$ 127", instrutor: "Bruno Caldas" },
];

export const depoimentos = [
  { nome: "Camila R.", texto: "Os papéis chegam impecáveis e o atendimento é um carinho. Já é minha papelaria oficial.", cidade: "Fortaleza, CE" },
  { nome: "Renata P.", texto: "A coleção Doce Memória transformou o álbum do meu casamento. Apaixonada!", cidade: "Recife, PE" },
  { nome: "Helena S.", texto: "Os cursos são detalhistas e calmos. Aprendi mais em duas semanas do que em meses.", cidade: "Belo Horizonte, MG" },
];

export const posts = [
  { titulo: "5 ideias para um álbum de viagem inesquecível", categoria: "Inspiração", tempo: "6 min" },
  { titulo: "Como combinar washi tapes sem errar", categoria: "Tutorial", tempo: "4 min" },
  { titulo: "Guia de papéis: gramaturas e quando usar cada uma", categoria: "Guia", tempo: "8 min" },
];

export const megaMenu = [
  {
    coluna: "Papelaria",
    itens: ["Papéis estampados", "Papéis lisos", "Cardstock", "Vellum", "Envelopes"],
  },
  {
    coluna: "Decoração",
    itens: ["Washi tapes", "Adesivos", "Embelezamentos", "Fitas e laços", "Tags"],
  },
  {
    coluna: "Ferramentas",
    itens: ["Carimbos", "Tintas", "Dies de corte", "Máquinas de corte", "Pincéis"],
  },
  {
    coluna: "Coleções",
    itens: ["Doce Memória", "Herbário", "Jardim de Outono", "Mar Sereno", "Vintage"],
  },
];