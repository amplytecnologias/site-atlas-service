"use client";

import dynamic from "next/dynamic";

// maplibre-gl acessa APIs de browser; carregamos o mapa só no cliente.
const ContactMap = dynamic(() => import("@/components/site/contact-map"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-brand-mist/40" aria-hidden />,
});

export function ContactMapLazy() {
  return <ContactMap />;
}
