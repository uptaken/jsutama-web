import React from "react";
import { absUploadUrl } from "@/lib/api";

import Base from '@/utils/base'

export default function About({ c }) {
  var base = new Base()

  const aboutImg = c?.about?.image_url;
  return (
    <section id="about" className="bg-white py-24 lg:py-[110px] px-6 md:px-14">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col opacity-0 animate-fade-up-lg [animation-delay:0.05s]">
          <h2 className="text-[38px] md:text-[52px] font-extrabold tracking-[-2px] leading-[1.08] text-ink mb-10">
            {c.about?.title}
          </h2>
          <p className="text-[15px] text-ink-muted leading-[1.78] max-w-[490px] mb-12" dangerouslySetInnerHTML={{ __html: c.about?.description, }}>
          </p>
          <div className="font-script text-[34px] font-semibold text-ink tracking-wide mb-9 leading-none">
            {c.about?.signature}
          </div>

          <div className="flex items-center gap-[18px] mb-9">
            <div className="text-[14.5px] font-semibold text-ink leading-[1.4]">
              {c.about?.client_text_l1}
              <br />
              {c.about?.client_text_l2}
            </div>
          </div>

          {/* <a
            href="#"
            data-testid="about-us-link"
            className="inline-flex items-center gap-1.5 text-[15px] font-bold text-ink no-underline border-b-2 border-ink pb-[2px] w-fit transition-colors hover:text-brand hover:border-brand"
          >
            About Us
            <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a> */}
        </div>

        {/* RIGHT */}
        <div className="flex items-end justify-end gap-3.5 relative opacity-0 animate-fade-up-lg [animation-delay:0.18s]">
          {aboutImg ? (
            <div className="rounded-2xl overflow-hidden w-full max-h-[460px]">
              <img
                src={absUploadUrl(aboutImg)}
                alt="About Digix"
                className="w-full h-full object-cover block"
                loading="lazy"
                data-testid="about-image"
              />
            </div>
          ) : (
            <>
              <div className="rounded-xl overflow-hidden shrink-0 bg-[#d0d5de] flex-1 h-[320px]">
                <img src={base.host + c.about?.image_url1} className="w-full h-full object-cover"/>
              </div>
              <div className="rounded-xl overflow-hidden shrink-0 bg-[#d0d5de] flex-1 h-[380px]">
                <img src={base.host + c.about?.image_url2} className="w-full h-full object-cover"/>
              </div>
              <div className="rounded-xl overflow-hidden shrink-0 bg-[#d0d5de] flex-1 h-[296px]">
                <img src={base.host + c.about?.image_url3} className="w-full h-full object-cover"/>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
