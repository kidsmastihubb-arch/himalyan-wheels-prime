import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, IndianRupee, FileText, Headset, Car } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton, CallButton } from "@/components/site/Cta";
import { waMessages } from "@/lib/site";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy a Used Car — Himalyan Wheels, Solan" },
      {
        name: "description",
        content:
          "Looking for your next car? Buy quality used cars in Solan with transparent pricing, finance assistance and easy documentation.",
      },
    ],
  }),
  component: BuyPage,
});

const points = [
  { icon: BadgeCheck, title: "Quality Used Cars", description: "Carefully inspected pre-owned vehicles." },
  { icon: IndianRupee, title: "Transparent Pricing", description: "Clear, fair prices with no hidden charges." },
  { icon: Car, title: "Multiple Brands", description: "A wide range of brands and body types to choose from." },
  { icon: FileText, title: "Finance Assistance", description: "Support with finance options for eligible buyers." },
  { icon: Headset, title: "Personal Assistance", description: "Guidance at every step, from selection to delivery." },
  { icon: FileText, title: "Easy Documentation", description: "Hassle-free paperwork and ownership transfer." },
];

function BuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Buy"
        title="Looking for Your Next Car?"
        subtitle="Quality used cars, transparent pricing, finance assistance and personal support — all from Himalyan Wheels in Solan."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Buy" }]}
      >
        <Link
          to="/cars"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
        >
          Browse Available Cars
          <ArrowRight className="size-4" aria-hidden />
        </Link>
        <WhatsAppButton message={waMessages.buy} />
        <CallButton />
      </PageHero>

      <Section className="hairline">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <span className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <p.icon className="size-5 text-primary" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
