Crie uma aplicação web completa para gestão de uma loja de Scrapbook, inspirada na organização, categorias e experiência de navegação da loja JuJu Scrapbook, porém com identidade visual própria e arquitetura moderna. O sistema deve ser composto por um painel administrativo (ERP) e uma loja virtual (E-commerce) totalmente integrados.

A interface deve possuir um visual delicado, elegante e moderno, utilizando tons pastéis (rosa claro, creme, bege, branco, verde sálvia e dourado discreto), bastante espaço em branco, cantos arredondados, animações suaves e tipografia refinada.

ROADMAP
Fase 1 — Design System (Frontend)

Objetivo:

Criar toda a identidade visual da plataforma.

Criar:

Paleta de cores
Tipografia
Espaçamentos
Sombras
Bordas
Ícones
Botões
Inputs
Cards
Badges
Alertas
Toasts
Modais
Tabelas
Tabs
Accordion
Drawer
Sidebar
Navbar
Footer
Skeletons
Loading
Empty States
Error States

Resultado:

Todo o Design System pronto.

Fase 2 — Layout Base

Criar toda a estrutura do site.

Desktop

Tablet

Mobile

Implementar:

Header
Mega Menu
Busca
Barra Superior
Footer
Sidebar administrativa
Sidebar do aluno
Breadcrumb
Layout Dashboard
Layout Loja
Layout Cursos
Layout Login

Nada deve possuir lógica.

Apenas layout.

Fase 3 — Landing Page

Criar toda a Home.

Seções:

Hero

Categorias

Coleções

Cursos

Produtos

Assinaturas

Mais vendidos

Lançamentos

Promoções

Newsletter

Instagram

Depoimentos

Blog

Footer

Tudo utilizando dados mockados.

Fase 4 — Loja

Criar todas as telas.

Página de produtos

Filtros

Pesquisa

Categorias

Coleções

Página do produto

Carrinho

Favoritos

Comparação

Checkout (somente visual)

Pedidos

Tudo fake.

Fase 5 — Plataforma de Cursos

Criar:

Página inicial

Página de categoria

Página do curso

Player

Área do aluno

Progresso

Certificados

Downloads

Comentários

Tudo utilizando JSON fake.

Fase 6 — Área do Cliente

Criar:

Perfil

Endereços

Pedidos

Cursos

Downloads

Wishlist

Pontos

Assinaturas

Configurações

Somente frontend.

Fase 7 — Dashboard Administrativo

Criar todo o painel.

Dashboard

Produtos

Categorias

Coleções

Cursos

Pedidos

Clientes

Financeiro

Relatórios

CRM

Marketing

Configurações

Tudo visual.

Fase 8 — Produtos

Criar telas completas para:

Cadastro

Editar

Excluir

Duplicar

Variações

Galeria

SEO

Relacionamentos

Histórico

Sem backend.

Fase 9 — Cursos (Admin)

Criar:

Lista

Editor

Categorias

Módulos

Aulas

Uploads

Instrutores

Avaliações

Certificados

Somente interface.

Fase 10 — Financeiro

Criar:

Fluxo de caixa

Receitas

Despesas

Dashboard

Relatórios

Tudo utilizando dados mockados.

Fase 11 — CRM

Criar:

Clientes

Funil

Campanhas

Anotações

WhatsApp

Emails

Tags

Segmentação

Frontend apenas.

Fase 12 — Configurações

Criar:

Empresa

Usuários

Permissões

Tema

Integrações

Pagamentos

Frete

Emails

Domínio

SEO

LGPD

Somente telas.

Fase 13 — Microinterações

Adicionar:

Framer Motion

Hover

Drag

Drop

Transitions

Skeletons

Loading

Empty states

Animações suaves

Fase 14 — Responsividade

Revisar:

Desktop

Notebook

Tablet

Celular

Landscape

Portrait

Fase 15 — Acessibilidade

Adicionar:

ARIA

Teclado

Focus

Contraste

Screen Reader

Frontend Finalizado

Nesse ponto, você terá praticamente um SaaS completo, porém alimentado apenas por dados fictícios.

ROADMAP DO BACKEND

Somente depois do frontend aprovado.

Fase 16 — Arquitetura

Criar:

Clean Architecture
Prisma
PostgreSQL
Docker
Redis
MinIO
Swagger
Logger
Configuração de ambientes
Variáveis de ambiente
Fase 17 — Autenticação

Implementar:

Login

Cadastro

Google

GitHub

Esqueci senha

2FA

JWT

Refresh Token

RBAC

Permissões

Fase 18 — Banco de Dados

Criar todas as tabelas.

Usuários

Produtos

Categorias

Pedidos

Cursos

Clientes

Financeiro

Avaliações

Assinaturas

Downloads

Comentários

Certificados

etc.

Fase 19 — API Produtos

CRUD completo.

Upload

Categorias

Coleções

SEO

Busca

Estoque

Fase 20 — API Cursos

CRUD

Módulos

Aulas

Progresso

Downloads

Certificados

Fase 21 — API Loja

Carrinho

Pedidos

Favoritos

Pagamento

Frete

Cupons

Fase 22 — API Financeiro

Receitas

Despesas

Fluxo

Relatórios

Dashboard

Fase 23 — API CRM

Clientes

Tags

Campanhas

Emails

WhatsApp

Fase 24 — Uploads

Implementar:

Cloudflare R2

Amazon S3

MinIO

Imagens

Vídeos

PDF

ZIP

Fase 25 — Pagamentos

PIX

Cartão

Boleto

Webhook

Assinaturas

Reembolso

Fase 26 — Relatórios

PDF

Excel

CSV

Dashboard

KPIs

Fase 27 — SEO

Sitemap

Robots

Metadata

OpenGraph

Schema.org

Fase 28 — Testes

Unitários

Integração

E2E

Fase 29 — Deploy

Docker

CI/CD

Banco

Storage

CDN

Monitoramento

Logs

Backup

Estratégia para usar com Lovable/Figma/v0

Em vez de enviar o roadmap inteiro, envie uma fase por vez, mantendo um contexto consistente. Para cada fase, use um prompt como:

"Desenvolva apenas a Fase X da plataforma. Não implemente backend nem lógica de negócio. Utilize React + Next.js + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion. Use dados mockados em JSON e componentes reutilizáveis. O foco é criar uma interface moderna, elegante e acolhedora para uma plataforma de scrapbook que reúne e-commerce, ERP e cursos online. Mantenha consistência com as fases anteriores e prepare a estrutura para integração futura com APIs."

Essa abordagem tende a produzir interfaces muito mais consistentes e facilita ajustes antes de começar a implementação da lógica de negócio.