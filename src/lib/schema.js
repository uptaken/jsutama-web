// JSON-LD helpers. Only facts that already appear on the site are used (no invented ratings, dates or social links).
const origin = () => (import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "")).replace(/\/$/, "");

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Jakarta Soerja Utama",
  alternateName: "JSU",
  url: origin(),
  logo: `${origin()}/brand/jsu-logo.png`,
  slogan: "Impacting Possibilities",
  description: "IoT Connectivity, Smart Devices, Fleet Intelligence, AI Automation and Digital Solutions for connected businesses.",
  email: "info@jsutama.com",
  telephone: "+6287892764553",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Soho Collins Boulevard",
    addressLocality: "Tangerang",
    addressRegion: "Banten",
    addressCountry: "ID",
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+6287892764553", email: "info@jsutama.com", contactType: "sales" },
    { "@type": "ContactPoint", telephone: "+6289915000737", contactType: "customer support" },
    { "@type": "ContactPoint", telephone: "+6287892764553", contactType: "customer support" },
  ],
});

export const breadcrumbLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${origin()}${path}` })),
});

export const faqLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

export const serviceLd = ({ name, description, path }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `${origin()}${path}`,
  provider: { "@type": "Organization", name: "PT Jakarta Soerja Utama", url: origin() },
  areaServed: { "@type": "Country", name: "Indonesia" },
});
