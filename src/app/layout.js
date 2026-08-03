import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { PHONE_DISPLAY } from "@/lib/config";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://greenhaulremoval.com"),
  title: "GreenHaul Removal & Cleaning Services | Seattle & Everett",
  description:
    `Professional eco-friendly junk removal, house cleaning, move-out deep cleaning, and pressure washing in Seattle, Everett, Bellevue & Puget Sound. Available 24/6. Call ${PHONE_DISPLAY}.`,
  keywords: [
    "GreenHaul",
    "Junk Removal Seattle",
    "Junk Removal Everett",
    "House Cleaning Seattle",
    "Move Out Cleaning Puget Sound",
    "Pressure Washing Everett",
    "Green Haul Removal Services",
    "Limpieza de casas Seattle",
    "Retiro de basura Everett",
    "Eco friendly junk hauling Bellevue",
  ],
  alternates: {
    canonical: "https://greenhaulremoval.com",
  },
  openGraph: {
    title: "GreenHaul Removal & Cleaning Services | Seattle & Everett",
    description:
      `Eco-friendly junk removal and deep cleaning services in Seattle, Everett, and surrounding areas. Fast, reliable, and affordable. Call ${PHONE_DISPLAY}.`,
    url: "https://greenhaulremoval.com",
    siteName: "GreenHaul Removal Services",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 800,
        alt: "GreenHaul Cleaning and Junk Removal Services Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenHaul Removal & Cleaning Services | Seattle & Everett",
    description:
      `Eco-friendly junk removal and cleaning services in Seattle and Everett. Fast, reliable, and affordable. Call ${PHONE_DISPLAY}.`,
    images: ["/images/logo.jpeg"],
  },
  other: {
    "geo.region": "US-WA",
    "geo.placename": "Seattle, Washington",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GreenHaul Removal & Cleaning Services",
  "image": "https://greenhaulremoval.com/images/logo.jpeg",
  "@id": "https://greenhaulremoval.com",
  "url": "https://greenhaulremoval.com",
  "telephone": PHONE_DISPLAY,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "postalCode": "98101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6062,
    "longitude": -122.3321
  },
  "areaServed": [
    "Seattle",
    "Everett",
    "Bellevue",
    "Lynnwood",
    "Kirkland",
    "Redmond",
    "Renton",
    "Shoreline",
    "Snohomish County",
    "Puget Sound"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://x.com/El_Barto05"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you calculate junk removal pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is based on the volume of space your items take up in our truck, as well as the weight/type of material. We provide upfront estimates before starting any work."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get an accurate quote by sending photos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Yes! Sending photos of your junk, rooms, or yard via text/WhatsApp to ${PHONE_DISPLAY} or through our contact form is the fastest way to receive an accurate quote.`
      }
    },
    {
      "@type": "Question",
      "name": "What are your operating hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are available 24 hours a day from Monday to Saturday. On Sundays, we operate by appointment."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to the items you haul away?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We sort items to minimize landfill impact. Usable furniture and items are donated, recyclable metals/plastics are recycled, and remaining debris is disposed of responsibly."
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased font-sans transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
