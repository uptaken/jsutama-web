import React, { useState, useEffect, } from "react";

import Base from '@/utils/base'
import { absUploadUrl } from "@/lib/api";

export default function Cases({ c }) {
  var base = new Base()
  const [active, setActive] = useState(0);
	const [arrService, setArrService] = useState([])

	useEffect(() => {
		if(c.cases != null)
			setArrService(c.cases.items)
	}, [c,])

	// <section id="cases" className="relative overflow-hidden bg-[#0a0f1e] py-6 md:py-[90px] bg-dots-white-07 bg-[length:28px_28px] px-6 md:px-14 bg-no-repeat bg-right bg-cover" style={{ backgroundImage: `url(${c.cases?.image_url})` }}>
  return (
		<section id="cases" className="relative overflow-hidden bg-gradient-to-br from-[#001539] to-[#004a36] py-6 md:py-[90px] px-6 md:px-14">
      {/* Glow */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[60px] -right-[60px] w-[480px] h-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(28,87,240,0.18) 0%, transparent 70%)" }}
      /> */}
			<div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-black opacity-[.6]"/>

			<div className="flex flex-col lg:flex-row lg:items-center gap-10 max-w-[1280px] mx-auto">
				<div className="relative z-[2] lg:basis-[50%]  opacity-0 animate-fade-up-lg [animation-delay:0.05s]">
					<div className="flex flex-col gap-4 lg:gap-12 items-start ">

						<div>
							<p className="text-[.7rem] md:text-base text-[#38893c] font-bold">{c.cases?.eyebrow}</p>
							<h2 className="text-2xl md:text-[38px] lg:text-[48px] font-extrabold tracking-[-1px] md:tracking-[-1.8px] leading-[1.1] text-white">
								{c.cases?.title_l1}
							</h2>
							<h2 className="text-2xl md:text-[38px] lg:text-[48px] font-extrabold tracking-[-1px] md:tracking-[-1.8px] leading-[1.1] text-white">
								{c.cases?.title_l2}
							</h2>
						</div>
						<p className="text-[.5rem] md:text-[14.5px] text-white leading-[1.72] max-w-[380px]" dangerouslySetInnerHTML={{ __html: c.cases?.description, }}></p>

						<a
							href={"#"}
							data-testid="hero-learn-more-btn"
							className="inline-flex items-center border border-[#30a416] bg-[#30a416] text-white text-[.5rem] md:text-[15px] font-bold px-3 md:px-[34px] py-2 md:py-3.5 rounded-[10px] no-underline shadow-[#38893c]-cta opacity-0 animate-fade-up [animation-delay:0.30s] transition-all"
						>
							Learn More
							<svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0">
								<path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>

					</div>
				</div>

				<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3  z-10">
					{
						arrService.map((temp, index) => (
							<div className="flex flex-col items-center gap-2 md:gap-3 rounded-xl md:p-5">
								<div className={`w-[5rem] aspect-square rounded-full bg-${index % 2 == 0 ? '[#001f54]' : '[#38893c]'} flex items-center justify-center`}>
									<img src={temp.image_url} className="w-[3rem] h-auto"/>
								</div>
								<div className="flex flex-col gap-2 md:gap-3">
									<p className={`text-base md:text-xl font-bold uppercase text-center text-${index % 2 == 0 ? 'white' : '[#38893c]'}`}>{temp.name_l1}</p>
									<p className="text-[.5rem] md:text-xs text-white">{temp.description}</p>
								</div>
							</div>
						))
					}
				</div>
			</div>

    </section>
  );
}
