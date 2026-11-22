import { Plus } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { JsonLd } from "@/components/site/structured-data";
import { faq, faqJsonLd } from "@/lib/faq";

// Perguntas frequentes — acordeão nativo (<details>), sem JavaScript.
// O conteúdo é o mesmo do JSON-LD FAQPage.
export function Faq() {
  return (
    <section aria-labelledby="faq-titulo" className="bg-white py-14">
      <JsonLd data={faqJsonLd(faq)} />
      <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">
            <span className="h-px w-10 bg-brand-teal" aria-hidden />
            Perguntas frequentes
          </p>
          <h2
            id="faq-titulo"
            className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl"
          >
            Antes de pedir seu orçamento
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Respostas diretas sobre locação, manutenção e atendimento de compressores de ar de parafuso
            industriais em Minas Gerais.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-brand-mist border-y border-brand-mist">
            {faq.map((item) => (
              <details key={item.question} className="faq-item group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-base font-bold tracking-tight text-brand-ink transition-colors hover:text-brand md:text-lg [&::-webkit-details-marker]:hidden">
                  <h3>{item.question}</h3>
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-200 ease-[var(--ease-out)] group-open:rotate-45"
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="faq-answer pb-5 pr-12 leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
