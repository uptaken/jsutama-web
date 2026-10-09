import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Briefcase, Headset, Instagram, Linkedin, Mail, MapPin, MessageCircle,
  Menu, Phone, X, Youtube,
} from "lucide-react";
import { CONTACT, SOLUTIONS, telLink, waLink } from "./data";
import { Brand, Btn } from "./shared";
import { JsuContext } from "./context";
import SolutionModal from "./SolutionModal";
import InquiryModal from "./InquiryModal";
import "./jsu.css";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Our Approach", to: "/about", hash: "#approach" },
  { label: "Insights", to: "/blog" },
  { label: "About Us", to: "/about" },
];

/**
 * Header, footer, the "Let's talk" band and the pop-ups shared by every page.
 */
export default function JsuLayout({ c = {}, children }) {
  const [menu, setMenu] = useState(false);
  const [solution, setSolution] = useState(null);
  const [form, setForm] = useState(null); // { type, preset }
  const { pathname, hash } = useLocation();
  const lastPath = useRef(null);

  const email = c.contact?.email || CONTACT.email;
  // the phone numbers live in data.js (CONTACT); an old value saved in the CMS must not override them
  const phone = CONTACT.phone;
  const socials = c.socials || {};

  const openForm = (type, preset = {}) => { setSolution(null); setMenu(false); setForm({ type, preset }); };
  const openSolution = (id) => { setMenu(false); setSolution(id); };

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  // New page -> top. Link with #hash -> that section (below the sticky header).
  // A jump is used when the page just changed: a smooth scroll started while it is still laying out gets cancelled.
  useEffect(() => {
    const samePage = lastPath.current === pathname;
    lastPath.current = pathname;
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      const el = id ? document.getElementById(id) : null;
      const top = el ? el.getBoundingClientRect().top + window.scrollY - 92 : 0;
      window.scrollTo({ top, behavior: samePage ? "smooth" : "instant" });
    }, 80);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  // Scroll reveal: .jsu-reveal blocks fade up once as they enter the viewport. Without JS, or with reduced motion, they simply show.
  useEffect(() => {
    const root = document.querySelector(".jsu-site");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!root || reduce || !("IntersectionObserver" in window)) return undefined;
    root.classList.add("has-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); observer.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    const timer = setTimeout(() => root.querySelectorAll(".jsu-reveal:not(.is-in)").forEach((el) => observer.observe(el)), 60);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [pathname]);

  const isActive = ({ to, hash: h }) => {
    if (to === "/") return pathname === "/";
    if (to === "/about") return pathname === "/about" && (h ? hash === h : hash !== "#approach");
    return pathname === to || pathname.startsWith(`${to}/`);
  };
  const linkTo = ({ to, hash: h }) => (h ? { pathname: to, hash: h } : to);
  const contactTo = { pathname, hash: "#contact" };

  const ctx = { openForm, openSolution };

  return (
    <JsuContext.Provider value={ctx}>
    <div className="jsu-site" id="top">
      <a className="jsu-skip" href="#main-content">Skip to content</a>

      {/* ─── Header ─── */}
      <header className="jsu-header">
        <div className="jsu-shell jsu-header-inner">
          <Link to="/" aria-label="Jakarta Soerja Utama home" onClick={() => setMenu(false)}><Brand /></Link>
          <nav className="jsu-desktop-nav" aria-label="Primary navigation">
            {NAV.map((item) => (
              <Link key={item.label} to={linkTo(item)} className={isActive(item) ? "is-active" : ""} aria-current={isActive(item) ? "page" : undefined}>{item.label}</Link>
            ))}
            <button type="button" className="jsu-partner-link" onClick={() => openForm("partnership", { source: "Header" })}>Partner With Us</button>
          </nav>
          <div className="jsu-header-actions">
            <Link className="jsu-nav-contact" to={contactTo}>Contact Us</Link>
            <button type="button" className="jsu-menu" aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} onClick={() => setMenu((v) => !v)}>
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menu && (
          <nav className="jsu-mobile-nav" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <Link key={item.label} to={linkTo(item)} onClick={() => setMenu(false)}>{item.label}<ArrowUpRight size={16} /></Link>
            ))}
            <button type="button" onClick={() => openForm("partnership", { source: "Header" })}>Partner With Us<ArrowUpRight size={16} /></button>
            <Link to={contactTo} onClick={() => setMenu(false)}>Contact Us<ArrowUpRight size={16} /></Link>
          </nav>
        )}
      </header>

      <main id="main-content">{children}</main>

      {/* ─── Contact call-to-action ─── */}
      <section className="jsu-contact" id="contact">
        <div className="jsu-shell">
          <div>
            <h2>Let’s Keep <em>Impacting Possibilities.</em></h2>
            <p>Connect with JSU and start your transformation journey today.</p>
          </div>
          <Btn variant="green" onClick={() => openForm("consultation", { source: "Contact" })}>Let’s Talk</Btn>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="jsu-footer">
        <div className="jsu-shell">
          <div className="jsu-footer-grid">
            <div className="jsu-footer-brand">
              <Link to="/" aria-label="JSU home"><Brand white /></Link>
              <p>Connecting Technology, Future, and Expertise to create meaningful impact.</p>
              <div className="jsu-social">
                {[["LinkedIn", Linkedin, socials.linkedin], ["YouTube", Youtube, socials.youtube], ["Instagram", Instagram, socials.instagram]].map(([name, Icon, url]) => (
                  <a key={name} href={url || "#"} aria-label={name} {...(url ? { target: "_blank", rel: "noopener noreferrer" } : { "aria-disabled": true, onClick: (e) => e.preventDefault() })}><Icon size={17} /></a>
                ))}
              </div>
            </div>
            <nav aria-label="Company">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/solutions">Our Solutions</Link></li>
                <li><Link to="/blog">Insights</Link></li>
                <li><button type="button" onClick={() => openForm("career", { source: "Footer" })}>Career</button></li>
                <li><Link to={contactTo}>Contact</Link></li>
              </ul>
            </nav>
            <nav aria-label="Our solutions">
              <h4>Our Solutions</h4>
              <ul>{SOLUTIONS.map(({ id, title }) => <li key={id}><Link to={`/solutions/${id}`}>{title}</Link></li>)}</ul>
            </nav>
            <div>
              <h4>Contact Us</h4>
              <ul className="jsu-footer-contact">
                <li><MapPin size={17} /><span>{CONTACT.address.map((l) => <span key={l}>{l}<br /></span>)}</span></li>
                <li><Mail size={17} /><a href={`mailto:${email}`}>{email}</a></li>
                <li><Phone size={17} /><a href={telLink(phone)}>{phone}</a></li>
              </ul>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="jsu-quick">
                <li><a href={waLink(CONTACT.phone)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />Business enquiries<ArrowRight size={15} /></a></li>
                <li className="jsu-quick-support">
                  <span><Headset size={17} />Customer support</span>
                  <div>{CONTACT.support.map((n) => <a key={n} href={waLink(n)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp customer support ${n}`}>{n}<ArrowRight size={14} /></a>)}</div>
                </li>
                <li><button type="button" onClick={() => openForm("career", { source: "Footer" })}><Briefcase size={17} />Career<ArrowRight size={15} /></button></li>
              </ul>
            </div>
          </div>
          <div className="jsu-footer-bottom">© {new Date().getFullYear()} PT Jakarta Soerja Utama. All rights reserved.</div>
        </div>
      </footer>

      <SolutionModal
        solution={solution}
        onClose={() => setSolution(null)}
        onConsult={(preset) => openForm("consultation", preset)}
      />
      <InquiryModal type={form?.type} preset={form?.preset} onClose={() => setForm(null)} />
    </div>
    </JsuContext.Provider>
  );
}
