/**
 * JYOTIRAJ GLOBAL COMPANY — Centralized Configuration & Data
 * Cleanly isolates all brand assets, contact points, and verified content.
 */

export const COMPANY_INFO = {
  name: "JYOTIRAJ GLOBAL COMPANY",
  legalName: "Jyotiraj Global Company",
  tagline: "Artisanal Handcrafted Laddus & Healthy Treats.",
  eyebrow: "ARTISANAL LADDUS • PURE DESI GHEE • GLOBAL AMBITIONS",
  email: "narendrameghare21@gmail.com",
  phone: "+91 73043 14338",
  phoneRaw: "917304314338",
  location: "Maharashtra, India",
  logo: "/images/brand/logo.png",
  // Direct WhatsApp click-to-chat link with prefilled respectful enquiry
  get whatsappUrl() {
    const message = encodeURIComponent(
      "Hello Jyotiraj Global Company, I would like to inquire about your handcrafted artisanal laddus."
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

// Client's Authentic Artisanal Laddus & Healthy Treats (Exact 6 Varieties)
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

export const TRADE_HIGHLIGHTS = [
  {
    title: "Confectionery Portfolio",
    description: "A meticulously crafted portfolio of traditional and healthy laddus meeting stringent purity standards.",
  },
  {
    title: "Business Enquiries",
    description: "Transparent collaboration with domestic distributors, retail partners, and corporate festive gifting houses.",
  },
  {
    title: "Import & Export Opportunities",
    description: "Building resilient international partnerships to bring authentic Indian artisanal confections to world markets.",
  },
];
