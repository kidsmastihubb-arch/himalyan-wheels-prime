import creta from "@/assets/cars/creta.jpg";
import brezza from "@/assets/cars/brezza.jpg";
import thar from "@/assets/cars/thar.jpg";
import fortuner from "@/assets/cars/fortuner.jpg";
import city from "@/assets/cars/city.jpg";
import swift from "@/assets/cars/swift.jpg";

/**
 * DEMO INVENTORY.
 * These are sample listings used while real stock photos and vehicles are
 * being added. Replace the entries below with real vehicles — the UI reads
 * everything from this file only.
 */
export const IS_DEMO_INVENTORY = true;

export type Fuel = "Petrol" | "Diesel" | "CNG";
export type Transmission = "Manual" | "Automatic";
export type BodyType = "SUV" | "Sedan" | "Hatchback" | "MUV";

export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  /** price in lakh */
  price: number;
  kmDriven: number;
  fuel: Fuel;
  transmission: Transmission;
  bodyType: BodyType;
  owners: string;
  location: string;
  condition: string;
  badge?: "Featured" | "Just Added" | "Great Deal";
  description: string;
  features: string[];
  images: string[];
  featured: boolean;
  status: "available" | "sold";
}

export const cars: Car[] = [
  {
    id: "hw-01",
    slug: "hyundai-creta-sx-2021",
    brand: "Hyundai",
    model: "Creta",
    variant: "SX",
    year: 2021,
    price: 12.5,
    kmDriven: 42000,
    fuel: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    owners: "1st Owner",
    location: "Solan, Himachal Pradesh",
    condition: "Excellent",
    badge: "Featured",
    description:
      "A well-maintained Creta SX diesel that has spent its life on Himachal roads. Suspension, brakes and clutch have been checked, service history is available and the vehicle is ready for immediate transfer.",
    features: [
      "Touchscreen infotainment",
      "Rear parking camera",
      "Cruise control",
      "Automatic climate control",
      "Alloy wheels",
      "Full service history",
    ],
    images: [creta],
    featured: true,
    status: "available",
  },
  {
    id: "hw-02",
    slug: "mahindra-thar-lx-2022",
    brand: "Mahindra",
    model: "Thar",
    variant: "LX 4x4",
    year: 2022,
    price: 14.75,
    kmDriven: 28000,
    fuel: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    owners: "1st Owner",
    location: "Solan, Himachal Pradesh",
    condition: "Excellent",
    badge: "Great Deal",
    description:
      "Hard-top Thar 4x4 that is genuinely suited to hill driving. Tyres have plenty of life left, the underbody is clean and there is no accident history on record.",
    features: [
      "4x4 drivetrain",
      "Hard top",
      "Cruise control",
      "Touchscreen with Android Auto",
      "Front and rear washers",
      "Accident free",
    ],
    images: [thar],
    featured: true,
    status: "available",
  },
  {
    id: "hw-03",
    slug: "maruti-suzuki-brezza-zxi-2020",
    brand: "Maruti Suzuki",
    model: "Brezza",
    variant: "ZXi",
    year: 2020,
    price: 8.4,
    kmDriven: 51000,
    fuel: "Petrol",
    transmission: "Manual",
    bodyType: "SUV",
    owners: "1st Owner",
    location: "Solan, Himachal Pradesh",
    condition: "Very Good",
    badge: "Just Added",
    description:
      "Compact SUV that is easy to drive on narrow hill roads and cheap to run. Regular servicing done at authorised workshops, interiors are clean and paint is largely original.",
    features: [
      "Smart play infotainment",
      "Reverse camera",
      "Dual airbags",
      "Alloy wheels",
      "Auto climate control",
      "Original paint",
    ],
    images: [brezza],
    featured: true,
    status: "available",
  },
  {
    id: "hw-04",
    slug: "toyota-fortuner-4x2-2019",
    brand: "Toyota",
    model: "Fortuner",
    variant: "4x2 AT",
    year: 2019,
    price: 27.9,
    kmDriven: 68000,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    owners: "2nd Owner",
    location: "Solan, Himachal Pradesh",
    condition: "Very Good",
    description:
      "A proper highway and hill cruiser with the dependable 2.8 diesel automatic. Timing, fluids and brakes were serviced recently and all documents are in order.",
    features: [
      "Automatic transmission",
      "Leather seats",
      "Push button start",
      "Powered driver seat",
      "Reverse camera",
      "Complete documentation",
    ],
    images: [fortuner],
    featured: true,
    status: "available",
  },
  {
    id: "hw-05",
    slug: "honda-city-vx-2018",
    brand: "Honda",
    model: "City",
    variant: "VX CVT",
    year: 2018,
    price: 7.95,
    kmDriven: 59000,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    owners: "1st Owner",
    location: "Solan, Himachal Pradesh",
    condition: "Very Good",
    description:
      "Comfortable petrol automatic sedan, ideal for family use between Solan, Shimla and Chandigarh. Smooth gearbox, clean interiors and a strong service record.",
    features: [
      "CVT automatic",
      "Sunroof",
      "Cruise control",
      "Rear AC vents",
      "Reverse camera",
      "Single owner",
    ],
    images: [city],
    featured: false,
    status: "available",
  },
  {
    id: "hw-06",
    slug: "maruti-suzuki-swift-vxi-2019",
    brand: "Maruti Suzuki",
    model: "Swift",
    variant: "VXi",
    year: 2019,
    price: 5.25,
    kmDriven: 46000,
    fuel: "Petrol",
    transmission: "Manual",
    bodyType: "Hatchback",
    owners: "1st Owner",
    location: "Solan, Himachal Pradesh",
    condition: "Good",
    badge: "Great Deal",
    description:
      "A light, economical hatchback that makes sense as a first car or a second city car. Peppy petrol engine, low running costs and easy parts availability across Himachal.",
    features: [
      "Dual airbags",
      "ABS with EBD",
      "Touchscreen audio",
      "Keyless entry",
      "Fuel efficient",
      "Low maintenance",
    ],
    images: [swift],
    featured: false,
    status: "available",
  },
];

export function carTitle(car: Car) {
  return `${car.year} ${car.brand} ${car.model} ${car.variant}`.trim();
}

export function getCar(slug: string) {
  return cars.find((c) => c.slug === slug);
}

export const brands = [...new Set(cars.map((c) => c.brand))].sort();
export const bodyTypes = [...new Set(cars.map((c) => c.bodyType))].sort();
export const fuels = [...new Set(cars.map((c) => c.fuel))].sort();
