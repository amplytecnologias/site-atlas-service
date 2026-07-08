"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";

const sections = [
  { href: "/", label: "Home" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#produtos", label: "Produtos" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#contato", label: "Contato" },
];

const services = [
  { href: "/servicos/locacao-e-venda", label: "Locação e venda de compressores" },
  { href: "/servicos/componentes-e-oleo", label: "Componentes e óleo" },
  { href: "/servicos/manutencao", label: "Manutenção / Assistência" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut", staggerChildren: 0.04, delayChildren: 0.05 },
  },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.18, ease: "easeIn" } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.08 } },
} as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Logo estática no topo — rola junto com a página */}
      <div className="absolute left-4 top-4 z-40 md:left-6 md:top-6">
        <Link href="/" onClick={closeMenu} aria-label="Atlas Service — página inicial">
          <img
            src="/logo.png"
            alt="Atlas Service — manutenção em compressores"
            className="h-16 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.55)] md:h-20"
          />
        </Link>
      </div>

      {/* Hambúrguer fixo — a única coisa que acompanha a rolagem */}
      <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
        <button
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-brand-mist bg-white text-brand-ink shadow-lg shadow-brand-ink/10 transition-colors hover:bg-brand-bg"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-0 top-full mt-3 w-[min(90vw,360px)] origin-top-right rounded-2xl border border-brand-mist bg-white p-5 shadow-2xl shadow-brand-ink/20"
              aria-label="Navegação principal"
            >
              <motion.p
                variants={itemVariants}
                className="px-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gray"
              >
                Navegação
              </motion.p>
              <div className="mt-2 flex flex-col">
                {sections.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-2 font-display text-base font-bold text-brand-ink transition-colors hover:bg-brand-bg hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={itemVariants}
                className="mt-4 px-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gray"
              >
                Serviços
              </motion.p>
              <div className="mt-2 flex flex-col">
                {services.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-brand-ink transition-colors hover:bg-brand-bg hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="mt-5">
                <Button asChild className="w-full gap-2 bg-whatsapp text-white hover:bg-whatsapp-dark">
                  <a
                    href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Orçamento no WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
