import type { ReactNode } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { phones, waLink } from "@/lib/site";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 active:scale-[0.98]";

export function GoldButton({
  href,
  children,
  className,
  ...rest
}: { href: string; children: ReactNode; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        base,
        "bg-gold text-primary-foreground shadow-[var(--shadow-gold)] hover:-translate-y-0.5 hover:brightness-110",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

export function WhatsAppButton({
  message,
  label = "WhatsApp Us",
  className,
  variant = "solid",
}: {
  message: string;
  label?: string;
  className?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} on WhatsApp`}
      className={cn(
        base,
        variant === "solid"
          ? "bg-whatsapp text-whatsapp-foreground hover:-translate-y-0.5 hover:brightness-110"
          : "border border-border bg-surface/40 text-foreground backdrop-blur hover:border-primary/60 hover:-translate-y-0.5",
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden />
      {label}
    </a>
  );
}

export function CallButton({
  index = 0,
  label,
  className,
}: {
  index?: 0 | 1;
  label?: string;
  className?: string;
}) {
  const p = phones[index];
  return (
    <a
      href={`tel:${p.tel}`}
      aria-label={`Call ${p.display}`}
      className={cn(
        base,
        "border border-border bg-transparent text-foreground hover:border-primary/60 hover:text-primary hover:-translate-y-0.5",
        className,
      )}
    >
      <Phone className="size-4" aria-hidden />
      {label ?? "Call Now"}
    </a>
  );
}
