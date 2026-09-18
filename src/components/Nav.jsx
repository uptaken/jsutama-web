import React from "react";
import { Link } from "react-router-dom";
import { absUploadUrl } from "@/lib/api";

const LINK_CLS =
  "flex items-center gap-1 text-sm font-medium text-ink-mid px-3.5 py-1.5 rounded-md transition-colors hover:bg-[#f1f3f8] hover:text-ink no-underline";

const CARET = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="opacity-70">
    <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Nav({ c }) {
  const logoUrl = c?.brand?.logo_url;
  return (
    <header role="banner">
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-[100] flex items-center justify-between h-[72px] px-6 md:px-14 border-b border-hairline bg-white/95 backdrop-blur-md"
      >
        <Link
          to="/"
          data-testid="nav-logo"
          aria-label="Digix"
          className="flex items-center gap-2.5 font-extrabold text-[20px] text-ink no-underline"
        >
          {logoUrl ? (
            <img src={absUploadUrl(logoUrl)} alt="Digix" className="md:h-[3rem] lg:h-[3.5rem] w-auto" />
          ) : (
            <>
              <span
                aria-hidden="true"
                className="w-[34px] h-[34px] bg-brand rounded-[7px] flex items-center justify-center"
              >
                <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white">
                  <rect x="2" y="2" width="7" height="7" rx="1.5" />
                  <rect x="11" y="2" width="7" height="7" rx="1.5" />
                  <rect x="2" y="11" width="7" height="7" rx="1.5" />
                  <rect x="11" y="11" width="7" height="7" rx="1.5" />
                </svg>
              </span>
              Digix
            </>
          )}
        </Link>

        <ul className="hidden md:flex items-center gap-1.5 list-none m-0 p-0">
          <li><a href="/#" data-testid="nav-home" className={LINK_CLS}>Home</a></li>
          <li><a href="/#about" data-testid="nav-about" className={LINK_CLS}>About</a></li>
          <li><Link to="/blog" data-testid="nav-blog" className={LINK_CLS}>Blog</Link></li>
          <li><a href="/#services" data-testid="nav-service" className={LINK_CLS}>Service</a></li>
          <li><a href="/#footer" data-testid="nav-contact" className={LINK_CLS}>Contact</a></li>
        </ul>

        <div className="flex items-center gap-3.5">
          {/* <div
            data-testid="nav-lang-toggle"
            className="flex items-center gap-1.5 text-sm font-medium text-ink-mid cursor-pointer px-2 py-1 rounded-md transition-colors hover:bg-[#f1f3f8]"
          >
            <svg viewBox="0 0 17 17" fill="none" aria-hidden="true" className="w-[17px] h-[17px] shrink-0">
              <circle cx="8.5" cy="8.5" r="7" stroke="#6B7280" strokeWidth="1.4" />
              <path d="M8.5 1.5C8.5 1.5 6 4.5 6 8.5s2.5 7 2.5 7" stroke="#6B7280" strokeWidth="1.4" />
              <path d="M8.5 1.5C8.5 1.5 11 4.5 11 8.5s-2.5 7-2.5 7" stroke="#6B7280" strokeWidth="1.4" />
              <path d="M1.5 8.5h14" stroke="#6B7280" strokeWidth="1.4" />
              <path d="M2.2 5.5h13.1M2.2 11.5h13.1" stroke="#6B7280" strokeWidth="1.4" strokeDasharray="2 1.5" />
            </svg>
            EN
          </div> */}
          <a
            data-testid="nav-get-start-btn"
            href={c?.hero?.cta_url || "#footer"}
            className="inline-flex items-center bg-white text-brand text-sm font-bold tracking-wide px-[26px] py-[11px] rounded-[10px] no-underline transition-all hover:bg-brand-dark hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
