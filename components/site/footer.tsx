import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { ADDRESS, DEFAULT_WHATSAPP_MESSAGE, EMAIL, EMAIL_MAILTO, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/site";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#produtos", label: "Produtos" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#contato", label: "Contato" },
];

const services = [
  { href: "/servicos/locacao-e-venda", label: "Locação e venda de compressores" },
  { href: "/servicos/filtros-e-oleo", label: "Filtros e óleo" },
  { href: "/servicos/manutencao", label: "Manutenção / Assistência" },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white/70">
      <div className="container mx-auto px-4 pb-8 pt-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-extrabold uppercase tracking-wide text-white">
                Atlas <span className="text-teal-light">Service</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Aluguel, venda, filtros e manutenção de compressores de ar de parafuso para mineração e
              indústria.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-teal-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">Serviços</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-teal-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={PHONE_TEL} className="flex items-start gap-2.5 text-sm transition-colors hover:text-teal-light">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm transition-colors hover:text-teal-light"
                >
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                  Orçamento no WhatsApp
                </a>
              </li>
              <li>
                <a href={EMAIL_MAILTO} className="flex items-start gap-2.5 text-sm transition-colors hover:text-teal-light">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                {ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Atlas Service — Compressores de parafuso. Todos os direitos reservados.</p>
          <p className="tracking-wide text-white/50">Aluguel · Venda · Filtros e óleo · Manutenção</p>
        </div>
      </div>
    </footer>
  );
}
