import Link from "next/link";
import { ArrowRight, CalendarClock, Check, Droplets, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { whatsappLink } from "@/lib/site";

const locacaoVendaBullets = [
  "Locação com assistência técnica e manutenção inclusas",
  "Venda de máquinas revisadas com garantia",
  "Quem aluga pode comprar a máquina ao final do contrato",
];

const otherServices = [
  {
    href: "/servicos/componentes-e-oleo",
    icon: Droplets,
    accent: "text-brand-teal bg-brand-teal/10",
    title: "Componentes e óleo",
    desc: "Filtros, separadores, válvulas, kits de reparo e óleo específico para parafuso — pronta entrega em Betim.",
  },
  {
    href: "/servicos/manutencao",
    icon: Wrench,
    accent: "text-brand-indigo bg-brand-indigo/10",
    title: "Manutenção / Assistência",
    desc: "Preventiva, corretiva e socorro técnico em campo. Atendemos contratos e chamados avulsos em toda MG.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-white py-14">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">
            <span className="h-px w-10 bg-brand-teal" aria-hidden />
            Serviços
            <span className="h-px w-10 bg-brand-teal" aria-hidden />
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Tudo o que sua operação precisa em ar comprimido
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Da locação emergencial ao contrato de manutenção de longo prazo — uma única empresa cuidando do
            seu parque de compressores.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Locação e venda — serviço em destaque */}
          <Reveal className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark via-brand to-brand-dark p-8 text-white shadow-xl shadow-brand/25 md:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-light/15 blur-3xl"
              />
              <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                    Mais procurado
                  </span>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                      <CalendarClock className="h-7 w-7 text-teal-light" />
                    </span>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                      Locação e venda de compressores de parafuso
                    </h3>
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-brand-mist">
                    Todas as nossas máquinas estão disponíveis para locação e também para venda. Alugue sem
                    imobilizar capital — nós instalamos, mantemos e damos assistência durante todo o contrato
                    — ou compre um equipamento revisado com garantia.
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {locacaoVendaBullets.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                        <Check className="h-4 w-4 shrink-0 text-teal-light" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <Button size="lg" className="w-full gap-2 bg-white text-brand-dark hover:bg-brand-mist md:w-auto" asChild>
                    <Link href="/servicos/locacao-e-venda">
                      Conheça as máquinas disponíveis <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full gap-2 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white md:w-auto"
                    asChild
                  >
                    <a
                      href={whatsappLink("Olá! Quero um orçamento de compressor de parafuso (locação ou venda).")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-4 w-4" /> Orçamento no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {otherServices.map((service, index) => (
            <Reveal key={service.href} delay={0.08 * (index + 1)}>
              <div className="group flex h-full flex-col rounded-2xl border border-brand-mist bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/10">
                <span className={`flex h-13 w-13 items-center justify-center rounded-xl p-3 ${service.accent}`}>
                  <service.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-ink">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors group-hover:text-brand-dark"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
