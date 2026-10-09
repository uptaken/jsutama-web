import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Briefcase, Headset, Instagram, Linkedin, Mail, MapPin, MessageCircle,
  Menu, Phone, X, Youtube,
} from "lucide-react";
import { CONTACT, SOLUTIONS } from "./data";
import { Brand } from "./shared";
import { JsuContext } from "./context";
import SolutionModal from "./SolutionModal";
import InquiryModal from "./InquiryModal";
import "./jsu.css";

const NAV = [
  ["Home", "top"],
  ["Solutions", "services"],
  ["Our Approach", "approach"],
  ["Insights", "/blog"],
  ["About Us", "about"],
];

const scrollToId = (id) => {
  if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/**
 * Header, footer and the pop-ups shared by the landing page and the blog.
 * `home` = true on "/" (anchors scroll in place); elsewhere they link back to "/#section".
 */
export default function JsuLayout({ home = false, c = {}, children }) {
  const [menu, setMenu] = useState(false);
  const [solution, setSolution] = useState(null);
  const [form, setForm] = useState(null); // { type, preset }

  const email = c.contact?.email || CONTACT.email;
  const phone = c.contact?.phone || CONTACT.phone;
  const socials = c.socials || {};

  const openForm = (type, preset = {}) => { setSolution(null); setMenu(false); setForm({ type, preset }); };
  const openSolution = (id) => { setMenu(false); setSolution(id); };

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  // "about" -> scrolls on the landing page, "/#about" from other pages; "/blog" stays a normal link
  const hrefFor = (target) => (target.startsWith("/") ? target : home ? `#${target}` : `/#${target}`);
  const go = (target) => (event) => {
    setMenu(false);
    if (!home || target.startsWith("/")) return;
    event.preventDefault();
    scrollToId(target);
  };

  const ctx = { home, openForm, openSolution, go, hrefFor };

  return (
    <JsuContext.Provider value={ctx}>
    <div className="jsu-site" id="top">
      <a className="jsu-skip" href="#main-content">Skip to content</a>

      {/* ─── Header ─── */}
      <header className="jsu-header">
        <div className="jsu-shell jsu-header-inner">
          <a href="/" aria-label="Jakarta Soerja Utama home" onClick={go("top")}><Brand /></a>
          <nav className="jsu-desktop-nav" aria-label="Primary navigation">
            {NAV.map(([label, target], i) => (
              <a key={label} href={hrefFor(target)} className={i === 0 && home ? "is-active" : ""} onClick={go(target)}>{label}</a>
            ))}
            <button type="button" className="jsu-partner-link" onClick={() => openForm("partnership", { source: "Header" })}>Partner With Us</button>
          </nav>
          <div className="jsu-header-actions">
            <a className="jsu-nav-contact" href={hrefFor("contact")} onClick={go("contact")}>Contact Us</a>
            <button type="button" className="jsu-menu" aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} onClick={() => setMenu((v) => !v)}>
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menu && (
          <nav className="jsu-mobile-nav" aria-label="Mobile navigation">
            {NAV.map(([label, target]) => (
              <a key={label} href={hrefFor(target)} onClick={go(target)}>{label}<ArrowUpRight size={16} /></a>
            ))}
            <button type="button" onClick={() => openForm("partnership", { source: "Header" })}>Partner With Us<ArrowUpRight size={16} /></button>
            <a href={hrefFor("contact")} onClick={go("contact")}>Contact Us<ArrowUpRight size={16} /></a>
          </nav>
        )}
      </header>

      <main id="main-content">{children}</main>

      {/* ─── Footer ─── */}
      <footer className="jsu-footer">
        <div className="jsu-shell">
          <div className="jsu-footer-grid">
            <div className="jsu-footer-brand">
              <a href={hrefFor("top")} aria-label="Back to top" onClick={go("top")}><Brand white /></a>
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
                <li><a href={hrefFor("top")} onClick={go("top")}>Home</a></li>
                <li><a href={hrefFor("about")} onClick={go("about")}>About Us</a></li>
                <li><a href={hrefFor("services")} onClick={go("services")}>Our Solutions</a></li>
                <li><a href="/blog">Insights</a></li>
                <li><button type="button" onClick={() => openForm("career", { source: "Footer" })}>Career</button></li>
                <li><a href={hrefFor("contact")} onClick={go("contact")}>Contact</a></li>
              </ul>
            </nav>
            <nav aria-label="Our solutions">
              <h4>Our Solutions</h4>
              <ul>{SOLUTIONS.map(({ id, title }) => <li key={id}><button type="button" onClick={() => openSolution(id)}>{title}</button></li>)}</ul>
            </nav>
            <div>
              <h4>Contact Us</h4>
              <ul className="jsu-footer-contact">
                <li><MapPin size={17} /><span>{CONTACT.address.map((l) => <span key={l}>{l}<br /></span>)}</span></li>
                <li><Mail size={17} /><a href={`mailto:${email}`}>{email}</a></li>
                <li><Phone size={17} /><a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a></li>
              </ul>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="jsu-quick">
                <li><a href="https://wa.link/5u99yq" target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />Business enquiries<ArrowRight size={15} /></a></li>
                <li><a href="https://wa.link/72it3c" target="_blank" rel="noopener noreferrer"><Headset size={17} />Customer support<ArrowRight size={15} /></a></li>
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
