import React, {useState, useEffect,} from "react";
import DOMPurify from "dompurify";
import { absUploadUrl } from "@/lib/api";

import WhiteLogo from '@/assets/MainLogo_Web_putih.png'

const SOCIAL_PATHS = {
  linkedin:  "M13.6 0H2.4A2.4 2.4 0 000 2.4v11.2A2.4 2.4 0 002.4 16h11.2A2.4 2.4 0 0016 13.6V2.4A2.4 2.4 0 0013.6 0zM4.8 13.6H2.4V5.6h2.4v8zM3.6 4.5a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8zm10 9.1h-2.4V9.7c0-.9-.3-1.5-1.2-1.5-.6 0-1 .4-1.2 1-.06.2-.08.4-.08.7v3.7H6.3V5.6h2.4v1c.3-.5 1-1.2 2.3-1.2 1.7 0 2.9 1.1 2.9 3.4v4.8z",
  twitter:   "M12.5 0h2.4l-5.3 6.1L16 16h-5l-3.9-5.1L2.7 16H.3l5.7-6.5L0 0h5.1l3.5 4.6L12.5 0zm-.9 14.4h1.3L4.5 1.5H3.1L11.6 14.4z",
  facebook:  "M16 8a8 8 0 10-9.25 7.9V10.3H4.7V8h2.05V6.2c0-2.03 1.2-3.15 3.05-3.15.88 0 1.8.16 1.8.16v1.98h-1.01c-1 0-1.31.62-1.31 1.26V8h2.23l-.36 2.3H9.3v5.6A8 8 0 0016 8z",
  instagram: "M8 1.44c2.14 0 2.39 0 3.23.05.78.03 1.2.16 1.49.27.37.14.63.32.91.6.28.27.46.54.6.91.1.28.24.71.27 1.49.04.84.05 1.1.05 3.23s0 2.39-.05 3.23c-.03.78-.16 1.2-.27 1.49-.14.37-.32.63-.6.91-.27.28-.54.46-.91.6-.28.1-.71.24-1.49.27-.84.04-1.1.05-3.23.05s-2.39 0-3.23-.05c-.78-.03-1.2-.16-1.49-.27a2.43 2.43 0 01-.91-.6 2.43 2.43 0 01-.6-.91c-.1-.28-.24-.71-.27-1.49C1.45 10.39 1.44 10.13 1.44 8s0-2.39.05-3.23c.03-.78.16-1.2.27-1.49.14-.37.32-.63.6-.91.27-.28.54-.46.91-.6.28-.1.71-.24 1.49-.27C5.61 1.45 5.87 1.44 8 1.44M8 0C5.83 0 5.55 0 4.7.05 3.85.09 3.27.22 2.76.42c-.53.2-.98.48-1.43.93-.45.45-.73.9-.93 1.43-.2.51-.33 1.09-.37 1.94C0 5.55 0 5.83 0 8s0 2.45.05 3.3c.04.85.17 1.43.37 1.94.2.53.48.98.93 1.43.45.45.9.73 1.43.93.51.2 1.09.33 1.94.37C5.55 16 5.83 16 8 16s2.45 0 3.3-.05c.85-.04 1.43-.17 1.94-.37.53-.2.98-.48 1.43-.93.45-.45.73-.9.93-1.43.2-.51.33-1.09.37-1.94C16 10.45 16 10.17 16 8s0-2.45-.05-3.3c-.04-.85-.17-1.43-.37-1.94a3.86 3.86 0 00-.93-1.43A3.86 3.86 0 0013.24.42c-.51-.2-1.09-.33-1.94-.37C10.45 0 10.17 0 8 0zm0 3.9a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zm0 6.77a2.67 2.67 0 110-5.34 2.67 2.67 0 010 5.34zm5.22-6.93a.96.96 0 11-1.92 0 .96.96 0 011.92 0z",
};

