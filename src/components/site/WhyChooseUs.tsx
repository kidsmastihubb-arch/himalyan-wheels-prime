import { BadgeCheck, Handshake, IndianRupee, MapPin, Repeat, Wallet } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Quality Cars",
    description: "Carefully selected pre-owned vehicles, inspected before listing.",
  },
  {
    icon: Handshake,
    title: "Transparent Deals",
    description: "Clear pricing and straightforward communication throughout.",
  },
  {
    icon: IndianRupee,
    title: "Best Value",
    description: "Competitive pricing based on current market value.",
  },
  {
    icon: Wallet,
    title: "Finance Assistance",
    description: "Support with available finance options for eligible buyers.",
  },
  {
    icon: Repeat,
    title: "Buy • Sell • Exchange",
    description: "Complete vehicle solutions under one roof.",
  },
  {
    icon: MapPin,
    title: "Local Trust",
    description: "Serving customers in Solan and across Himachal Pradesh.",
  },
];

export function WhyChooseUs() {
  return (
    <Section className="hairline">
      <SectionHeading
        align="center"
        eyebrow="Why Choose Us"
        title="Why Choose Himalyan Wheels?"
        subtitle="A customer-first approach to buying, selling and exchanging pre-owned cars in Himachal Pradesh."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 70}>
            <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]">
              <span className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-transform duration-500 group-hover:scale-110">
                <r.icon className="size-5 text-primary" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
