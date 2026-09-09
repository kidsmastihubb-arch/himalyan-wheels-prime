import { Star } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

/** Replace these placeholders with real customer reviews when available. */
const testimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    location: "Solan, Himachal Pradesh",
    quote: "Very smooth experience and genuine guidance while buying the car.",
  },
  {
    name: "Priya Verma",
    location: "Shimla, Himachal Pradesh",
    quote: "Got a fair price for my old car and the paperwork was handled completely.",
  },
  {
    name: "Ankit Thakur",
    location: "Kandaghat, Himachal Pradesh",
    quote: "Found exactly the SUV I was looking for. Transparent dealing and no hidden charges.",
  },
];

export function Testimonials() {
  return (
    <Section className="hairline">
      <SectionHeading
        align="center"
        eyebrow="Testimonials"
        title="What our customers say"
        subtitle="Real experiences from customers across Himachal Pradesh."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-primary text-primary" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-display text-sm font-semibold">{t.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.location}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
