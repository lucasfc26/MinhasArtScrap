import { BookOpen, Clock, Award, Download, MessageCircle, PlayCircle, type LucideIcon } from "lucide-react";

export type Modulo = {
  titulo: string;
  aulas: { titulo: string; duracao: string; concluida?: boolean; atual?: boolean }[];
};

export type CursoDetalhe = {
  slug: string;
  nome: string;
  descricao: string;
  resumo: string;
  instrutor: string;
  instrutorBio: string;
  nivel: string;
  aulas: number;
  duracao: string;
  preco: number;
  precoAntigo?: number;
  categoria: string;
  tag?: string;
  Icon: LucideIcon;
  modulos: Modulo[];
  beneficios: string[];
  avaliacao: number;
  alunos: number;
};

export const categoriasCursos = [
  { slug: "iniciante", nome: "Iniciante", descricao: "Primeiros passos no scrapbook", cor: "from-[color:var(--sage)]/40 to-[color:var(--cream)]" },
  { slug: "intermediario", nome: "Intermediário", descricao: "Técnicas e composição", cor: "from-[color:var(--rose)]/50 to-[color:var(--cream)]" },
  { slug: "avancado", nome: "Avançado", descricao: "Encadernação e acabamentos", cor: "from-[color:var(--kraft)]/60 to-[color:var(--rose-soft)]" },
  { slug: "workshops", nome: "Workshops", descricao: "Aulas ao vivo e masterclass", cor: "from-[color:var(--gold)]/30 to-[color:var(--cream)]" },
];

export const cursosDetalhados: CursoDetalhe[] = [
  {
    slug: "scrapbook-do-zero",
    nome: "Scrapbook do Zero",
    descricao: "Um curso completo para quem nunca fez scrapbook e quer começar com confiança. Aprenda materiais, composição, layering e acabamentos em aulas calmas e detalhistas.",
    resumo: "Do primeiro corte ao álbum finalizado — passo a passo.",
    instrutor: "Marina Vidal",
    instrutorBio: "Artesã e educadora há 12 anos. Especialista em álbuns de família.",
    nivel: "Iniciante",
    aulas: 28,
    duracao: "12h",
    preco: 197,
    categoria: "iniciante",
    tag: "Mais popular",
    Icon: BookOpen,
    avaliacao: 4.9,
    alunos: 1240,
    beneficios: ["Acesso vitalício", "Certificado", "Material PDF", "Comunidade exclusiva"],
    modulos: [
      {
        titulo: "Módulo 1 — Materiais e bancada",
        aulas: [
          { titulo: "Boas-vindas ao ateliê", duracao: "8 min", concluida: true },
          { titulo: "Materiais essenciais", duracao: "18 min", concluida: true },
          { titulo: "Organizando sua bancada", duracao: "12 min", concluida: true },
        ],
      },
      {
        titulo: "Módulo 2 — Composição e layering",
        aulas: [
          { titulo: "Regra dos terços no scrap", duracao: "22 min", concluida: true },
          { titulo: "Layering de papéis", duracao: "25 min", atual: true },
          { titulo: "Combinando texturas", duracao: "20 min" },
        ],
      },
      {
        titulo: "Módulo 3 — Seu primeiro álbum",
        aulas: [
          { titulo: "Planejando o álbum", duracao: "15 min" },
          { titulo: "Montagem das páginas", duracao: "35 min" },
          { titulo: "Acabamento e encadernação", duracao: "28 min" },
        ],
      },
    ],
  },
  {
    slug: "albuns-de-viagem",
    nome: "Álbuns de Viagem",
    descricao: "Transforme fotos e souvenirs de viagem em álbuns narrativos. Técnicas de journaling, pockets e composição dinâmica.",
    resumo: "Conte histórias de viagem com páginas cheias de memória.",
    instrutor: "Júlia Rezende",
    instrutorBio: "Scrapbooker e viajante. Autora de 3 álbuns publicados.",
    nivel: "Intermediário",
    aulas: 14,
    duracao: "6h",
    preco: 147,
    categoria: "intermediario",
    Icon: PlayCircle,
    avaliacao: 4.8,
    alunos: 680,
    beneficios: ["Acesso vitalício", "Templates editáveis", "Certificado"],
    modulos: [
      {
        titulo: "Módulo 1 — Planejamento",
        aulas: [
          { titulo: "Estrutura narrativa", duracao: "16 min" },
          { titulo: "Seleção de fotos", duracao: "14 min" },
        ],
      },
      {
        titulo: "Módulo 2 — Montagem",
        aulas: [
          { titulo: "Pockets e envelopes", duracao: "24 min" },
          { titulo: "Journaling de viagem", duracao: "20 min" },
        ],
      },
    ],
  },
  {
    slug: "lettering-para-scrap",
    nome: "Lettering para Scrap",
    descricao: "Caligrafia e lettering aplicados ao scrapbook. Títulos, datas e frases manuscritas com charme artesanal.",
    resumo: "Letras bonitas para títulos e detalhes nas páginas.",
    instrutor: "Bruno Caldas",
    instrutorBio: "Lettering artist e ilustrador. Parceiro de marcas de papelaria.",
    nivel: "Todos",
    aulas: 18,
    duracao: "8h",
    preco: 127,
    categoria: "iniciante",
    Icon: BookOpen,
    avaliacao: 4.7,
    alunos: 920,
    beneficios: ["Acesso vitalício", "Guia de traços PDF", "Certificado"],
    modulos: [
      {
        titulo: "Módulo 1 — Fundamentos",
        aulas: [
          { titulo: "Ferramentas de lettering", duracao: "10 min" },
          { titulo: "Traços básicos", duracao: "22 min" },
        ],
      },
    ],
  },
  {
    slug: "encadernacao-artesanal",
    nome: "Encadernação Artesanal",
    descricao: "Masterclass em encadernação costurada, capas em linho e acabamentos premium para álbuns únicos.",
    resumo: "Técnicas profissionais de encadernação à mão.",
    instrutor: "Marina Vidal",
    instrutorBio: "Artesã e educadora há 12 anos.",
    nivel: "Avançado",
    aulas: 22,
    duracao: "10h",
    preco: 249,
    precoAntigo: 299,
    categoria: "avancado",
    tag: "Masterclass",
    Icon: Award,
    avaliacao: 5.0,
    alunos: 340,
    beneficios: ["Acesso vitalício", "Certificado premium", "Lista de fornecedores"],
    modulos: [
      {
        titulo: "Módulo 1 — Costura japonesa",
        aulas: [
          { titulo: "Preparando as folhas", duracao: "18 min" },
          { titulo: "Costura passo a passo", duracao: "45 min" },
        ],
      },
    ],
  },
];

