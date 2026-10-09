import { useEffect, useState } from "react";
import { api } from "@/lib/api";

// GET /content returns a list of sections; pages want them keyed by type (content.hero, content.contact, …).
export function useContent() {
  const [content, setContent] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    api.get("/content", { signal: controller.signal })
      .then(({ data }) => {
        if (data?.status === "success" && Array.isArray(data.data)) {
          setContent(Object.fromEntries(data.data.map((item) => [item.type, item.content])));
        }
      })
      .catch(() => { /* pages ship with local fallback copy */ });
    return () => controller.abort();
  }, []);

  return content;
}
