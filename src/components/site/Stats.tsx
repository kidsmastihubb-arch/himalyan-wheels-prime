import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

/** Easy to update: change value/suffix/label only. */
const stats = [
  { value: 100, suffix: "+", label: "Cars Dealt" },
  { value: 50, suffix: "+", label: "Happy Customers" },
  { value: 100, suffix: "%", label: "Transparent Deals" },
  { value: 24, suffix: "/7", label: "WhatsApp Assistance" },
];

function CountUp({ value, active }: { value: number; active: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  return <>{n}</>;
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="hairline">
      <div ref={ref} className="shell grid grid-cols-2 gap-y-12 py-16 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-gold font-display text-4xl font-bold tabular-nums sm:text-5xl">
              <CountUp value={s.value} active={inView} />
              {s.suffix}
            </p>
            <p className="mt-3 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
