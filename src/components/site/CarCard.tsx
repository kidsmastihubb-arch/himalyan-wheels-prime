import { Link } from "@tanstack/react-router";
import { Fuel, Gauge, MapPin, Settings2 } from "lucide-react";
import { carTitle, formatKm, formatPrice, type Car } from "@/data/cars";
import { waLink, waMessages } from "@/lib/site";

export function CarCard({ car, eager = false }: { car: Car; eager?: boolean }) {
  const title = carTitle(car);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[3/2] overflow-hidden bg-surface">
        <img
          src={car.images[0]}
          alt={`${title} available at Himalyan Wheels in Solan, Himachal Pradesh`}
          width={1280}
          height={853}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-107"
        />
        {car.badge ? (
          <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 font-display text-[0.65rem] font-bold tracking-[0.14em] text-primary-foreground uppercase">
            {car.badge}
          </span>
        ) : null}
        <span className="absolute top-4 right-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-foreground backdrop-blur">
          {car.condition}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {car.brand} • {car.year}
            </p>
            <h3 className="mt-1.5 font-display text-lg leading-snug font-semibold">
              {car.model} {car.variant}
            </h3>
          </div>
          <p className="text-gold shrink-0 font-display text-lg font-bold">
            {formatPrice(car.price)}
          </p>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Fuel className="size-4 text-primary/70" aria-hidden />
            <dd>{car.fuel}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Settings2 className="size-4 text-primary/70" aria-hidden />
            <dd>{car.transmission}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="size-4 text-primary/70" aria-hidden />
            <dd>{formatKm(car.kmDriven)}</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-primary/70" aria-hidden />
            <dd className="truncate">{car.location.split(",")[0]}</dd>
          </div>
        </dl>

        <div className="mt-7 flex gap-3 pt-1">
          <Link
            to="/cars/$slug"
            params={{ slug: car.slug }}
            className="flex-1 rounded-full border border-border py-2.5 text-center text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
          >
            View Details
          </Link>
          <a
            href={waLink(waMessages.car(title))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-whatsapp py-2.5 text-center text-sm font-semibold text-whatsapp-foreground transition-all duration-300 group-hover:brightness-110"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
