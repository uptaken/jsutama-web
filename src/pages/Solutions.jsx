import JsuLayout from "@/components/jsu/JsuLayout";
import { ClientsSection, SolutionsSection } from "@/components/jsu/sections";
import { CompareSection, EngageSection, IndustryMatrix, StackSection } from "@/components/jsu/extras";
import SEO from "@/components/SEO";
import { breadcrumbLd } from "@/lib/schema";
import { useContent } from "@/lib/useContent";

export default function Solutions() {
  const c = useContent();
  return (
    <JsuLayout c={c}>
      <SEO
        title="Our Solutions | Jakarta Soerja Utama"
        description="IoT connectivity, fleet intelligence, AI & automation and smart devices from one integrator. Compare solutions and find the right starting point."
        path="/solutions"
        jsonLd={breadcrumbLd([["Home", "/"], ["Our Solutions", "/solutions"]])}
      />
      <SolutionsSection />
      <StackSection />
      <CompareSection />
      <IndustryMatrix />
      <EngageSection />
      <ClientsSection />
    </JsuLayout>
  );
}
