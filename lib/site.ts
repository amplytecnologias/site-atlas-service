// Dados centrais de contato da Atlas Service.
// WhatsApp (apenas mensagens): +55 31 8685-7749.
// Telefone fixo (todos os botões de ligar): (31) 3531-7749.
// Obs.: se o WhatsApp estiver registrado com o nono dígito ((31) 98685-7749),
// incluir o 9 em WHATSAPP_NUMBER para o link não falhar.
export const WHATSAPP_NUMBER = "553186857749";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const PHONE_DISPLAY = "(31) 3531-7749";
export const PHONE_TEL = "tel:+553135317749";

export const ADDRESS = "R. Pernambuco, 177 – Vila Universal, Betim/MG";
export const ADDRESS_COORDS = { lat: -19.9686, lng: -44.1986 };

// Perfil da Atlas Service Compressores no Google (avaliações e informações).
// Resolvido a partir do link compartilhado https://share.google/Rlee3ZdG654OmMJKd
export const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?kgmid=/g/11g4977jsp&q=Atlas+Service+Compressores&hl=pt-BR";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Atlas Service e gostaria de um orçamento de compressor de parafuso.";
