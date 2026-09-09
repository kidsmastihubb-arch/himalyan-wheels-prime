export type Car = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  kmDriven: number;
  fuel: "Diesel" | "Petrol" | "CNG" | "Electric";
  transmission: "Manual" | "Automatic";
  bodyType: "SUV" | "Sedan" | "Hatchback" | "MUV";
  location: string;
  description: string;
  features: string[];
  images: string[];
  featured: boolean;
  status: "Sample listing" | "Available";
  badge?: "Featured" | "Just Added" | "Great Deal";
};

export const cars: Car[] = [
  {
    id: "creta-sx-2021",
    slug: "hyundai-creta-sx-2021",
    brand: "Hyundai",
    model: "Creta",
    variant: "SX",
    year: 2021,
    price: 1250000,
    kmDriven: 42000,
    fuel: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    location: "Solan, HP",
    description: "A beautifully kept, feature-rich Creta with a confident road presence and a refined diesel drive.",
    features: ["Panoramic Sunroof", "Cruise Control", "Rear Camera", "Wireless Charging", "Push Button Start"],
    images: ["https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200"],
    featured: true,
    status: "Sample listing",
    badge: "Featured",
  },
  {
    id: "thar-lx-2022",
    slug: "mahindra-thar-lx-2022",
    brand: "Mahindra",
    model: "Thar",
    variant: "LX Hard Top",
    year: 2022,
    price: 1425000,
    kmDriven: 28500,
    fuel: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    location: "Kandaghat, HP",
    description: "Adventure-ready and exceptionally presented. The Thar that turns every mountain road into a destination.",
    features: ["4x4 Drive", "Touchscreen Infotainment", "Alloy Wheels", "Roof Rails", "Hill Hold Assist"],
    images: ["https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1200"],
    featured: true,
    status: "Sample listing",
    badge: "Just Added",
  },
  {
    id: "fortuner-4x4-2020",
    slug: "toyota-fortuner-4x4-2020",
    brand: "Toyota",
    model: "Fortuner",
    variant: "4x4 AT",
    year: 2020,
    price: 2980000,
    kmDriven: 51000,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    location: "Solan, HP",
    description: "Commanding, capable and maintained with care. A premium full-size SUV built for long journeys.",
    features: ["4x4 Automatic", "Leather Interiors", "7 Seats", "LED Headlamps", "Downhill Assist"],
    images: ["https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/104401/pexels-photo-104401.jpeg?auto=compress&cs=tinysrgb&w=1200"],
    featured: true,
    status: "Sample listing",
    badge: "Great Deal",
  },
  {
    id: "brezza-zxi-2022",
    slug: "maruti-suzuki-brezza-zxi-2022",
    brand: "Maruti Suzuki",
    model: "Brezza",
    variant: "ZXi",
    year: 2022,
    price: 980000,
    kmDriven: 19800,
    fuel: "Petrol",
    transmission: "Manual",
    bodyType: "SUV",
    location: "Solan, HP",
    description: "Low-mileage, city-friendly and ready for the hills with modern comfort and excellent practicality.",
    features: ["Electric Sunroof", "6 Airbags", "SmartPlay Pro+", "ESP", "Rear AC Vents"],
    images: ["https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/161100/pexels-photo-161100.jpeg?auto=compress&cs=tinysrgb&w=1200"],
    featured: false,
    status: "Sample listing",
    badge: "Just Added",
  },
  {
    id: "city-v-2021",
    slug: "honda-city-v-2021",
    brand: "Honda",
    model: "City",
    variant: "V CVT",
    year: 2021,
    price: 1125000,
    kmDriven: 31000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    location: "Shimla, HP",
    description: "Elegant, comfortable and effortless. A well-kept City for drivers who appreciate quiet confidence.",
    features: ["Honda Sensing", "Sunroof", "CVT Automatic", "Connected Car Tech", "Rear Camera"],
    images: ["https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200"],
    featured: false,
    status: "Sample listing",
  },
  {
    id: "venue-sx-2022",
    slug: "hyundai-venue-sx-2022",
    brand: "Hyundai",
    model: "Venue",
    variant: "SX Turbo",
    year: 2022,
    price: 925000,
    kmDriven: 24000,
    fuel: "Petrol",
    transmission: "Manual",
    bodyType: "SUV",
    location: "Solan, HP",
    description: "Compact dimensions, big personality. A spirited turbo SUV that fits perfectly into mountain life.",
    features: ["BlueLink Connected", "Sunroof", "Alloy Wheels", "Air Purifier", "Drive Modes"],
    images: ["https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200"],
    featured: false,
    status: "Sample listing",
  },
];

export const formatPrice = (price: number): string => {
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
  return `₹${(price / 100000).toFixed(2)} Lakh`;
};

export const getCarBySlug = (slug: string): Car | undefined => cars.find((car) => car.slug === slug);
