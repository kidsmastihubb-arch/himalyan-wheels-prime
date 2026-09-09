import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FounderSection } from "@/components/site/FounderSection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { LocationMap } from "@/components/site/LocationMap";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Himalyan Wheels, Solan" },
      {
        name: "description",
        content:
          "Himalyan Wheels is a used-car dealership in Solan, Himachal Pradesh, focused on transparent, customer-first buying, selling and exchange.",
      },
    ],
  }),
  component: AboutPage,
});

const services = [
  "Used car sales",
  "Car purchase",
  "Car exchange",
  "Finance assistance",
  "Customer support",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Driven by Trust. Built for the Mountains."
        subtitle="Himalyan Wheels is a used-car dealership based in Solan, Himachal Pradesh, focused on helping customers buy, sell and exchange quality pre-owned cars with a transparent and customer-first approach."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <Section className="hairline">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              title="What we do"
              subtitle="From buying your first car to upgrading to an SUV, we offer complete vehicle solutions under one roof."
            />
            <ul className="mt-8 space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass-panel rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-foreground">
                Serving customers across Solan, Shimla, Kandaghat and the wider Himachal Pradesh
                region, Himalyan Wheels has built its reputation on honest deals and genuine
                guidance — whether you're buying, selling or exchanging.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <FounderSection />
      <WhyChooseUs />
      <LocationMap />
    </>
  );
}
