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
  { label: "Artisanal Craft", href: "#craft" },
  { label: "Global Trade", href: "#trade" },
  { label: "Contact", href: "#contact" },
];

// Line 1: Client's Authentic Artisanal Laddus & Healthy Treats (Exact 6 Varieties)
export const LADDU_COLLECTION = [
  {
    id: "dry-fruits-laddu",
    name: "Dry Fruits Laddu",
    subName: "No Added Sugar • Pure Desi Ghee",
    description: "Almonds, cashews, pistachios, and Medjool dates rolled in crunchy crushed nuts.",
    image: "/images/products/dry-fruits-laddu.jpg",
    accent: "Sugar-Free Sweetness",
  },
  {
    id: "methi-laddu",
    name: "Methi Laddu",
    subName: "Ayurvedic Joint & Bone Care",
    description: "Traditional roasted fenugreek, dry ginger, pure cow ghee, and nuts for vitality and strength.",
    image: "/images/products/methi-laddu.jpg",
    accent: "Ayurvedic Health",
  },
  {
    id: "khajur-roll",
    name: "Khajur Roll",
    subName: "Artisanal Date & Nut Delicacy",
    description: "Finest Arabian dates blended with chopped California almonds, cashews, and poppy seed crust.",
    image: "/images/products/khajur-roll.jpg",
    accent: "Natural Iron & Energy",
  },
  {
    id: "anjir-barfi",
    name: "Anjir Barfi",
    subName: "Pure Fig & Dry Fruit Cuts",
    description: "Sun-dried golden figs slow-simmered with crushed pistachios and cashews. 100% guilt-free.",
    image: "/images/products/anjir-barfi.jpg",
    accent: "High Fiber & Calcium",
  },
  {
    id: "kids-special-laddu",
    name: "Kids Special Laddu",
    subName: "Wholesome Daily Energy Bites",
    description: "Mild, nutrient-dense dry fruit spheres designed for growing children. Rich in essential minerals.",
    image: "/images/products/kids-special-laddu.jpg",
    accent: "Brain & Bone Nutrition",
  },
  {
    id: "delivery-special-laddu",
    name: "Delivery Special Laddu",
    subName: "Postpartum Restorative Superfood",
    description: "Specialized post-delivery wellness recipe with edible gum (gond), dry ginger, makhana, and desi ghee.",
    image: "/images/products/delivery-special-laddu.jpg",
    accent: "Postnatal Healing Recipe",
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
