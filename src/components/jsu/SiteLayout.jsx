import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import JsuLayout from "./JsuLayout";
import { useContent } from "@/lib/useContent";

// Header, footer and pop-ups live here once, so only the page content changes (and animates) between routes.
export default function SiteLayout() {
  const c = useContent();
  return (
    <JsuLayout c={c}>
      <Suspense fallback={<div className="jsu-page-loading" role="status" aria-label="Loading" />}>
        <Outlet />
      </Suspense>
    </JsuLayout>
  );
}
