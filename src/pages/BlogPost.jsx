import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { api, absUploadUrl } from "@/lib/api";
import { useContent } from "@/lib/useContent";
import SEO from "@/components/SEO";

// Allow common formatting tags + safe attributes; strip all scripts / event handlers.
const SANITIZE_CFG = {
  ALLOWED_TAGS: ["p","br","strong","em","b","i","u","s","a","ul","ol","li","blockquote","code","pre","h2","h3","h4","img","figure","figcaption","span","hr"],
  ALLOWED_ATTR: ["href","src","alt","title","target","rel","class"],
  ALLOW_DATA_ATTR: false,
};

export default function BlogPost() {
  const { slug } = useParams();
  const c = useContent();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    api.get(`/blog/${slug}`)
      .then(({ data }) => { setPost(data?.data || null); setNotFound(false); })
      .catch(() => setNotFound(true));
  }, [slug]);

  const safeHtml = post?.content
    ? DOMPurify.sanitize(post.content, SANITIZE_CFG)
    : `<p>${DOMPurify.sanitize(post?.excerpt || "", { ALLOWED_TAGS: [] })}</p>`;

  return (
    <>
      {post && (
        <SEO
          title={`${post.title} – JSU Insights`}
          description={post.excerpt || `${post.title} — by ${post.author_name}.`}
          path={`/blog/${post.slug}`}
          image={post.featured_image_url || c?.seo?.og_image_url}
          type="article"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.featured_image_url ? absUploadUrl(post.featured_image_url) : undefined,
            datePublished: post.created_at,
            dateModified: post.updated_at || post.created_at,
            author: { "@type": "Person", name: post.author_name || "Jakarta Soerja Utama" },
            articleSection: post.category,
            mainEntityOfPage: { "@type": "WebPage", "@id": `${window.location.origin}/blog/${post.slug}` },
          }}
        />
      )}
      {notFound && (
        <SEO title="Post not found – JSU" description="The article you were looking for couldn't be found." path={`/blog/${slug}`} noindex />
      )}
      <>
      <div className="min-h-[60vh] bg-white pb-20">
        <div className="max-w-[880px] mx-auto px-6 pt-14">
          <Link
            to="/blog"
            data-testid="back-to-blog"
            className="inline-flex items-center gap-1.5 text-ink-muted text-sm no-underline mb-7 transition-colors hover:text-brand"
          >
            ← All Articles
          </Link>

          {notFound && (
            <>
              <h1 className="text-4xl font-extrabold">Post not found</h1>
              <p className="text-ink-muted mt-3">It may have been removed or never existed.</p>
            </>
          )}

          {!notFound && !post && (
            <div
              data-testid="post-loading"
              className="h-80 rounded-lg bg-[#F0F2F8] animate-pulse-skel"
            />
          )}

          {post && (
            <article>
              {post.category && (
                <span
                  data-testid="post-category"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand bg-brand-soft px-[11px] py-[5px] rounded-full uppercase tracking-[1.2px]"
                >
                  {post.category}
                </span>
              )}
              <h1
                data-testid="post-title"
                className="text-[44px] font-extrabold tracking-[-1.4px] leading-[1.1] text-ink my-5"
              >
                {post.title}
              </h1>
              <div className="text-ink-muted text-sm mb-6 flex items-center gap-2.5">
                <span aria-hidden="true" className="w-7 h-7 rounded-full bg-[#c8d0e0] inline-flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                  {post.author_initials}
                </span>
                <span>{post.author_name}</span>
                <span aria-hidden="true" className="w-[3px] h-[3px] rounded-full bg-[#c0c4cc]" />
                <span>
                  {post.created_at
                    ? new Date(post.created_at).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })
                    : ""}
                </span>
              </div>

              {post.featured_image_url && (
                <img
                  src={absUploadUrl(post.featured_image_url)}
                  alt={post.title}
                  loading="lazy"
                  className="w-full max-h-[440px] object-cover rounded-xl mb-8"
                />
              )}

              <div
                data-testid="post-content"
                className="post-content"
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              />
            </article>
          )}
        </div>
      </div>
      </>
    </>
  );
}
