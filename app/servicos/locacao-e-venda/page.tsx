import type { Metadata } from "next";
import { Repeat, ShieldCheck, Wrench } from "lucide-react";
import { ServicePage, type ServicePageData } from "@/components/site/service-page";
import { Produtos } from "@/components/site/sections/produtos";

export const metadata: Metadata = {
  title: "Locação e Venda de Compressor de Parafuso em Betim, BH e MG",
  description:
    "Compressores de ar de parafuso Atlas Service revisados, disponíveis para locação com assistência técnica inclusa e para venda com garantia. Atendemos Betim, BH e toda Minas Gerais.",
};

const data: ServicePageData = {
  badge: "Locação e venda",
  title: "Locação e venda de compressores de parafuso",
  highlight: "revisados e com garantia",
  intro:
    "Todas as nossas máquinas estão disponíveis tanto para locação quanto para venda. Você escolhe: aluguel sem imobilizar capital, com manutenção e assistência por nossa conta, ou compra de um equipamento revisado com garantia — nos dois casos, entregamos, instalamos e fazemos a partida assistida em toda MG.",
  image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=75",
  imageAlt: "Técnico industrial acompanhando compressor de parafuso em operação",
  bullets: [
    {
      icon: Wrench,
      title: "Locação com tudo incluso",
      text: "Na locação, preventivas, corretivas e atendimento emergencial já fazem parte do contrato. Parcela mensal fixa, sem surpresa com peça, óleo ou mão de obra.",
    },
    {
      icon: ShieldCheck,
      title: "Venda com garantia",
      text: "Máquinas revisadas em nossa oficina, com laudo técnico e garantia. Dimensionamos sua demanda de ar para você comprar a máquina certa, não a mais cara.",
    },
    {
      icon: Repeat,
      title: "Flexibilidade total",
      text: "Todo equipamento à venda também está disponível para locação — e quem aluga pode comprar a máquina ao final do contrato, com condições especiais.",
    },
  ],
  checklistTitle: "Como funciona na Atlas Service",
  checklist: [
    "Dimensionamento gratuito da demanda de ar (vazão e pressão)",
    "Contratos de locação flexíveis: emergencial, mensal ou de longo prazo",
    "Máquinas revisadas com laudo técnico e garantia",
    "Entrega, instalação e partida assistida em toda MG",
    "Assistência técnica e manutenção inclusas durante a locação",
    "Opção de compra do equipamento ao final do contrato",
  ],
  ctaTitle: "Precisa de ar comprimido na sua planta?",
  ctaText:
    "Mande sua necessidade agora e receba uma proposta de locação ou venda sob medida para mineração, obra ou indústria.",
  ctaMessage: "Olá! Quero um orçamento de compressor de parafuso (locação ou venda).",
};

export default function LocacaoEVendaPage() {
  return (
    <ServicePage data={data}>
      <Produtos />
    </ServicePage>
  );
}
