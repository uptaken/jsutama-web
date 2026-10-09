import { AboutStrip, ClientsSection, HeroSection, LatestPosts, SolutionsSection, TrustBar } from "./sections";

export default function JsuLanding() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <SolutionsSection home />
      <AboutStrip />
      <LatestPosts />
      <ClientsSection />
    </>
  );
}
