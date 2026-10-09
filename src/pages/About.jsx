import JsuLayout from "@/components/jsu/JsuLayout";
import { AboutIntro, ApproachSection, ChallengeSection, ClientsSection, DnaSection, PhilosophySection } from "@/components/jsu/sections";
import { CompanyProfile, EcosystemSection, IndustriesSection, PartnershipModel, StandardsSection, VisitSection } from "@/components/jsu/extras";
import SEO from "@/components/SEO";
import { breadcrumbLd, organizationLd } from "@/lib/schema";
import { useContent } from "@/lib/useContent";

export default function About() {
  const c = useContent();
  return (
    <JsuLayout c={c}>
      <SEO
        title="About Us | Jakarta Soerja Utama"
        description="PT Jakarta Soerja Utama (JSU) is a system integrator for IoT, fleet intelligence, AI & automation and smart devices. Meet the team, our DNA and our approach."
        path="/about"
        jsonLd={[organizationLd(), breadcrumbLd([["Home", "/"], ["About Us", "/about"]])]}
      />
      <AboutIntro />
      <CompanyProfile />
      <PartnershipModel />
      <PhilosophySection />
      <DnaSection />
      <IndustriesSection />
      <ChallengeSection />
      <EcosystemSection />
      <StandardsSection />
      <ApproachSection />
      <VisitSection />
      <ClientsSection />
    </JsuLayout>
  );
}
