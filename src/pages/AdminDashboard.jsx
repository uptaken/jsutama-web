import React, { useEffect, useState, useCallback } from "react";
import moment from 'moment'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { api, formatApiErrorDetail, absUploadUrl } from "@/lib/api";

import Base from '@/utils/base'
import { TextField,	TextArea,	ImageUpload,	ObjectEditor,	ArrayEditor, } from '@/components/adminSections/PrimitiveComponent'
import BlogPostsManager from '@/components/adminSections/BlogManager'

const TABS = [
	{ id: "banner",       label: "Banner" },
  { id: "hero",         label: "Hero" },
	{ id: "stats",     		label: "Stats" },
  { id: "services",     label: "Services" },
  { id: "about",        label: "About" },
  { id: "cases",        label: "Case Studies" },
  // { id: "testimonials", label: "Testimonials" },
	{ id: "our_approach", label: "Our Approach" },
	{ id: "client", label: "Client" },
	{ id: "footer_section", label: "Footer Section" },


  // { id: "blog_section", label: "Blog Section" },
  { id: "blog_posts",   label: "Blog Posts" },
  // { id: "cta",          label: "CTA Banner" },
  { id: "contact",      label: "Contact + Footer" },
  { id: "socials",      label: "Social Links" },
  { id: "brand",        label: "Brand & Images" },
];

/* Reusable styles */
const FIELD = "flex flex-col gap-1.5 mb-[18px]";
const LABEL = "text-[13px] font-bold text-ink";
const INPUT = "w-full text-[14.5px] border border-hairline rounded-lg px-3 py-2.5 text-ink bg-white outline-none transition-colors focus:border-brand focus:ring-[3px] focus:ring-brand/[0.12]";
const TEXTAREA = INPUT + " min-h-[100px] resize-y leading-[1.55]";
const HINT = "text-xs text-ink-muted";
const BTN_SAVE = "bg-brand text-white border-none px-[26px] py-[11px] rounded-lg font-bold text-sm cursor-pointer transition-all hover:bg-brand-dark hover:-translate-y-px disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none";
const BTN_SECONDARY = "bg-transparent text-ink border border-hairline px-[18px] py-[9px] rounded-lg font-semibold text-[13.5px] cursor-pointer";
const BTN_DANGER = "bg-[#DC2626] text-white border-none px-[18px] py-[9px] rounded-lg font-bold text-[13.5px] cursor-pointer";

