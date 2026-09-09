import { Link } from "@tanstack/react-router";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import heroImg from "@/assets/hero/hero-suv.jpg";
import { primaryPhone, waLink, waMessages } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Premium pre-owned SUV on a Himalayan mountain road at dusk"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="animate-slow-zoom absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
      />

      <div className="shell relative w-full pb-24 sm:pb-32">
        <p
          className="animate-rise eyebrow"
          style={{ ["--rise-delay" as string]: "80ms" }}
        >
          Trusted Used Cars in Himachal Pradesh
        </p>

        <h1
          className="animate-rise mt-6 max-w-4xl font-display text-4xl leading-[1.02] font-bold text-balance sm:text-6xl lg:text-7xl"
          style={{ ["--rise-delay" as string]: "180ms" }}
        >
          Find Your Next Car.
          <br />
          <span className="text-gold">Drive With Confidence.</span>
        </h1>

        <p
          className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ ["--rise-delay" as string]: "320ms" }}
        >
          Buy, sell or exchange quality pre-owned cars at competitive prices with flexible finance
          options — from our yard in Neri, Mamligh, Solan.
        </p>

        <div
          className="animate-rise mt-10 flex flex-wrap items-center gap-3"
          style={{ ["--rise-delay" as string]: "450ms" }}
        >
          <Link
            to="/cars"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Explore Cars
          </Link>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-whatsapp-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            <MessageCircle className="size-4" aria-hidden /> WhatsApp Us
          </a>
          <a
            href={`tel:${primaryPhone.tel}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            <Phone className="size-4" aria-hidden /> Call Now
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="animate-bob size-6" />
      </div>
    </section>
  );
}