export default function Footer({ c }) {
  const [arrService, setArrService] = useState([
    { id: 'digital', name: 'JSU Digital', href: '#', },
    { id: 'trading', name: 'JSU Trading', href: '#', },
    { id: 'consulting', name: 'JSU Consulting', href: '#', },
  ])

  const onSubmit = (e) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector("button");
    e.currentTarget.querySelector("input").value = "";
    btn.textContent = "Subscribed ✓";
    setTimeout(() => { btn.textContent = "Subscribe"; }, 2400);
  };
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="relative overflow-hidden bg-[#050913] text-[#c0c5d4] px-6 md:px-14 pt-16 lg:pt-20 pb-8 bg-dots-white-04 bg-[length:32px_32px]"
    >
      <div className="relative z-[2] max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[2.5fr_2fr_1.4fr] gap-9 lg:gap-14 pb-14 border-b border-[#1a2030]">
          {/* Brand */}
          <div>
            <a href="/" rel="home" data-testid="footer-logo" className="flex items-center gap-2.5 font-extrabold text-[20px] text-white no-underline mb-[18px]">
              {c?.brand?.logo_url ? (
                <img
                  src={absUploadUrl(c.brand.logo_url)}
                  alt="Jakarta Soerja Utama"
                  className="h-[34px] w-auto"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              ) : (
                <>
                  <span aria-hidden="true" className="w-[34px] h-[34px] bg-brand rounded-[7px] flex items-center justify-center">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white">
                      <rect x="2" y="2" width="7" height="7" rx="1.5" /><rect x="11" y="2" width="7" height="7" rx="1.5" />
                      <rect x="2" y="11" width="7" height="7" rx="1.5" /><rect x="11" y="11" width="7" height="7" rx="1.5" />
                    </svg>
                  </span>
                  JSU
                </>
              )}
            </a>
            <p className="text-sm leading-[1.72] text-[#8a90a8] max-w-[320px]" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(c?.contact?.footer_tagline || "", { ALLOWED_TAGS: ["br", "b", "strong", "em", "i", "a", "span"], ALLOWED_ATTR: ["href", "target", "rel"] }) }}></p>

            {/* <div className="flex gap-2.5">
              {Object.entries(SOCIAL_PATHS).map(([k, d]) => (
                <a
                  key={k}
                  href={c?.socials?.[k] || "#"}
                  data-testid={`social-${k}`}
                  aria-label={k}
                  rel="noopener"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#131826] border border-[#1f2638] flex items-center justify-center cursor-pointer transition-all hover:bg-brand hover:border-brand hover:-translate-y-[3px] [&:hover_svg]:fill-white"
                >
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4 fill-[#c0c5d4] transition-colors">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div> */}
          </div>

          {/* Company */}
          {/* <div>
            <h3 className="text-[15px] font-bold text-white mb-[22px] tracking-[-0.2px]">Company</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {(c?.footer_columns?.company_links || []).map((l, i) => (
                <li key={`${l.url}-${l.label}-${i}`}>
                  <a
                    href={l.url}
                    data-testid={`footer-company-${i}`}
                    className="inline-flex items-center text-sm font-medium text-[#8a90a8] no-underline transition-all hover:text-white hover:pl-1.5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services */}
          <div>
            <h3 className="text-[15px] font-bold text-white mb-[22px] tracking-[-0.2px]">Services</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {arrService.map((l, i) => (
                <li key={`${i}`}>
                  <a
                    href={l.href}
                    data-testid={`footer-service-${i}`}
                    className="inline-flex items-center text-sm font-medium text-[#8a90a8] no-underline transition-all hover:text-white hover:pl-1.5"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-[15px] font-bold text-white mb-[22px] tracking-[-0.2px]">Get in Touch</h3>

            <div className="flex items-start gap-3 mb-4 text-sm text-[#c0c5d4]">
              <div aria-hidden="true" className="w-8 h-8 rounded-lg bg-[#131826] border border-[#1f2638] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
                  <path d="M1 4l6 4 6-4M1 3.5h12v7H1v-7z" stroke="#6b8fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="leading-[1.5]">
                <strong className="text-white font-semibold block mb-0.5 text-[13px]">Email</strong>
                <a href={`mailto:${c?.contact?.email || ""}`} data-testid="footer-email" className="text-inherit no-underline">
                  {c?.contact?.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 text-sm text-[#c0c5d4]">
              <div aria-hidden="true" className="w-8 h-8 rounded-lg bg-[#131826] border border-[#1f2638] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
                  <path d="M12.5 9.9v2a1.3 1.3 0 01-1.4 1.3A12.5 12.5 0 011 2.5 1.3 1.3 0 012.3 1h2a1.3 1.3 0 011.3 1.1l.4 2a1.3 1.3 0 01-.4 1.3l-.9.9a10 10 0 004 4l.9-.9a1.3 1.3 0 011.3-.4l2 .4a1.3 1.3 0 011.1 1.5z" stroke="#6b8fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="leading-[1.5]">
                <strong className="text-white font-semibold block mb-0.5 text-[13px]">Phone</strong>
                <a href={`tel:${(c?.contact?.phone || "").replace(/[^+\d]/g, "")}`} data-testid="footer-phone" className="text-inherit no-underline">
                  {c?.contact?.phone}
                </a>
              </div>
            </div>

            {/* <form
              onSubmit={onSubmit}
              aria-label="Newsletter signup"
              className="mt-2 flex items-center bg-[#0d1220] border border-[#1f2638] rounded-full pl-[18px] pr-1 py-1 transition-colors focus-within:border-brand"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                data-testid="footer-newsletter-input"
                className="bg-transparent border-none outline-none flex-1 text-white text-[13.5px] py-2.5 px-1 placeholder:text-[#6b7387]"
              />
              <button
                type="submit"
                data-testid="footer-newsletter-submit"
                className="bg-brand text-white border-none rounded-full px-[18px] py-[9px] text-[13px] font-bold cursor-pointer transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form> */}
          </div>
        </div>

        <div className="pt-7 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex gap-3 items-center">
            <div className="text-[13.5px] text-[#6b7387]">{c?.contact?.footer_copy}</div>
            <img src={WhiteLogo} className="h-[2rem] opacity-30"/>
          </div>
          {/* <div className="flex gap-6">
            <a href="#" data-testid="legal-privacy" className="text-[#8a90a8] no-underline text-[13.5px] transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" data-testid="legal-terms"   className="text-[#8a90a8] no-underline text-[13.5px] transition-colors hover:text-white">Terms of Service</a>
            <a href="#" data-testid="legal-cookies" className="text-[#8a90a8] no-underline text-[13.5px] transition-colors hover:text-white">Cookies</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
