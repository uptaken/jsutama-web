import JsuLayout from "./JsuLayout";
import { ClientsSection, HeroSection, Teasers, TrustBar } from "./sections";

export default function JsuLanding({ c = {} }) {
  return (
    <JsuLayout c={c}>
      <HeroSection />
      <TrustBar />
      <Teasers />
      <ClientsSection />
    </JsuLayout>
  );
}
