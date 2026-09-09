import { BadgeCheck, IndianRupee, FileText, Repeat, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: BadgeCheck, label: "Quality Checked Cars" },
  { icon: IndianRupee, label: "Best Market Prices" },
  { icon: FileText, label: "Finance Available" },
  { icon: Repeat, label: "Buy • Sell • Exchange" },
  { icon: MessageCircle, label: "WhatsApp Support" },
];

export function TrustBar() {
  return (
    <div className="shell relative z-10 -mt-12">
      <Reveal className="glass-panel grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl px-6 py-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <Icon className="size-4 text-primary" aria-hidden />
            </span>
            <span className="text-xs leading-snug font-medium sm:text-sm">{label}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
