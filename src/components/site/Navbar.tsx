import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, waLink, waMessages, primaryPhone } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="shell flex h-18 items-center justify-between py-4" aria-label="Main">
        <Link to="/" onClick={() => setOpen(false)} className="group flex flex-col leading-none">
          <span className="font-display text-base font-bold tracking-[0.24em] text-foreground sm:text-lg">
            HIMALYAN
          </span>
          <span className="text-gold font-display text-[0.62rem] font-semibold tracking-[0.5em]">
            WHEELS
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-1 after:left-3 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-1.5rem)]"
                activeProps={{ className: "text-foreground after:w-[calc(100%-1.5rem)]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${primaryPhone.tel}`}
            aria-label={`Call ${primaryPhone.display}`}
            className="hidden size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/60 hover:text-primary sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
          </a>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp Us
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border lg:hidden"
          >
            <span
              className={cn(
                "h-px w-4.5 bg-foreground transition-all duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-4.5 bg-foreground transition-all duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="shell flex flex-col py-4">
          {navLinks.map((l, i) => (
            <li key={l.to} style={{ ["--rise-delay" as string]: `${i * 35}ms` }} className={open ? "animate-rise" : ""}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3.5 font-display text-lg text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="size-4" aria-hidden /> WhatsApp Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
