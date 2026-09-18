import React from "react";

export default function CTA({ c }) {
  return (
    <section className="bg-white px-6 md:px-14 pb-24 lg:pb-[100px]">
      <div
        className="relative overflow-hidden max-w-[1280px] mx-auto bg-brand rounded-3xl px-7 md:px-16 py-7 md:py-12 md:py-[72px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center opacity-0 animate-fade-up [animation-delay:0.05s]"
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-[120px] -right-[120px] w-[360px] h-[360px] rounded-full bg-white/[0.08]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-[160px] left-[30%] w-[280px] h-[280px] rounded-full bg-white/[0.06]" aria-hidden="true" />
        {/* Grid dots */}
        <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 opacity-[0.35]" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-3.5 h-3.5 bg-white rounded-[2px]" />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-[2]">
          <div className="inline-flex items-center gap-2.5 bg-white/[0.16] px-3.5 py-1.5 rounded-full text-[12.5px] font-bold text-white tracking-[1.5px] uppercase mb-[22px]">
            <span className="w-2 h-2 bg-[#80ffb0] rounded-full" />
            {c.cta?.eyebrow}
          </div>
          <h2 className="text-[38px] lg:text-[46px] font-extrabold tracking-[-1px] md:tracking-[-1.8px] leading-[1.08] text-white mb-[18px]">
            {c.cta?.title_l1}<br />{c.cta?.title_l2}
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/85 max-w-[480px] mb-8" dangerouslySetInnerHTML={{ __html: c.cta?.description, }}></p>
          <div className="flex items-center gap-[18px] flex-wrap">
            <button
              data-testid="cta-schedule-btn"
              className="inline-flex items-center gap-2 bg-white text-brand text-[15px] font-bold px-[30px] py-[15px] rounded-[10px] cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
            >
              {c.cta?.primary_label}
            </button>
            <button
              data-testid="cta-contact-btn"
              className="bg-transparent text-white border-[1.5px] border-white/50 px-7 py-[13.5px] rounded-[10px] text-[15px] font-bold cursor-pointer transition-colors hover:bg-white/[0.14] hover:border-white"
            >
              {c.cta?.secondary_label}
            </button>
          </div>
        </div>

        {/* Right stat card */}
        <div className="relative z-[2] flex items-center justify-end">
          <div className="bg-white/[0.12] backdrop-blur-md border border-white/[0.22] rounded-[18px] p-4 md:p-8 flex flex-col gap-[18px]">

            <div className="flex items-center gap-3.5">
              <div className="text-[44px] font-extrabold text-white tracking-[-1.5px] leading-none">{c.cta?.stat1_num}</div>
              <div className="text-[13px] text-white/85 font-semibold leading-[1.4] max-w-[140px]">{c.cta?.stat1_label}</div>
            </div>

            <div className="h-px bg-white/[0.22]" />

            <div className="flex items-center gap-3.5">
              <div className="text-[44px] font-extrabold text-white tracking-[-1.5px] leading-none">{c.cta?.stat2_num}</div>
              <div className="text-[13px] text-white/85 font-semibold leading-[1.4] max-w-[140px]">{c.cta?.stat2_label}</div>
            </div>

            <div className="h-px bg-white/[0.22]" />

            <div className="flex items-center gap-2 text-[13px] text-white/85 font-medium">
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M2 8.5l4 4 8-9" stroke="#80ffb0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {c.cta?.badge}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
