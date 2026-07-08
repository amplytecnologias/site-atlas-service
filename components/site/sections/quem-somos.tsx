import { Check, Gauge } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const checklist = [
  "Locação com assistência técnica inclusa no contrato",
  "Opção de compra da máquina ao final da locação",
  "Equipe própria especializada em compressores de parafuso",
  "Base em Betim/MG com atendimento em todo o estado",
];

export function QuemSomos() {
  return (
    <section id="sobre" className="scroll-mt-24 py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-brand-mist md:block" aria-hidden />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=75"
              alt="Máquina industrial em operação — ambiente típico dos clientes da Atlas Service"
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-brand-ink/15"
              loading="lazy"
            />
            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-xl bg-brand-ink px-5 py-4 text-white shadow-lg md:right-8">
              <Gauge className="h-8 w-8 text-teal-light" />
              <div>
                <p className="font-display text-xl font-extrabold leading-none">Mineração e indústria</p>
                <p className="mt-1 text-xs text-brand-mist">Foco total em operação pesada</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">
              <span className="h-px w-10 bg-brand-teal" aria-hidden />
              Quem somos
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Especialistas em ar comprimido para quem não pode parar
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A Atlas Service nasceu em Betim/MG para resolver o problema mais caro da indústria: máquina
              parada por falta de ar comprimido. Trabalhamos exclusivamente com compressores de ar de
              parafuso — alugamos, vendemos, fornecemos componentes e óleo e cuidamos da manutenção.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nosso foco é o B2B: mineradoras, siderúrgicas, metalúrgicas e plantas industriais de todos os
              portes. Atendemos toda Minas Gerais e viajamos até a sua operação, do orçamento à partida da
              máquina.
            </p>
            <ul className="mt-7 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-brand-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
