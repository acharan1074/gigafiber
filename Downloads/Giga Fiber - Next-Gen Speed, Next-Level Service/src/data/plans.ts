export interface ServicePlan {
  id: string;
  name: string;
  speed: string;
  data: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export const servicePlans: ServicePlan[] = [
  {
    id: "basic",
    name: "Basic",
    speed: "40 Mbps",
    data: "1400 GB",
    price: 399,
    features: [
      "40 Mbps download speed",
      "1400 GB monthly data",
      "Unlimited @ 4 Mbps after FUP",
      "Unlimited landline calling",
      "24/7 Customer Support",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    speed: "50 Mbps",
    data: "3300 GB",
    price: 449,
    features: [
      "50 Mbps download speed",
      "3300 GB monthly data",
      "Unlimited @ 4 Mbps after FUP",
      "Unlimited landline calling",
      "24/7 support",
    ],
  },
  {
    id: "basic-ott",
    name: "Basic OTT",
    speed: "60 Mbps",
    data: "3300 GB",
    price: 499,
    popular: true,
    features: [
      "60 Mbps download speed",
      "3300 GB monthly data",
      "Unlimited @ 4 Mbps after FUP",
      "Unlimited landline calling",
      "OTT services included",
      "Priority support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    speed: "100 Mbps",
    data: "4000 GB",
    price: 599,
    features: [
      "100 Mbps download speed",
      "4000 GB monthly data",
      "Unlimited @ 4 Mbps after FUP",
      "Unlimited landline calling",
      "iPTV included",
      "Priority support",
      "Free installation",
    ],
  },
  {
    id: "ultra",
    name: "Ultra",
    speed: "150 Mbps",
    data: "4000 GB",
    price: 799,
    features: [
      "150 Mbps download speed",
      "4000 GB monthly data",
      "Unlimited @ 4 Mbps after FUP",
      "Unlimited landline calling",
      "iPTV included",
      "Dedicated support line",
      "Free installation",
      "Static IP available",
    ],
  },
  {
    id: "gigabit",
    name: "Gigabit",
    speed: "1 Gbps",
    data: "6500 GB",
    price: 1999,
    features: [
      "1 Gbps (1000 Mbps) download speed",
      "6500 GB monthly data",
      "Unlimited @ 10 Mbps after FUP",
      "Unlimited landline calling",
      "iPTV premium included",
      "Dedicated support line",
      "Free installation",
      "Static IP available",
      "Priority technical support",
    ],
  },
];

export const companyInfo = {
  name: "Giga Fiber",
  tagline: "Next-Gen Speed, Next-Level Service",
  partner: "BSNL Authorized Partner - BSNL FTTH (Fiber to the Home)",
  phone: "99480 46456",
  whatsapp: "9948046456",
  email: "vgigafibernet@gmail.com",
  office: "13-83/3, BSNL Office, Opposite Joginath Road, Jogipet",
  city: "Jogipet",
};
