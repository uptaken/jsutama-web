import React, {useEffect, useState,} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper/modules';
import 'swiper/css/bundle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Base from '@/utils/base'
import { absUploadUrl } from "@/lib/api";

export default function OurApproach({ c }) {
	var base = new Base()

	const [arr, setArr] = useState([])

	useEffect(() => {
		if(c.our_approach != null)
			setArr(c.our_approach.items)
	}, [c,])

	return (
		<section id="testimonials" className="relative bg-white py-6 md:py-24 lg:py-[110px] px-6 md:px-14">
			<div className="max-w-[1280px] mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-end mb-5 md:mb-14 opacity-0 animate-fade-up [animation-delay:0.05s]">
					<div>
						<div className="inline-flex items-center gap-2 text-[.7rem] md:text-[13px] font-bold text-[#38893c] uppercase tracking-[2px] mb-3 md:mb-[18px] before:content-[''] before:w-7 before:h-[2px] before:bg-[#38893c]">
							{c.our_approach?.title}
						</div>
						<h2 className="text-2xl md:text-[38px] lg:text-[48px] font-extrabold tracking-[-1px] md:tracking-[-1.8px] leading-[1.1] text-[#091961]">
							<span>{c.our_approach?.title_l1.split(' ').slice(0, -1).join(" ")}</span>&nbsp;
							<span className="text-[#38893c]">{c.our_approach?.title_l1.split(' ')[c.our_approach?.title_l1.split(' ').length - 1]}</span>
						</h2>
						<h2 className="text-2xl md:text-[38px] lg:text-[48px] font-extrabold tracking-[-1px] md:tracking-[-1.8px] leading-[1.1] text-[#091961]">
							{c.our_approach?.title_l2}
						</h2>
					</div>
				</div>

				<div className="hidden lg:flex">
					<div className="grid grid-cols-4 relative gap-3 md:gap-10">
						{
							arr.map((temp, index) => (
								<div className="flex flex-col gap-5">
									<div className="flex gap-3 items-center">
										<div className={"h-[3rem] aspect-square rounded-full flex justify-center items-center text-2xl font-bold text-white " + (index % 2 == 0 ? 'bg-[#004ad3]' : 'bg-[#009f50]')}>
											{index + 1}
										</div>

										<img src={temp.image_url} className="w-[2rem] aspect-square"/>

										{
											index < arr.length - 1 &&
											<div className="flex-1 flex items-center">
												<div className={"border-[1px] border-dotted flex-1 " + (index % 2 == 0 ? 'border-primary' : 'border-[#CCCCCC]')}></div>

												<FontAwesomeIcon icon="fa-solid fa-chevron-right" className={"text-[1rem] " + (index % 2 == 0 ? 'text-primary' : 'text-[#CCCCCC]')} />
											</div>
										}


									</div>

									<div className="flex flex-col">
										<p className="text-xl text-[#091961] font-bold">{temp.name_l1}</p>
										<p className="text-base">{temp.description}</p>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<div className="flex flex-col gap-3 md:gap-5 lg:hidden">
					{
						[...Array(arr.length / 2)].map((_, index1) => (
							<div className={"grid grid-cols-2 relative gap-3 md:gap-5"} dir={index1 % 2 == 0 ? 'ltr' : 'rtl'}>
								{
									arr.slice(index1 * 2, (index1 + 1) * 2).map((temp, index) => (
										<div className="flex flex-col gap-1 md:gap-5">
											<div className="flex gap-2 md:gap-3 items-center">
												<div className={"h-[2rem] md:h-[3rem] aspect-square rounded-full flex justify-center items-center text-base md:text-2xl font-bold text-white " + (index % 2 == 0 ? 'bg-[#004ad3]' : 'bg-[#009f50]')}>
													{index1 * 2 + index + 1}
												</div>

												<img src={temp.image_url} className="w-[1rem] md:w-[2rem] aspect-square"/>

												{
													index1 * 2 + index + 1 != arr.length &&
													<div className="flex-1 flex items-center">
														<div className={"border-[1px] border-dotted flex-1 " + (index % 2 == 0 ? 'border-primary' : 'border-[#CCCCCC]')}></div>

														<FontAwesomeIcon icon={`fa-solid ${index1 % 2 == 0 ? 'fa-chevron-right' : 'fa-chevron-left'}`} className={"text-[1rem] " + (index % 2 == 0 ? 'text-primary' : 'text-[#CCCCCC]')} />
													</div>
												}


											</div>

											<div className="flex flex-col">
												<p className="text-base md:text-xl text-[#091961] font-bold">{temp.name_l1}</p>
												<p className="text-[.5rem] md:text-base">{temp.description}</p>
											</div>
										</div>
									))
								}
							</div>
						))
					}

				</div>

			</div>
		</section>
	);
}