export default function AdminDashboard() {
	var base = new Base()

  // const { user, logout } = useAuth();
  const navigate = useNavigate();
	const [user, setUser] = useState({});
  const [tab, setTab] = useState("hero");
  const [c, setC] = useState({});
  const [busy, setBusy] = useState(false);

  useEffect(() => {

		checkAuth()
		getProfileData()

	}, []);

	useEffect(() => {
		getData()
	}, [tab])

	async function checkAuth() {
	  var token = await window.localStorage.getItem('token')
		var tokenExpired = await window.localStorage.getItem('token_expired')
		if(tokenExpired)
			tokenExpired = moment(tokenExpired)

		if(token == null || (token != null && tokenExpired.isBefore(moment()))){
			window.localStorage.removeItem('token')
			window.localStorage.removeItem('token_expired')
			window.location.href = "/admin/login"
		}
	}

	const getProfileData = async () => {
		var response = await base.request(base.url_api + '/auth/profile')

		if(response != null){
			if(response.status == "success"){
				setUser(response.data)
			}
			else
				base.show_error(response.message)
		}
	}

	const getData = async () => {
		var response = await base.request(base.url_api + '/content?type=' + tab)

		if(response != null){
			if(response.status == "success"){
				var c = {...c}
				c[tab] = response.data.content
				setC(c)
			}
			else
				base.show_error(response.message)
		}
	}

  const save = async () => {
    setBusy(true);
    var response = await base.request(base.url_api + '/content', 'post', {
			key: tab,
			content: c[tab],
		})

		setBusy(false);
		if(response != null){
			if(response.status == "success"){
				console.log(response.data)
			}
			else
				base.show_error(response.message)
		}

  };

	async function logout(){
		window.localStorage.removeItem('token')
		window.localStorage.removeItem('token_expired')
	}

  if (!c) return <div className="p-12">Loading content…</div>;

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex flex-col">
      {/* Top bar */}
      <div className="bg-ink text-white px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-extrabold text-[18px]">
          <span className="w-[30px] h-[30px] bg-brand rounded-md flex items-center justify-center">
            <svg viewBox="0 0 20 20" className="w-[18px] h-[18px] fill-white">
              <rect x="2" y="2" width="7" height="7" rx="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5"/>
              <rect x="2" y="11" width="7" height="7" rx="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5"/>
            </svg>
          </span>
          JSU Admin
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[#8a90a8] text-[13px]">{user?.email}</span>
          <Link
            to="/"
            target="_blank"
            data-testid="topbar-view-site"
            className="text-[#c0c5d4] text-sm font-medium bg-transparent border border-[#2a2f42] px-3.5 py-1.5 rounded-lg no-underline transition-colors hover:bg-brand hover:text-white hover:border-brand"
          >
            View site →
          </Link>
          <button
            onClick={() => { logout(); navigate("/admin/login"); }}
            data-testid="topbar-logout"
            className="text-[#c0c5d4] text-sm font-medium bg-transparent border border-[#2a2f42] px-3.5 py-1.5 rounded-lg cursor-pointer transition-colors hover:bg-brand hover:text-white hover:border-brand"
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 max-w-[1280px] mx-auto px-8 py-8 w-full flex-1">
        <aside className="bg-white rounded-xl p-3.5 h-fit shadow-[0_1px_4px_rgba(13,19,33,0.05)] md:sticky md:top-6">
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                data-testid={`tab-${t.id}`}
                className={[
                  "block w-full text-left bg-transparent border-none px-3.5 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-colors",
                  active ? "bg-brand-soft text-brand" : "text-ink-mid hover:bg-[#F5F7FB] hover:text-ink",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </aside>

        <main className="bg-white rounded-xl p-8 shadow-[0_1px_4px_rgba(13,19,33,0.05)]">
          {/* HERO */}
          {tab === "hero" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Hero</h2>
            <p className="text-ink-muted text-sm mb-6">Top of the homepage — the first thing visitors see.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <TextField label="Title line 1" value={c.hero?.title_line1} onChange={(v) => setC({ ...c, hero: { ...c.hero, title_line1: v } })} testId="hero-title1" />
              <TextField label="Title line 2" value={c.hero?.title_line2} onChange={(v) => setC({ ...c, hero: { ...c.hero, title_line2: v } })} testId="hero-title2" />
            </div>
            <TextArea label="Description" value={c.hero?.description} onChange={(v) => setC({ ...c, hero: { ...c.hero, description: v } })} testId="hero-desc" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <TextField label="CTA button label" value={c.hero?.cta_label} onChange={(v) => setC({ ...c, hero: { ...c.hero, cta_label: v } })} testId="hero-cta-label" />
              <TextField label="CTA URL or anchor (#services, /blog, https://…)" value={c.hero?.cta_url} onChange={(v) => setC({ ...c, hero: { ...c.hero, cta_url: v } })} testId="hero-cta-url" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <TextField label="Stat number" value={c.hero?.stat_number} onChange={(v) => setC({ ...c, hero: { ...c.hero, stat_number: v } })} testId="hero-stat-num" />
              <TextField label="Stat label line 1" value={c.hero?.stat_label_l1} onChange={(v) => setC({ ...c, hero: { ...c.hero, stat_label_l1: v } })} />
              <TextField label="Stat label line 2" value={c.hero?.stat_label_l2} onChange={(v) => setC({ ...c, hero: { ...c.hero, stat_label_l2: v } })} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <TextField label="Trustpilot score" value={c.hero?.trust_score} onChange={(v) => setC({ ...c, hero: { ...c.hero, trust_score: v } })} />
              <TextField label="Trustpilot reviews text" value={c.hero?.trust_reviews} onChange={(v) => setC({ ...c, hero: { ...c.hero, trust_reviews: v } })} />
            </div>
            <ImageUpload label="Hero illustration override (optional)"
							value={c.hero?.image_url}
							onChange={(v, fileName, imageData) => setC({
								...c, hero: {
									...c.hero,
									image_url: v,
									image: {url: v, file: imageData, file_name: fileName, },
								}
							})}
							recommended="1200×800 JPG/PNG" hint="If set, replaces the office team SVG illustration." testId="hero-image" />
            <button className={BTN_SAVE} onClick={() => save("hero")} disabled={busy} data-testid="save-hero">{busy ? "Saving…" : "Save"}</button>
          </>)}

					{tab === "stats" && (<>
						<h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Stats</h2>
						<ArrayEditor items={c.stats?.items || []} setItems={(items) => setC({ ...c, stats: { ...c.stats, items } })}
							fields={[
								{ key: "title_l1", label: "Card title line 1" },
								{ key: "title_l2", label: "Card title line 2" },
								{ key: "image", label: "Image", type: 'imagePicker', },
							]} addLabel="Add Stats" min={1} max={6} />
						<button className={BTN_SAVE} onClick={() => save("stats")} disabled={busy} data-testid="save-stats">{busy ? "Saving…" : "Save"}</button>
					</>)}

					{tab === "banner" && (<>
						<h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Banner</h2>
						<ArrayEditor items={c.banner?.items || []} setItems={(items) => setC({ ...c, banner: { ...c.banner, items } })}
							fields={[
								{ key: "title_l1", label: "Card title line 1", },
								{ key: "title_l2", label: "Card title line 2", },
								{ key: "description", label: "Description", type: 'textarea', },
								{ key: "image", label: "Image", type: 'imagePicker', },
							]} addLabel="Add Banner" min={1} max={6} />
						<button className={BTN_SAVE} onClick={() => save("banner")} disabled={busy} data-testid="save-banner">{busy ? "Saving…" : "Save"}</button>
					</>)}

          {/* SERVICES */}
          {tab === "services" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Services Section</h2>
            <p className="text-ink-muted text-sm mb-6">Section heading + 4 service cards. The card illustrations are part of the design and cannot be changed here.</p>
						<TextField label="Eyebrow" value={c.services?.eyebrow} onChange={(v) => setC({ ...c, services: { ...c.services, eyebrow: v } })} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <TextField label="Title line 1" value={c.services?.title_l1} onChange={(v) => setC({ ...c, services: { ...c.services, title_l1: v } })} />
              <TextField label="Title line 2" value={c.services?.title_l2} onChange={(v) => setC({ ...c, services: { ...c.services, title_l2: v } })} />
            </div>
            <TextArea label="Description" value={c.services?.description} onChange={(v) => setC({ ...c, services: { ...c.services, description: v } })} />
            <h3 className="mt-4 mb-3 text-base font-bold">Service cards</h3>
            <ArrayEditor items={c.services?.items || []} setItems={(items) => setC({ ...c, services: { ...c.services, items } })}
              fields={[
                { key: "title_l1", label: "Card title line 1" },
                { key: "title_l2", label: "Card title line 2" },
                { key: "image", label: "Image", type: 'imagePicker', },
              ]} addLabel="Add service" min={1} max={6} />
            <button className={BTN_SAVE} onClick={() => save("services")} disabled={busy} data-testid="save-services">{busy ? "Saving…" : "Save"}</button>
          </>)}

          {/* ABOUT */}
          {tab === "about" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">About</h2>
						<TextField label="Section title" value={c.about?.title} onChange={(v) => setC({ ...c, about: { ...c.about, title: v } })} />
            <TextArea label="Description" value={c.about?.description} onChange={(v) => setC({ ...c, about: { ...c.about, description: v } })} rows={5} />
            <TextField label="Handwritten signature text" value={c.about?.signature} onChange={(v) => setC({ ...c, about: { ...c.about, signature: v } })} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <TextField label="Client text line 1" value={c.about?.client_text_l1} onChange={(v) => setC({ ...c, about: { ...c.about, client_text_l1: v } })} />
              <TextField label="Client text line 2" value={c.about?.client_text_l2} onChange={(v) => setC({ ...c, about: { ...c.about, client_text_l2: v } })} />
            </div>
            <div>
              <ImageUpload label="About image override 1 (optional)"
                value={c.about?.image1_url}
                onChange={(v, fileName, imageData) => setC({
									...c, about: {
										...c.about,
										image1_url: v,
										image1: {url: v, file: imageData, file_name: fileName, },
									}
								})}
                recommended="1200×900 JPG/PNG" hint="If set, replaces the 3-portrait illustration." testId="about-image" />

              <ImageUpload label="About image override 2 (optional)"
                value={c.about?.image2_url}
                onChange={(v, fileName, imageData) => setC({
									...c, about: {
										...c.about,
										image2_url: v,
										image2: {url: v, file: imageData, file_name: fileName, },
									}
								})}
                recommended="1200×900 JPG/PNG" hint="If set, replaces the 3-portrait illustration." testId="about-image" />

              <ImageUpload label="About image override 3 (optional)"
                value={c.about?.image3_url}
                onChange={(v, fileName, imageData) => setC({
									...c, about: {
										...c.about,
										image3_url: v,
										image3: {url: v, file: imageData, file_name: fileName, },
									}
								})}
                recommended="1200×900 JPG/PNG" hint="If set, replaces the 3-portrait illustration." testId="about-image" />
            </div>
            <button className={BTN_SAVE} onClick={() => save("about")} disabled={busy} data-testid="save-about">{busy ? "Saving…" : "Save"}</button>
          </>)}

          {/* CASES */}
          {tab === "cases" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Case Studies (accordion)</h2>
            <p className="text-ink-muted text-sm mb-6">6 panels — the active one expands. The illustrations are fixed, but you can edit the number, title, and description of each case.</p>
						<TextField label="Eyebrow" value={c.cases?.eyebrow} onChange={(v) => setC({ ...c, cases: { ...c.cases, eyebrow: v } })} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <TextField label="Section title line 1" value={c.cases?.title_l1} onChange={(v) => setC({ ...c, cases: { ...c.cases, title_l1: v } })} />
              <TextField label="Section title line 2" value={c.cases?.title_l2} onChange={(v) => setC({ ...c, cases: { ...c.cases, title_l2: v } })} />
            </div>
            <TextArea label="Description" value={c.cases?.description} onChange={(v) => setC({ ...c, cases: { ...c.cases, description: v } })} />
						<ImageUpload label="Background Image"
							value={c.cases?.image_url}
							onChange={(v, fileName, imageData) => setC({
								...c, cases: {
									...c.cases,
									image_url: v,
									image: {url: v, file: imageData, file_name: fileName, },
								}
							})}
							recommended="1200×800 JPG/PNG" hint="If set, replaces the office team SVG illustration." testId="cases-image" />
            <h3 className="mt-4 mb-3 text-base font-bold">Case panels</h3>
            <ArrayEditor items={c.cases?.items || []} setItems={(items) => setC({ ...c, cases: { ...c.cases, items } })}
              fields={[
                // { key: "number", label: "Number (e.g. 01.)" },
                { key: "name_l1", label: "Name line 1" },
                // { key: "name_l2", label: "Name line 2" },
                { key: "description", label: "Description", type: "textarea" },
                { key: "image", label: "Image", type: 'imagePicker', },
              ]}
              addLabel="Add case" min={1} max={6} />
            <button className={BTN_SAVE} onClick={() => save("cases")} disabled={busy} data-testid="save-cases">{busy ? "Saving…" : "Save"}</button>
          </>)}

					{/* CASES */}
					{tab === "our_approach" && (<>
						<h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Our Approach</h2>
						<TextField label="title" value={c.our_approach?.title} onChange={(v) => setC({ ...c, our_approach: { ...c.our_approach, title: v } })} />
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
							<TextField label="Section title line 1" value={c.our_approach?.title_l1} onChange={(v) => setC({ ...c, our_approach: { ...c.our_approach, title_l1: v } })} />
							<TextField label="Section title line 2" value={c.our_approach?.title_l2} onChange={(v) => setC({ ...c, our_approach: { ...c.our_approach, title_l2: v } })} />
						</div>
						<h3 className="mt-4 mb-3 text-base font-bold">List Approach</h3>
						<ArrayEditor items={c.our_approach?.items || []} setItems={(items) => setC({ ...c, our_approach: { ...c.our_approach, items } })}
							fields={[
								// { key: "number", label: "Number (e.g. 01.)" },
								{ key: "name_l1", label: "Name line 1" },
								// { key: "name_l2", label: "Name line 2" },
								{ key: "description", label: "Description", type: "textarea" },
								{ key: "image", label: "Image", type: 'imagePicker', },
							]}
							addLabel="Add Approach" min={1} max={6} />
						<button className={BTN_SAVE} onClick={() => save("our_approach")} disabled={busy} data-testid="save-cases">{busy ? "Saving…" : "Save"}</button>
					</>)}

					{/* CASES */}
					{tab === "client" && (<>
						<h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Client</h2>
						<TextField label="title" value={c.client?.title} onChange={(v) => setC({ ...c, client: { ...c.client, title: v } })} />
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
							<TextField label="Section title line 1" value={c.client?.title_l1} onChange={(v) => setC({ ...c, client: { ...c.client, title_l1: v } })} />
							<TextField label="Section title line 2" value={c.client?.title_l2} onChange={(v) => setC({ ...c, client: { ...c.client, title_l2: v } })} />
						</div>
						<h3 className="mt-4 mb-3 text-base font-bold">List Client</h3>
						<ArrayEditor items={c.client?.items || []} setItems={(items) => setC({ ...c, client: { ...c.client, items } })}
							fields={[
								// { key: "number", label: "Number (e.g. 01.)" },
								// { key: "name_l1", label: "Name line 1" },
								// { key: "name_l2", label: "Name line 2" },
								// { key: "description", label: "Description", type: "textarea" },
								{ key: "image", label: "Image", type: 'imagePicker', },
							]}
							addLabel="Add Client" min={1} />
						<button className={BTN_SAVE} onClick={() => save("client")} disabled={busy} data-testid="save-cases">{busy ? "Saving…" : "Save"}</button>
					</>)}

          {/* TESTIMONIALS */}
          {tab === "testimonials" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <TextField label="Eyebrow" value={c.testimonials?.eyebrow} onChange={(v) => setC({ ...c, testimonials: { ...c.testimonials, eyebrow: v } })} />
              <TextField label="Title line 1" value={c.testimonials?.title_l1} onChange={(v) => setC({ ...c, testimonials: { ...c.testimonials, title_l1: v } })} />
              <TextField label="Title line 2" value={c.testimonials?.title_l2} onChange={(v) => setC({ ...c, testimonials: { ...c.testimonials, title_l2: v } })} />
            </div>
            <ArrayEditor items={c.testimonials?.items || []}
              setItems={(items) => setC({ ...c, testimonials: { ...c.testimonials, items } })}
              fields={[
                { key: "quote", label: "Quote", type: "textarea", rows: 3 },
                { key: "name", label: "Author name" },
                { key: "role", label: "Role / company" },
                { key: "initials", label: "Initials (2 letters)" },
                // { key: "featured", label: "Featured (dark middle card)", type: "checkbox" },
                { key: "image", label: "Image", type: 'imagePicker', },
              ]}
              addLabel="Add testimonial" min={1} max={6} />
            <button className={BTN_SAVE} onClick={() => save("testimonials")} disabled={busy} data-testid="save-testimonials">{busy ? "Saving…" : "Save"}</button>
          </>)}

					{/* TESTIMONIALS */}
					{tab === "footer_section" && <>
						<h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Footer Section</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
							<TextField label="Title line 1" value={c.footer_section?.title_l1} onChange={(v) => setC({ ...c, footer_section: { ...c.footer_section, title_l1: v } })} />

							<TextField label="Title line 2" value={c.footer_section?.title_l2} onChange={(v) => setC({ ...c, footer_section: { ...c.footer_section, title_l2: v } })} />
						</div>

						<TextField label="Button text" value={c.footer_section?.button_text} onChange={(v) => setC({ ...c, footer_section: { ...c.footer_section, button_text: v } })} />

						<ImageUpload label="Image"
							value={c.footer_section?.image_url}
							onChange={(v, fileName, imageData) => setC({
								...c, footer_section: {
									...c.footer_section,
									image_url: v,
									image: {url: v, file: imageData, file_name: fileName, },
								}
							})}
							recommended="1200×800 JPG/PNG" hint="If set, replaces the office team SVG illustration." testId="footer-section-image" />

						<button className={BTN_SAVE} onClick={() => save("footer_section")} disabled={busy} data-testid="save-footer_section">{busy ? "Saving…" : "Save"}</button>
					</>}

          {/* BLOG SECTION */}
          {tab === "blog_section" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Blog Section Heading</h2>
            <p className="text-ink-muted text-sm mb-6">The intro shown above the latest 3 blog posts on the homepage.</p>
            <ObjectEditor obj={c.blog_section} setObj={(v) => setC({ ...c, blog_section: v })} fields={[
              { key: "eyebrow", label: "Eyebrow" },
              { key: "title_l1", label: "Title line 1" },
              { key: "title_l2", label: "Title line 2" },
              { key: "description", label: "Description", type: "textarea" },
            ]} />
            <button className={BTN_SAVE} onClick={() => save("blog_section")} disabled={busy} data-testid="save-blog-section">{busy ? "Saving…" : "Save"}</button>
          </>)}

          {/* BLOG POSTS */}
          {tab === "blog_posts" && <BlogPostsManager />}

          {/* CTA */}
          {tab === "cta" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">CTA Banner</h2>
            <ObjectEditor obj={c.cta} setObj={(v) => setC({ ...c, cta: v })} fields={[
              { key: "eyebrow", label: "Eyebrow" },
              { key: "title_l1", label: "Title line 1" }, { key: "title_l2", label: "Title line 2" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "primary_label", label: "Primary button label" }, { key: "primary_url", label: "Primary button URL" },
              { key: "secondary_label", label: "Secondary button label" }, { key: "secondary_url", label: "Secondary button URL" },
              { key: "stat1_num", label: "Stat 1 number" }, { key: "stat1_label", label: "Stat 1 label" },
              { key: "stat2_num", label: "Stat 2 number" }, { key: "stat2_label", label: "Stat 2 label" },
              { key: "badge",    label: "Bottom badge text" },
            ]} />
            <button className={BTN_SAVE} onClick={() => save("cta")} disabled={busy} data-testid="save-cta">{busy ? "Saving…" : "Save"}</button>
          </>)}

          {/* CONTACT */}
          {tab === "contact" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Contact + Footer</h2>
            <ObjectEditor obj={c.contact} setObj={(v) => setC({ ...c, contact: v })} fields={[
              { key: "email", label: "Email" },
              { key: "phone", label: "Phone" },
							{ key: "address", label: "Address", type: "textarea", },
							{ key: "website", label: "Website" },
              { key: "footer_tagline", label: "Footer tagline", type: "textarea", rows: 3 },
              { key: "footer_copy", label: "Footer © line" },
            ]} />
            <button className={BTN_SAVE} onClick={() => save("contact")} disabled={busy} data-testid="save-contact">{busy ? "Saving…" : "Save"}</button>
          </>)}

          {/* SOCIALS */}
          {tab === "socials" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Social Links</h2>
            <ObjectEditor obj={c.socials} setObj={(v) => setC({ ...c, socials: v })} fields={[
              { key: "linkedin",  label: "LinkedIn URL" },
              { key: "twitter",   label: "Twitter / X URL" },
              { key: "facebook",  label: "Facebook URL" },
              { key: "instagram", label: "Instagram URL" },
            ]} />
            <button className={BTN_SAVE} onClick={() => save("socials")} disabled={busy} data-testid="save-socials">{busy ? "Saving…" : "Save"}</button>
          </>)}

          {/* BRAND & IMAGES */}
          {tab === "brand" && (<>
            <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Brand &amp; Images</h2>
            <p className="text-ink-muted text-sm mb-6">Upload your logo and a default social-share image. These are used across the site and in Open Graph / Twitter card previews when someone shares a Digix URL.</p>
            <ImageUpload label="Site logo" value={c.brand?.logo_url}
							onChange={(v, fileName, imageData) => setC({
								...c, brand: {
									...c.brand,
									logo_url: v,
									logo: {url: v, file: imageData, file_name: fileName, },
								}
							})}
							recommended="160×40 PNG or SVG, transparent background" hint="Replaces the default blue grid icon + 'JSU' wordmark in the nav and footer." testId="brand-logo" />
            <ImageUpload label="Default share image (Open Graph)" value={c.brand?.og_image_url}
							onChange={(v, fileName, imageData) => setC({
								...c, brand: {
									...c.brand,
									og_image_url: v,
									og_image: {url: v, file: imageData, file_name: fileName, },
								}
							})}
							recommended="1200×630 JPG/PNG" hint="Used as the share preview on LinkedIn, X/Twitter, Slack, Discord, etc." testId="brand-og" />
            <div className="flex gap-2">
              <button className={BTN_SAVE} onClick={async () => { await save("brand"); await save("seo"); }} disabled={busy} data-testid="save-brand">{busy ? "Saving…" : "Save"}</button>
              <a className={BTN_SECONDARY + " no-underline inline-flex items-center"} href="https://tech-landing-v1.preview.emergentagent.com/api/sitemap.xml" target="_blank" rel="noopener noreferrer" data-testid="view-sitemap">View /sitemap.xml</a>
            </div>
          </>)}
        </main>
      </div>
    </div>
  );
}
