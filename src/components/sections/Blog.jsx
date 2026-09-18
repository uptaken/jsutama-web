import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, absUploadUrl } from "@/lib/api";

const PLACEHOLDER_SVG = (i) => {
  if (i === 0) return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="w-full h-full block transition-transform duration-500 group-hover/card:scale-[1.04]">
      <defs><linearGradient id="bg1" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#dde7ff"/><stop offset="1" stopColor="#b8c8ff"/></linearGradient></defs>
      <rect width="320" height="200" fill="url(#bg1)"/>
      <circle cx="260" cy="50" r="48" fill="#ffffff" opacity="0.55"/><circle cx="260" cy="50" r="28" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="190" cy="140" rx="78" ry="30" fill="#ffffff"/>
      <circle cx="160" cy="128" r="26" fill="#ffffff"/><circle cx="190" cy="118" r="32" fill="#ffffff"/><circle cx="222" cy="128" r="26" fill="#ffffff"/>
    </svg>
  );
  if (i === 1) return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="w-full h-full block transition-transform duration-500 group-hover/card:scale-[1.04]">
      <defs><linearGradient id="bg2" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#0e1428"/><stop offset="1" stopColor="#1c2a52"/></linearGradient></defs>
      <rect width="320" height="200" fill="url(#bg2)"/>
      <g fill="#6b8fff"><circle cx="60" cy="60" r="6"/><circle cx="60" cy="100" r="6"/><circle cx="60" cy="140" r="6"/><circle cx="160" cy="50" r="7"/><circle cx="160" cy="100" r="7"/><circle cx="160" cy="150" r="7"/><circle cx="260" cy="80" r="6"/><circle cx="260" cy="130" r="6"/></g>
      <circle cx="160" cy="100" r="14" fill="#6b8fff" opacity="0.2"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="w-full h-full block transition-transform duration-500 group-hover/card:scale-[1.04]">
      <defs><linearGradient id="bg3" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#fbe9d4"/><stop offset="1" stopColor="#f0c89a"/></linearGradient></defs>
      <rect width="320" height="200" fill="url(#bg3)"/>
      <path d="M160 40 L220 62 V120 Q220 158 160 178 Q100 158 100 120 V62 Z" fill="#1C57F0"/>
      <rect x="138" y="100" width="44" height="38" rx="6" fill="#ffffff"/>
      <path d="M148 100 V90 a12 12 0 0 1 24 0 V100" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
};

function fmtDate(iso) {
  if (!iso) return "";
  try { return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }); }
  catch { return iso; }
}

export default function Blog({ c }) {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    api.get("/blog?limit=3").then(({ data }) => { setPosts(data || []); setLoaded(true); }).catch(() => setLoaded(true));
  }, []);

  const PLACEHOLDERS = [
    { tag: "Cloud",    title: "A Practical Guide to Multi-Cloud Cost Control in 2026", excerpt: "FinOps is no longer optional. We break down 5 controls that cut cloud bills by 38% on average — without sacrificing velocity.", author: "Sarah Mitchell", initials: "SM", date: "Jan 18, 2026",  read: 7 },
    { tag: "AI & ML",  title: "Shipping AI Features Without Breaking Production",      excerpt: "From eval harnesses to staged rollouts: the playbook to put LLM-powered features in front of real users — safely.",            author: "Marcus Chen",   initials: "MC", date: "Jan 12, 2026",  read: 9 },
    { tag: "Security", title: "Zero-Trust in 90 Days: A Mid-Market Field Guide",        excerpt: "You don't need a Fortune-500 budget to adopt zero-trust. The phased roadmap for 200–2,000-seat orgs.",                            author: "Elena Vasquez", initials: "EV", date: "Jan 5, 2026",   read: 11 },
  ];

  const items = loaded && posts.length > 0 ? posts : PLACEHOLDERS.map((p, i) => ({ _placeholder: true, idx: i, ...p }));

  return (
    <section id="blog" aria-labelledby="blog-heading" className="bg-white border-t border-[#f0f1f5] px-6 md:px-14 py-24 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-[52px] opacity-0 animate-fade-up [animation-delay:0.05s]">
          <div>
            <div className="inline-flex items-center gap-2 text-[13px] font-bold text-brand uppercase tracking-[2px] mb-[18px] before:content-[''] before:w-7 before:h-[2px] before:bg-brand">
              {c?.blog_section?.eyebrow}
            </div>
            <h2 id="blog-heading" className="text-[38px] md:text-[48px] font-extrabold tracking-[-1.8px] leading-[1.1] text-ink">
              {c?.blog_section?.title_l1}<br />{c?.blog_section?.title_l2}
            </h2>
          </div>
          <div className="flex flex-col items-start justify-end pb-2 gap-4">
            <p className="text-[14.5px] text-ink-muted leading-[1.7] max-w-[380px]">{c?.blog_section?.description}</p>
            <Link
              to="/blog"
              data-testid="blog-view-all"
              className="flex items-center gap-1.5 text-[14.5px] font-bold text-ink no-underline border-b-2 border-ink pb-px transition-colors hover:text-brand hover:border-brand"
            >
              View All Articles
              <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((p, i) => {
            const href = p._placeholder ? "#" : `/blog/${p.slug}`;
            const Wrapper = p._placeholder ? "a" : Link;
            const wrapperProps = p._placeholder ? { href } : { to: href };
            return (
              <Wrapper
                key={p.id || `ph-${i}`}
                {...wrapperProps}
                data-testid={`blog-card-${i + 1}`}
                style={{ animationDelay: `${0.10 + i * 0.08}s` }}
                className="group/card bg-white border border-[#ECEEF4] rounded-2xl overflow-hidden cursor-pointer flex flex-col text-inherit no-underline transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-card-hover hover:border-[#dbe1f0] opacity-0 animate-fade-up"
              >
                <div className="w-full aspect-[16/10] overflow-hidden bg-[#d8dde6] relative">
                  {
                    p.featured_image_url ?
                    <img src={absUploadUrl(p.featured_image_url)} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-[1.04]" loading="lazy" />
                    : PLACEHOLDER_SVG(i)
                  }
                </div>
                
                <div className="p-4 md:p-6 flex flex-col gap-3.5 flex-1">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand bg-brand-soft px-[11px] py-[5px] rounded-full uppercase tracking-[1.2px] w-fit">
                    {p.category || p.tag}
                  </span>
                  <h3 className="text-[19px] font-bold text-ink tracking-[-0.3px] leading-[1.35] transition-colors group-hover/card:text-brand">{p.title}</h3>
                  <p className="text-sm text-ink-muted leading-[1.65]">{p.excerpt}</p>
                  <div className="flex items-center gap-2.5 mt-auto pt-4 border-t border-[#ECEEF4] text-[12.5px] text-ink-muted font-medium">
                    <span aria-hidden="true" className="w-[26px] h-[26px] rounded-full bg-[#c8d0e0] inline-flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                      {p.author_initials || p.initials}
                    </span>
                    <span>{p.author_name || p.author}</span>
                    <span aria-hidden="true" className="w-[3px] h-[3px] rounded-full bg-[#c0c4cc]" />
                    <span>{p._placeholder ? p.date : fmtDate(p.created_at)}</span>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
