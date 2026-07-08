import { Star } from "lucide-react";
import {
  TestimonialsColumn,
  firstColumn,
  secondColumn,
  thirdColumn,
} from "@/components/ui/testimonials-columns-1";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { GOOGLE_REVIEW_URL } from "@/lib/site";

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="scroll-mt-24 bg-background py-14">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">
            <span className="h-px w-10 bg-brand-teal" aria-hidden />
            Avaliações
            <span className="h-px w-10 bg-brand-teal" aria-hidden />
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Quem opera com a Atlas recomenda
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Depoimentos de gestores de manutenção, produção e suprimentos que confiam o ar comprimido das
            suas plantas à nossa equipe.
          </p>
        </Reveal>

        <div className="mt-12 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <Reveal className="mx-auto mt-12 max-w-xl" delay={0.1}>
          <div className="flex flex-col items-center rounded-2xl border border-brand-mist bg-white p-8 text-center shadow-sm">
            <div className="flex gap-1" role="img" aria-label="Avaliação 5 estrelas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-brand-ink">
              Avalie-nos no Google
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Já é cliente Atlas Service? Sua avaliação ajuda outras indústrias de MG a encontrarem um
              parceiro confiável de ar comprimido.
            </p>
            <Button className="mt-6" size="lg" asChild>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                Avaliar no Google
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
