import Link from "next/link";
import { Reveal } from "@/components/site/reveal";
import { products } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export function Produtos() {
  return (
    <section id="produtos" className="scroll-mt-24 py-14">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">
            <span className="h-px w-10 bg-brand-teal" aria-hidden />
            Produtos
            <span className="h-px w-10 bg-brand-teal" aria-hidden />
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Máquinas prontas para entrar em operação
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Compressores de parafuso Atlas Service revisados, disponíveis para venda e também para locação.
            Clique no modelo para ver todas as especificações técnicas.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={0.07 * index}>
              <Link href={`/produtos/${product.slug}`} className="group flex h-full flex-col">
                <div className="relative overflow-hidden rounded-2xl border border-brand/25 bg-white p-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand group-hover:shadow-xl group-hover:shadow-brand/15">
                  <div className="relative h-52 overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-brand-ink/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex flex-1 flex-col items-center text-center">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-brand-dark">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-brand-gray">
                    {product.quickSpecs.map((spec) => spec.value).join(" · ")}
                  </p>
                  <span className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-brand px-9 py-2 text-sm font-bold text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                    Ficha técnica
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={0.2}>
          <p className="text-sm text-muted-foreground">
            Não encontrou o modelo ideal? Trabalhamos com outras potências e configurações —{" "}
            <a
              href={whatsappLink("Olá! Procuro um compressor de parafuso com uma configuração específica. Podem me ajudar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline-offset-4 hover:underline"
            >
              fale com a gente no WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
