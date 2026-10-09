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
      "Hello Jyotiraj Global Company, I would like to inquire about your premium dry fruits and business opportunities."
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

export const PRODUCT_CATEGORIES = [
  {
    id: "almonds",
    name: "Premium Almonds",
    subName: "Hand-selected Californian & Mamra varieties",
    description: "Crisp, naturally nutrient-dense whole kernels sorted for consistent size and delicate sweetness.",
    image: "/images/products/almonds.jpg",
    accent: "Rich in vitamin E & healthy fats",
  },
  {
    id: "cashews",
    name: "Whole Cashews",
    subName: "Grade W240 & W320 Whole Kernels",
    description: "Plump, buttery-smooth whole cashews with clean ivory texture and rich, nutty finish.",
    image: "/images/products/cashews.jpg",
    accent: "Naturally creamy & delicately roasted",
  },
  {
    id: "pistachios",
    name: "Roasted Pistachios",
    subName: "Naturally opened, lightly salted or plain",
    description: "Vibrant emerald green kernels with easy-open shells, celebrated for distinctive crunch and flavor.",
    image: "/images/products/pistachios.jpg",
    accent: "Antioxidant-rich wholesome snacking",
  },
  {
    id: "walnuts",
    name: "Selected Walnuts",
    subName: "Crisp Halves & Brain-Patterned Kernels",
    description: "Earthy, omega-rich whole walnut halves preserved at optimal freshness for culinary use and direct snacking.",
    image: "/images/products/walnuts.jpg",
    accent: "Wholesome brain food & natural energy",
  },
  {
    id: "raisins",
    name: "Golden & Green Raisins",
    subName: "Sun-dried long & round varieties",
    description: "Naturally sweet, succulent dried grapes harvested at peak maturity without artificial sheen.",
    image: "/images/products/raisins.jpg",
    accent: "Pure fruit sweetness & dietary fiber",
  },
  {
    id: "dates",
    name: "Choice Dates & Figs",
    subName: "Medjool, Kimia & sundried whole figs",
    description: "Luscious texture and deep caramel notes suited for everyday wellness, gifting, and artisanal confectionery.",
    image: "/images/products/dates.jpg",
    accent: "Naturally caramel-sweet & energizing",
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
