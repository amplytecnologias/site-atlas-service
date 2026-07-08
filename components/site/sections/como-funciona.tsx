import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { whatsappLink } from "@/lib/site";

const steps = [
  {
    number: "01",
    title: "Diagnóstico da demanda",
    text: "Você nos conta a necessidade — vazão, pressão e regime de trabalho — pelo WhatsApp ou em visita técnica à planta.",
  },
  {
    number: "02",
    title: "Proposta sob medida",
    text: "Indicamos a máquina certa e enviamos uma proposta de locação clara, sem burocracia e sem custo escondido.",
  },
  {
    number: "03",
    title: "Entrega e partida",
    text: "Levamos o compressor até a sua operação em qualquer região de MG, instalamos e fazemos a partida assistida.",
  },
  {
    number: "04",
    title: "Operação sem preocupação",
    text: "Manutenção e assistência técnica inclusas durante todo o contrato — e opção de compra da máquina ao final.",
  },
];

export function ComoFunciona() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-14 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(202,213,230,0.12)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-teal-light">
            <span className="h-px w-10 bg-teal-light" aria-hidden />
            Como funciona o aluguel
            <span className="h-px w-10 bg-teal-light" aria-hidden />
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Da primeira conversa ao ar comprimido rodando
          </h2>
          <p className="mt-4 leading-relaxed text-brand-mist">
            Processo direto, pensado para quem tem produção esperando. Em poucos dias sua operação está
            abastecida.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={0.1 * index}>
              <div className="relative border-t-2 border-white/15 pt-6">
                <span
                  className="absolute -top-[2px] left-0 h-[2px] w-12 bg-teal-light"
                  aria-hidden
                />
                <span className="font-display text-5xl font-extrabold text-white/15">{step.number}</span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-mist">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={0.2}>
          <Button size="lg" className="gap-3 bg-whatsapp text-white hover:bg-whatsapp-dark" asChild>
            <a
              href={whatsappLink("Olá! Quero entender como funciona o aluguel de compressor de parafuso da Atlas Service.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Começar meu orçamento agora
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
