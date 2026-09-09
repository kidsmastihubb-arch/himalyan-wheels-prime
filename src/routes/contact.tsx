import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { phones, site, waLink, waMessages } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Himalyan Wheels, Solan" },
      {
        name: "description",
        content:
          "Get in touch with Himalyan Wheels in Solan, Himachal Pradesh. Call, WhatsApp or send an enquiry.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Whether you're buying, selling or just exploring — we're here to help. Reach us on WhatsApp, phone, or send a message."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <Section className="hairline">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Phone className="size-5 text-primary" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold tracking-wide uppercase">Phone</h3>
                <ul className="mt-1.5 space-y-1">
                  {phones.map((p) => (
                    <li key={p.tel}>
                      <a href={`tel:${p.tel}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <MessageCircle className="size-5 text-primary" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold tracking-wide uppercase">WhatsApp</h3>
                <a
                  href={waLink(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <MapPin className="size-5 text-primary" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold tracking-wide uppercase">Address</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{site.addressLine}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Instagram className="size-5 text-primary" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold tracking-wide uppercase">Instagram</h3>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {site.instagramHandle}
                </a>
              </div>
            </div>
          </Reveal>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
