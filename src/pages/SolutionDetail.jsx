import { Navigate, useParams } from "react-router-dom";
import JsuLayout from "@/components/jsu/JsuLayout";
import SolutionPage from "@/components/jsu/SolutionPage";
import { SOLUTION_PAGES } from "@/components/jsu/data";
import SEO from "@/components/SEO";
import { useContent } from "@/lib/useContent";

export default function SolutionDetail() {
  const { id } = useParams();
  const c = useContent();
  const page = SOLUTION_PAGES[id];
  if (!page) return <Navigate to="/solutions" replace />;
  return (
    <JsuLayout c={c}>
      <SEO
        title={`${page.title} | Jakarta Soerja Utama`}
        description={`${page.tagline} ${page.headline}`}
        path={`/solutions/${id}`}
      />
      <SolutionPage key={id} id={id} />
    </JsuLayout>
  );
}
