import React from "react";

import Base from '@/utils/base'

function Arrow() {
  return (
    <div className="w-[42px] h-[42px] rounded-full border-[1.5px] border-[#c0c2cc] flex items-center justify-center shrink-0 bg-transparent transition-colors group-hover/svc:bg-brand group-hover/svc:border-brand">
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <path d="M4 12L12 4M12 4H6M12 4v6" stroke="#0D1321" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="group-hover/svc:[stroke:white]" />
      </svg>
    </div>
  );
}

function Card({ children, idx, last = false, paddingClass = "", testId, delay }) {
  return (
    <div
      data-testid={testId}
      style={{ animationDelay: delay }}
      className={`group/svc bg-[#F2F2F0] flex-1 flex-col cursor-pointer transition-colors opacity-0 animate-fade-up-lg  ${paddingClass}`}
    >
      {children}
    </div>
  );
}

export default function Services({ c }) {
  var base = new Base()

  return (
    <section id="services" className="bg-[#F2F2F0] mt-[72px] py-16 md:py-20 px-6 md:px-14">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
          <h2 className="text-[38px] md:text-[46px] font-extrabold leading-[1.1] tracking-[-1.5px] text-ink">
            {c.services?.title_l1}
            <br />
            {c.services?.title_l2}
          </h2>
          <div className="flex flex-col items-start justify-center pt-2">
            <p className="text-[14.5px] text-ink-muted leading-[1.68] max-w-[360px] mb-[18px]" dangerouslySetInnerHTML={{ __html: c.services?.description, }}>
            </p>
            {/* <a
              href="#"
              data-testid="services-view-all"
              className="flex items-center gap-1.5 text-[14.5px] font-bold text-ink no-underline border-b-2 border-ink pb-px transition-colors hover:text-brand hover:border-brand"
            >
              View all Service
              <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
          {
            c.services?.items?.map((item, index) => 
              <div className="flex w-full gap-6">
                <Card testId="service-card-1" delay="0.05s">
                  <ImgWrap>
                    <img src={base.host + item.file_name} className="w-full h-full object-cover"/>
                  </ImgWrap>
                  <Body title={item} />
                </Card>

                {index < c.services?.items?.length - 1 && <div className="bg-[#dcddd8] basis-[1px] h-full hidden md:block"></div>}
              </div>
            )
          }
        </div>

        {/* <div role="tablist" aria-label="Service slides" className="flex items-center justify-center gap-2 mt-10">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              role="tab"
              aria-selected={i === 4 ? "true" : undefined}
              data-testid={`services-dot-${i}`}
              className={`h-2.5 rounded-full border-[1.5px] cursor-pointer transition-all ${
                i === 4 ? "w-[30px] bg-brand border-brand !rounded-[5px]" : "w-2.5 border-[#b0b4c0] bg-transparent"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}

function ImgWrap({ children, opacity = 1 }) {
  return (
    <div className="w-full h-[15rem] md:h-[15rem] lg:h-[20rem] overflow-hidden rounded-[10px] bg-[#c8cfd8] shrink-0 flex items-center" style={{ opacity }}>
      {children}
    </div>
  );
}
function Body({ title }) {
  return (
    <div className="py-5 pl-0 pr-1 flex items-center justify-between gap-3">
      <div>
        <div className="text-3xl font-bold text-ink leading-[1.35] tracking-[-0.2px]" dangerouslySetInnerHTML={{ __html: title?.title_l1 || "" }}>
        </div>

        <div className="text-sm text-ink mt-3" dangerouslySetInnerHTML={{ __html: title?.title_l2 || "" }}></div>
      </div>

      {/* <Arrow /> */}
    </div>
  );
}

