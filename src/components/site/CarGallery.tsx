import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const hasMultiple = images.length > 1;

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface">
        <img
          src={images[active]}
          alt={`${title} — view ${active + 1}`}
          className="size-full object-cover"
          loading="eager"
          decoding="async"
        />
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => setActive((p) => (p === 0 ? images.length - 1 : p - 1))}
              aria-label="Previous image"
              className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-colors hover:text-primary"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setActive((p) => (p === images.length - 1 ? 0 : p + 1))}
              aria-label="Next image"
              className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-colors hover:text-primary"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative aspect-[3/2] w-28 shrink-0 overflow-hidden rounded-lg border transition-colors ${
                i === active ? "border-primary" : "border-border hover:border-primary/40"
              }`}
            >
              <img src={img} alt="" className="size-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
