import type { Metadata } from "next";
import { Droplets, PackageCheck, Timer } from "lucide-react";
import { ServicePage, type ServicePageData } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Filtros e Óleo para Compressor de Parafuso | BH e MG",
  description:
    "Filtros, separadores ar/óleo, válvulas, kits de reparo e óleo lubrificante para compressores de parafuso. Pronta entrega na região metropolitana de BH para toda Minas Gerais.",
};

const data: ServicePageData = {
  badge: "Filtros e Óleo",
  title: "Filtros e óleo",
  highlight: "para compressores de parafuso",
  intro:
    "Filtros de ar e de óleo, separadores ar/óleo, válvulas, kits de reparo e lubrificantes específicos para compressores de parafuso — com orientação técnica de quem mantém essas máquinas todos os dias.",
  image: "/images/sala-de-compressores.jpg",
  imageAlt: "Sala de compressores de parafuso montada pela Atlas Service",
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
  ctaTitle: "Precisa de filtro, peça ou óleo com urgência?",
  ctaText: "Mande o modelo do seu compressor e o item que precisa — respondemos rápido com preço e prazo.",
  ctaMessage: "Olá! Preciso de FILTROS/ÓLEO para compressor de parafuso.",
};

export default function FiltrosOleoPage() {
  return <ServicePage data={data} />;
}
