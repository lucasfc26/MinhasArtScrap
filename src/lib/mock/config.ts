export const empresaConfig = {
  razaoSocial: "Ateliê Papel Ltda",
  cnpj: "00.000.000/0001-00",
  email: "contato@ateliepapel.com.br",
  whatsapp: "(41) 99999-0000",
  endereco: "Rua das Flores, 123 — Curitiba, PR",
};

export const usuariosAdmin = [
  { nome: "Marina Vidal", email: "marina@ateliepapel.com.br", papel: "Administrador", status: "Ativo" },
  { nome: "Admin Sistema", email: "admin@ateliepapel.com.br", papel: "Administrador", status: "Ativo" },
  { nome: "Júlia Rezende", email: "julia@ateliepapel.com.br", papel: "Instrutora", status: "Ativo" },
  { nome: "Suporte", email: "suporte@ateliepapel.com.br", papel: "Atendimento", status: "Convidado" },
];

export const permissoesMock = [
  { modulo: "Produtos", admin: true, instrutor: false, atendimento: true },
  { modulo: "Pedidos", admin: true, instrutor: false, atendimento: true },
  { modulo: "Cursos", admin: true, instrutor: true, atendimento: false },
  { modulo: "Financeiro", admin: true, instrutor: false, atendimento: false },
  { modulo: "CRM", admin: true, instrutor: false, atendimento: true },
  { modulo: "Configurações", admin: true, instrutor: false, atendimento: false },
];

export const integracoesMock = [
  { nome: "Mercado Pago", descricao: "Pagamentos Pix e cartão", status: "Conectado", icon: "💳" },
  { nome: "Correios", descricao: "Cálculo de frete", status: "Conectado", icon: "📦" },
  { nome: "Mailchimp", descricao: "E-mail marketing", status: "Desconectado", icon: "✉️" },
  { nome: "Google Analytics", descricao: "Métricas do site", status: "Conectado", icon: "📊" },
  { nome: "WhatsApp Business", descricao: "Atendimento", status: "Conectado", icon: "💬" },
];

export const seoConfig = {
  titulo: "Ateliê Papel — Scrapbook, papelaria criativa e cursos",
  descricao: "Papéis estampados, washi tapes, carimbos, kits e cursos online de scrapbook.",
  keywords: "scrapbook, papelaria criativa, washi tape, álbum de memórias",
  ogImage: "/og-image.jpg",
  robots: "index, follow",
};

export const lgpdConfig = {
  politicaAtualizada: "15 Mar 2024",
  cookiesEssenciais: true,
  cookiesAnalytics: true,
  cookiesMarketing: false,
  retencaoDados: "24 meses",
};
