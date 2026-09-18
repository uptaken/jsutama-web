import React, {useEffect, useState,} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, } from 'swiper/modules';
import 'swiper/css/bundle'

import Base from '@/utils/base'
import { absUploadUrl } from "@/lib/api";

export default function Experience({ c }) {
	var base = new Base()

	const [arr, setArr] = useState([])
	const [arrImage1, setArrImage1] = useState([])
	const [arrImage2, setArrImage2] = useState([])

	useEffect(() => {
		if(c.client != null)
			setArr(c.client.items)
	}, [c.client,])

	useEffect(() => {
		if(arr.length > 0){
			setArrImage1(arr.slice(0, arr.length / 2))
			setArrImage2(arr.slice(arr.length / 2))
		}
	}, [arr, ])

	return (
		<section id="testimonials" className="relative bg-white py-6 md:py-24 lg:py-[110px] px-6 md:px-14">
			<div className="max-w-[1280px] mx-auto">
				<div className="flex flex-col lg:flex-row lg:items-center gap-7 md:gap-14 mb-7 md:mb-14">
					<div className="lg:basis-[35rem] flex-none flex gap-8 md:gap-12 items-end  opacity-0 animate-fade-up [animation-delay:0.05s]">
						<div>
							<div className="inline-flex items-center gap-2 text-[.7rem] md:text-[13px] font-bold text-[#38893c] uppercase tracking-[2px] mb-3 md:mb-[18px] before:content-[''] before:w-7 before:h-[2px] before:bg-[#38893c]">
								{c.client?.title}
							</div>
							<h2 className="text-2xl md:text-[38px] lg:text-[48px] font-extrabold tracking-[-1px] md:tracking-[-1.8px] leading-[1.1] text-[#091961]">
								{c.client?.title_l1}<br />{c.client?.title_l2}
							</h2>
						</div>
					</div>

					<div className="lg:flex-1 min-w-0">
						<Swiper
							modules={[ Autoplay, ]}
							spaceBetween={10}
							slidesPerView={'auto'}
							loop={true}
							speed={10000}
							onSlideChange={() => console.log('slide change')}
							onSwiper={(swiper) => console.log(swiper)}
							className="marquee-swiper"
							wrapperClass="marquee-swiper"
							allowTouchMove={false}
							autoplay={{
								delay: 1,
								disableOnInteraction: false,
							}}
						>
							{
								arrImage1.map((temp, index) => (
									<SwiperSlide className="marquee-swiper">
										<div className="border rounded p-3 md:p-5 w-full flex justify-center">
											<img src={temp.image_url} className="w-[3rem] md:w-[5rem] h-auto"/>
										</div>
									</SwiperSlide>
								))

							}
						</Swiper>
					</div>

				</div>

				<Swiper
					modules={[ Autoplay, ]}
					spaceBetween={10}
					dir="rtl"
					slidesPerView={'auto'}
					loop={true}
					speed={10000}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
					className="marquee-swiper"
					wrapperClass="marquee-swiper"
					allowTouchMove={false}
					autoplay={{
						delay: 1,
						disableOnInteraction: false,
					}}
				>
					{
						arrImage2.map((temp, index) => (
							<SwiperSlide className="marquee-swiper">
								<div className="border rounded p-3 md:p-5 w-full flex justify-center">
									<img src={temp.image_url} className="w-[3rem] md:w-[5rem] h-auto"/>
								</div>
							</SwiperSlide>
						))

					}
				</Swiper>

			</div>
		</section>
	);
}
