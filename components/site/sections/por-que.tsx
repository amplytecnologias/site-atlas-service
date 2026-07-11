import { BadgeCheck, HardHat, MapPin, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { whatsappLink } from "@/lib/site";

const differentials = [
  {
    icon: Wrench,
    accent: "border-brand-teal text-brand-teal bg-brand-teal/10",
    title: "Assistência técnica inclusa",
    text: "No aluguel, manutenção preventiva e corretiva já fazem parte do contrato. Problema na máquina é problema nosso.",
  },
  {
    icon: BadgeCheck,
    accent: "border-brand-indigo text-brand-indigo bg-brand-indigo/10",
    title: "Opção de compra no final",
    text: "Você testa a máquina rodando na sua operação e, se fizer sentido, ela fica sua ao final do contrato — em condições especiais.",
  },
  {
    icon: MapPin,
    accent: "border-brand text-brand bg-brand/10",
    title: "Atendimento em toda MG",
    text: "Base na região metropolitana de BH, na porta da região industrial, e equipe que viaja para qualquer canto do Estado.",
  },
  {
    icon: Zap,
    accent: "border-brand-teal text-brand-teal bg-brand-teal/10",
    title: "Resposta rápida",
    text: "Compressor parado é produção parada. Priorizamos o atendimento emergencial e a reposição de máquina em campo.",
  },
  {
    icon: HardHat,
    accent: "border-brand-indigo text-brand-indigo bg-brand-indigo/10",
    title: "Especialistas no seu setor",
    text: "Mineração, siderurgia e indústria pesada são o nosso dia a dia. Falamos a língua da sua operação.",
  },
];

export function PorQue() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">
            <span className="h-px w-10 bg-brand-teal" aria-hidden />
            Por que a Atlas Service
            <span className="h-px w-10 bg-brand-teal" aria-hidden />
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Mais que fornecedor: parceiro da sua produção
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={0.07 * index}>
              <div className={`h-full rounded-2xl border-l-4 bg-background p-7 shadow-sm transition-shadow duration-300 hover:shadow-md ${item.accent.split(" ")[0]}`}>
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.accent.split(" ").slice(1).join(" ")}`}>
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-brand-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.35}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-ink to-brand-dark p-7 text-white shadow-lg">
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight">Fale direto com quem resolve</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-mist">
                  Sem fila de atendimento. Seu orçamento cai no WhatsApp de quem conhece as máquinas de verdade.
                </p>
              </div>
              <Button className="mt-6 gap-2 bg-whatsapp text-white hover:bg-whatsapp-dark" asChild>
                <a
                  href={whatsappLink("Olá! Quero falar sobre compressores de parafuso para a minha operação.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
