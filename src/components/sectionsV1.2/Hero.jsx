import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { absUploadUrl } from "@/lib/api";

export default function Hero({ c }) {
  const heroImg = c?.hero?.image_url;
  return (
    <div className="bg-[#b1cce7] h-[15rem] md:h-[30rem] lg:h-auto w-full md:w-screen aspect-[16/9] relative">
				<img src={c.banner?.items[0].image_url} className="absolute w-full h-full top-0 object-cover" />

				<Swiper
					className="h-full"
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{
						c.banner?.items.map((temp, index) =>
							<SwiperSlide>
								<div className="h-full px-6 md:px-14 md:pt-[71px] lg:pt-[80px] md:pb-[50px] lg:pb-[95px] py-6 md:py-[10rem] bg-no-repeat bg-center lg:bg-right bg-cover flex items-center">
									<div className="w-full md:w-[60%] lg:w-[70%] xl:w-[1280px] xl:mx-auto">
										<div className="grid grid-cols-1 gap-3 md:gap-6 xl:gap-12 items-start">
											{/* ── LEFT ── */}
											<h1
												className="relative font-extrabold text-2xl md:text-4xl lg:text-[58px] leading-[1.08] lg:leading-[1] tracking-[-1px] md:tracking-[-2px] text-[#091961] opacity-0 animate-fade-up [animation-delay:0.05s]"
											>
												{temp.title_l1 || ""}
												<span className="block text-green-500">{temp.title_l2 || ""}</span>
											</h1>

											<p className="text-[.5rem] md:text-[15px] text-black leading-[1.72] max-w-[430px] opacity-0 animate-fade-up [animation-delay:0.14s]" dangerouslySetInnerHTML={{ __html: temp.description || "", }}>
											</p>

											<div className="flex items-center justify-start gap-3">
												<a
													href={c.hero?.cta_url || "#"}
													data-testid="hero-learn-more-btn"
													className="inline-flex items-center flex-1 md:flex-none bg-brand text-white text-[.5rem] md:text-[15px] font-bold px-3 md:px-[34px] py-2 md:py-3.5 rounded-[10px] no-underline shadow-brand-cta opacity-0 animate-fade-up [animation-delay:0.30s] transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-brand-ctaH"
												>
													Explore Solutions
												</a>

												<a
													href={c.hero?.cta_url || "#"}
													data-testid="hero-learn-more-btn"
													className="inline-flex items-center flex-1 md:flex-none border border-[#091961] bg-white text-[#091961] text-[.5rem] md:text-[15px] font-bold px-3 md:px-[34px] py-2 md:py-3.5 rounded-[10px] no-underline shadow-brand-cta opacity-0 animate-fade-up [animation-delay:0.30s] transition-all"
												>
													Schedule Consultation
												</a>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						)
					}

				</Swiper>

    </div>
  );
}
