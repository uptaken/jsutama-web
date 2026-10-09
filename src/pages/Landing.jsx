import PremiumLanding from "@/components/premium/PremiumLanding";
import { useContent } from "@/lib/useContent";

export default function Landing() {
  const content = useContent();
  return <PremiumLanding c={content} />;
}
