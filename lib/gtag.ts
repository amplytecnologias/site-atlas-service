// Rastreamento de conversões do Google Ads (gtag.js).
// A Tag do Google é carregada uma única vez em app/layout.tsx.
// Os cliques em WhatsApp/telefone disparam a conversão e SÓ então redirecionam,
// para não perder o registro no mobile (onde a página sai de foco na hora).

export const GA_ADS_ID = "AW-18360862897";

// Rótulos de conversão de cada ação (fornecidos pelo Google Ads).
const CONVERSION_LABELS = {
  whatsapp: "m3guCJuX6NocELGRkrNE",
  form: "i-sMCOi24NocELGRkrNE",
  phone: "eGlwCL2V5NocELGRkrNE",
} as const;

const sendTo = (label: string) => `${GA_ADS_ID}/${label}`;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Redireciona apenas uma vez, seja pelo event_callback do gtag ou pelo backup.
function redirectOnce(destination: string) {
  let done = false;
  return () => {
    if (done) return;
    done = true;
    window.location.href = destination;
  };
}

// Conversão do WhatsApp — dispara e redireciona para o wa.me.
export function trackWhatsAppClick(url: string): boolean {
  if (typeof window === "undefined") return false;
  if (!window.gtag) {
    window.location.href = url;
    return false;
  }

  const go = redirectOnce(url);
  window.gtag("event", "conversion", {
    send_to: sendTo(CONVERSION_LABELS.whatsapp),
    event_callback: go,
  });
  // Backup: se o gtag não responder em 1s, redireciona mesmo assim.
  setTimeout(go, 1000);
  return false;
}

// Conversão de telefone — dispara e redireciona para o tel:.
export function trackPhoneClick(phoneNumber: string): boolean {
  if (typeof window === "undefined") return false;
  const tel = `tel:${phoneNumber}`;
  if (!window.gtag) {
    window.location.href = tel;
    return false;
  }

  const go = redirectOnce(tel);
  window.gtag("event", "conversion", {
    send_to: sendTo(CONVERSION_LABELS.phone),
    event_callback: go,
  });
  setTimeout(go, 1000);
  return false;
}

// Conversão do formulário — dispara após o envio bem-sucedido (não redireciona).
export function trackFormSubmit(): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", {
    send_to: sendTo(CONVERSION_LABELS.form),
  });
}
