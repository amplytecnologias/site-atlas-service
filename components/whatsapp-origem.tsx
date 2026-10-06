"use client";
import { useEffect, useState } from "react";

const NUMERO = "553186857749";
const MSG_ANUNCIO = "Olá! Vim pelo anúncio do Google e gostaria de um orçamento de locação de compressor de parafuso.";
const MSG_SITE = "Olá! Vim pelo site da Atlas Service e gostaria de um orçamento de compressor de parafuso.";

function detectarOrigem(): "anuncio" | "site" {
  try {
    const p = new URLSearchParams(window.location.search);
    const veioDoAnuncio = p.has("gclid") || p.has("gbraid") || p.has("wbraid") || p.get("utm_source") === "google";
    if (veioDoAnuncio) {
      sessionStorage.setItem("origem_visita", "anuncio");
      return "anuncio";
    }
    return sessionStorage.getItem("origem_visita") === "anuncio" ? "anuncio" : "site";
  } catch {
    return "site";
  }
}

export function useLinkWhatsApp(): string {
  const [origem, setOrigem] = useState<"anuncio" | "site">("site");
  useEffect(() => { setOrigem(detectarOrigem()); }, []);
  const texto = origem === "anuncio" ? MSG_ANUNCIO : MSG_SITE;
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(texto)}`;
}
