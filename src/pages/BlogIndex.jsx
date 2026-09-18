import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, absUploadUrl } from "@/lib/api";
import SEO from "@/components/SEO";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function fmtDate(iso) {
  try { return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }); }
  catch { return iso; }
}

export default function BlogIndex() {
  const [c, setC] = useState({});
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    api.get("/content").then(({ data }) => setC(data || {})).catch(() => {});
    api.get("/blog?limit=50").then(({ data }) => { setPosts(data || []); setLoaded(true); }).catch(() => setLoaded(true));
  }, []);

  return (
    <>
      <SEO
        title="All Articles – Digix Blog"
        description="Engineering notes, deep dives, and field guides from the Digix team on cloud, cybersecurity, AI/ML, and modern IT."
        path="/blog"
        image={c?.seo?.og_image_url}
      />
      <Nav c={c} />
      <main className="min-h-screen bg-white pb-20">
        <div className="max-w-[1100px] mx-auto px-6 pt-14">
          <Link
            to="/"
            data-testid="back-to-home"
            className="inline-flex items-center gap-1.5 text-ink-muted text-sm no-underline mb-7 transition-colors hover:text-brand"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-extrabold tracking-[-1.6px] text-ink mb-3">All Articles</h1>
          <p className="text-ink-muted text-base mb-10">
            Engineering notes, deep dives, and field guides from the Digix team.
          </p>

          {loaded && posts.length === 0 && (
            <p className="text-ink-muted" data-testid="no-posts">No posts published yet. Check back soon!</p>
          )}

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {posts.map((p, i) => (
              <Link
                to={`/blog/${p.slug}`}
                key={p.id}
                data-testid={`index-card-${i + 1}`}
                className="group/card bg-white border border-[#ECEEF4] rounded-2xl overflow-hidden cursor-pointer flex flex-col text-inherit no-underline transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-card-hover hover:border-[#dbe1f0]"
              >
                <div className="w-full aspect-[16/10] overflow-hidden bg-[#d8dde6] relative">
                  {p.featured_image_url && (
                    <img
                      src={absUploadUrl(p.featured_image_url)}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="px-6 pt-6 pb-[26px] flex flex-col gap-3.5 flex-1">
                  {p.category && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand bg-brand-soft px-[11px] py-[5px] rounded-full uppercase tracking-[1.2px] w-fit">
                      {p.category}
                    </span>
                  )}
                  <h3 className="text-[19px] font-bold text-ink tracking-[-0.3px] leading-[1.35] transition-colors group-hover/card:text-brand">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-[1.65]">{p.excerpt}</p>
                  <div className="flex items-center gap-2.5 mt-auto pt-4 border-t border-[#ECEEF4] text-[12.5px] text-ink-muted font-medium">
                    <span aria-hidden="true" className="w-[26px] h-[26px] rounded-full bg-[#c8d0e0] inline-flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                      {p.author_initials}
                    </span>
                    <span>{p.author_name}</span>
                    <span aria-hidden="true" className="w-[3px] h-[3px] rounded-full bg-[#c0c4cc]" />
                    <span>{fmtDate(p.created_at)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer c={c} />
    </>
  );
}
