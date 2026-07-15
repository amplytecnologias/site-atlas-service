import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { whatsappLink } from "@/lib/site";

export type ServicePageData = {
  badge: string;
  title: string;
  highlight: string;
  intro: string;
  image: string;
  imageAlt: string;
  bullets: { icon: LucideIcon; title: string; text: string }[];
  checklistTitle: string;
  checklist: string[];
  ctaTitle: string;
  ctaText: string;
  ctaMessage: string;
};

export function ServicePage({ data, children }: { data: ServicePageData; children?: React.ReactNode }) {
  return (
    <>
      {/* Cabeçalho da página */}
      <section className="relative overflow-hidden bg-brand-ink pb-12 pt-32 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(202,213,230,0.12)_1px,transparent_1px)] [background-size:28px_28px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/40 blur-3xl"
        />
        <div className="container relative mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gray">
            <Link href="/" className="transition-colors hover:text-teal-light">
              Home
            </Link>
            <span className="mx-2" aria-hidden>/</span>
            <span>Serviços</span>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-brand-mist">{data.badge}</span>
          </nav>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            {data.title} <span className="text-teal-light">{data.highlight}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-mist">{data.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-auto min-h-11 w-full gap-3 whitespace-normal bg-whatsapp text-white hover:bg-whatsapp-dark sm:w-auto"
              asChild
            >
              <a href={whatsappLink(data.ctaMessage)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Orçamento no WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto min-h-11 w-full gap-3 whitespace-normal border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white sm:w-auto"
              asChild
            >
              <Link href="/#servicos">
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {data.bullets.map((bullet, index) => (
              <Reveal key={bullet.title} delay={0.08 * index}>
                <div className="h-full rounded-2xl border border-brand-mist bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <bullet.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 font-display text-lg font-bold tracking-tight text-brand-ink">
                    {bullet.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{bullet.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhes + imagem */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <img
                src={data.image}
                alt={data.imageAlt}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-brand-ink/15"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-ink md:text-3xl">
                {data.checklistTitle}
              </h2>
              <ul className="mt-6 space-y-3.5">
                {data.checklist.map((item) => (
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

      {/* Conteúdo extra da página (ex.: catálogo de máquinas) */}
      {children}

      {/* CTA final */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-brand to-brand-dark px-8 py-14 text-center text-white shadow-xl shadow-brand/25 md:px-16">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-teal-light/15 blur-3xl"
              />
              <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                {data.ctaTitle}
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-brand-mist">{data.ctaText}</p>
              <div className="relative mt-8 flex justify-center">
                <Button
                  size="lg"
                  className="h-auto min-h-11 w-full max-w-md gap-3 whitespace-normal bg-whatsapp text-white hover:bg-whatsapp-dark sm:w-auto"
                  asChild
                >
                  <a href={whatsappLink(data.ctaMessage)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5" />
                    Faça seu orçamento no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
