import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Stats } from "@/components/site/Stats";
import { FeaturedCars } from "@/components/site/FeaturedCars";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FinanceCta } from "@/components/site/FinanceCta";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramSection } from "@/components/site/InstagramSection";
import { LocationMap } from "@/components/site/LocationMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himalyan Wheels — Used Cars in Solan, Himachal Pradesh" },
      {
        name: "description",
        content:
          "Buy, sell or exchange quality pre-owned cars in Solan, Himachal Pradesh. Transparent deals, finance assistance and WhatsApp support.",
      },
      { property: "og:title", content: "Himalyan Wheels — Used Cars in Solan, Himachal Pradesh" },
      {
        property: "og:description",
        content:
          "Buy, sell or exchange quality pre-owned cars at competitive prices with flexible finance options.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <FeaturedCars />
      <WhyChooseUs />
      <HowItWorks />
      <FinanceCta />
      <Testimonials />
      <InstagramSection />
      <LocationMap />
    </>
  );
}
