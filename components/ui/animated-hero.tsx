"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarClock, Droplets, MoveRight, PhoneCall, Tag, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { DEFAULT_WHATSAPP_MESSAGE, PHONE_TEL, whatsappLink } from "@/lib/site";

const serviceChips = [
  { icon: CalendarClock, label: "Aluguel com assistência inclusa" },
  { icon: Tag, label: "Venda de máquinas" },
  { icon: Droplets, label: "Componentes e óleo" },
  { icon: Wrench, label: "Manutenção e socorro técnico" },
];

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Aluguel", "Venda", "Componentes", "Manutenção"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative w-full overflow-hidden bg-brand-ink">
      {/* Camada de fundo: compressores em operação de mineração + gradiente azul da marca por cima */}
      <div aria-hidden className="absolute inset-0">
        <img
          src="/images/hero-compressores.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/90 via-brand-dark/80 to-brand/65" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-ink/85 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8 pb-12 pt-28 lg:pb-16 lg:pt-36">
          <div className="flex flex-col gap-4">
            <h1 className="mx-auto max-w-3xl text-center font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl md:text-7xl">
              <span className="relative flex h-[1.4em] w-full justify-center overflow-hidden text-center">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-teal-light"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={titleNumber === index ? { y: 0, opacity: 1 } : { y: titleNumber > index ? -150 : 150, opacity: 0 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="block">de compressores de parafuso</span>
              <span className="mt-3 block text-xl font-medium tracking-tight text-brand-mist sm:text-2xl md:text-4xl">
                em Betim e para toda Minas Gerais
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed tracking-tight text-brand-mist md:text-xl">
              Alugue com assistência técnica inclusa e opção de compra ao final do contrato.
              Atendemos mineração e indústria em todo o estado — nossa equipe vai até a sua operação.
            </p>
          </div>

          <div className="flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="w-full gap-3 bg-whatsapp text-white hover:bg-whatsapp-dark sm:w-auto" asChild>
              <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Orçamento no WhatsApp
                <MoveRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-3 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white sm:w-auto"
              asChild
            >
              <a href={PHONE_TEL}>
                Ligar agora <PhoneCall className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-6 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceChips.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm"
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
