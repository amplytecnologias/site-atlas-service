import type { Metadata } from "next";
import { Droplets, PackageCheck, Timer } from "lucide-react";
import { ServicePage, type ServicePageData } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Componentes e Óleo para Compressor de Parafuso | Betim e MG",
  description:
    "Filtros, separadores ar/óleo, válvulas, kits de reparo e óleo lubrificante para compressores de parafuso. Pronta entrega em Betim para BH e toda Minas Gerais.",
};

const data: ServicePageData = {
  badge: "Componentes e Óleo",
  title: "Componentes e óleo",
  highlight: "para compressores de parafuso",
  intro:
    "Filtros de ar e de óleo, separadores ar/óleo, válvulas, kits de reparo e lubrificantes específicos para parafuso — com orientação técnica de quem mantém essas máquinas todos os dias.",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=75",
  imageAlt: "Ambiente industrial com equipamentos e insumos de manutenção",
  bullets: [
    {
      icon: PackageCheck,
      title: "Peças com procedência",
      text: "Componentes originais e homologados, compatíveis com as principais marcas de compressores de parafuso do mercado.",
    },
    {
      icon: Droplets,
      title: "Óleo certo para cada máquina",
      text: "Lubrificantes específicos para parafuso, na viscosidade e especificação corretas — o barato errado custa um elemento de compressão.",
    },
    {
      icon: Timer,
      title: "Pronta entrega em Betim",
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
  ctaTitle: "Precisa de peça ou óleo com urgência?",
  ctaText: "Mande o modelo do seu compressor e o item que precisa — respondemos rápido com preço e prazo.",
  ctaMessage: "Olá! Preciso de COMPONENTES/ÓLEO para compressor de parafuso.",
};

export default function ComponentesPage() {
  return <ServicePage data={data} />;
}
