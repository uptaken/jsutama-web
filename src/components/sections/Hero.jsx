import React from "react";
import { absUploadUrl } from "@/lib/api";

export default function Hero({ c }) {
  const heroImg = c?.hero?.image_url;
  return (
    <div className=" px-6 md:px-14">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-9 md:pt-16 items-start">
          {/* ── LEFT ── */}
          <div className="relative">
            <h1
              className="relative font-extrabold text-[38px] md:text-[58px] leading-[1.08] tracking-[-2px] text-ink mb-[22px] opacity-0 animate-fade-up [animation-delay:0.05s]"
            >
              {c.hero?.title_line1 || ""}
              <span className="block">{c.hero?.title_line2 || ""}</span>
            </h1>

            <p className="text-[15px] text-ink-muted leading-[1.72] max-w-[430px] mb-8 opacity-0 animate-fade-up [animation-delay:0.14s]" dangerouslySetInnerHTML={{ __html: c.hero?.description || "", }}>
            </p>

            <div className="flex items-center gap-3 mb-9 opacity-0 animate-fade-up [animation-delay:0.22s]">
              <div className="flex items-center gap-[7px] text-[14.5px] font-bold text-ink">
                <div className="w-[22px] h-[22px] bg-tp flex items-center justify-center rounded-[3px]">
                  <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] fill-white">
                    <path d="M7 1l1.6 4.8H14l-4.1 3 1.6 4.8L7 10.7l-4.5 2.9 1.6-4.8L0 5.8h5.4z" />
                  </svg>
                </div>
                Trustpilot
              </div>
              <div className="flex items-center gap-[2px]">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={`s-${i}`}
                    className="w-[22px] h-[22px] bg-tp flex items-center justify-center rounded-[2px]"
                  >
                    <svg viewBox="0 0 13 13" className="w-[13px] h-[13px] fill-white">
                      <path d="M6.5 1l1.4 4.1H12l-3.5 2.6 1.4 4.1-3.4-2.5-3.4 2.5 1.4-4.1L1 5.1h4.1z" />
                    </svg>
                  </div>
                ))}
                <div className="w-[22px] h-[22px] flex items-center justify-center rounded-[2px] bg-[linear-gradient(to_right,#00B67A_80%,#d1d5db_80%)]">
                  <svg viewBox="0 0 13 13" className="w-[13px] h-[13px] fill-white">
                    <path d="M6.5 1l1.4 4.1H12l-3.5 2.6 1.4 4.1-3.4-2.5-3.4 2.5 1.4-4.1L1 5.1h4.1z" />
                  </svg>
                </div>
              </div>
              <span className="text-[13px] text-ink-muted font-medium">
                <strong className="text-ink font-bold">{`TrustScore ${c.hero?.trust_score || ""}`}</strong>
                &nbsp;{c.hero?.trust_reviews || ""}
              </span>
            </div>

            <a
              href={c.hero?.cta_url || "#"}
              data-testid="hero-learn-more-btn"
              className="inline-flex items-center bg-brand text-white text-[15px] font-bold px-[34px] py-3.5 rounded-[10px] no-underline shadow-brand-cta opacity-0 animate-fade-up [animation-delay:0.30s] transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-brand-ctaH"
            >
              {c.hero?.cta_label || ""}
            </a>
          </div>

          {/* ── RIGHT ── */}
          <div className="relative opacity-0 animate-fade-up [animation-delay:0.10s]">
            <div className="relative  mb-5">

              <span aria-hidden="true" className="hidden md:flex absolute top-0 left-0 lg:right-[19rem] flex-col items-end gap-1 pointer-events-none z-[-1]">
                <span className="w-[26px] h-[26px] bg-brand" />
                <span className="w-[40px] h-[40px] bg-brand" />
              </span>

              <div className="flex items-center md:ml-5">
                <div className="flex items-center justify-start md:justify-between lg:justify-end gap-3.5 w-full">
                  <div className="text-[40px] font-extrabold tracking-[-2px] text-ink leading-none">
                    {c.hero?.stat_number || ""}
                  </div>
                  <div className="flex items-center h-[34px]">
                    <div className="h-full aspect-square rounded-full border-[2.5px] border-white overflow-hidden shrink-0 flex items-center justify-center" style={{ background: "#c5d3f5" }}>
                      <svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="13" r="6" fill="#8ca3e0" /><ellipse cx="17" cy="28" rx="10" ry="7" fill="#8ca3e0" /></svg>
                    </div>
                    <div className="h-full aspect-square rounded-full border-[2.5px] border-white overflow-hidden shrink-0 -ml-2.5 flex items-center justify-center" style={{ background: "#c9e8d5" }}>
                      <svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="13" r="6" fill="#6fc494" /><ellipse cx="17" cy="28" rx="10" ry="7" fill="#6fc494" /></svg>
                    </div>
                    <div className="h-full aspect-square rounded-full border-[2.5px] border-white overflow-hidden shrink-0 -ml-2.5 flex items-center justify-center" style={{ background: "#f5d5c5" }}>
                      <svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="13" r="6" fill="#e09575" /><ellipse cx="17" cy="28" rx="10" ry="7" fill="#e09575" /></svg>
                    </div>
                    <div className="h-full aspect-square rounded-full border-[2.5px] border-white overflow-hidden shrink-0 -ml-2.5 flex items-center justify-center" style={{ background: "#e2d0f5" }}>
                      <svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="13" r="6" fill="#b58de0" /><ellipse cx="17" cy="28" rx="10" ry="7" fill="#b58de0" /></svg>
                    </div>
                    <div className="h-full aspect-square rounded-full border-[2.5px] border-white -ml-2.5 flex items-center justify-center bg-brand text-white text-[17px] leading-[1]">+</div>
                  </div>
                  <div className="text-[13px] text-ink-muted leading-[1.45] max-w-[100px] font-medium">
                    {c.hero?.stat_label_l1}
                    <br />
                    {c.hero?.stat_label_l2}
                  </div>
                </div>
              </div>
            </div>

            <div
              role="button"
              tabIndex="0"
              data-testid="corp-pill"
              className="group flex items-center justify-between gap-4 border border-hairline rounded-full bg-white pl-6 pr-3 py-3 cursor-pointer text-sm font-semibold text-ink mb-[18px] transition-all hover:border-[#b0b8cc] hover:shadow-[0_2px_12px_rgba(0,0,0,0.07)]"
            >
              Corporate Experience
              <div className="w-[38px] h-[38px] rounded-full border border-hairline flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand group-hover:border-brand">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="#0D1321" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="group-hover:[stroke:white]" />
                </svg>
              </div>
            </div>

            <div className="rounded-[18px] overflow-hidden relative h-[390px] bg-[#d8dde6]">
              {heroImg ? (
                <img
                  src={absUploadUrl(heroImg)}
                  alt=""
                  className="w-full h-full object-cover block"
                  loading="eager"
                  data-testid="hero-image"
                />
              ) : (
                <svg className="w-full h-full block" viewBox="0 0 620 390" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                  <rect width="620" height="390" fill="#cdd5e0"/>
                  <rect x="0" y="0" width="620" height="210" fill="#c5cdd8"/>
                  <rect x="0" y="210" width="620" height="180" fill="#b8c2ce"/>
                  <rect x="340" y="20" width="180" height="120" rx="4" fill="#c8a87a" opacity="0.85"/>
                  <rect x="350" y="30" width="50" height="35" rx="2" fill="#e8d5b5"/>
                  <rect x="410" y="30" width="50" height="35" rx="2" fill="#d4e8c4"/>
                  <rect x="470" y="30" width="40" height="55" rx="2" fill="#f0d8c8"/>
                  <rect x="350" y="75" width="40" height="55" rx="2" fill="#d8e4f0"/>
                  <rect x="400" y="75" width="60" height="55" rx="2" fill="#f5e8d0"/>
                  <circle cx="355" cy="31" r="4" fill="#e05050"/>
                  <circle cx="415" cy="31" r="4" fill="#50a050"/>
                  <circle cx="475" cy="31" r="4" fill="#5070e0"/>
                  <circle cx="355" cy="76" r="4" fill="#e09030"/>
                  <circle cx="405" cy="76" r="4" fill="#a050e0"/>
                  <rect x="490" y="150" width="110" height="72" rx="5" fill="#1a1f2e"/>
                  <rect x="495" y="155" width="100" height="62" rx="3" fill="#1e2535"/>
                  <rect x="500" y="160" width="60" height="5" rx="2" fill="#4a7ae0" opacity="0.8"/>
                  <rect x="500" y="170" width="85" height="3" rx="1.5" fill="#6b8fc0" opacity="0.5"/>
                  <rect x="500" y="177" width="70" height="3" rx="1.5" fill="#6b8fc0" opacity="0.4"/>
                  <rect x="500" y="184" width="75" height="3" rx="1.5" fill="#6b8fc0" opacity="0.4"/>
                  <rect x="500" y="191" width="50" height="3" rx="1.5" fill="#6b8fc0" opacity="0.3"/>
                  <rect x="535" y="222" width="20" height="12" rx="2" fill="#2a2f3e"/>
                  <rect x="525" y="232" width="40" height="5" rx="2" fill="#2a2f3e"/>
                  <rect x="50" y="205" width="150" height="90" rx="6" fill="#1a1f2e"/>
                  <rect x="56" y="211" width="138" height="78" rx="4" fill="#222838"/>
                  <rect x="62" y="217" width="80" height="7" rx="2" fill="#4a7ae0" opacity="0.7"/>
                  <rect x="62" y="229" width="120" height="4" rx="1.5" fill="#5a8ad0" opacity="0.4"/>
                  <rect x="62" y="237" width="100" height="4" rx="1.5" fill="#5a8ad0" opacity="0.35"/>
                  <rect x="62" y="245" width="110" height="4" rx="1.5" fill="#5a8ad0" opacity="0.35"/>
                  <rect x="62" y="253" width="90" height="4" rx="1.5" fill="#5a8ad0" opacity="0.3"/>
                  <rect x="62" y="261" width="60" height="4" rx="1.5" fill="#5a8ad0" opacity="0.25"/>
                  <rect x="45" y="294" width="166" height="10" rx="5" fill="#151820"/>
                  <rect x="370" y="215" width="130" height="78" rx="5" fill="#1a1f2e"/>
                  <rect x="376" y="221" width="118" height="64" rx="3" fill="#222838"/>
                  <rect x="382" y="260" width="12" height="18" rx="2" fill="#4a7ae0" opacity="0.8"/>
                  <rect x="398" y="248" width="12" height="30" rx="2" fill="#5a9ae0" opacity="0.8"/>
                  <rect x="414" y="255" width="12" height="23" rx="2" fill="#4a7ae0" opacity="0.7"/>
                  <rect x="430" y="242" width="12" height="36" rx="2" fill="#3a6ad0" opacity="0.9"/>
                  <rect x="446" y="250" width="12" height="28" rx="2" fill="#5a8ad0" opacity="0.7"/>
                  <rect x="382" y="228" width="50" height="5" rx="2" fill="#7090c0" opacity="0.5"/>
                  <rect x="382" y="237" width="38" height="4" rx="1.5" fill="#6080b0" opacity="0.4"/>
                  <rect x="360" y="292" width="148" height="8" rx="4" fill="#151820"/>
                  <rect x="0" y="310" width="620" height="30" rx="0" fill="#a8b4c0"/>
                  <rect x="0" y="308" width="620" height="8" rx="0" fill="#bcc8d4"/>
                  <rect x="240" y="278" width="28" height="32" rx="5" fill="#e8e0d8"/>
                  <rect x="244" y="282" width="20" height="22" rx="3" fill="#c8bfb5"/>
                  <path d="M268 290 Q278 290 278 298 Q278 306 268 306" fill="none" stroke="#d0c8c0" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="155" y="280" width="70" height="28" rx="3" fill="#f0ece8"/>
                  <line x1="168" y1="280" x2="168" y2="308" stroke="#c8c0b8" strokeWidth="1"/>
                  <ellipse cx="580" cy="304" rx="20" ry="8" fill="#7a9a6a"/>
                  <rect x="564" y="298" width="32" height="14" rx="3" fill="#8a7060"/>
                  <circle cx="572" cy="290" r="8" fill="#5a8040"/>
                  <circle cx="582" cy="287" r="9" fill="#6a9050"/>
                  <circle cx="590" cy="292" r="7" fill="#5a8040"/>
                  <circle cx="578" cy="283" r="6" fill="#7aaa60"/>
                  <ellipse cx="140" cy="330" rx="52" ry="65" fill="#7bbfaa"/>
                  <rect x="133" y="258" width="14" height="22" rx="5" fill="#d4a878"/>
                  <ellipse cx="140" cy="248" rx="30" ry="33" fill="#d8ae82"/>
                  <ellipse cx="140" cy="228" rx="30" ry="18" fill="#c8b090"/>
                  <ellipse cx="118" cy="248" rx="10" ry="20" fill="#c8b090"/>
                  <ellipse cx="162" cy="248" rx="10" ry="20" fill="#c8b090"/>
                  <ellipse cx="132" cy="250" rx="3.5" ry="4.5" fill="#a07040"/>
                  <ellipse cx="149" cy="250" rx="3.5" ry="4.5" fill="#a07040"/>
                  <path d="M133 262 Q140 268 147 262" fill="none" stroke="#9a6030" strokeWidth="2" strokeLinecap="round"/>
                  <ellipse cx="280" cy="330" rx="55" ry="70" fill="#5a7a9a"/>
                  <rect x="273" y="252" width="14" height="24" rx="5" fill="#c89870"/>
                  <ellipse cx="280" cy="242" rx="28" ry="32" fill="#cc9e72"/>
                  <ellipse cx="280" cy="222" rx="28" ry="16" fill="#5a3820"/>
                  <ellipse cx="255" cy="242" rx="9" ry="18" fill="#5a3820"/>
                  <ellipse cx="305" cy="242" rx="9" ry="18" fill="#5a3820"/>
                  <rect x="260" y="243" width="18" height="13" rx="4" fill="none" stroke="#2a2a2a" strokeWidth="2"/>
                  <rect x="282" y="243" width="18" height="13" rx="4" fill="none" stroke="#2a2a2a" strokeWidth="2"/>
                  <line x1="278" y1="249" x2="282" y2="249" stroke="#2a2a2a" strokeWidth="2"/>
                  <ellipse cx="269" cy="249" rx="3" ry="3.5" fill="#4a3020"/>
                  <ellipse cx="291" cy="249" rx="3" ry="3.5" fill="#4a3020"/>
                  <path d="M271 260 Q280 265 289 260" fill="none" stroke="#8a5030" strokeWidth="1.8" strokeLinecap="round"/>
                  <ellipse cx="470" cy="325" rx="56" ry="72" fill="#6a5848"/>
                  <rect x="463" y="255" width="14" height="22" rx="5" fill="#b88868"/>
                  <ellipse cx="470" cy="245" rx="29" ry="31" fill="#c09272"/>
                  <ellipse cx="470" cy="226" rx="29" ry="17" fill="#2a1e14"/>
                  <ellipse cx="445" cy="245" rx="11" ry="22" fill="#2a1e14"/>
                  <ellipse cx="495" cy="245" rx="11" ry="22" fill="#2a1e14"/>
                  <ellipse cx="462" cy="247" rx="3.5" ry="4" fill="#805030"/>
                  <ellipse cx="479" cy="247" rx="3.5" ry="4" fill="#805030"/>
                  <path d="M463 259 Q470 265 478 259" fill="none" stroke="#704020" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )}

              <svg
                className="absolute bottom-6 -left-11 w-24 h-24 pointer-events-none"
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="48" cy="48" r="46" fill="white" fillOpacity="0.95" stroke="#e8eaf0" strokeWidth="1" />
                <g className="rotating-ring">
                  <path id="circleText" d="M 48,48 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                  <text fontSize="8.5" fill="#1a2240" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="600" letterSpacing="2.2">
                    <textPath href="#circleText" startOffset="0%">Corporate Agency · Corporate Ag·</textPath>
                  </text>
                </g>
                <text x="48" y="54" textAnchor="middle" fontSize="22" fill="#1a2240">↙</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
