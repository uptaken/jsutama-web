import JsuLanding from "@/components/jsu/JsuLanding";
import { useContent } from "@/lib/useContent";

export default function Landing() {
  const content = useContent();
  return <JsuLanding c={content} />;
}