/* ── Original decorative SVGs preserved ── */
function Svg1() {
  return (
    <svg viewBox="0 0 320 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <rect width="320" height="256" fill="#c4b8a8"/>
      <rect width="320" height="140" fill="#b8aa98"/>
      <ellipse cx="260" cy="60" rx="70" ry="70" fill="#f5d090" opacity="0.55"/>
      <ellipse cx="260" cy="60" rx="40" ry="40" fill="#fce8b0" opacity="0.6"/>
      <rect x="0" y="190" width="320" height="70" fill="#8a6a48"/>
      <rect x="0" y="186" width="320" height="10" rx="2" fill="#a07850"/>
      <ellipse cx="240" cy="200" rx="36" ry="80" fill="#3a4a7a" opacity="0.7"/>
      <ellipse cx="240" cy="128" rx="20" ry="22" fill="#c8a070"/>
      <ellipse cx="240" cy="112" rx="18" ry="14" fill="#5a3820"/>
      <rect x="100" y="188" width="120" height="14" rx="3" fill="#d8d0c8"/>
      <ellipse cx="130" cy="290" rx="58" ry="85" fill="#8a8878"/>
      <rect x="122" y="178" width="16" height="22" rx="6" fill="#c89870"/>
      <ellipse cx="130" cy="166" rx="30" ry="34" fill="#d4a478"/>
      <ellipse cx="130" cy="146" rx="30" ry="18" fill="#3a2818"/>
      <ellipse cx="105" cy="166" rx="9" ry="20" fill="#3a2818"/>
      <ellipse cx="162" cy="158" rx="14" ry="8" fill="#3a2818" transform="rotate(-20 162 158)"/>
      <ellipse cx="122" cy="168" rx="3.5" ry="4" fill="#4a3020"/>
      <ellipse cx="140" cy="168" rx="3.5" ry="4" fill="#4a3020"/>
      <path d="M104 158 Q104 135 130 135 Q156 135 156 158" fill="none" stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round"/>
      <rect x="100" y="155" width="8" height="14" rx="4" fill="#1a1a1a"/>
      <rect x="152" y="155" width="8" height="14" rx="4" fill="#1a1a1a"/>
      <path d="M108 163 Q90 175 88 188" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="88" cy="190" r="5" fill="#2a2a2a"/>
      <ellipse cx="165" cy="194" rx="48" ry="12" fill="#8a8878" transform="rotate(-8 165 194)"/>
      <ellipse cx="185" cy="195" rx="18" ry="9" fill="#c89870"/>
    </svg>
  );
}
function Svg2() {
  return (
    <svg viewBox="0 0 320 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <rect width="320" height="256" fill="#d8dce8"/>
      <rect width="320" height="140" fill="#e0e4f0"/>
      <rect x="0" y="0" width="160" height="200" fill="#e8ecf8" opacity="0.6"/>
      <rect x="20" y="10" width="120" height="170" rx="4" fill="#f0f4ff" opacity="0.5"/>
      <line x1="40" y1="10" x2="40" y2="180" stroke="#d0d4e8" strokeWidth="1.5"/>
      <line x1="60" y1="10" x2="60" y2="180" stroke="#d0d4e8" strokeWidth="1.5"/>
      <line x1="80" y1="10" x2="80" y2="180" stroke="#d0d4e8" strokeWidth="1.5"/>
      <line x1="100" y1="10" x2="100" y2="180" stroke="#d0d4e8" strokeWidth="1.5"/>
      <line x1="120" y1="10" x2="120" y2="180" stroke="#d0d4e8" strokeWidth="1.5"/>
      <rect x="0" y="196" width="320" height="60" fill="#b8a898"/>
      <rect x="0" y="192" width="320" height="8" rx="0" fill="#c8b8a8"/>
      <rect x="155" y="120" width="90" height="72" rx="4" fill="#1a1f2e"/>
      <rect x="160" y="125" width="80" height="62" rx="3" fill="#222838"/>
      <rect x="166" y="131" width="50" height="5" rx="2" fill="#4a7ae0" opacity="0.9"/>
      <rect x="255" y="135" width="65" height="55" rx="3" fill="#1a1f2e"/>
      <ellipse cx="108" cy="280" rx="45" ry="70" fill="#e8e4e0"/>
      <ellipse cx="210" cy="280" rx="50" ry="75" fill="#6888a8"/>
      <rect x="60" y="196" width="96" height="60" rx="4" fill="#1a1f2e"/>
    </svg>
  );
}
function Svg3() {
  return (
    <svg viewBox="0 0 320 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <rect width="320" height="256" fill="#2a2e38"/>
      <rect width="320" height="140" fill="#242830"/>
      <rect x="60" y="0" width="6" height="30" fill="#3a3e48"/>
      <ellipse cx="63" cy="30" rx="12" ry="8" fill="#e8d080" opacity="0.5"/>
      <rect x="250" y="0" width="6" height="30" fill="#3a3e48"/>
      <ellipse cx="253" cy="30" rx="12" ry="8" fill="#e8d080" opacity="0.4"/>
      <rect x="240" y="60" width="14" height="160" rx="4" fill="#e06820"/>
      <rect x="262" y="80" width="14" height="140" rx="4" fill="#e86828"/>
      <rect x="284" y="70" width="14" height="150" rx="4" fill="#d86020"/>
      <rect x="160" y="50" width="80" height="60" rx="4" fill="#1a1e28"/>
      <rect x="0" y="196" width="320" height="60" fill="#1e2228"/>
      <ellipse cx="170" cy="290" rx="55" ry="85" fill="#5878b8"/>
      <ellipse cx="170" cy="162" rx="30" ry="32" fill="#c8a080"/>
      <rect x="140" y="150" width="60" height="32" rx="8" fill="#1a1e28"/>
      <ellipse cx="158" cy="166" rx="10" ry="10" fill="#2a3048" stroke="#4060c0" strokeWidth="1.5"/>
      <ellipse cx="182" cy="166" rx="10" ry="10" fill="#2a3048" stroke="#4060c0" strokeWidth="1.5"/>
      <ellipse cx="170" cy="137" rx="26" ry="12" fill="#4a3020"/>
    </svg>
  );
}
