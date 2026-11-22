import { NAO_ATENDEMOS_PISTAO_TEXT, SHOW_NAO_ATENDEMOS_PISTAO } from "@/lib/config";

// Perguntas frequentes da home. A mesma lista alimenta a seção visível e o
// JSON-LD FAQPage (o Google exige que o conteúdo marcado esteja na página).
// Só usar fatos que já estão no site.
export type FaqItem = { question: string; answer: string };

const baseFaq: FaqItem[] = [
  {
    question: "Vocês alugam compressor de parafuso?",
    answer:
      "Sim. Toda a nossa linha de compressores de ar de parafuso, de 10 a 120 hp, está disponível para locação e também para venda. Os contratos podem ser emergenciais, mensais ou de longo prazo.",
  },
  {
    question: "A manutenção está inclusa na locação?",
    answer:
      "Sim. Na locação, manutenção preventiva, corretiva e atendimento emergencial já fazem parte do contrato, com parcela mensal fixa, sem surpresa com peça, óleo ou mão de obra.",
  },
  {
    question: "Atendem em toda Minas Gerais?",
    answer:
      "Sim. Nossa base fica na região metropolitana de BH e a equipe viaja para atender mineração e indústria em todo o Estado de Minas Gerais.",
  },
  {
    question: "Posso comprar o compressor ao final da locação?",
    answer:
      "Sim. Quem aluga pode comprar a máquina ao final do contrato, em condições especiais.",
  },
  {
    question: "Vocês atendem compressores de parafuso de outras marcas?",
    answer:
      "Sim. Além da nossa linha, vendemos, alugamos e damos assistência técnica em compressores de parafuso de diversas marcas, potências e configurações.",
  },
];

const pistaoFaq: FaqItem = {
  question: "Trabalham com compressor de pistão?",
  answer: `Não. Trabalhamos exclusivamente com compressores de ar de parafuso industriais. ${NAO_ATENDEMOS_PISTAO_TEXT}`,
};

export const faq: FaqItem[] = SHOW_NAO_ATENDEMOS_PISTAO ? [...baseFaq, pistaoFaq] : baseFaq;

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
