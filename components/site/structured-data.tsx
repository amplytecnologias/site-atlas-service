import { SITE_URL, EMAIL, ADDRESS_COORDS } from "@/lib/site";

// Dados estruturados (JSON-LD) do negócio para o Google entender a empresa
// como entidade local: nome, endereço, telefone, geo, horário e área de
// atendimento. Ajuda no destaque na Busca e no mapa. Sem aggregateRating de
// propósito: usar nota do Google no markup do próprio site viola as diretrizes
// (avaliações precisam ser coletadas/exibidas na própria página).
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Atlas Service Compressores",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Aluguel, venda, manutenção e assistência técnica de compressores de ar de parafuso para mineração e indústria na região metropolitana de Belo Horizonte e em toda Minas Gerais.",
  telephone: "+55 31 3531-7749",
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Pernambuco, 177 - Vila Universal",
    addressLocality: "Betim",
    addressRegion: "MG",
    postalCode: "32678-024",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: ADDRESS_COORDS.lat,
    longitude: ADDRESS_COORDS.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Região Metropolitana de Belo Horizonte" },
    { "@type": "State", name: "Minas Gerais" },
  ],
  knowsAbout: [
    "Aluguel de compressor de parafuso",
    "Venda de compressor de parafuso",
    "Manutenção de compressor de parafuso",
    "Filtros e óleo para compressor",
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
