import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import AgencyBanner from "@/components/AgencyBanner";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import Pricing from "@/components/Pricing";
import AgenticCommerce from "@/components/AgenticCommerce";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative", zIndex: 2, overflow: "hidden" }}>
        <Hero />
        <LogoMarquee />
        <AgencyBanner />
        <Services />
        <Founder />
        <Pricing />
        <AgenticCommerce />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
