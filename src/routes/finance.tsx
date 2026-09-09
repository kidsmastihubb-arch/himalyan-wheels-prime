import { createFileRoute } from "@tanstack/react-router";
import { Wallet, FileText, Repeat, Zap, Headset } from "lucide-react";
import { WhatsAppButton, CallButton } from "@/components/site/Cta";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FinanceCta } from "@/components/site/FinanceCta";
import { waMessages } from "@/lib/site";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: "Car Finance — Himalyan Wheels, Solan" },
      {
        name: "description",
        content:
          "Finance assistance available for eligible customers. Flexible repayment options, documentation support and quick processing.",
      },
    ],
  }),
  component: FinancePage,
});

const features = [
  { icon: Wallet, title: "Easy Finance Assistance", description: "Support with finding the right finance option." },
  { icon: FileText, title: "Documentation Support", description: "Help with paperwork and application requirements." },
  { icon: Repeat, title: "Flexible Repayment Options", description: "Repayment plans tailored to your budget." },
  { icon: Zap, title: "Quick Processing", description: "Fast turnaround on finance assistance requests." },
  { icon: Headset, title: "Assistance Throughout", description: "Guidance at every step of the process." },
];

function FinancePage() {
  return (
    <>
      <PageHero
        eyebrow="Finance"
        title="Drive Now. Pay With Flexible Finance Options."
        subtitle="Finance assistance available for eligible customers. Get support with documentation and flexible repayment."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Finance" }]}
      >
        <WhatsAppButton message={waMessages.finance} label="Check Finance Options" />
        <CallButton />
      </PageHero>

      <Section className="hairline">
        <SectionHeading
          eyebrow="Finance Support"
          title="How we help with finance"
          subtitle="We assist eligible customers in exploring finance options — without making unsupported claims about guaranteed approval or interest rates."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <span className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <f.icon className="size-5 text-primary" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinanceCta />
    </>
  );
}
