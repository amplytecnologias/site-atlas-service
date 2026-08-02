"use client";

import { forwardRef, type ComponentPropsWithoutRef, type MouseEvent } from "react";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/gtag";

type AnchorProps = ComponentPropsWithoutRef<"a">;

// Deixa o navegador cuidar do clique quando o usuário pediu "abrir em nova aba"
// (Ctrl/Cmd/Shift/Alt ou botão do meio) — não sequestramos esse comportamento.
function shouldBypass(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

// Link de WhatsApp que registra a conversão no Google Ads antes de redirecionar.
// Renderiza um <a> normal (funciona sem JS) e pode ser usado dentro de <Button
// asChild> (Radix Slot) por causa do forwardRef.
export const WhatsAppLink = forwardRef<HTMLAnchorElement, AnchorProps>(
  function WhatsAppLink({ href = "", target = "_blank", rel = "noopener noreferrer", onClick, ...rest }, ref) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={(event) => {
          onClick?.(event);
          if (shouldBypass(event)) return;
          event.preventDefault();
          trackWhatsAppClick(href);
        }}
        {...rest}
      />
    );
  },
);

// Link de telefone (tel:) que registra a conversão antes de iniciar a ligação.
export const PhoneLink = forwardRef<HTMLAnchorElement, AnchorProps>(
  function PhoneLink({ href = "", onClick, ...rest }, ref) {
    return (
      <a
        ref={ref}
        href={href}
        onClick={(event) => {
          onClick?.(event);
          if (shouldBypass(event)) return;
          event.preventDefault();
          trackPhoneClick(href.replace(/^tel:/, ""));
        }}
        {...rest}
      />
    );
  },
);
