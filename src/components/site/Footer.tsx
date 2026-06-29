import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const cols = [
  { titulo: "Institucional", itens: ["Sobre nós", "Nosso ateliê", "Imprensa", "Trabalhe conosco", "Sustentabilidade"] },
  { titulo: "Ajuda", itens: ["Central de atendimento", "Frete e prazos", "Trocas e devoluções", "Pagamentos", "Rastrear pedido"] },
  { titulo: "Aprenda", itens: ["Cursos online", "Tutoriais grátis", "Blog", "Comunidade", "Eventos"] },
  { titulo: "Categorias", itens: ["Papéis", "Washi tapes", "Carimbos", "Álbuns", "Kits e coleções"] },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--cream)] paper-texture">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.5fr]">
          <div>
            <p className="font-display text-3xl">Ateliê <span className="italic text-primary">Papel</span></p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Papelaria criativa para quem guarda memória com as mãos. Curadoria delicada,
              embalagem com carinho, entrega para todo o Brasil.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:bg-secondary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.titulo}>
                <h4 className="font-display text-sm font-semibold">{c.titulo}</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {c.itens.map((i) => (
                    <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ateliê Papel · CNPJ 00.000.000/0001-00 · Fortaleza, CE</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="opacity-70">Pagamento seguro:</span>
            {["Visa", "Master", "Elo", "Pix", "Boleto"].map((m) => (
              <span key={m} className="rounded-md border border-border bg-card px-2 py-1">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}