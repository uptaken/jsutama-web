import React, {useState, useEffect,} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { absUploadUrl } from "@/lib/api";

import WhiteLogo from '@/assets/MainLogo_Web_putih.png'

export default function Footer1({ c }) {
  const [arrService, setArrService] = useState([
    { id: 'digital', name: 'JSU Digital', href: '#', },
    { id: 'trading', name: 'JSU Trading', href: '#', },
    { id: 'consulting', name: 'JSU Consulting', href: '#', },
  ])

  const onSubmit = (e) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector("button");
    e.currentTarget.querySelector("input").value = "";
    btn.textContent = "Subscribed ✓";
    setTimeout(() => { btn.textContent = "Subscribe"; }, 2400);
  };
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="relative overflow-hidden bg-[#001436] text-[#c0c5d4]  bg-dots-white-04 bg-[length:32px_32px]"
    >
			{/* <div className="px-5 md:px-14 pt-5 lg:pt-8 bg-no-repeat bg-right bg-cover" style={{ backgroundImage: `url(${c.footer_section?.image_url})` }}> */}
			<div className="px-6 md:px-14 pt-6 lg:pt-8 bg-[#001539]">
				<div className="relative z-[2] max-w-[1280px] mx-auto " >
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-9 lg:gap-14 pb-8 " >
						<div>
							<p className="text-xl md:text-3xl text-white font-bold">{c.footer_section?.title_l1}</p>
							<p className="text-[.7rem] md:text-xs text-white">{c.footer_section?.title_l2}</p>
						</div>

						<div>
							<a
								href={c.hero?.cta_url || "#"}
								data-testid="hero-learn-more-btn"
								className="flex items-center border-green-500 bg-green-500 text-white text-[.7rem] md:text-[15px] font-bold px-3 md:px-5 lg:px-[34px] py-2 md:py-3.5 rounded-[10px] no-underline shadow-green-500-cta opacity-0 animate-fade-up [animation-delay:0.30s] transition-all"
							>
								{c.footer_section?.button_text}
								<svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0">
									<path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="px-6 md:px-14 lg:pt-8">
				<div className="relative z-[2] max-w-[1280px] mx-auto pb-5 lg:pb-8">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr_1fr] gap-4 lg:gap-5 lg:pt-8">
						{/* Brand */}
						<div className="flex items-center gap-2.5 font-extrabold text-[20px] text-white no-underline">
							<a href="/" rel="home" data-testid="footer-logo" >
								{c?.brand?.logo_url ? (
									<img
										src={absUploadUrl(c.brand?.logo_url)}
										alt="Digix"
										className="w-[7rem] md:w-[10rem] h-auto"
										style={{ filter: "brightness(0) invert(1)" }}/>
								) : (
									<>
										<span aria-hidden="true" className="w-[34px] h-[34px] bg-brand rounded-[7px] flex items-center justify-center">
											<svg viewBox="0 0 20 20" className="w-5 h-5 fill-white">
												<rect x="2" y="2" width="7" height="7" rx="1.5" /><rect x="11" y="2" width="7" height="7" rx="1.5" />
												<rect x="2" y="11" width="7" height="7" rx="1.5" /><rect x="11" y="11" width="7" height="7" rx="1.5" />
											</svg>
										</span>
										<img
											src={absUploadUrl(c.brand?.logo_url)}
											alt="Digix"
											className="w-[7rem] md:w-[10rem] h-auto"
											style={{ filter: "brightness(0) invert(1)" }}/>
									</>
								)}
							</a>
						</div>

						<div>
							<div className="hidden lg:flex justify-between items-center gap-5">
								<div className="flex items-center gap-3 mb-4 text-sm text-[#c0c5d4]">
									<div aria-hidden="true" className="">
										<FontAwesomeIcon icon="fa-solid fa-location-dot" className="text-[2rem]" />
									</div>
									<div className="leading-[1.5] text-[.5rem] md:text-[14.5px] ">
										<a href={`mailto:${c?.contact?.email || ""}`} data-testid="footer-email" className="text-inherit no-underline" dangerouslySetInnerHTML={{ __html: c?.contact?.address, }}>
										</a>
									</div>
								</div>

								<div>
									<div className="flex items-center gap-3 mb-4 text-sm text-[#c0c5d4]">
										<div aria-hidden="true" className="">
											<FontAwesomeIcon icon="fa-solid fa-envelope" className="text-[2rem]" />
										</div>
										<div className="leading-[1.5] text-[.5rem] md:text-[14.5px] ">
											<a href={`mailto:${c?.contact?.email || ""}`} data-testid="footer-email" className="text-inherit no-underline">
												{c?.contact?.email}
											</a>
										</div>
									</div>

									<div className="flex items-center gap-3 mb-4 text-sm text-[#c0c5d4]">
										<div aria-hidden="true" className="">
											<FontAwesomeIcon icon="fa-solid fa-phone" className="text-[2rem]" />
										</div>
										<div className="leading-[1.5] text-[.5rem] md:text-[14.5px] ">
											<a href={`tel:${(c?.contact?.phone || "").replace(/[^+\d]/g, "")}`} data-testid="footer-phone" className="text-inherit no-underline">
												{c?.contact?.phone}
											</a>
										</div>
									</div>
								</div>

								<div className="flex items-center gap-3 mb-4 text-sm text-[#c0c5d4]">
									<div aria-hidden="true" className="">
										<FontAwesomeIcon icon="fa-solid fa-globe" className="text-[2rem]" />
									</div>
									<div className="leading-[1.5] text-[.5rem] md:text-[14.5px] ">
										<a href={`${c?.contact?.website || ""}`} target="_blank" data-testid="footer-email" className="text-inherit no-underline">
											{c?.contact?.website}
										</a>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr lg:hidden gap-2 md:gap-5">
								<div className="flex items-center gap-3 text-sm text-[#c0c5d4]">
									<div aria-hidden="true" className="">
										<FontAwesomeIcon icon="fa-solid fa-location-dot" className="text-[1rem] md:text-[2rem]" />
									</div>
									<div className="text-[.5rem] md:text-[14.5px] leading-[1.5]">
										<a href={`mailto:${c?.contact?.email || ""}`} data-testid="footer-email" className="text-inherit no-underline" dangerouslySetInnerHTML={{ __html: c?.contact?.address, }}>
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3 text-sm text-[#c0c5d4]">
									<div aria-hidden="true" className="">
										<FontAwesomeIcon icon="fa-solid fa-envelope" className="text-[1rem] md:text-[2rem]" />
									</div>
									<div className="leading-[1.5] text-[.5rem] md:text-[14.5px] ">
										<a href={`mailto:${c?.contact?.email || ""}`} data-testid="footer-email" className="text-inherit no-underline">
											{c?.contact?.email}
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3 text-sm text-[#c0c5d4]">
									<div aria-hidden="true" className="">
										<FontAwesomeIcon icon="fa-solid fa-phone" className="text-[1rem] md:text-[2rem]" />
									</div>
									<div className="leading-[1.5] text-[.5rem] md:text-[14.5px] ">
										<a href={`tel:${(c?.contact?.phone || "").replace(/[^+\d]/g, "")}`} data-testid="footer-phone" className="text-inherit no-underline">
											{c?.contact?.phone}
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3 text-sm text-[#c0c5d4]">
									<div aria-hidden="true" className="">
										<FontAwesomeIcon icon="fa-solid fa-globe" className="text-[1rem] md:text-[2rem]" />
									</div>
									<div className="leading-[1.5] text-[.5rem] md:text-[14.5px] ">
										<a href={`${c?.contact?.website || ""}`} target="_blank" data-testid="footer-email" className="text-inherit no-underline">
											{c?.contact?.website}
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Get in Touch */}
						<div className="flex flex-col lg:items-end">
							<div>
								<h3 className="text-[.7rem] md:text-[15px] font-bold text-white mb-3 lg:mb-[22px] tracking-[-0.2px]">Follow Us</h3>

								<div className="flex gap-5">
									<a href={`${c?.socials?.linkedin || ""}`} target="_blank" data-testid="footer-email" className="text-inherit no-underline">
										<FontAwesomeIcon icon="fa-brands fa-linkedin" className="text-[1rem] md:text-[2rem]" />
									</a>

									<a href={`${c?.socials?.instagram || ""}`} target="_blank" data-testid="footer-email" className="text-inherit no-underline">
										<FontAwesomeIcon icon="fa-brands fa-instagram" className="text-[1rem] md:text-[2rem]" />
									</a>

									<a href={`${c?.socials?.twitter || ""}`} target="_blank" data-testid="footer-email" className="text-inherit no-underline">
										<FontAwesomeIcon icon="fa-brands fa-x-twitter" className="text-[1rem] md:text-[2rem]" />
									</a>

									<a href={`${c?.socials?.facebook || ""}`} target="_blank" data-testid="footer-email" className="text-inherit no-underline">
										<FontAwesomeIcon icon="fa-brands fa-facebook" className="text-[1rem] md:text-[2rem]" />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-center gap-6 mt-5 lg:mt-0 flex-wrap">
						<div className="text-[.7rem] md:text-[13.5px] text-[#6b7387]">{c.contact?.footer_copy}</div>
						{/* <div className="flex gap-6">
							<a href="#" data-testid="legal-privacy" className="text-[#8a90a8] no-underline text-[13.5px] transition-colors hover:text-white">Privacy Policy</a>
							<a href="#" data-testid="legal-terms"   className="text-[#8a90a8] no-underline text-[13.5px] transition-colors hover:text-white">Terms of Service</a>
							<a href="#" data-testid="legal-cookies" className="text-[#8a90a8] no-underline text-[13.5px] transition-colors hover:text-white">Cookies</a>
						</div> */}
					</div>
				</div>
			</div>
    </footer>
  );
}
