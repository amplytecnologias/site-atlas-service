"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BadgeCheck, CalendarClock, Droplets, MoveRight, PhoneCall, ShieldCheck, Tag, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { PhoneLink, WhatsAppLink } from "@/components/site/tracked-links";
import { PHONE_TEL } from "@/lib/site";
import { useLinkWhatsApp } from "@/components/whatsapp-origem";
import { NAO_ATENDEMOS_PISTAO_TEXT, QUALIFICADOR_HOME, SHOW_NAO_ATENDEMOS_PISTAO } from "@/lib/config";

const serviceChips = [
  { icon: CalendarClock, label: "Aluguel com assistência inclusa" },
  { icon: Tag, label: "Venda de máquinas" },
  { icon: Droplets, label: "Filtros e óleo" },
  { icon: Wrench, label: "Manutenção e assistência técnica" },
];

// Faixa técnica: o que define a linha (e já filtra quem procura outro tipo de compressor).
const specStrip = ["Parafuso rotativo", "10 a 120 hp", "8 a 10 bar", "Mineração e indústria"];

const titles = ["Aluguel", "Venda", "Filtros", "Manutenção"];

function Hero() {
  const linkWhatsApp = useLinkWhatsApp();
  const reduceMotion = useReducedMotion();
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((current) => (current + 1) % titles.length);
    }, 2400);
    return () => clearTimeout(timeoutId);
  }, [titleNumber]);

  return (
    <div className="relative w-full overflow-hidden bg-brand-ink">
      {/* Camada de fundo: compressores em operação de mineração + gradiente azul da marca por cima */}
      <div aria-hidden className="absolute inset-0">
        <video
          src="/images/video-hero.mp4"
          poster="/images/hero-compressores.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-brand-dark/45 to-brand/40" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-ink/70 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8 pb-12 pt-28 lg:pb-16 lg:pt-36">
          <div className="flex flex-col gap-4">
            <span className="hero-rise mx-auto inline-flex items-center gap-2 rounded-full border-2 border-teal-light/60 bg-brand-ink/55 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-teal-light shadow-lg shadow-brand-ink/30 backdrop-blur-sm md:text-base">
              <BadgeCheck className="h-5 w-5" aria-hidden />
              16 anos no mercado
            </span>
            <h1 className="mx-auto max-w-3xl text-center font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl md:text-7xl">
              {/* Texto completo para Google e leitores de tela; a palavra animada é só visual */}
              <span className="sr-only">Aluguel, venda, filtros e manutenção </span>
              <span aria-hidden className="relative flex h-[1.4em] w-full justify-center overflow-hidden text-center">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={title}
                    className="absolute font-semibold text-teal-light"
                    initial={false}
                    transition={
                      reduceMotion
                        ? { duration: 0.2 }
                        : { type: "spring", bounce: 0, duration: 0.6 }
                    }
                    animate={
                      titleNumber === index
                        ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                        : reduceMotion
                          ? { y: "0%", opacity: 0, filter: "blur(0px)" }
                          : {
                              y: titleNumber > index ? "-110%" : "110%",
                              opacity: 0,
                              filter: "blur(6px)",
                            }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="block">de compressores de parafuso</span>
              <span className="mt-3 block text-xl font-medium tracking-tight text-brand-mist sm:text-2xl md:text-4xl">
                para indústrias de todo o Brasil
              </span>
            </h1>

            {/* Qualificação: deixa claro para quem é o serviço antes do contato */}
            <p className="hero-rise mx-auto inline-flex w-fit max-w-full items-center gap-2 rounded-2xl border border-teal-light/35 md:rounded-full bg-brand-ink/50 px-4 py-2 text-left text-sm font-semibold text-white backdrop-blur-sm [animation-delay:80ms] md:text-base">
              <ShieldCheck className="h-5 w-5 shrink-0 text-teal-light" aria-hidden />
              <span>
                {QUALIFICADOR_HOME}
                {SHOW_NAO_ATENDEMOS_PISTAO && <> {NAO_ATENDEMOS_PISTAO_TEXT}</>}
              </span>
            </p>

            <p className="hero-rise mx-auto max-w-2xl text-center text-lg leading-relaxed tracking-tight text-brand-mist [animation-delay:140ms] md:text-xl">
              Para mineradoras, indústrias e operações que não podem parar: aluguel com assistência
              técnica inclusa e opção de compra ao final do contrato. Nossa equipe vai até a sua operação.
            </p>
          </div>

          <div className="hero-rise flex w-full max-w-sm flex-col gap-3 [animation-delay:200ms] sm:w-auto sm:max-w-none sm:flex-row">
            <Button
              size="lg"
              className="h-auto min-h-11 w-full gap-3 whitespace-normal bg-whatsapp text-white hover:bg-whatsapp-dark sm:w-auto"
              asChild
            >
              <WhatsAppLink href={linkWhatsApp}>
                <WhatsAppIcon className="h-5 w-5" />
                Orçamento no WhatsApp
                <MoveRight className="h-4 w-4" />
              </WhatsAppLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto min-h-11 w-full gap-3 whitespace-normal border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white sm:w-auto"
              asChild
            >
              <PhoneLink href={PHONE_TEL}>
                Ligar agora <PhoneCall className="h-4 w-4" />
              </PhoneLink>
            </Button>
          </div>

          {/* Faixa técnica — assinatura do hero */}
          <ul
            aria-label="Características da linha de compressores"
            className="hero-rise flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-light/90 [animation-delay:260ms] md:text-xs"
          >
            {specStrip.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-teal-light/60" />}
                {item}
              </li>
            ))}
          </ul>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceChips.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                style={{ animationDelay: `${320 + index * 50}ms` }}
                className="hero-rise flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 shrink-0 text-teal-light" />
                <span className="text-sm font-medium text-white/85">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
