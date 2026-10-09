import JsuLayout from "@/components/jsu/JsuLayout";
import { ClientsSection, SolutionsSection } from "@/components/jsu/sections";
import SEO from "@/components/SEO";
import { useContent } from "@/lib/useContent";

export default function Solutions() {
  const c = useContent();
  return (
    <JsuLayout c={c}>
      <SEO
        title="Our Solutions | Jakarta Soerja Utama"
        description="IoT Connectivity, Fleet Intelligence, AI & Automation and Smart Devices: one partner, complete solutions."
        path="/solutions"
      />
      <SolutionsSection />
      <ClientsSection />
    </JsuLayout>
  );
}
