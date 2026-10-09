/**
 * JYOTIRAJ GLOBAL COMPANY — Centralized Configuration & Data
 * Cleanly isolates all brand assets, contact points, and verified content.
 */

export const COMPANY_INFO = {
  name: "JYOTIRAJ GLOBAL COMPANY",
  legalName: "Jyotiraj Global Company",
  tagline: "Nature's Finest. Sourced with Care.",
  eyebrow: "QUALITY • TRUST • GLOBAL AMBITIONS",
  email: "narendrameghare21@gmail.com",
  phone: "+91 73043 14338",
  phoneRaw: "917304314338",
  location: "Maharashtra, India",
  logo: "/images/brand/logo.png",
  // Direct WhatsApp click-to-chat link with prefilled respectful enquiry
  get whatsappUrl() {
    const message = encodeURIComponent(
      "Hello Jyotiraj Global Company, I would like to inquire about your premium dry fruits and artisanal laddus."
    );
    return `https://wa.me/${this.phoneRaw}?text=${message}`;
  },
  // Active verified social media URLs provided by client
  socialLinks: {
    instagram: "https://www.instagram.com/jyotirajglobal?stkn=ZnBhOGlrdWhmMWQ1",
    whatsapp: "https://wa.me/917304314338",
    facebook: "https://www.facebook.com/share/1WcA3EM5GG/",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Our Products", href: "#products" },
  { label: "3D Craft & Story", href: "#craft" },
  { label: "Global Trade", href: "#trade" },
  { label: "Contact", href: "#contact" },
];

// Line 1: Distinct Traditional & Dry Fruit Laddus (Max 5 items)
export const LADDU_COLLECTION = [
  {
    id: "dry-fruit-laddu",
    name: "Artisanal Dry Fruit Laddu",
    subName: "No Added Sugar • Pure Desi Ghee",
    description: "Dates, pistachios, cashews, and almonds bound in pure ghee with gold leaf.",
    image: "/images/products/dry-fruit-laddu-3d.jpg",
    accent: "Sugar-Free Date Sweetness",
  },
  {
    id: "besan-laddu",
    name: "Shahi Besan Laddu",
    subName: "Slow Roasted Gram Flour",
    description: "Golden roasted gram flour infused with fragrant green cardamom and almond slivers.",
    image: "/images/products/besan-laddu.jpg",
    accent: "Pure Cow Ghee Aroma",
  },
  {
    id: "motichoor-laddu",
    name: "Royal Motichoor Laddu",
    subName: "Fine Golden Pearl Confection",
    description: "Delicate gram flour pearls infused with saffron, melon seeds, and crushed pistachio.",
    image: "/images/products/motichoor-laddu.jpg",
    accent: "Kashmiri Saffron Infused",
  },
  {
    id: "gond-laddu",
    name: "Gond Nut Laddu (Dink)",
    subName: "Traditional Winter Superfood",
    description: "Edible gum crisped in ghee with poppy seeds, dry dates, and rich dry fruit medley.",
    image: "/images/products/gond-laddu.jpg",
    accent: "Natural Energy & Wellness",
  },
  {
    id: "rava-laddu",
    name: "Shahi Rava Nut Laddu",
    subName: "Golden Semolina & Cashews",
    description: "Roasted fine semolina with toasted whole cashews, golden raisins, and cardamom.",
    image: "/images/products/rava-laddu.jpg",
    accent: "Crisp Roasted Texture",
  },
];

// Line 2: Premium Pure Dry Fruits (Max 5 items)
export const DRY_FRUITS_COLLECTION = [
  {
    id: "almonds",
    name: "Premium Almonds",
    subName: "Californian & Mamra Kernels",
    description: "Crisp, nutrient-dense whole kernels sorted for uniform size and sweet finish.",
    image: "/images/products/almonds.jpg",
    accent: "Rich in Vitamin E",
  },
  {
    id: "cashews",
    name: "Whole Cashews",
    subName: "Grade W240 Jumbo Kernels",
    description: "Plump, buttery ivory cashews with clean crescent curve and natural crunch.",
    image: "/images/products/cashews.jpg",
    accent: "Smooth & Delicately Roasted",
  },
  {
    id: "pistachios",
    name: "Roasted Pistachios",
    subName: "Naturally Opened Kernels",
    description: "Emerald green Iranian kernels in easy-open shells with delicate sea salt.",
    image: "/images/products/pistachios.jpg",
    accent: "Antioxidant-Rich Crunch",
  },
  {
    id: "walnuts",
    name: "Selected Walnuts",
    subName: "Crisp Golden Halves",
    description: "Earthy, omega-dense walnut halves preserved at optimal moisture for culinary use.",
    image: "/images/products/walnuts.jpg",
    accent: "Natural Omega-3 Nutrition",
  },
  {
    id: "raisins",
    name: "Golden & Green Raisins",
    subName: "Sun-Dried Jewel Grapes",
    description: "Succulent dried grapes harvested at peak maturity without artificial coatings.",
    image: "/images/products/raisins.jpg",
    accent: "Pure Natural Sweetness",
  },
];

export const TRADE_HIGHLIGHTS = [
  {
    title: "Product Showcase",
    description: "A meticulously curated portfolio of dry fruits and natural ingredients meeting stringent grading standards.",
  },
  {
    title: "Business Enquiries",
    description: "Transparent collaboration with domestic distributors, retail partners, and corporate gifting houses.",
  },
  {
    title: "Import & Export Opportunities",
    description: "Building resilient bilateral trading partnerships to bridge regional harvest excellence with world markets.",
  },
];
