import { Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

/** Placeholder gallery — replace with real Instagram/car images when available. */
const gallery = [
  { label: "Car detail shot", color: "oklch(0.3 0.01 65)" },
  { label: "Showroom view", color: "oklch(0.25 0.008 65)" },
  { label: "SUV on the road", color: "oklch(0.28 0.009 65)" },
  { label: "Interior shot", color: "oklch(0.22 0.007 65)" },
  { label: "Hatchback side profile", color: "oklch(0.3 0.01 65)" },
  { label: "Mountain drive", color: "oklch(0.26 0.008 65)" },
];

export function InstagramSection() {
  return (
    <Section className="hairline">
      <SectionHeading
        align="center"
        eyebrow="Follow Us"
        title="Follow Himalyan Wheels"
        subtitle={site.instagramHandle}
      />
      <Reveal delay={80} className="mt-10 flex justify-center">
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
        >
          <Instagram className="size-4" aria-hidden />
          Follow Us on Instagram
        </a>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {gallery.map((g, i) => (
          <Reveal key={g.label} delay={i * 50}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={g.label}
              className="group relative block aspect-square overflow-hidden rounded-xl border border-border"
              style={{ backgroundColor: g.color }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="size-6 text-foreground/80" aria-hidden />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
