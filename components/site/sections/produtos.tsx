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
            Nossa linha de compressores de parafuso rotativo, de 10 a 120 hp, disponível para venda e
            também para locação. Clique no modelo para ver todas as especificações técnicas.
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

        {/* Destaque: atendemos outras marcas e modelos além da linha própria */}
        <Reveal className="mt-12" delay={0.2}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-ink via-brand-dark to-brand px-6 py-10 text-center text-white shadow-xl shadow-brand/20 md:px-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-light/50 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-light backdrop-blur-sm">
              Não encontrou o que procura?
            </span>
            <h3 className="mx-auto mt-4 max-w-2xl font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              Trabalhamos com outras marcas e modelos
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              Além da nossa linha, vendemos, alugamos e damos assistência técnica em compressores de
              parafuso de diversas marcas, potências e configurações. Conte sua demanda que a gente
              encontra a máquina certa.
            </p>
            <a
              href={whatsappLink("Olá! Procuro um compressor de parafuso de outra marca/modelo. Podem me ajudar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-whatsapp px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-whatsapp-dark"
            >
              Consultar outras marcas e modelos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
