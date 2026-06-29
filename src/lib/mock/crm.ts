export const crmClientes = [
  { id: "C-01", nome: "Camila R.", email: "camila@email.com", tag: "VIP", ultimoContato: "Hoje", pedidos: 12, ltv: 2340 },
  { id: "C-02", nome: "Renata P.", email: "renata@email.com", tag: "Premium", ultimoContato: "Ontem", pedidos: 8, ltv: 1890 },
  { id: "C-03", nome: "Helena S.", email: "helena@email.com", tag: "Regular", ultimoContato: "3 dias", pedidos: 5, ltv: 980 },
  { id: "C-04", nome: "Ana Paula", email: "ana@email.com", tag: "Novo", ultimoContato: "1 semana", pedidos: 3, ltv: 420 },
];

export const crmAnotacoes = [
  { cliente: "Camila R.", texto: "Interessada na coleção Herbário. Enviar amostra de papéis.", data: "29 Jun 2024", autor: "Marina" },
  { cliente: "Renata P.", texto: "Solicitou frete expresso para o próximo pedido.", data: "28 Jun 2024", autor: "Admin" },
  { cliente: "Helena S.", texto: "Aluna do curso Scrapbook — feedback positivo.", data: "25 Jun 2024", autor: "Marina" },
];

export const crmWhatsApp = [
  { contato: "Camila R.", mensagem: "Oi! Meu pedido já foi enviado?", hora: "14:32", status: "Não lida" },
  { contato: "Fernanda L.", mensagem: "Tem o kit Doce Memória em estoque?", hora: "11:15", status: "Respondida" },
  { contato: "Ana Paula", mensagem: "Obrigada pelo cupom! Já usei.", hora: "Ontem", status: "Arquivada" },
];

export const crmEmails = [
  { assunto: "Lançamento — Coleção Herbário", destinatarios: 1240, abertura: "42%", status: "Enviado", data: "25 Jun" },
  { assunto: "Carrinho abandonado — lembrete", destinatarios: 89, abertura: "28%", status: "Agendado", data: "30 Jun" },
  { assunto: "Newsletter Junho", destinatarios: 3200, abertura: "38%", status: "Enviado", data: "01 Jun" },
];

export const crmTags = [
  { nome: "VIP", cor: "bg-[color:var(--gold)]/30", clientes: 42 },
  { nome: "Premium", cor: "bg-[color:var(--rose)]/40", clientes: 128 },
  { nome: "Novo", cor: "bg-[color:var(--sage)]/30", clientes: 89 },
  { nome: "Inativo", cor: "bg-secondary", clientes: 34 },
  { nome: "Assinante", cor: "bg-primary/20", clientes: 156 },
];

export const crmSegmentos = [
  { nome: "Compraram nos últimos 30 dias", criterio: "Pedido recente", clientes: 186, ultimaExecucao: "29 Jun" },
  { nome: "Carrinho abandonado", criterio: "Sem finalizar compra", clientes: 89, ultimaExecucao: "29 Jun" },
  { nome: "Alunas de cursos", criterio: "Matrícula ativa", clientes: 420, ultimaExecucao: "28 Jun" },
  { nome: "Assinantes Ateliê Box", criterio: "Plano ativo", clientes: 156, ultimaExecucao: "28 Jun" },
];

export const crmCampanhas = [
  { nome: "Doce Memória — Lançamento", tipo: "E-mail", status: "Ativa", abertura: "42%", conversoes: 89, orcamento: 500 },
  { nome: "Kit do mês — Herbário", tipo: "WhatsApp", status: "Agendada", abertura: "—", conversoes: 0, orcamento: 200 },
  { nome: "Black Friday 2023", tipo: "Multi", status: "Encerrada", abertura: "38%", conversoes: 234, orcamento: 1200 },
];

export const crmFunil = [
  { etapa: "Visitantes", qtd: 8420, pct: 100 },
  { etapa: "Carrinho", qtd: 1240, pct: 14.7 },
  { etapa: "Checkout", qtd: 680, pct: 8.1 },
  { etapa: "Compra", qtd: 420, pct: 5.0 },
];
