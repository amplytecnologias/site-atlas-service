import { SITE_URL, EMAIL, ADDRESS_COORDS } from "@/lib/site";

// Dados estruturados (JSON-LD) do negócio para o Google entender a empresa
// como entidade local: nome, endereço, telefone, geo, horário, área de
// atendimento e serviços. Sem aggregateRating de propósito: usar nota do
// Google no markup do próprio site viola as diretrizes.

const BUSINESS_ID = `${SITE_URL}/#business`;

// Serviços oferecidos — usados no catálogo do LocalBusiness e nas páginas.
export const SERVICES = {
  locacao: {
    name: "Locação de compressor de ar de parafuso",
    path: "/servicos/locacao-e-venda",
    description:
      "Locação de compressores de ar de parafuso industriais de 10 a 120 hp, com assistência técnica e manutenção inclusas no contrato e opção de compra ao final.",
  },
  venda: {
    name: "Venda de compressor de ar de parafuso",
    path: "/servicos/locacao-e-venda",
    description:
      "Venda de compressores de ar de parafuso industriais de 10 a 120 hp, com dimensionamento da demanda de ar, entrega técnica e garantia.",
  },
  manutencao: {
    name: "Manutenção de compressor de ar de parafuso",
    path: "/servicos/manutencao",
    description:
      "Manutenção preventiva, corretiva e assistência técnica em campo para compressores de ar de parafuso industriais, por contrato ou chamado avulso.",
  },
  filtrosOleo: {
    name: "Filtros e óleo para compressor de ar de parafuso",
    path: "/servicos/filtros-e-oleo",
    description:
      "Filtros de ar e de óleo, separadores ar/óleo, válvulas, kits de reparo e óleo lubrificante para compressores de ar de parafuso industriais.",
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

const AREA_SERVED = { "@type": "State", name: "Minas Gerais" };

function serviceNode(key: ServiceKey) {
  const service = SERVICES[key];
  return {
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED,
  };
}

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: "Atlas Service",
  alternateName: "Atlas Service Compressores",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Locação, venda, manutenção, filtros e óleo de compressores de ar de parafuso industriais para mineração e indústria em Minas Gerais.",
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
    AREA_SERVED,
  ],
  knowsAbout: [
    "Compressor de ar de parafuso",
    "Locação de compressor de parafuso",
    "Venda de compressor de parafuso",
    "Manutenção de compressor de parafuso",
    "Filtros e óleo para compressor de parafuso",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de compressores de ar de parafuso",
    itemListElement: (Object.keys(SERVICES) as ServiceKey[]).map((key) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: SERVICES[key].name, url: `${SITE_URL}${SERVICES[key].path}` },
    })),
  },
};

// Renderiza qualquer objeto JSON-LD. O "<" é escapado para o JSON nunca
// fechar a tag <script> por engano.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

// LocalBusiness — vai em todas as páginas (layout).
export function StructuredData() {
  return <JsonLd data={localBusiness} />;
}

// Service(s) de uma página de serviço.
export function ServiceStructuredData({ services }: { services: ServiceKey[] }) {
  const nodes = services.map(serviceNode);
  const data =
    nodes.length === 1
      ? { "@context": "https://schema.org", ...nodes[0] }
      : { "@context": "https://schema.org", "@graph": nodes };
  return <JsonLd data={data} />;
}
