import JsuLanding from "@/components/jsu/JsuLanding";
import SEO from "@/components/SEO";
import { organizationLd } from "@/lib/schema";

export default function Landing() {
  return (
    <>
      <SEO
        title="Jakarta Soerja Utama | Your IoT & Digital Solutions Partner"
        description="IoT Connectivity, Smart Devices, Fleet Intelligence, AI Automation and Digital Solutions to drive sustainable growth and lasting impact."
        path="/"
        jsonLd={organizationLd()}
      />
      <JsuLanding />
    </>
  );
}
