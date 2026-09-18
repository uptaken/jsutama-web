import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper/modules';
import 'swiper/css/bundle'

import Base from '@/utils/base'

export default function Testimonials({ c }) {
  var base = new Base()

  return (
    <section id="testimonials" className="relative bg-white py-24 lg:py-[110px] px-6 md:px-14">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-14 opacity-0 animate-fade-up [animation-delay:0.05s]">
          <div>
            <div className="inline-flex items-center gap-2 text-[13px] font-bold text-brand uppercase tracking-[2px] mb-[18px] before:content-[''] before:w-7 before:h-[2px] before:bg-brand">
              {c.testimonials?.eyebrow}
            </div>
            <h2 className="text-[38px] md:text-[48px] font-extrabold tracking-[-1.8px] leading-[1.1] text-ink">
              {c.testimonials?.title_l1}<br />{c.testimonials?.title_l2}
            </h2>
          </div>
          {/* <div className="flex gap-2.5 justify-end">
            <button
              data-testid="testimonial-prev"
              aria-label="Previous"
              className="w-12 h-12 rounded-full border-[1.5px] border-[#d8dae4] bg-transparent flex items-center justify-center cursor-pointer transition-all hover:bg-brand hover:border-brand hover:-translate-y-0.5 [&:hover_path]:[stroke:white]"
            >
              <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]">
                <path d="M11 4L6 9l5 5" stroke="#0D1321" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              data-testid="testimonial-next"
              aria-label="Next"
              className="w-12 h-12 rounded-full border-[1.5px] border-[#d8dae4] bg-transparent flex items-center justify-center cursor-pointer transition-all hover:bg-brand hover:border-brand hover:-translate-y-0.5 [&:hover_path]:[stroke:white]"
            >
              <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]">
                <path d="M7 4l5 5-5 5" stroke="#0D1321" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div> */}
        </div>

        <div className="flex flex-col items-center relative">
          <Swiper
            className="w-full"
            spaceBetween={30}
            loop={true}
            modules={[Pagination, ]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            pagination={{
              el: '.swiper-pagination1',
              type: 'bullets',
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {(c.testimonials?.items || []).map((t, i) => {
              const featured = !!t.featured;
              return (
                <SwiperSlide>
                  <div
                    key={`${t.name || "tst"}-${t.initials || i}`}
                    data-testid={`testimonial-${i + 1}`}
                    style={{ animationDelay: `${0.12 + i * 0.08}s` }}
                    className={[
                      "relative flex flex-col gap-[.8rem] md:gap-[22px] rounded-2xl border p-4 md:p-9 transition-all opacity-0 animate-fade-up",
                      "hover:-translate-y-1.5 hover:shadow-card-hover",
                      i % 2 == 1 ? "bg-ink border-ink hover:bg-ink" : "bg-[#F7F8FB] border-[#ECEEF4] hover:bg-white",
                    ].join(" ")}
                  >
                    <div className={`font-extrabold text-[64px] h-[2.5rem] leading-[1] ${i % 2 == 1 ? "text-[#6b8fff]" : "text-brand"}`}>“</div>
                    <div className="flex gap-[3px]">
                      {[0, 1, 2, 3, 4].map((k) => (
                        <svg key={`s-${k}`} viewBox="0 0 13 13" className="w-4 h-4 fill-[#FFB400]">
                          <path d="M6.5 1l1.4 4.1H12l-3.5 2.6 1.4 4.1-3.4-2.5-3.4 2.5 1.4-4.1L1 5.1h4.1z" />
                        </svg>
                      ))}
                    </div>
                    <p className={`text-[15px] leading-[1.7] font-medium ${i % 2 == 1 ? "text-white" : "text-ink-mid"}`} dangerouslySetInnerHTML={{ __html: t.quote, }}></p>
                    <div className={`mt-auto h-px ${i % 2 == 1 ? "bg-[#2a2f42]" : "bg-hairline"}`} />
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-full overflow-hidden shrink-0 flex items-center justify-center text-sm font-bold text-white"
                        style={{ background: "#c8d4e8" }}
                      >
                        {
                          t.file_name != null ?
                          <img src={base.host + t.file_name} className="w-full h-full object-cover"/>
                          :
                          t.initials
                        }
                      </div>
                      <div>
                        <div className={`text-[15px] font-bold leading-[1.2] mb-1 ${i % 2 == 1 ? "text-white" : "text-ink"}`}>{t.name}</div>
                        <div className={`text-[13px] font-medium ${i % 2 == 1 ? "text-[#9ba3b8]" : "text-ink-muted"}`}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-pagination1 mt-3"></div>
        </div>

      </div>
    </section>
  );
}
