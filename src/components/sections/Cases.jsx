import React, { useState } from "react";

import Base from '@/utils/base'

const CASES = [
  { idx: 0, num: "01.", title_l1: "Cybersecurity", title_l2: "Enhancement",   body: "Implemented multi-layered cybersecurity solutions, preventing data breaches & ensuring regulatory compliance for a 5,000-seat enterprise." },
  { idx: 1, num: "02.", title_l1: "Mobile App",     title_l2: "Development",  body: "Built a cross-platform mobile app that drove a 3.2× increase in daily active users and a 41% lift in conversion within the first quarter." },
  { idx: 2, num: "03.", title_l1: "Network Security", title_l2: "Overhaul",   body: "Designed a zero-trust network architecture across 14 offices, reducing intrusion attempts by 87% and cutting incident response from hours to minutes." },
  { idx: 3, num: "04.", title_l1: "IT Infrastructure", title_l2: "Upgrade",   body: "Migrated legacy on-prem stack to a hybrid cloud topology — slashing operating costs by 38% while doubling fail-over speed across regions." },
  { idx: 4, num: "05.", title_l1: "Custom CRM",     title_l2: "Development",  body: "Designed a tailored CRM that consolidated 6 disparate tools into one workflow, increasing the sales team's pipeline velocity by 2.4× in six months." },
  { idx: 5, num: "06.", title_l1: "ERP System",     title_l2: "Implementation", body: "Rolled out a unified ERP across finance, HR, and supply chain — closing the books 7 days faster each month and unlocking real-time cross-team reporting." },
];

const TABS = [
  "01.Cybersecurity Enhancement",
  "02.Mobile App Development",
  "03.Network Security Overhaul",
  "04.IT Infrastructure Upgrade",
  "05.Custom CRM Development",
  "06.ERP System Implementation",
];

