import type { Metadata } from "next";
import { CalendarCheck, MapPin, Wrench } from "lucide-react";
import { ServicePage, type ServicePageData } from "@/components/site/service-page";

export const metadata: Metadata = {
  title: "Manutenção e Assistência Técnica de Compressor de Parafuso | MG",
  description:
    "Manutenção preventiva, corretiva e socorro técnico para compressores de ar de parafuso. Contratos e chamados avulsos para mineração e indústria em Betim, BH e toda MG.",
};

const data: ServicePageData = {
  badge: "Manutenção / Assistência",
  title: "Manutenção e assistência técnica",
  highlight: "em toda Minas Gerais",
  intro:
    "Equipe própria especializada em compressores de parafuso para manutenção preventiva, corretiva e socorro em campo. Atendemos por contrato ou chamado avulso — na sua planta, em qualquer região de MG.",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=75",
  imageAlt: "Profissional de manutenção industrial trabalhando em equipamento",
  bullets: [
    {
      icon: CalendarCheck,
      title: "Preventiva programada",
      text: "Plano de manutenção pelo horímetro da máquina: trocas de óleo, filtros e inspeções no prazo certo, sem parar sua produção.",
    },
    {
      icon: Wrench,
      title: "Corretiva e socorro",
      text: "Diagnóstico rápido e reparo em campo ou em nossa oficina. Prioridade total para máquina parada.",
    },
    {
      icon: MapPin,
      title: "Atendimento em todo o estado",
      text: "Base em Betim e equipe que viaja: mineração no interior, indústria na Grande BH — chegamos onde sua operação está.",
    },
  ],
  checklistTitle: "O que cobrimos na assistência técnica",
  checklist: [
    "Manutenção preventiva por horímetro (óleo, filtros, separadores)",
    "Corretivas com diagnóstico em campo",
    "Revisão geral (overhaul) de unidade compressora",
    "Análise de vazamentos e eficiência da rede de ar",
    "Contratos de manutenção com condições especiais",
    "Socorro técnico prioritário para clientes de contrato",
  ],
  ctaTitle: "Compressor parado ou revisão vencendo?",
  ctaText: "Chame agora no WhatsApp: diagnóstico rápido e técnico a caminho da sua planta.",
  ctaMessage: "Olá! Preciso de MANUTENÇÃO/ASSISTÊNCIA para compressor de parafuso.",
};

export default function ManutencaoPage() {
  return <ServicePage data={data} />;
}
