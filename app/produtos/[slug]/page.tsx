import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/site/product-gallery";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { WhatsAppLink } from "@/components/site/tracked-links";
import { availabilityNote, getProduct, products, productWhatsAppMessage } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const hp = product.quickSpecs.find((spec) => spec.label === "Potência")?.value ?? "";
  const vazao = product.quickSpecs.find((spec) => spec.label === "Vazão")?.value ?? "";
  const model = product.name.replace("Compressor de Parafuso ", "");
  return pageMetadata({
    title: `${product.name}: Venda e Locação em MG`,
    description: `Compressor de parafuso ${model} de ${hp}, ${vazao}, 8 a 10 bar. Venda e locação com assistência técnica para indústria e mineração em MG.`,
    path: `/produtos/${slug}`,
  });
}

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const whatsappUrl = whatsappLink(productWhatsAppMessage(product.name));
  const model = product.name.replace("Compressor de Parafuso ", "");

  return (
    <>
      {/* Apresentação do produto */}
      <section className="pb-10 pt-28">
        <div className="container mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gray">
            <Link href="/" className="transition-colors hover:text-brand">
              Home
            </Link>
            <span className="mx-2" aria-hidden>/</span>
            <Link href="/#produtos" className="transition-colors hover:text-brand">
              Produtos
            </Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-brand-dark">{product.name}</span>
          </nav>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <ProductGallery
                images={product.gallery?.length ? product.gallery : [product.image]}
                alt={product.imageAlt}
                badge={product.category}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
                <Check className="h-3.5 w-3.5" />
                {product.availability}
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="mt-5 rounded-xl border border-brand-teal/30 bg-brand-teal/5 px-4 py-3.5">
                <p className="text-sm leading-relaxed text-brand-dark">{availabilityNote(product)}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {product.quickSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl border border-brand-mist bg-white px-4 py-3 shadow-sm"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-gray">
                      {spec.label}
                    </p>
                    <p className="mt-0.5 font-display text-lg font-extrabold text-brand-dark">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-auto min-h-11 w-full gap-3 whitespace-normal bg-whatsapp text-white hover:bg-whatsapp-dark sm:w-auto"
                  asChild
                >
                  <WhatsAppLink href={whatsappUrl}>
                    <WhatsAppIcon className="h-5 w-5" />
                    Tenho interesse neste produto
                  </WhatsAppLink>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-auto min-h-11 w-full gap-2 whitespace-normal sm:w-auto"
                  asChild
                >
                  <Link href="/servicos/locacao-e-venda">
                    Como funciona a locação <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Você será direcionado ao WhatsApp com a mensagem pronta sobre este modelo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Especificações técnicas */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <h2 className="flex items-center gap-3 font-display text-2xl font-extrabold tracking-tight text-brand-ink md:text-3xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <ClipboardList className="h-6 w-6" />
                </span>
                Especificações técnicas
              </h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-mist">
                <dl>
                  {product.specs.map((spec, index) => (
                    <div
                      key={spec.label}
                      className={`grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-[220px_1fr] sm:gap-4 ${
                        index % 2 === 0 ? "bg-background" : "bg-white"
                      }`}
                    >
                      <dt className="text-sm font-semibold text-brand-dark">{spec.label}</dt>
                      <dd className="text-sm text-brand-ink">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Valores de referência — confirme a configuração exata do modelo disponível no orçamento.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-ink md:text-3xl">
                Aplicações típicas
              </h2>
              <ul className="mt-6 space-y-3.5">
                {product.applications.map((application) => (
                  <li key={application} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="font-medium text-brand-ink">{application}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-2 text-sm">
                <Link href="/servicos/manutencao" className="inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark">
                  Manutenção do compressor de parafuso {model} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/servicos/filtros-e-oleo" className="inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark">
                  Filtros e óleo para compressor de parafuso <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-ink to-brand-dark p-7 text-white">
                <h3 className="font-display text-lg font-bold tracking-tight">
                  Na dúvida sobre o dimensionamento?
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-mist">
                  Envie sua demanda de ar (vazão e pressão) e indicamos o modelo certo — sem
                  superdimensionar seu investimento.
                </p>
                <Button className="mt-5 h-auto min-h-10 w-full gap-2 whitespace-normal bg-whatsapp text-white hover:bg-whatsapp-dark" asChild>
                  <WhatsAppLink href={whatsappUrl}>
                    <WhatsAppIcon className="h-4 w-4" />
                    Falar com um especialista
                  </WhatsAppLink>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Outros produtos */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-ink md:text-3xl">
                Outros produtos
              </h2>
              <Link
                href="/#produtos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Ver todos os compressores de parafuso <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={0.08 * index}>
                <Link href={`/produtos/${item.slug}`} className="group flex h-full flex-col">
                  <div className="overflow-hidden rounded-2xl border border-brand/25 bg-white p-2.5 lift-card group-hover:border-brand">
                    <div className="relative h-40 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-1 flex-col items-center text-center">
                    <h3 className="font-display text-base font-extrabold tracking-tight text-brand-dark">
                      {item.name}
                    </h3>
                    <span className="mt-3 inline-flex items-center justify-center rounded-full border-2 border-brand px-7 py-1.5 text-sm font-bold text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                      Ficha técnica
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
