import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/** Placeholder de carregamento para listas e cards (Fase 13). */
export function PageSkeleton({
  variant = "cards",
  count = 4,
  className,
}: {
  variant?: "cards" | "table" | "detail";
  count?: number;
  className?: string;
}) {
  if (variant === "table") {
    return (
      <div className={cn("space-y-3", className)} aria-busy="true" aria-label="Carregando">
        <Skeleton className="h-10 w-full rounded-xl" />
        {Array.from({ length: count }).map((_, i) => (
          <Skeleton key={i} className="h-14 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (variant === "detail") {
    return (
      <div className={cn("space-y-4", className)} aria-busy="true" aria-label="Carregando">
        <Skeleton className="h-8 w-2/3 rounded-lg" />
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-5/6 rounded-lg" />
        <Skeleton className="mt-4 h-48 w-full rounded-2xl" />
      </div>
    );
  }

  return (
    <div
      className={cn("grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4", className)}
      aria-busy="true"
      aria-label="Carregando"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-3 rounded-2xl border border-border/60 p-3">
          <Skeleton className="aspect-square w-full rounded-xl" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}
