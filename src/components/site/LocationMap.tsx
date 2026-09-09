import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { phones, site, waLink, waMessages } from "@/lib/site";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function LocationMap() {
  return (
    <Section id="location" className="hairline">
      <SectionHeading
        eyebrow="Visit Us"
        title="Visit Himalyan Wheels"
        subtitle="Find us in Neri, Mamligh, Solan — or reach out on WhatsApp and we'll guide you."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal className="flex flex-col justify-between gap-8">
          <div className="space-y-5">
            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <MapPin className="size-5 text-primary" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold tracking-wide uppercase">
                  Address
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {site.addressLine}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Phone className="size-5 text-primary" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold tracking-wide uppercase">Phone</h3>
                <ul className="mt-1.5 space-y-1">
                  {phones.map((p) => (
                    <li key={p.tel}>
                      <a
                        href={`tel:${p.tel}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={site.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              <Navigation className="size-4" aria-hidden />
              Get Directions
            </a>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              src={site.mapEmbed}
              width="600"
              height="450"
              style={{ border: 0, width: "100%", height: "100%", minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Himalyan Wheels location on Google Maps"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