export const downloadsAluno = [
  { nome: "Guia de materiais — Scrapbook do Zero", tipo: "PDF", tamanho: "2,4 MB", Icon: Download },
  { nome: "Templates de páginas A4", tipo: "ZIP", tamanho: "8,1 MB", Icon: Download },
  { nome: "Paleta de cores — Doce Memória", tipo: "PDF", tamanho: "1,2 MB", Icon: Download },
];

export const certificadosAluno = [
  { curso: "Scrapbook do Zero", data: "15 Mar 2024", carga: "12 horas" },
  { curso: "Lettering para Scrap", data: "02 Jan 2024", carga: "8 horas" },
];

export const comentariosAluno = [
  { autor: "Ana Paula", curso: "Scrapbook do Zero", texto: "A aula de layering mudou completamente minha forma de montar páginas!", data: "Há 2 dias", respostas: 3 },
  { autor: "Carla M.", curso: "Scrapbook do Zero", texto: "Marina explica com muita calma. Perfeito para iniciantes.", data: "Há 5 dias", respostas: 1 },
  { autor: "Fernanda L.", curso: "Lettering para Scrap", texto: "Os exercícios de traço são excelentes. Já vejo evolução!", data: "Há 1 semana", respostas: 0 },
];

export const progressoAluno = {
  cursoAtual: "Scrapbook do Zero",
  moduloAtual: "Módulo 2 — Composição e layering",
  aulaAtual: "Layering de papéis",
  percentual: 34,
  aulasConcluidas: 5,
  totalAulas: 28,
};

export function getCursoBySlug(slug: string) {
  return cursosDetalhados.find((c) => c.slug === slug);
}

export function getCursosByCategoria(slug: string) {
  return cursosDetalhados.filter((c) => c.categoria === slug);
}