function PhotoSvg({ i }) {
  // Each panel keeps its decorative SVG. Trimmed for brevity but visually equivalent.
  if (i === 0) return (
    <svg viewBox="0 0 340 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <rect width="340" height="460" fill="#a8b0be"/>
      <rect width="340" height="260" fill="#9aa0b0"/>
      <ellipse cx="260" cy="340" rx="50" ry="90" fill="#3a5090"/>
      <ellipse cx="260" cy="258" rx="28" ry="30" fill="#c89870"/>
      <ellipse cx="260" cy="235" rx="28" ry="17" fill="#3a2414"/>
      <rect x="0" y="370" width="340" height="90" fill="#7a8090"/>
      <ellipse cx="150" cy="500" rx="75" ry="110" fill="#d8d4cc"/>
      <ellipse cx="150" cy="315" rx="44" ry="48" fill="#c89060"/>
      <ellipse cx="150" cy="278" rx="44" ry="26" fill="#1e1408"/>
      <ellipse cx="136" cy="308" rx="6" ry="6.5" fill="#2a1808"/>
      <ellipse cx="164" cy="308" rx="6" ry="6.5" fill="#2a1808"/>
    </svg>
  );
  if (i === 1) return (
    <svg viewBox="0 0 320 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <defs><linearGradient id="mobBg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2a3550"/><stop offset="1" stopColor="#0e1428"/></linearGradient></defs>
      <rect width="320" height="460" fill="url(#mobBg)"/>
      <ellipse cx="60" cy="80" rx="100" ry="80" fill="#3a5fc8" opacity="0.35"/>
      <ellipse cx="280" cy="380" rx="120" ry="90" fill="#1c57f0" opacity="0.28"/>
      <rect x="100" y="80" width="120" height="240" rx="22" fill="#0a0f1e" stroke="#3a4868" strokeWidth="2"/>
      <rect x="108" y="92" width="104" height="216" rx="14" fill="#101a36"/>
      <rect x="118" y="106" width="84" height="10" rx="3" fill="#4a7ae0"/>
      <rect x="118" y="138" width="84" height="44" rx="6" fill="#1c57f0" opacity="0.7"/>
      <rect x="30" y="160" width="80" height="50" rx="8" fill="#ffffff" opacity="0.95" transform="rotate(-8 70 185)"/>
      <rect x="210" y="200" width="90" height="56" rx="8" fill="#ffffff" opacity="0.95" transform="rotate(6 255 228)"/>
      <ellipse cx="160" cy="340" rx="90" ry="10" fill="#000" opacity="0.3"/>
    </svg>
  );
  if (i === 2) return (
    <svg viewBox="0 0 320 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <rect width="320" height="460" fill="#101a2c"/>
      <rect width="320" height="240" fill="#152038"/>
      <path d="M160 110 L240 140 V230 Q240 290 160 330 Q80 290 80 230 V140 Z" fill="#1c57f0" opacity="0.95"/>
      <path d="M160 110 L240 140 V230 Q240 290 160 330 Q80 290 80 230 V140 Z" fill="none" stroke="#6b8fff" strokeWidth="2.5"/>
      <path d="M125 220 L150 248 L200 190" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="80" r="6" fill="#6b8fff"/><circle cx="270" cy="100" r="5" fill="#6b8fff"/>
      <rect x="40" y="380" width="60" height="50" rx="4" fill="#243558" stroke="#3a4868"/>
      <rect x="220" y="380" width="60" height="50" rx="4" fill="#243558" stroke="#3a4868"/>
    </svg>
  );
  if (i === 3) return (
    <svg viewBox="0 0 320 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <rect width="320" height="460" fill="#1a2030"/>
      <rect width="320" height="240" fill="#1f263a"/>
      <rect x="40" y="80" width="100" height="320" rx="6" fill="#0e1424" stroke="#2a3550" strokeWidth="2"/>
      <rect x="170" y="100" width="90" height="280" rx="6" fill="#0e1424" stroke="#2a3550" strokeWidth="2" opacity="0.85"/>
      <rect x="50" y="92" width="80" height="36" rx="3" fill="#1a2236"/>
      <rect x="50" y="134" width="80" height="36" rx="3" fill="#1a2236"/>
      <rect x="50" y="176" width="80" height="36" rx="3" fill="#1a2236"/>
      <rect x="0" y="400" width="320" height="60" fill="#0d1220"/>
    </svg>
  );
  if (i === 4) return (
    <svg viewBox="0 0 320 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <rect width="320" height="460" fill="#eef2f8"/>
      <rect width="320" height="200" fill="#dfe6f0"/>
      <rect x="0" y="380" width="320" height="80" fill="#c4b8a8"/>
      <rect x="40" y="80" width="240" height="160" rx="8" fill="#0D1321"/>
      <rect x="48" y="88" width="224" height="144" rx="4" fill="#ffffff"/>
      <rect x="48" y="88" width="48" height="144" fill="#0D1321"/>
      <rect x="104" y="125" width="74" height="56" rx="3" fill="#f0f3f8"/>
      <rect x="100" y="346" width="120" height="22" rx="4" fill="#dfe2e8"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 320 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <rect width="320" height="460" fill="#fef6ec"/>
      <rect width="320" height="220" fill="#fae8d0"/>
      <ellipse cx="260" cy="60" rx="100" ry="70" fill="#f5c280" opacity="0.55"/>
      <rect x="40" y="100" width="240" height="170" rx="14" fill="#ffffff" stroke="#e8d8c0"/>
      <rect x="52" y="140" width="68" height="44" rx="6" fill="#1c57f0"/>
      <rect x="128" y="140" width="68" height="44" rx="6" fill="#fbe4c0"/>
      <rect x="204" y="140" width="64" height="44" rx="6" fill="#d8eed0"/>
      <polyline points="60,248 80,238 100,242 120,224 140,230 160,210 180,216 200,198 220,206 240,188 260,194" fill="none" stroke="#1c57f0" strokeWidth="2.5"/>
    </svg>
  );
}

