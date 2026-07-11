import type { Metadata } from "next";
import { CalendarCheck, MapPin, Wrench } from "lucide-react";
import { ServicePage, type ServicePageData } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Manutenção e Assistência Técnica de Compressor de Parafuso | MG",
  description:
    "Manutenção preventiva, corretiva e assistência técnica emergencial para compressores de ar de parafuso. Contratos e chamados avulsos para mineração e indústria na região metropolitana de BH e toda MG.",
};

const data: ServicePageData = {
  badge: "Manutenção / Assistência",
  title: "Manutenção e assistência técnica",
  highlight: "em toda Minas Gerais",
  intro:
    "Equipe própria especializada em compressores de parafuso para manutenção preventiva, corretiva e atendimento emergencial em campo. Atendemos por contrato ou chamado avulso — na sua empresa, em qualquer região de MG.",
  image: "/images/par-de-rotores.jpg",
  imageAlt: "Par de rotores de compressor de parafuso revisado pela Atlas Service",
  bullets: [
    {
      icon: CalendarCheck,
      title: "Preventiva programada",
      text: "Plano de manutenção pelo horímetro da máquina: trocas de óleo, filtros e inspeções no prazo certo, sem parar sua produção.",
    },
    {
      icon: Wrench,
      title: "Corretiva e assistência técnica",
      text: "Diagnóstico rápido e reparo em campo ou em nossa oficina. Prioridade total para máquina parada.",
    },
    {
      icon: MapPin,
      title: "Atendimento em todo o Estado",
      text: "Base na região metropolitana de BH e equipe que viaja: mineração no interior, indústria em todo o Estado — chegamos onde sua operação está.",
    },
  ],
  checklistTitle: "O que cobrimos na assistência técnica",
  checklist: [
    "Manutenção preventiva por horímetro (óleo, filtros, separadores)",
    "Corretivas com diagnóstico em campo",
    "Revisão geral (overhaul) de unidade compressora",
    "Análise de vazamentos e eficiência da rede de ar",
    "Contratos de manutenção com condições especiais",
    "Assistência técnica prioritária para clientes de contrato",
  ],
  ctaTitle: "Compressor parado ou revisão vencendo?",
  ctaText: "Chame agora no WhatsApp: diagnóstico rápido e técnico a caminho da sua empresa.",
  ctaMessage: "Olá! Preciso de MANUTENÇÃO/ASSISTÊNCIA para compressor de parafuso.",
};

export default function ManutencaoPage() {
  return <ServicePage data={data} />;
}
