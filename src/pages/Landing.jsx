import JsuLanding from "@/components/jsu/JsuLanding";
import SEO from "@/components/SEO";
import { organizationLd } from "@/lib/schema";
import { useContent } from "@/lib/useContent";

export default function Landing() {
  const content = useContent();
  return (
    <>
      <SEO
        title="Jakarta Soerja Utama | Your IoT & Digital Solutions Partner"
        description="IoT Connectivity, Smart Devices, Fleet Intelligence, AI Automation and Digital Solutions to drive sustainable growth and lasting impact."
        path="/"
        jsonLd={organizationLd()}
      />
      <JsuLanding c={content} />
    </>
  );
}
