import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cars } from "@/data/cars";
import { CarCard } from "./CarCard";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function FeaturedCars() {
  const featured = cars.filter((c) => c.featured).slice(0, 6);
  const list = featured.length > 0 ? featured : cars.slice(0, 6);

  return (
    <Section id="featured-cars">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Featured Cars"
          title="Explore quality pre-owned cars"
          subtitle="Browse a selection of carefully inspected vehicles available with Himalyan Wheels in Solan."
        />
        <Reveal delay={100} className="hidden shrink-0 sm:block">
          <Link
            to="/cars"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View All Cars
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((car, i) => (
          <Reveal key={car.id} delay={i * 80}>
            <CarCard car={car} eager={i < 3} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10 sm:hidden">
        <Link
          to="/cars"
          className="flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
        >
          View All Cars
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Reveal>
    </Section>
  );
}
