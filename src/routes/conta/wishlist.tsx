import { createFileRoute, Link } from "@tanstack/react-router";
import { GitCompare } from "lucide-react";
import { ContaLayout } from "@/components/admin/ContaLayout";
import { ProdutoCard } from "@/components/site/ProdutoCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { contaWishlist } from "@/lib/mock/conta";

export const Route = createFileRoute("/conta/wishlist")({
  component: WishlistPage,
});

function WishlistPage() {
  return (
    <ContaLayout title="Produtos que você salvou.">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {contaWishlist.map((p, i) => (
          <ScrollReveal key={p.slug} delay={i * 50}>
            <ProdutoCard p={p} />
          </ScrollReveal>
        ))}
      </div>
      <Link to="/loja/comparar" className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline">
        <GitCompare className="h-4 w-4" /> Comparar selecionados
      </Link>
    </ContaLayout>
  );
}
