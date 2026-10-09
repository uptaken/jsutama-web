import JsuLayout from "@/components/jsu/JsuLayout";
import { AboutIntro, ApproachSection, ChallengeSection, ClientsSection, DnaSection, PhilosophySection } from "@/components/jsu/sections";
import SEO from "@/components/SEO";
import { useContent } from "@/lib/useContent";

export default function About() {
  const c = useContent();
  return (
    <JsuLayout c={c}>
      <SEO
        title="About Us | Jakarta Soerja Utama"
        description="PT Jakarta Soerja Utama (JSU) empowers organizations to accelerate digital transformation with integrated IoT, fleet intelligence, AI & automation and smart device solutions."
        path="/about"
      />
      <AboutIntro />
      <PhilosophySection />
      <DnaSection />
      <ChallengeSection />
      <ApproachSection />
      <ClientsSection />
    </JsuLayout>
  );
}
