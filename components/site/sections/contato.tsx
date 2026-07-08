import type { ComponentType } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { ContactMapLazy } from "@/components/site/contact-map-lazy";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { ADDRESS, DEFAULT_WHATSAPP_MESSAGE, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/site";

type ContactItem = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    icon: Phone,
    label: "Telefone",
    value: PHONE_DISPLAY,
    href: PHONE_TEL,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Orçamento direto com o dono",
    href: whatsappLink(DEFAULT_WHATSAPP_MESSAGE),
    external: true,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: ADDRESS,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg. a sex., 7h30 às 17h30 — plantão para contratos",
  },
];

export function Contato() {
  return (
    <section id="contato" className="scroll-mt-24 bg-white py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">
              <span className="h-px w-10 bg-brand-teal" aria-hidden />
              Contato
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Fale com a Atlas Service
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Conte sua necessidade de ar comprimido e receba um orçamento rápido. Se preferir, venha nos
              visitar em Betim.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const content = (
                  <span className="flex items-start gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-brand-gray">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium leading-snug text-brand-ink">
                        {item.value}
                      </span>
                    </span>
                  </span>
                );
                return (
                  <li key={item.label} className="rounded-xl border border-brand-mist bg-background p-4">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="block transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 rounded-2xl border border-brand-mist bg-background p-6 md:p-8">
              <h3 className="font-display text-lg font-bold tracking-tight text-brand-ink">
                Peça seu orçamento
              </h3>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col">
            <div className="h-[400px] overflow-hidden rounded-2xl border border-brand-mist shadow-lg shadow-brand-ink/10 lg:h-full lg:min-h-[560px]">
              <ContactMapLazy />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="font-semibold text-brand-ink">Atlas Service</strong> · {ADDRESS} — a poucos
              minutos do polo industrial de Betim e do Anel Rodoviário de BH.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
