import React, {useEffect, useState,} from "react";

import Base from '@/utils/base'
import { absUploadUrl } from "@/lib/api";

export default function Services({ c }) {
  var base = new Base()
	const [arrService, setArrService] = useState([])

	useEffect(() => {
		if(c.services != null)
			setArrService(c.services.items)
	}, [c,])

  return (
    <section id="services" className="bg-[#F2F2F0]  py-16 md:pb-20 px-6 md:px-14 pt-6 md:pt-[12rem] lg:pt-[8rem]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-8 xl:gap-12 items-start md:mb-12">
					<div>
						<p className="text-[.7rem] md:text-base text-[#38893c] font-bold">{c.services?.eyebrow}</p>
						<h2 className="text-2xl md:text-[38px] lg:text-[46px] font-extrabold leading-[1.1] tracking-[-1px] md:tracking-[-1.5px] text-[#091961]">
							{c.services?.title_l1}
						</h2>
						<h2 className="text-2xl md:text-[38px] lg:text-[46px] font-extrabold leading-[1.1] tracking-[-1px] md:tracking-[-1.5px] text-[#091961]">
							<span>{c.services?.title_l2.split(' ').slice(0, -1).join(" ")}</span>&nbsp;
							<span className="text-[#38893c]">{c.services?.title_l2.split(' ')[c.services?.title_l2.split(' ').length - 1]}</span>
						</h2>
						<div className="flex flex-col items-start justify-center pt-2">
							<p className="text-[.5rem] md:text-[14.5px] text-ink-muted leading-[1.68] max-w-[360px] mb-[18px]" dangerouslySetInnerHTML={{ __html: c.services?.description, }}>
							</p>
							<a
								href={c.hero?.cta_url || "#"}
								data-testid="hero-learn-more-btn"
								className="inline-flex items-center border border-[#091961] bg-white text-[#091961] text-[.6rem] md:text-[15px] font-bold p-3 md:px-[34px] py-2 md:py-3.5 rounded-[10px] no-underline shadow-brand-cta opacity-0 animate-fade-up [animation-delay:0.30s] transition-all"
							>
								Learn More About Us
								<svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0">
									<path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-5">
						{
							arrService.map((temp, index) => (
								<div className="flex flex-col items-center gap-2 md:gap-3 border rounded-xl p-3 md:p-5">
									<img src={temp.image_url} className="w-[3rem] md:w-[5rem] aspect-square"/>
									<div className="flex flex-col gap-1 md:gap-3">
										<p className="text-base md:text-xl text-[#091961] font-bold">{temp.title_l1}</p>
										<p className="text-[.5rem] md:text-xs">{temp.title_l2}</p>
									</div>
								</div>
							))
						}
					</div>
        </div>

      </div>
    </section>
  );
}
