import JsuLayout from "./JsuLayout";
import { AboutStrip, ClientsSection, HeroSection, LatestPosts, SolutionsSection, TrustBar } from "./sections";

export default function JsuLanding({ c = {} }) {
  return (
    <JsuLayout c={c}>
      <HeroSection />
      <TrustBar />
      <SolutionsSection home />
      <AboutStrip />
      <LatestPosts />
      <ClientsSection />
    </JsuLayout>
  );
}
