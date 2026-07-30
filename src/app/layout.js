import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://greenhaul.vercel.app"),
  title: "GreenHaul Removal & Cleaning Services | Seattle & Everett",
  description:
    "Professional junk removal, house cleaning, move-out deep cleaning, and pressure washing in Seattle, Everett and surrounding areas. Available 24/7 Mon-Sat. Call (425) 280-2915.",
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
  ],
  openGraph: {
    title: "GreenHaul Removal & Cleaning Services",
    description:
      "Eco-friendly junk removal and cleaning services in Seattle and Everett. Fast, reliable, and affordable. Call (425) 280-2915.",
    url: "https://greenhaul.vercel.app",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
