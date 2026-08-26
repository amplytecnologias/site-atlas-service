// Dados centrais de contato da Atlas Service.
// WhatsApp (apenas mensagens): +55 31 8685-7749.
// Telefone fixo (todos os botões de ligar): (31) 3531-7749.
// Obs.: se o WhatsApp estiver registrado com o nono dígito ((31) 98685-7749),
// incluir o 9 em WHATSAPP_NUMBER para o link não falhar.
// Domínio canônico do site (sem www) — usado em metadataBase, robots e sitemap.
export const SITE_URL = "https://atlasservicemg.com.br";

export const WHATSAPP_NUMBER = "553186857749";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const PHONE_DISPLAY = "(31) 3531-7749";
export const PHONE_TEL = "tel:+553135317749";

export const EMAIL = "contato@atlasservicemg.com.br";
export const EMAIL_MAILTO = `mailto:${EMAIL}`;

export const ADDRESS = "Rua Pernambuco, 177 – Vila Universal, Betim/MG – CEP 32678-024";
export const ADDRESS_COORDS = { lat: -19.9347, lng: -44.1072 };

// Link direto para ESCREVER avaliação no Google, obtido no painel do Perfil da
// Empresa ("Solicitar avaliações"). Abre direto a tela das 5 estrelas — melhor
// conversão que mandar para a busca. Usado no botão "Avaliar no Google".
export const GOOGLE_REVIEW_URL = "https://g.page/r/CUlzqiqWP4WqEBM/review";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Atlas Service e gostaria de um orçamento de compressor de parafuso.";
