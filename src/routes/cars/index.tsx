import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cars, type Car } from "@/data/cars";
import { CarCard } from "@/components/site/CarCard";
import { CarFilters } from "@/components/site/CarFilters";
import { PageHero } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/Cta";
import { waMessages } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/cars/")({
  head: () => ({
    meta: [
      { title: "Available Cars — Himalyan Wheels" },
      {
        name: "description",
        content:
          "Browse quality pre-owned cars available in Solan, Himachal Pradesh. Filter by brand, fuel, price and more.",
      },
    ],
  }),
  component: CarsPage,
});

function CarsPage() {
  const [results, setResults] = useState<Car[]>(cars);

  return (
    <>
      <PageHero
        eyebrow="Inventory"
        title="Find Your Next Car"
        subtitle="Browse our collection of quality pre-owned vehicles, all inspected and ready in Solan."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Cars" }]}
      />
      <section className="pb-20 sm:pb-28">
        <div className="shell">
          <CarFilters onResults={setResults} />

          {results.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((car, i) => (
                <Reveal key={car.id} delay={i * 60}>
                  <CarCard car={car} eager={i < 3} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center rounded-2xl border border-border bg-card py-16 text-center">
              <span className="flex size-16 items-center justify-center rounded-full border border-border bg-surface">
                <MessageCircle className="size-7 text-muted-foreground" aria-hidden />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold">No cars found</h2>
              <p className="mt-2 text-sm text-muted-foreground">Try changing your filters.</p>
              <div className="mt-6">
                <WhatsAppButton message={waMessages.general} label="Talk on WhatsApp" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
