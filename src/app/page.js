import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import WhyUs from "@/components/WhyUs";
import EstimateCalculator from "@/components/EstimateCalculator";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <BeforeAfterGallery />
        <WhyUs />
        <EstimateCalculator />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
