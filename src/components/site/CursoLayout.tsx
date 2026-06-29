import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BookOpen, Download, Award, MessageCircle, BarChart3, HelpCircle, PlayCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { progressoAluno } from "@/lib/mock/cursos";

const links = [
  { to: "/cursos/aluno", label: "Meus cursos", icon: BookOpen, exact: true },
  { to: "/cursos/aluno/progresso", label: "Progresso", icon: BarChart3 },
  { to: "/cursos/aluno/certificados", label: "Certificados", icon: Award },
  { to: "/cursos/aluno/downloads", label: "Downloads", icon: Download },
  { to: "/cursos/aluno/comentarios", label: "Comentários", icon: MessageCircle },
];

export function CursoAlunoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-4 py-10 md:px-6 md:py-14">
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="sticky top-28 space-y-6">
          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--rose)]/50 font-display text-lg">
                M
              </div>
              <div>
                <p className="font-display text-lg">Maria</p>
                <p className="text-xs text-muted-foreground">Área do aluno</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-secondary/60 p-4">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-muted-foreground">Progresso</span>
                <span>{progressoAluno.percentual}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
                <div className="h-full rounded-full bg-primary" style={{ width: `${progressoAluno.percentual}%` }} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground line-clamp-1">{progressoAluno.cursoAtual}</p>
            </div>
          </div>

          <nav className="space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.exact }}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-primary [&.active]:text-primary-foreground"
              >
                <l.icon className="h-4 w-4" />
                {l.label}
              </Link>
            ))}
          </nav>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm text-muted-foreground hover:bg-secondary">
            <HelpCircle className="h-4 w-4" /> Suporte
          </button>
        </div>
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export function CursoCard({
  curso,
  className,
}: {
  curso: {
    slug: string;
    nome: string;
    nivel: string;
    duracao: string;
    preco: number;
    precoAntigo?: number;
    tag?: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  };
  className?: string;
}) {
  return (
    <Link
      to="/cursos/$slug"
      params={{ slug: curso.slug }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft bento-hover",
        curso.tag === "Masterclass" && "premium-accent",
        className,
      )}
    >
      <div className="relative grid aspect-[16/10] place-items-center bg-gradient-to-br from-[color:var(--sage)]/35 to-[color:var(--cream)]">
        <curso.Icon className="h-14 w-14 text-foreground/50" strokeWidth={1.1} />
        <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[10px] uppercase tracking-wider">
          {curso.nivel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {curso.tag && <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">{curso.tag}</span>}
        <h3 className="mt-1 font-display text-xl leading-snug group-hover:text-primary">{curso.nome}</h3>
        <p className="mt-auto pt-3 text-xs text-muted-foreground">{curso.duracao} · {curso.nivel}</p>
        <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
          <div>
            {curso.precoAntigo && <span className="mr-2 text-xs text-muted-foreground line-through">R$ {curso.precoAntigo}</span>}
            <span className="font-display text-lg">R$ {curso.preco}</span>
          </div>
          <span className="text-sm font-medium text-primary">Detalhes →</span>
        </div>
      </div>
    </Link>
  );
}
