"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/site/reveal";

// Logos reais de empresas que usam os produtos da Atlas Service.
// Exibidas em preto e branco (grayscale via CSS). Com a seção visível na tela,
// uma logo de cada vez "acende" colorida, em rodízio (pedido do cliente —
// no celular não existe hover). No desktop o hover também colore.
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

  useEffect(() => {
    if (!inView) {
      setActive(-1);
      return;
    }
    setActive(0);
    const id = setInterval(() => {
      setActive((current) => (current + 1) % clients.length);
    }, 1500);
    return () => clearInterval(id);
  }, [inView]);

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
                className={`h-12 w-auto max-w-[180px] object-contain transition-all duration-700 hover:opacity-100 hover:grayscale-0 ${
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
