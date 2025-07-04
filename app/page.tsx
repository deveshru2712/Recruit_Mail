import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FeatureSection from "@/components/FeatureSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AnalyticsSection />
      <Footer />
    </>
  );
}
