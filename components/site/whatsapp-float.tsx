import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Atlas Service no WhatsApp"
      className="fixed bottom-4 right-4 z-[90] flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 hover:bg-whatsapp-dark md:bottom-5 md:right-5 md:h-14 md:w-14"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.5s] motion-reduce:hidden" />
      <WhatsAppIcon className="relative h-6 w-6 md:h-7 md:w-7" />
    </a>
  );
}
