import type { Metadata } from "next";
import { Droplets, PackageCheck, Timer } from "lucide-react";
import { ServicePage, type ServicePageData } from "@/components/site/service-page";
import { serviceQualifiers } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Filtros e Óleo para Compressor de Parafuso | BH e MG",
  description:
    "Peças, filtros, separadores ar/óleo e óleo para compressores de parafuso industriais. Pronta entrega em BH e envio para toda Minas Gerais.",
  path: "/servicos/filtros-e-oleo",
});

const data: ServicePageData = {
  path: "/servicos/filtros-e-oleo",
  schema: ["filtrosOleo"],
  badge: "Filtros e Óleo",
  title: "Filtros e óleo",
  highlight: "para compressores de parafuso",
  intro:
    "Peças, filtros e óleo para compressores de parafuso. Filtros de ar e de óleo, separadores ar/óleo, válvulas, kits de reparo e lubrificantes específicos, com orientação técnica de quem mantém essas máquinas na indústria e na mineração todos os dias.",
  qualifiers: serviceQualifiers(),
  image: "/images/sala-de-compressores.jpg",
  imageAlt: "Sala de compressores de parafuso industriais em operação",
  bulletsTitle: "Por que comprar filtros e óleo na Atlas Service",
  bullets: [
    {
      icon: PackageCheck,
      title: "Peças com procedência",
      text: "Peças originais e homologadas, compatíveis com as principais marcas de compressores de parafuso do mercado.",
    },
    {
      icon: Droplets,
      title: "Óleo certo para cada compressor",
      text: "Lubrificantes sintéticos, semissintéticos e minerais, com vida útil de 1.000, 4.000 e 8.000 horas de operação.",
    },
    {
      icon: Timer,
      title: "Pronta entrega na Grande BH",
      text: "Estoque local dos itens de maior giro para reduzir o downtime da sua operação. Enviamos para toda MG.",
    },
  ],
  checklistTitle: "O que você encontra na Atlas Service",
  checklist: [
    "Filtros de ar, óleo e separadores ar/óleo",
    "Óleos lubrificantes específicos para compressor de parafuso",
    "Válvulas de admissão, termostáticas e de pressão mínima",
    "Kits de reparo e vedação",
    "Correias, mangueiras e conexões",
    "Orientação técnica para aplicação correta de cada item",
  ],
  ctaTitle: "Precisa de filtro, peça ou óleo para o seu compressor de parafuso?",
  ctaText:
    "Mande o modelo do seu compressor de parafuso e o item que precisa — respondemos rápido com preço e prazo.",
  ctaMessage: "Olá! Preciso de FILTROS/ÓLEO para compressor de parafuso.",
};

export default function FiltrosOleoPage() {
  return <ServicePage data={data} />;
}
