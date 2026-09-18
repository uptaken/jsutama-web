import React, {useState, useEffect,} from "react";
import { Link } from "react-router-dom";
import { absUploadUrl } from "@/lib/api";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LINK_CLS =
  "flex items-center gap-1 text-[.7rem] md:text-sm font-medium text-ink-mid px-3.5 py-1.5 rounded-md transition-colors no-underline";

export default function Nav({ c }) {
  const logoUrl = c?.brand?.logo_url;
	const [mobileOpen, setMobileOpen] = useState(false)
	const [mobileOpen2, setMobileOpen2] = useState(false)
	const [arrLink, setArrLink] = useState([
		{ id: 'home', url: '/#', name: 'Home', },
		{ id: 'solution', url: '#', name: 'Solutions', selected: false, selected2: false, arr: [
			{ id: 'test1', url: '/#', name: 'Test1', },
			{ id: 'test2', url: '/#', name: 'Test2', },
			{ id: 'test3', url: '/#', name: 'Test3', },
		] },
		{ id: 'industries', url: '#', name: 'Industries', selected: false, selected2: false, arr: [
			{ id: 'test1', url: '/#', name: 'Test1', },
			{ id: 'test2', url: '/#', name: 'Test2', },
			{ id: 'test3', url: '/#', name: 'Test3', },
		] },
		{ id: 'insights', url: '#', name: 'Insights', selected: false, selected2: false, arr: [
			{ id: 'test1', url: '/#', name: 'Test1', },
			{ id: 'test2', url: '/#', name: 'Test2', },
			{ id: 'test3', url: '/#', name: 'Test3', },
		] },
		{ id: 'about', url: '/#about', name: 'About Us', },
	])

	useEffect(() => {
		if(mobileOpen2)
			setTimeout(() => {
				setMobileOpen(true)
			}, 200)
	}, [mobileOpen2, ])

	useEffect(() => {
		if(!mobileOpen)
			setTimeout(() => {
				setMobileOpen2(false)
			}, 1000)
	}, [mobileOpen, ])

	const onLinkClicked = (index) => {
		var arrTemp = [...arrLink]
		var flag = arrTemp[index].selected
		if(!arrTemp[index].selected)
			arrTemp[index].selected = !arrTemp[index].selected
		else
			arrTemp[index].selected2 = false
		setArrLink(arrTemp)

		if(!flag)
			setTimeout(() => {
				onSelected2Changed(index)
			}, 200)
		else
			setTimeout(() => {
				onSelectedChanged(index)
			}, 500)
	}

	const onSelected2Changed = (index) => {
		var arrTemp = [...arrLink]
		arrTemp[index].selected2 = true
		setArrLink(arrTemp)
	}

	const onSelectedChanged = (index) => {
		var arrTemp = [...arrLink]
		arrTemp[index].selected = false
		setArrLink(arrTemp)
	}

  return (
    <header role="banner">
      <nav
        aria-label="Primary navigation"
        className="w-full top-0 z-[100] flex items-center justify-between h-auto py-3 px-6 md:px-14 border-b border-hairline bg-transparent relative md:absolute top-0 backdrop-blur-md"
      >
        <Link
          to="/"
          data-testid="nav-logo"
          aria-label="Digix"
          className="flex items-center gap-2.5 font-extrabold text-[20px] text-ink no-underline"
        >
          <img src={c?.brand?.logo_url} alt="Digix" className="h-[2rem] md:h-[3rem] lg:h-[3.5rem] w-auto" />
        </Link>



        <div className="flex items-center gap-3.5">
					<ul className="hidden lg:flex items-center gap-1.5 list-none m-0 p-0">
						{
							arrLink.map((link, index) =>
								<>
									<li className="">
										<div className="flex items-center" onClick={() => onLinkClicked(index)}>
											<a href={link.url} data-testid={"nav-" + link.id} className={LINK_CLS}>{link.name}</a>
											{link.arr && <FontAwesomeIcon icon={"fa-solid fa-chevron-" + (link.selected ? 'up' : 'down')} className="text-[1rem]"/>}
										</div>

										{
											link.arr &&
											<ul className={`fixed flex flex-col gap-1.5 list-none m-0 p-0 bg-white w-[8rem] mt-3 transition-all duration-500 ${link.selected ? '' : 'hidden'} ${link.selected2 ? 'opacity-100' : 'opacity-0'}`}>
												{
													link.arr.map((link2, index2) =>
														<li><a href={link2.url} data-testid={"nav-" + link2.id} className={LINK_CLS}>{link2.name}</a></li>
													)
												}
											</ul>
										}
									</li>
								</>
							)
						}

					</ul>

					<div className="flex items-center">
						<FontAwesomeIcon icon="fa-solid fa-bars" className="text-2xl md:text-[2rem] block lg:hidden" onClick={() => setMobileOpen2((v) => !v)}/>
						<a
							data-testid="nav-get-start-btn"
							href={c?.hero?.cta_url || "#footer"}
							className="hidden lg:inline-flex items-center bg-white text-brand border border-brand text-sm font-bold tracking-wide px-[26px] py-[11px] rounded-3xl no-underline transition-all hover:bg-brand-dark hover:-translate-y-0.5"
						>
							Contact Us
						</a>
					</div>
        </div>
      </nav>

			<div className={`fixed z-[101] left-0 top-0 w-full h-screen bg-[#000000AA] lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"} ${mobileOpen2 ? "" : "hidden"}`} onClick={() => setMobileOpen(false)}>
				<div
					className={` overflow-y-scroll transition-[max-height] duration-500 bg-white border-t border-[#E8E2D3] h-full transition-all duration-500 ${mobileOpen ? "w-[80%]" : "w-0"}`}  data-testid="mobile-menu" onClick={(e) => e.stopPropagation()}>
					<nav className="px-4 py-4 flex flex-col items-start gap-1">
						<div className="flex items-center justify-between w-full">
							<img src={c?.brand?.logo_url} alt="Digix" className="h-[3rem] w-auto" />

							<FontAwesomeIcon icon="fa-solid fa-xmark" className="text-[1.5rem] block md:hidden" onClick={() => setMobileOpen(false)}/>
						</div>

						<ul className="flex flex-col gap-3 list-none m-0 p-0 mt-5 w-full">
							{
								arrLink.map((link, index) =>
									<li>
										<div className="flex items-center w-full" onClick={() => onLinkClicked(index)}>
											<a href={link.url} data-testid={"nav-" + link.id} className={LINK_CLS + ' w-full'}>{link.name}</a>
											{link.arr && <FontAwesomeIcon icon={"fa-solid fa-chevron-" + (link.selected ? 'up' : 'down')} className="text-[.7rem] md:text-[1rem]"/>}
										</div>

										{
											link.arr &&
											<ul className={`flex flex-col gap-1.5 list-none m-0 p-0 bg-white ml-3 transition-all duration-500 ${link.selected ? '' : 'hidden'} ${link.selected2 ? 'opacity-100' : 'opacity-0'}`}>
												{
													link.arr.map((link2, index2) =>
														<li><a href={link2.url} data-testid={"nav-" + link2.id} className={LINK_CLS}>{link2.name}</a></li>
													)
												}
											</ul>
										}
									</li>
								)
							}
						</ul>

						<a
							data-testid="nav-get-start-btn"
							href={c?.hero?.cta_url || "#footer"}
							className="inline-flex items-center bg-white text-brand border border-brand text-[.7rem] md:text-sm font-bold tracking-wide px-3 md:px-[26px] py-2 md:py-[11px] rounded-3xl no-underline transition-all hover:bg-brand-dark hover:-translate-y-0.5 mt-5">
							Contact Us
						</a>
					</nav>
				</div>
			</div>
    </header>
  );
}
