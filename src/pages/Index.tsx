import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CQCBadge } from "@/components/home/CQCBadge";
import { LocationsSection } from "@/components/home/LocationsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <CQCBadge />
      <LocationsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
