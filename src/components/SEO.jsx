import React from "react";
import { Helmet } from "react-helmet-async";
import { absUploadUrl } from "@/lib/api";

/**
 * Per-page <head> manager: title, meta description, canonical, OG, Twitter,
 * and one or more JSON-LD structured-data blocks.
 *
 * Props:
 *   - title: full page title (used as <title> and og:title)
 *   - description: meta description (also og:description, twitter:description)
 *   - path: absolute path (e.g. "/blog/my-post") used for canonical + og:url
 *   - image: optional absolute URL or API-relative path for the share image
 *   - type: "website" | "article" (default "website")
 *   - jsonLd: object or array of JSON-LD blocks to inject
 *   - noindex: if true, instructs robots not to index this page
 *
 * VITE_SITE_URL (e.g. https://jsutama.com) pins the canonical origin; it falls back to the current origin.
 */
export default function SEO({ title, description, path = "/", image, type = "website", jsonLd, noindex = false }) {
  const siteUrl = (import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "")).replace(/\/$/, "");
  const url = `${siteUrl}${path}`;
  const ogImage = image ? absUploadUrl(image) : "";
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
      ))}
    </Helmet>
  );
}
