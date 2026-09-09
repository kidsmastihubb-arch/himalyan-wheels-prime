import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/Cta";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { waMessages } from "@/lib/site";

export const Route = createFileRoute("/exchange")({
  head: () => ({
    meta: [
      { title: "Car Exchange — Himalyan Wheels, Solan" },
      {
        name: "description",
        content:
          "Upgrade your drive with easy car exchange in Solan. Get a fair valuation for your current car and choose your next one.",
      },
    ],
  }),
  component: ExchangePage,
});

const steps = [
  { num: "01", title: "Share Your Car", description: "Tell us about the car you currently own." },
  { num: "02", title: "Vehicle Evaluation", description: "We inspect and assess your vehicle's condition." },
  { num: "03", title: "Get Exchange Value", description: "Receive a fair exchange value for your car." },
  { num: "04", title: "Choose Your Next Car", description: "Pick from our available pre-owned inventory." },
  { num: "05", title: "Complete Documentation", description: "We handle the paperwork and ownership transfer." },
];

function ExchangePage() {
  return (
    <>
      <PageHero
        eyebrow="Exchange"
        title="Upgrade Your Drive With Easy Car Exchange"
        subtitle="Trade in your current car for a quality pre-owned vehicle. Simple, transparent and hassle-free."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Exchange" }]}
      >
        <WhatsAppButton message={waMessages.exchange} label="Start Exchange on WhatsApp" />
      </PageHero>

      <Section className="hairline">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <p className="text-gold font-display text-2xl font-bold">{s.num}</p>
                <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
