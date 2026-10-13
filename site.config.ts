import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Glossy Gestures",
  tagline: "Custom nails, glam makeup, and henna in Brampton. Book by DM.",
  category: "Nails, makeup, and henna",
  schemaType: "BeautySalon",
  area: "Brampton, ON",
  siteUrl: "https://glossy-gestures.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8B5E4B" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton beauty studio",
    headline: "Nails, glam, and henna, made for you",
    subhead:
      "Custom nail designs, glam makeup, and henna by Glossy Gestures. Send a DM to book your appointment.",
    images: [
      { src: "/images/post-1.jpg", alt: "Chocolate brown leopard print nails" },
      { src: "/images/post-7.jpg", alt: "Glossy Gestures artist portrait" },
      { src: "/images/post-8.jpg", alt: "Soft glam makeup look" },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/glossy_gestures_26" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Custom nails",
    "Glam makeup",
    "Henna artist",
    "Book by Instagram DM",
  ],

  about: {
    title: "Glossy Gestures",
    body: [
      "Glossy Gestures is a Brampton beauty studio for custom nails, glam makeup, and henna. From chocolate leopard print sets to soft glam for your next event, every look is finished with care.",
      "Ready to book? Send a DM with your date and idea, and we will take it from there.",
    ],
    image: { src: "/images/post-7.jpg", alt: "Glossy Gestures artist portrait" },
  },

  menu: {
    label: "Services",
    title: "What we offer",
    intro: "Popular services. Message for pricing on your look and date.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your look and date.",
    groups: [
      {
        title: "Beauty",
        items: [
          { name: "Custom nails", description: "Statement sets and detailed nail art." },
          { name: "Glam makeup", description: "Soft glam and event ready looks." },
          { name: "Henna", description: "Henna designs for celebrations and everyday." },
        ],
      },
    ],
    footnote: "Ask about current designs and availability when you book.",
  },

  gallery: {
    title: "Recent looks",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 805,
        alt: "Chocolate brown leopard print nails",
        caption: "Chocolate leopard print",
        href: "https://www.instagram.com/p/DecpTqwquum/",
      },
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 1920,
        alt: "Leopard print nail set detail",
        caption: "Wild and classy",
        href: "https://www.instagram.com/p/DecpPvsKwYk/",
      },
      {
        src: "/images/post-3.jpg",
        width: 720,
        height: 1280,
        alt: "Glam look by Glossy Gestures",
        caption: "Glam look",
        href: "https://www.instagram.com/p/DeZ4WuJKI0D/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1440,
        alt: "Glossy Gestures artist portrait",
        caption: "Behind the glam",
        href: "https://www.instagram.com/p/Dc9iMv7qjOE/",
      },
      {
        src: "/images/post-8.jpg",
        width: 720,
        height: 1280,
        alt: "Soft glam makeup",
        caption: "Soft glam finish",
        href: "https://www.instagram.com/p/Dc6WlRYlLwk/",
      },
      {
        src: "/images/post-6.jpg",
        width: 720,
        height: 1280,
        alt: "Event glam makeup",
        caption: "Event glam",
        href: "https://www.instagram.com/p/Ddu_9HpqRTT/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "glossy_gestures_26",
    embeds: [
      "https://www.instagram.com/p/DecpTqwquum/",
      "https://www.instagram.com/p/Dc9iMv7qjOE/",
      "https://www.instagram.com/p/Dc6WlRYlLwk/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your appointment",
    intro:
      "Bookings are by Instagram DM. Tap below to open a starter message with your date and idea.",
    dmMessage:
      "Hi Glossy Gestures! I would love to book an appointment.\nPreferred date:\nService (nails, makeup, or henna):\nDesign idea:",
    links: [],
    note: "Appointments in Brampton. Message to confirm your date and look.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I book?",
      a: "Send an Instagram DM with your preferred date, service (nails, makeup, or henna), and design idea.",
    },
    {
      q: "Where are you located?",
      a: "Appointments are in Brampton, Ontario. Details are shared when you book.",
    },
    {
      q: "What services do you offer?",
      a: "Custom nails, glam makeup, and henna. Message for pricing on your look and date.",
    },
    {
      q: "Do you do event makeup?",
      a: "Yes. Soft glam and event ready looks are available. Share your date and inspo in a DM.",
    },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "Glossy Gestures | Nails, makeup, and henna in Brampton",
    description:
      "Custom nails, glam makeup, and henna in Brampton, ON. Book your appointment with Glossy Gestures by Instagram DM.",
    keywords: [
      "Brampton nail tech",
      "Brampton makeup artist",
      "henna Brampton",
      "Glossy Gestures",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
