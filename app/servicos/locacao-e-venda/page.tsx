import type { Metadata } from "next";
import { Repeat, ShieldCheck, Wrench } from "lucide-react";
import { ServicePage, type ServicePageData } from "@/components/site/service-page";
import { Produtos } from "@/components/site/sections/produtos";
import { serviceQualifiers } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Locação e Venda de Compressor de Parafuso em BH e MG",
  description:
    "Locação de compressor de parafuso com manutenção inclusa e venda com garantia, de 10 a 120 hp. Para mineração e indústria em BH e Minas Gerais.",
  path: "/servicos/locacao-e-venda",
});

const data: ServicePageData = {
  path: "/servicos/locacao-e-venda",
  schema: ["locacao", "venda"],
  badge: "Locação e venda",
  title: "Locação e venda de compressores de parafuso",
  highlight: "revisados e com garantia",
  intro:
    "Todas as nossas máquinas estão disponíveis tanto para locação quanto para venda. Você escolhe: aluguel sem imobilizar capital, com manutenção e assistência por nossa conta, ou compra de um equipamento revisado com garantia. Nos dois casos, entregamos, instalamos e fazemos a entrega técnica na sua operação.",
  // Inclui "Locação a partir de R$ 3.000 por mês." só se SHOW_PRECO_MINIMO = true.
  qualifiers: serviceQualifiers({ precoMinimo: true }),
  image: "/images/pecas-compressores.jpg",
  imageAlt: "Peças e kits de filtros para compressores de parafuso",
  bulletsTitle: "Vantagens da locação e da compra com a Atlas Service",
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
    "Transporte, instalação e entrega técnica na sua operação",
    "Assistência técnica e manutenção inclusas durante a locação",
    "Opção de compra do equipamento ao final do contrato",
  ],
  ctaTitle: "Precisa de ar comprimido na sua indústria ou mineradora?",
  ctaText:
    "Mande sua necessidade agora e receba uma proposta de locação ou venda de compressor de parafuso sob medida para a sua operação.",
  ctaMessage: "Olá! Quero um orçamento de compressor de parafuso (locação ou venda).",
};

export default function LocacaoEVendaPage() {
  return (
    <ServicePage data={data}>
      <Produtos />
    </ServicePage>
  );
}
