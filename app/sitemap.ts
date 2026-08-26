import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

// Gera /sitemap.xml dinamicamente. Os produtos entram a partir de lib/products,
// então novos modelos aparecem no sitemap sozinhos. Rotas de redirect e páginas
// -stub ficam de fora de propósito.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/servicos/locacao-e-venda", priority: 0.9 },
    { path: "/servicos/filtros-e-oleo", priority: 0.8 },
    { path: "/servicos/manutencao", priority: 0.8 },
  ];

  const productRoutes = products.map((product) => ({
    path: `/produtos/${product.slug}`,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
