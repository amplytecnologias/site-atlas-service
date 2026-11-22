import type { Metadata } from "next";

// Imagem de compartilhamento já existente no site (1200×630).
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Atlas Service: compressores de ar de parafuso industriais em Minas Gerais",
};

type PageSeo = {
  // Título completo (até 60 caracteres) — não passa pelo template do layout.
  title: string;
  // Meta description (até 155 caracteres).
  description: string;
  // Caminho canônico, ex.: "/servicos/manutencao".
  path: string;
};

// Monta title, description, canonical, Open Graph e Twitter card de uma página.
// Cada página declara os próprios valores para não herdar o OG da home.
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Atlas Service",
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
