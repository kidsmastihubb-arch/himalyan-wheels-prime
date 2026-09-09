import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FinanceCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
            />
            <div className="relative">
              <p className="eyebrow">Finance</p>
              <h2 className="mt-4 text-3xl leading-tight font-bold text-balance sm:text-4xl lg:text-5xl">
                Drive Now. Pay With <span className="text-gold">Flexible Finance</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Finance assistance available for eligible customers. Get support with documentation
                and flexible repayment options.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/finance"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Check Finance Options
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href={waLink(waMessages.finance)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
