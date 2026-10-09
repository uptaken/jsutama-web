import { ClientsSection, SolutionsSection } from "@/components/jsu/sections";
import { CompareSection, EngageSection, IndustryMatrix, StackSection } from "@/components/jsu/extras";
import SEO from "@/components/SEO";
import { breadcrumbLd } from "@/lib/schema";

export default function Solutions() {
  return (
    <>
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
    </>
  );
}
