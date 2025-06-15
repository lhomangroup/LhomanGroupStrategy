import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExpertiseSection from "@/components/expertise-section";
import MethodologySection from "@/components/methodology-section";
import TeamSection from "@/components/team-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExpertiseSection />
      <MethodologySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
