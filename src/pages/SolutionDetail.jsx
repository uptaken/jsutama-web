import { Navigate, useParams } from "react-router-dom";
import SolutionPage from "@/components/jsu/SolutionPage";
import { SOLUTION_PAGES, faqFor } from "@/components/jsu/data";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/schema";
import SEO from "@/components/SEO";

export default function SolutionDetail() {
  const { id } = useParams();
  const page = SOLUTION_PAGES[id];
  if (!page) return <Navigate to="/solutions" replace />;
  return (
    <>
      <SEO
        title={`${page.title} | Jakarta Soerja Utama`}
        description={`${page.tagline} ${page.headline}`}
        path={`/solutions/${id}`}
        jsonLd={[
          serviceLd({ name: page.title, description: `${page.tagline} ${page.headline}`, path: `/solutions/${id}` }),
          breadcrumbLd([["Home", "/"], ["Our Solutions", "/solutions"], [page.title, `/solutions/${id}`]]),
          faqLd(faqFor(page.title)),
        ]}
      />
      <SolutionPage key={id} id={id} />
    </>
  );
}
