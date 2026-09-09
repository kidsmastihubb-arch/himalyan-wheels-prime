import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Fuel, Gauge, MapPin, Settings2, Calendar, Users } from "lucide-react";
import { cars, carTitle, formatKm, formatPrice, getCar } from "@/data/cars";
import { waLink, waMessages, phones } from "@/lib/site";
import { CarGallery } from "@/components/site/CarGallery";
import { CarCard } from "@/components/site/CarCard";
import { PageHero, SectionHeading, Breadcrumbs } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton, CallButton } from "@/components/site/Cta";
import { LocationMap } from "@/components/site/LocationMap";

export const Route = createFileRoute("/cars/$slug")({
  head: ({ params }) => {
    const car = getCar(params.slug);
    const title = car ? carTitle(car) : "Car Details";
    return {
      meta: [
        { title: `${title} — Himalyan Wheels` },
        {
          name: "description",
          content: car
            ? `${title} for sale in Solan, Himachal Pradesh. ${car.fuel}, ${car.transmission}, ${formatKm(car.kmDriven)}. ${formatPrice(car.price)}.`
            : "View this quality pre-owned car available at Himalyan Wheels.",
      },
    };
  },
  component: CarDetail,
  loader: ({ params }) => {
    const car = getCar(params.slug);
    if (!car) throw notFound();
    return { car };
  },
});

function CarDetail() {
  const { car } = Route.useLoaderData();
  const title = carTitle(car);
  const related = cars.filter((c) => c.id !== car.id && c.bodyType === car.bodyType).slice(0, 3);

  const specs = [
    { icon: Calendar, label: "Year", value: String(car.year) },
    { icon: Fuel, label: "Fuel", value: car.fuel },
    { icon: Settings2, label: "Transmission", value: car.transmission },
    { icon: Gauge, label: "KM Driven", value: formatKm(car.kmDriven) },
    { icon: Users, label: "Ownership", value: car.owners },
    { icon: MapPin, label: "Location", value: car.location.split(",")[0] },
  ];

  return (
    <>
      <section className="pt-36 pb-10 sm:pt-44">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Cars", to: "/cars" }, { label: title }]} />
        </div>
      </section>

      <section className="pb-20">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <CarGallery images={car.images} title={title} />
          </Reveal>

          <Reveal delay={100}>
            <div>
              {car.badge && (
                <span className="inline-block rounded-full bg-gold px-3 py-1 font-display text-[0.65rem] font-bold tracking-[0.14em] text-primary-foreground uppercase">
                  {car.badge}
                </span>
              )}
              <p className="mt-3 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {car.brand} • {car.year}
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{title}</h1>
              <p className="text-gold mt-3 font-display text-2xl font-bold">{formatPrice(car.price)}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {specs.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                    <s.icon className="size-4 text-primary/70" aria-hidden />
                    <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">{s.label}</p>
                    <p className="mt-0.5 text-sm font-semibold">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton message={waMessages.car(title)} label="WhatsApp Enquiry" />
                <CallButton label={`Call ${phones[0].display}`} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hairline py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold">Vehicle Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{car.description}</p>
            <h3 className="mt-8 font-display text-lg font-semibold">Features</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {car.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 text-primary" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">Why Buy From Himalyan Wheels?</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "Quality-checked vehicles",
                  "Transparent pricing",
                  "Documentation assistance",
                  "Finance options available",
                  "Ownership transfer guidance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <WhatsAppButton message={waMessages.car(title)} label="WhatsApp Enquiry" className="w-full" />
                <a
                  href={waLink(waMessages.finance)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Check Finance Options
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="hairline py-16 sm:py-20">
          <div className="shell">
            <SectionHeading eyebrow="Related Cars" title="You might also like" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c, i) => (
                <Reveal key={c.id} delay={i * 80}>
                  <CarCard car={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <LocationMap />
    </>
  );
}