export default function Cases({ c }) {
  var base = new Base()
  const [active, setActive] = useState(0);

  return (
    <section id="cases" className="relative overflow-hidden bg-[#0a0f1e] pt-[90px] bg-dots-white-07 bg-[length:28px_28px] px-6 md:px-14">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[60px] -right-[60px] w-[480px] h-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(28,87,240,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative z-[2] mb-14 opacity-0 animate-fade-up-lg [animation-delay:0.05s]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start ">
          <h2 className="text-[38px] md:text-[48px] font-extrabold tracking-[-1.8px] leading-[1.1] text-white">
            {c.cases?.title_l1}<br />{c.cases?.title_l2}
          </h2>

          <div className="flex flex-col justify-center pt-1.5">
            <p className="text-[14.5px] text-[#8a90a8] leading-[1.72] max-w-[380px] mb-5" dangerouslySetInnerHTML={{ __html: c.cases?.description, }}></p>
            {/* <a
              href="#"
              data-testid="case-view-all"
              className="inline-flex items-center gap-[7px] text-[14.5px] font-bold text-white no-underline border-b-2 border-white pb-[2px] w-fit transition-colors hover:text-[#6090ff] hover:border-[#6090ff]"
            >
              View All Case
              <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a> */}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto">
        <div
          data-testid="case-accordion"
          className="relative z-[2] flex flex-col md:flex-row items-stretch bg-white rounded-t-2xl overflow-hidden md:min-h-[460px] opacity-0 animate-fade-up-lg [animation-delay:0.18s]"
        >
          {c.cases?.items.map((cs, i) => {
            const isActive = active === i;
            return (
              <div
                key={cs.idx}
                role="button"
                tabIndex={0}
                data-testid={`case-panel-${String(i + 1).padStart(2, "0")}`}
                data-active={isActive ? "true" : "false"}
                onClick={() => !isActive && setActive(i)}
                onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && !isActive) { e.preventDefault(); setActive(i); } }}
                className={[
                  "case-panel flex flex-col md:flex-row bg-[#f7f7f5] overflow-hidden md:border-l border-t md:border-t-0 border-[#e8e8e4] first:border-l-0 first:border-t-0",
                  isActive ? "flex-1 bg-white cursor-default" : "flex cursor-pointer hover:bg-[#f0f0ec]",
                ].join(" ")}
              >
                {/* Vertical tab (horizontal on mobile) */}
                <div
                  className={`basis-16 md:basis-10 lg:basis-16 shrink-0 flex items-center md:justify-center py-4 md:py-6 px-5 md:px-0 transition-colors ${isActive ? "md:bg-[#f5f5f3] md:border-r md:border-[#e8e8e4]" : ""}`}
                >
                  <span
                    className={[
                      "text-[12.5px] font-semibold whitespace-nowrap transition-all md:[writing-mode:vertical-rl] md:[transform:rotate(180deg)]",
                      isActive
                        ? "text-ink font-bold tracking-[1.5px] uppercase"
                        : "text-[#a8acba] tracking-[1px]",
                    ].join(" ")}
                  >
                    {cs.number} {cs.name_l1}
                  </span>
                </div>

                {/* Body */}
                <div
                  className={[
                    "panel-body flex flex-col md:flex-row transition-all duration-500",
                    isActive ? "flex-1 opacity-100 translate-x-0 pointer-events-auto" : "hidden opacity-0 -translate-x-3 pointer-events-none",
                  ].join(" ")}
                >
                  <div className="basis-80 h-56 md:h-auto shrink-0 overflow-hidden relative bg-[#d0d5de]">
                    {/* <PhotoSvg i={i} /> */}
                    <img src={base.host + cs.file_name} className="w-full h-full object-cover"/>
                  </div>
                  <div className="panel-detail flex-1 px-3 lg:px-11 py-8 md:py-[52px] flex-col justify-center">
                    <div className="text-[48px] font-extrabold text-[#c8cad0] tracking-[-1px] mb-5 leading-none">{cs.number}</div>
                    <div className="text-[22px] font-extrabold text-ink tracking-[-0.3px] mb-4 leading-[1.3]">
                      {cs.name_l1}
                    </div>
                    <p className="text-sm text-ink-muted leading-[1.75] mb-9" dangerouslySetInnerHTML={{ __html: cs.description, }}></p>
                    {/* <a
                      href="#"
                      data-testid={`case-view-details-${String(i + 1).padStart(2, "0")}`}
                      className="inline-flex items-center gap-[7px] text-[14.5px] font-bold text-ink no-underline border-b-2 border-ink pb-[2px] w-fit transition-colors hover:text-brand hover:border-brand"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                      <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
