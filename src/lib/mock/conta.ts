import { pedidosMock } from "@/lib/mock/loja";
import { certificadosAluno, downloadsAluno, cursosDetalhados } from "@/lib/mock/cursos";
import { favoritosMock } from "@/lib/mock/loja";

export const clienteMock = {
  nome: "Maria Silva",
  email: "maria.silva@email.com",
  telefone: "(41) 99999-1234",
  cpf: "123.456.789-00",
  nascimento: "15/03/1990",
  membroDesde: "Jan 2023",
  nivel: "Premium",
  pontos: 2480,
  pontosProximoNivel: 3000,
};

export const enderecosMock = [
  {
    id: "1",
    titulo: "Casa",
    padrao: true,
    rua: "Rua das Flores, 123",
    complemento: "Apto 42",
    bairro: "Batel",
    cidade: "Curitiba",
    estado: "PR",
    cep: "80420-090",
  },
  {
    id: "2",
    titulo: "Ateliê",
    padrao: false,
    rua: "Av. Visconde de Guarapuava, 456",
    complemento: "Sala 12",
    bairro: "Centro",
    cidade: "Curitiba",
    estado: "PR",
    cep: "80010-100",
  },
];

export const assinaturaMock = {
  plano: "Ateliê Box — Mensal",
  status: "Ativa",
  proximaCobranca: "15 Jul 2024",
  valor: 89.0,
  temaAtual: "Herbário",
  historico: [
    { mes: "Jun 2024", tema: "Herbário", status: "Entregue" },
    { mes: "Mai 2024", tema: "Doce Memória", status: "Entregue" },
    { mes: "Abr 2024", tema: "Jardim de Outono", status: "Entregue" },
  ],
};

export const pontosHistorico = [
  { descricao: "Compra #AP-2024-1842", pontos: 234, data: "12 Jun 2024", tipo: "ganho" as const },
  { descricao: "Curso concluído — Lettering", pontos: 500, data: "02 Jan 2024", tipo: "ganho" as const },
  { descricao: "Resgate — Cupom R$ 20", pontos: -400, data: "28 Nov 2023", tipo: "resgate" as const },
  { descricao: "Compra #AP-2023-1201", pontos: 189, data: "15 Nov 2023", tipo: "ganho" as const },
];

export const contaPedidos = pedidosMock;
export const contaCursos = cursosDetalhados.slice(0, 2).map((c) => ({
  ...c,
  progresso: c.slug === "scrapbook-do-zero" ? 34 : 100,
  status: c.slug === "scrapbook-do-zero" ? "Em andamento" : "Concluído",
}));
export const contaDownloads = downloadsAluno;
export const contaWishlist = favoritosMock;
export const contaCertificados = certificadosAluno;

export const preferenciasMock = {
  newsletter: true,
  whatsapp: false,
  sms: true,
  idioma: "pt-BR",
  tema: "claro",
};
