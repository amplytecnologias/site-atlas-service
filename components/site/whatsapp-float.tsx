import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Atlas Service no WhatsApp"
      className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 hover:bg-whatsapp-dark"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.5s] motion-reduce:hidden" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
