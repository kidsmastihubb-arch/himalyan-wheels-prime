import { Search, Eye, MessageCircle, Wallet, Car } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const steps = [
  { icon: Search, title: "Choose", description: "Find a car that fits your needs." },
  { icon: Eye, title: "Inspect", description: "Review vehicle details and condition." },
  { icon: MessageCircle, title: "Connect", description: "Talk directly with Himalyan Wheels." },
  { icon: Wallet, title: "Finance", description: "Explore available financing assistance." },
  { icon: Car, title: "Drive", description: "Complete the paperwork and drive away." },
];

export function HowItWorks() {
  return (
    <Section className="hairline">
      <SectionHeading
        align="center"
        eyebrow="How It Works"
        title="From browsing to driving away"
        subtitle="A simple, transparent process designed to get you on the road with confidence."
      />
      <div className="relative mt-16">
        <div
          aria-hidden
          className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-border to-transparent lg:block"
        />
        <div className="grid gap-8 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="relative text-center">
              <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border border-primary/30 bg-background">
                <s.icon className="size-5 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-gold font-display text-xs font-bold tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
