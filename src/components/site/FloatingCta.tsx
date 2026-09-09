import { MessageCircle, Phone } from "lucide-react";
import { primaryPhone, waLink, waMessages } from "@/lib/site";

export function FloatingCta() {
  return (
    <>
      <a
        href={waLink(waMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Himalyan Wheels on WhatsApp"
        className="fixed right-5 bottom-24 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110 lg:bottom-8 lg:flex"
      >
        <MessageCircle className="size-6" aria-hidden />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-border bg-background/85 backdrop-blur-xl lg:hidden">
        <a
          href={waLink(waMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-whatsapp"
        >
          <MessageCircle className="size-4" aria-hidden /> WhatsApp
        </a>
        <a
          href={`tel:${primaryPhone.tel}`}
          className="flex items-center justify-center gap-2 border-l border-border py-4 text-sm font-semibold text-primary"
        >
          <Phone className="size-4" aria-hidden /> Call
        </a>
      </div>
    </>
  );
}
