import React, {useState, useEffect,} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { absUploadUrl } from "@/lib/api";

export default function Intersection1({ c }) {
  const [arr, setArr] = useState([])

	useEffect(() => {
		if(c.stats != null){
			setArr(c.stats.items)
		}
	}, [c,])

  return (
    <div className="px-6 md:px-14">
			<div className="max-w-[1280px] mx-auto relative">

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-3 shadow-brand rounded-2xl relative md:absolute w-full md:-top-[3rem] lg:-top-[6rem] bg-white px-0 py-4 md:p-4 lg:p-8 xl:p-10 z-10">
					{
						arr.map((data, index) => (
							<div className="flex items-center justify-between gap-3">
								<div className="flex items-center gap-3 xl:gap-5">
									<img src={data.image_url} className="w-[3rem] md:w-[5rem] aspect-square"/>
									<div className="flex flex-col gap-1 md:gap-3">
										<p className="text-lg md:text-3xl lg:text-2xl xl:text-3xl leading-[1] text-[#091961] font-bold">{data.title_l1}</p>
										<p className="text-[.5rem] md:text-xs font-bold">{data.title_l2}</p>
									</div>
								</div>

								<div className="hidden lg:flex">
									{index < arr.length - 1 && <div className={`h-[5rem] w-[1px] bg-[#EAEAEA]`}></div>}
								</div>
								<div className="hidden md:flex lg:hidden">
									{index < arr.length - 1 && <div className={`h-[5rem] w-[1px] bg-[#EAEAEA] ${index % 2 == 0 ? 'hidden md:flex' : 'hidden'}`}></div>}
								</div>
							</div>
						))
					}

				</div>

			</div>
    </div>
  );
}
