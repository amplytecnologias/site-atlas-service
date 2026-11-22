import type { Metadata } from "next";
import { CalendarCheck, MapPin, Wrench } from "lucide-react";
import { ServicePage, type ServicePageData } from "@/components/site/service-page";
import { serviceQualifiers } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Manutenção de Compressor de Parafuso em MG | Atlas Service",
  description:
    "Manutenção preventiva, corretiva e assistência técnica de compressores de parafuso industriais para mineração e indústria em BH e toda MG.",
  path: "/servicos/manutencao",
});

const data: ServicePageData = {
  path: "/servicos/manutencao",
  schema: ["manutencao"],
  badge: "Manutenção / Assistência",
  title: "Manutenção e assistência técnica",
  highlight: "em toda Minas Gerais",
  // "Equipe especializada" (e não "própria") até o cliente confirmar.
  intro:
    "Equipe especializada em compressores de parafuso para manutenção preventiva, corretiva e atendimento emergencial em campo. Atendemos indústrias e mineradoras que não podem parar, por contrato ou chamado avulso, na sua empresa, em qualquer região de MG.",
  qualifiers: serviceQualifiers(),
  image: "/images/par-de-rotores.jpg",
  imageAlt: "Par de rotores de compressor de parafuso revisado pela Atlas Service",
  bulletsTitle: "Como funciona a manutenção da Atlas Service",
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
  ctaTitle: "Compressor de parafuso parado ou revisão vencendo?",
  ctaText: "Chame agora no WhatsApp: diagnóstico rápido e técnico a caminho da sua empresa.",
  ctaMessage: "Olá! Preciso de MANUTENÇÃO/ASSISTÊNCIA para compressor de parafuso.",
};

export default function ManutencaoPage() {
  return <ServicePage data={data} />;
}
