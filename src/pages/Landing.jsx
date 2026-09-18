import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import PremiumLanding from "@/components/premium/PremiumLanding";

export default function Landing() {
  const [content, setContent] = useState({});
  useEffect(() => {
    const controller = new AbortController();
    api.get("/content", { signal: controller.signal }).then(({ data }) => {
      if (data?.status === "success" && Array.isArray(data.data)) {
        setContent(Object.fromEntries(data.data.map(item => [item.type, item.content])));
      }
    }).catch(() => { /* The complete editorial fallback remains available. */ });
    return () => controller.abort();
  }, []);
  return <PremiumLanding c={content} />;
}
