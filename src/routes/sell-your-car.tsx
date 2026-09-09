import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/sell-your-car")({
  head: () => ({
    meta: [
      { title: "Sell Your Car — Himalyan Wheels, Solan" },
      {
        name: "description",
        content:
          "Get a fair market evaluation and a hassle-free selling experience. Sell your car to Himalyan Wheels in Solan.",
      },
    ],
  }),
  component: SellPage,
});

const inputClass =
  "h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:outline-primary";
const labelClass = "mb-1.5 block text-sm font-medium";

function SellPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    km: "",
    fuel: "Petrol",
    price: "",
    message: "",
  });

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = `Hi Himalyan Wheels, I want to sell my car.\n\nName: ${form.name}\nPhone: ${form.phone}\nCar: ${form.brand} ${form.model}\nYear: ${form.year}\nKM Driven: ${form.km}\nFuel: ${form.fuel}\nExpected Price: ${form.price}\n\n${form.message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageHero
        eyebrow="Sell"
        title="Want to Sell Your Car?"
        subtitle="Get a fair market evaluation and a hassle-free selling experience."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Sell" }]}
      />

      <Section className="hairline">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <form onSubmit={handleSubmit} className="glass-panel space-y-5 rounded-2xl p-7 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="s-name" className={labelClass}>Name</label>
                  <input id="s-name" required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="s-phone" className={labelClass}>Phone</label>
                  <input id="s-phone" type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 ..." className={inputClass} />
                </div>
                <div>
                  <label htmlFor="s-brand" className={labelClass}>Car Brand</label>
                  <input id="s-brand" required value={form.brand} onChange={(e) => set("brand", e.target.value)} placeholder="e.g. Hyundai" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="s-model" className={labelClass}>Car Model</label>
                  <input id="s-model" required value={form.model} onChange={(e) => set("model", e.target.value)} placeholder="e.g. Creta" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="s-year" className={labelClass}>Year</label>
                  <input id="s-year" type="number" required value={form.year} onChange={(e) => set("year", e.target.value)} placeholder="e.g. 2020" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="s-km" className={labelClass}>KM Driven</label>
                  <input id="s-km" type="number" required value={form.km} onChange={(e) => set("km", e.target.value)} placeholder="e.g. 40000" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="s-fuel" className={labelClass}>Fuel Type</label>
                  <select id="s-fuel" value={form.fuel} onChange={(e) => set("fuel", e.target.value)} className={inputClass}>
                    <option value="Petrol" className="bg-background">Petrol</option>
                    <option value="Diesel" className="bg-background">Diesel</option>
                    <option value="CNG" className="bg-background">CNG</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="s-price" className={labelClass}>Expected Price (Lakh)</label>
                  <input id="s-price" type="number" step="0.25" value={form.price} onChange={(e) => set("price", e.target.value)} placeholder="e.g. 8.5" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="s-msg" className={labelClass}>Message</label>
                <textarea id="s-msg" rows={3} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Anything else we should know?" className="w-full rounded-lg border border-input bg-transparent px-4 py-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:outline-primary" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110">
                <Send className="size-4" aria-hidden />
                Get Car Valuation on WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
