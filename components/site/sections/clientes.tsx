"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/site/reveal";

// Logos reais de empresas que usam os produtos da Atlas Service.
// Exibidas em preto e branco (grayscale via CSS). Quando a seção aparece na
// tela, cada logo "acende" colorida uma vez, em sequência da primeira à última,
// e a animação termina (pedido do cliente — roda uma única vez, sem loop).
// No desktop o hover também colore.
const clients = [
  { name: "Ical", logo: "/clientes/ical.webp" },
  { name: "Aethra Automotive Systems", logo: "/clientes/aethra.png" },
  { name: "ArcelorMittal", logo: "/clientes/arcelormittal.svg" },
  { name: "Cedro Mineração", logo: "/clientes/cedro-mineracao.png" },
];

export function Clientes() {
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { amount: 0.5 });
  const [active, setActive] = useState(-1);
  const played = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!inView || played.current) return;
    played.current = true;
    setActive(0);
    intervalRef.current = setInterval(() => {
      setActive((current) => {
        if (current >= clients.length - 1) {
          clearInterval(intervalRef.current);
          return -1; // apaga a última e encerra
        }
        return current + 1;
      });
    }, 900);
  }, [inView]);

  // Limpa o timer apenas se a página for trocada no meio da sequência.
  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <section className="border-y border-brand-mist/60 bg-background py-10">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-brand-gray">
            Nossos clientes
          </p>
          <p className="mt-2 text-center font-display text-xl font-bold tracking-tight text-brand-ink md:text-2xl">
            Quem confia o ar comprimido da operação à Atlas Service
          </p>
          <div ref={listRef} className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {clients.map((client, index) => (
              <img
                key={client.name}
                src={client.logo}
                alt={`Logo ${client.name}`}
                loading="lazy"
                className={`h-12 w-auto max-w-[180px] object-contain transition-all duration-400 hover:opacity-100 hover:grayscale-0 ${
                  active === index ? "scale-110 opacity-100 grayscale-0" : "opacity-75 grayscale"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
