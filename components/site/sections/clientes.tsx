import { Reveal } from "@/components/site/reveal";

// Logos reais de empresas que usam os produtos da Atlas Service.
// Exibidas em preto e branco (grayscale via CSS); a cor aparece no hover.
const clients = [
  { name: "Ical", logo: "/clientes/ical.webp" },
  { name: "Aethra Automotive Systems", logo: "/clientes/aethra.png" },
  { name: "ArcelorMittal", logo: "/clientes/arcelormittal.svg" },
  { name: "Cedro Mineração", logo: "/clientes/cedro-mineracao.png" },
];

export function Clientes() {
  return (
    <section className="border-y border-brand-mist/60 bg-background py-10">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-brand-gray">
            Nossos clientes
          </p>
          <p className="mt-2 text-center font-display text-xl font-bold tracking-tight text-brand-ink md:text-2xl">
            Quem confia o ar comprimido da operação à Atlas Service
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={`Logo ${client.name}`}
                loading="lazy"
                className="h-12 w-auto max-w-[180px] object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
