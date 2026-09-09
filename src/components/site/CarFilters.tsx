import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cars, brands, bodyTypes, fuels, type Car } from "@/data/cars";

export type SortKey = "newest" | "price-asc" | "price-desc" | "year" | "km";

export interface Filters {
  query: string;
  brand: string;
  fuel: string;
  transmission: string;
  bodyType: string;
  minPrice: string;
  maxPrice: string;
  sort: SortKey;
}

const defaultFilters: Filters = {
  query: "",
  brand: "",
  fuel: "",
  transmission: "",
  bodyType: "",
  minPrice: "",
  maxPrice: "",
  sort: "newest",
};

function applyFilters(list: Car[], f: Filters): Car[] {
  let result = [...list];
  if (f.query.trim()) {
    const q = f.query.toLowerCase();
    result = result.filter(
      (c) =>
        c.brand.toLowerCase().includes(q) ||
        c.model.toLowerCase().includes(q) ||
        c.variant.toLowerCase().includes(q),
    );
  }
  if (f.brand) result = result.filter((c) => c.brand === f.brand);
  if (f.fuel) result = result.filter((c) => c.fuel === f.fuel);
  if (f.transmission) result = result.filter((c) => c.transmission === f.transmission);
  if (f.bodyType) result = result.filter((c) => c.bodyType === f.bodyType);
  if (f.minPrice) result = result.filter((c) => c.price >= Number(f.minPrice));
  if (f.maxPrice) result = result.filter((c) => c.price <= Number(f.maxPrice));

  switch (f.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "year":
      result.sort((a, b) => b.year - a.year);
      break;
    case "km":
      result.sort((a, b) => a.kmDriven - b.kmDriven);
      break;
    default:
      result.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
  return result;
}

const selectClass =
  "h-10 rounded-lg border border-input bg-transparent px-3 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-1 focus-visible:outline-primary";

const labelClass = "mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase";

export function CarFilters({ onResults }: { onResults: (cars: Car[]) => void }) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [showMobile, setShowMobile] = useState(false);

  const filtered = useMemo(() => applyFilters(cars, filters), [filters]);

  function update<K extends keyof Filters>(key: K, value: Filters[K]) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onResults(applyFilters(cars, next));
  }

  function reset() {
    setFilters(defaultFilters);
    onResults(applyFilters(cars, defaultFilters));
  }

  const filterControls = (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <label className={labelClass} htmlFor="f-brand">Brand</label>
        <select id="f-brand" className={selectClass} value={filters.brand} onChange={(e) => update("brand", e.target.value)}>
          <option value="" className="bg-background">All Brands</option>
          {brands.map((b) => (
            <option key={b} value={b} className="bg-background">{b}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="f-fuel">Fuel</label>
        <select id="f-fuel" className={selectClass} value={filters.fuel} onChange={(e) => update("fuel", e.target.value)}>
          <option value="" className="bg-background">All Fuels</option>
          {fuels.map((f) => (
            <option key={f} value={f} className="bg-background">{f}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="f-trans">Transmission</label>
        <select id="f-trans" className={selectClass} value={filters.transmission} onChange={(e) => update("transmission", e.target.value)}>
          <option value="" className="bg-background">All</option>
          <option value="Manual" className="bg-background">Manual</option>
          <option value="Automatic" className="bg-background">Automatic</option>
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="f-body">Body Type</label>
        <select id="f-body" className={selectClass} value={filters.bodyType} onChange={(e) => update("bodyType", e.target.value)}>
          <option value="" className="bg-background">All Types</option>
          {bodyTypes.map((b) => (
            <option key={b} value={b} className="bg-background">{b}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="f-min">Min Price (Lakh)</label>
        <input id="f-min" type="number" step="0.5" placeholder="0" className={selectClass} value={filters.minPrice} onChange={(e) => update("minPrice", e.target.value)} />
      </div>
      <div>
        <label className={labelClass} htmlFor="f-max">Max Price (Lakh)</label>
        <input id="f-max" type="number" step="0.5" placeholder="30" className={selectClass} value={filters.maxPrice} onChange={(e) => update("maxPrice", e.target.value)} />
      </div>
    </div>
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            type="search"
            placeholder="Search your dream car..."
            aria-label="Search cars"
            className="h-12 w-full rounded-full border border-input bg-transparent pl-11 pr-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:outline-primary"
            value={filters.query}
            onChange={(e) => update("query", e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            aria-label="Sort cars"
            className={`${selectClass} h-12 min-w-[10rem]`}
            value={filters.sort}
            onChange={(e) => update("sort", e.target.value as SortKey)}
          >
            <option value="newest" className="bg-background">Newest</option>
            <option value="price-asc" className="bg-background">Price: Low → High</option>
            <option value="price-desc" className="bg-background">Price: High → Low</option>
            <option value="year" className="bg-background">Year</option>
            <option value="km" className="bg-background">KM Driven</option>
          </select>
          <button
            type="button"
            onClick={() => setShowMobile((v) => !v)}
            className="flex h-12 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary lg:hidden"
          >
            <SlidersHorizontal className="size-4" aria-hidden />
            Filters
          </button>
        </div>
      </div>

      <div className="hidden lg:block">{filterControls}</div>

      {showMobile && (
        <div className="rounded-2xl border border-border bg-card p-5 lg:hidden">
          {filterControls}
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filtered.length} car{filtered.length !== 1 ? "s" : ""} found
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <X className="size-3.5" aria-hidden />
          Clear Filters
        </button>
      </div>
    </div>
  );
}
