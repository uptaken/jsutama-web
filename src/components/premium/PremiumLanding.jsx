import { useRef, useState } from "react";
import { Pause, Play, ArrowUpRight, ArrowRight, Radio, Truck, BrainCircuit, Code2, Users, ShoppingCart, Menu, Mail, Phone, MessageCircle, Layers, ShieldCheck, Clock3, Building2, Cpu, ChartNoAxesCombined, Handshake, Target, Lightbulb, Rocket, Award, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import "./premium.css";
import { useReveal } from "./useReveal";

const solutions = [
  [Radio, "IoT Connectivity", "Reliable connectivity for mission-critical operations."],
  [Truck, "Fleet Intelligence", "Real-time visibility and control for your fleet operations."],
  [BrainCircuit, "AI Automation", "Intelligent automation to drive efficiency and better decisions."],
  [Code2, "Custom Software", "Tailored software solutions for your unique needs."],
  [Users, "Consulting Solutions", "Strategy, advisory, and implementation that drive results."],
  [ShoppingCart, "Trading Solutions", "Trusted technology and devices to power your operations."],
];
const dna = [
  [Cpu, "Technology", "Smart and innovative technologies to solve real-world challenges and unlock new possibilities."],
  [Users, "People", "Talented, passionate, and collaborative people who drive ideas into actions and create value."],
  [ChartNoAxesCombined, "Business", "We align technology with business strategy to improve performance and achieve long-term growth."],
  [Handshake, "Partner", "Strong partnerships expand our capabilities and ensure end-to-end, reliable solutions."],
  [Target, "Impact", "Creating measurable impact that drives growth, improves lives, and builds a better future."],
];
const steps = [
  ["Discovery", "We listen, learn, and understand your challenges and goals."],
  ["Design", "We design the right strategy and solution tailored to your business needs."],
  ["Implementation", "We deliver and integrate solutions with high quality and precision."],
  ["Long-Term Partnership", "We grow together, continuously optimizing for long-term success and impact."],
];
const metrics = [[Lightbulb,"20+","Years of Experience"],[Rocket,"400+","Enterprise Clients"],[Users,"50+","Industry Experts"],[Award,"5+","Technology Domains"],[Wrench,"1000+","Projects Completed"]];
const links = [["Home", "#top"], ["Solutions", "#services"], ["Our Approach", "#approach"], ["Insights", "/blog"], ["About Us", "#about"]];
function Action({ href, children, secondary = false, green = false }) {
  return <Button asChild className={`jsu-button ${secondary ? "jsu-button-secondary" : ""} ${green ? "jsu-button-green" : ""}`}><a href={href}>{children}<ArrowRight size={16} aria-hidden="true" /></a></Button>;
}
function Brand({ white = false }) {
  return <span className={`jsu-brand ${white ? "jsu-brand-white" : ""}`}><img src="/jsulogo.png" alt="JSU — Jakarta Soerja Utama" width="140" height="50"/><span>Impacting<br/><b>Possibilities</b></span></span>;
}
export default function PremiumLanding({ c }) {
  const revealRoot = useReveal();
  const [logosPaused, setLogosPaused] = useState(false);
  const mobileTarget = useRef(null);
  const finishMobileNavigation = (event) => {
    const id = mobileTarget.current;
    if (!id) return;
    mobileTarget.current = null;
    event.preventDefault();
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      target?.focus({ preventScroll: true });
    });
  };
  const email = c.contact?.email || "info@jsutama.com";
  const phone = c.contact?.phone || "+62 21 2788 6050";
  return <div className="jsu-site" id="top" ref={revealRoot}>
    <a className="jsu-skip" href="#main-content">Skip to content</a>
    <header className="jsu-header jsu-shell"><a href="/" aria-label="Jakarta Soerja Utama home"><Brand/></a><nav className="jsu-desktop-nav" aria-label="Primary navigation">{links.map(([label, href], i) => <a className={i === 0 ? "is-active" : ""} key={href} href={href}>{label}</a>)}</nav><div className="jsu-header-actions"><a className="jsu-nav-contact" href="#contact">Contact Us</a><Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="jsu-menu" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent className="jsu-mobile-panel" onCloseAutoFocus={finishMobileNavigation}><SheetTitle>Explore JSU</SheetTitle><SheetDescription>Impacting Possibilities</SheetDescription><nav aria-label="Mobile navigation">{[...links, ["Contact Us", "#contact"]].map(([label, href]) => <SheetClose asChild key={href}><a href={href} onClick={() => { mobileTarget.current = href.startsWith("#") ? href.slice(1) : null; }}>{label}<ArrowUpRight size={18} /></a></SheetClose>)}</nav></SheetContent></Sheet></div></header>
    <main id="main-content">
      <section className="jsu-hero" aria-labelledby="hero-title">
        <div className="jsu-hero-art" role="img" aria-label="JSU PrimeEyes dashboard on a laptop and phone, connected to IoT, fleet intelligence, AI automation, and real-time monitoring. High-resolution reconstruction based on the supplied brand reference." />
        <div className="jsu-shell jsu-hero-inner"><div className="jsu-hero-copy"><h1 id="hero-title">Connecting <br/>Technology.<br/>Creating <em>Impact.</em></h1><p className="jsu-lead">We empower enterprises through AI, IoT Connectivity, Fleet Intelligence, and Digital Solutions to drive sustainable growth and lasting impact.</p><div className="jsu-actions"><Action href="#services">Explore Solutions</Action><Action href="#contact" secondary>Schedule Consultation</Action></div></div></div>
      </section>
      <div className="jsu-trust jsu-shell">{[[Layers,"1,000+","Connected Assets"],[ShieldCheck,"99.9%","Platform Availability"],[Clock3,"24/7","Support"],[Building2,"Enterprise","Ready Solutions"]].map(([Icon, value, label]) => <div key={label}><Icon strokeWidth={1.3}/><p><strong>{value}</strong><span>{label}</span></p></div>)}</div>
      <section className="jsu-section jsu-solutions" id="services" tabIndex={-1}><div className="jsu-shell jsu-solutions-layout"><div className="jsu-section-heading"><p className="jsu-eyebrow">WHAT WE DO</p><h2>One Partner.<br/>Complete <em>Solutions.</em></h2><p>We deliver end-to-end digital transformation with integrated solutions tailored to your needs.</p><Action secondary href="#about">Learn More About Us</Action></div><div className="jsu-solution-grid">{solutions.map(([Icon, title, description]) => <a className="jsu-solution" key={title} href={`mailto:${email}?subject=${encodeURIComponent(`Enquiry: ${title}`)}`}><Icon strokeWidth={1.5}/><h3>{title}</h3><p>{description}</p><ArrowUpRight className="jsu-card-arrow" size={15}/></a>)}</div></div></section>
      <section className="jsu-section jsu-dna" id="about" tabIndex={-1}><div className="jsu-shell jsu-dna-layout"><div className="jsu-section-heading"><p className="jsu-eyebrow">OUR DNA. YOUR IMPACT.</p><h2>Technology. People.<br/>Business. Partner. = Impact</h2><p>We believe real transformation happens when the right elements work together. This is the DNA of JSU — creating meaningful and sustainable impact.</p><Action href="#approach" green>Learn More</Action></div><div className="jsu-dna-grid">{dna.map(([Icon,title,description]) => <article key={title}><div className="jsu-dna-icon"><Icon size={35} strokeWidth={1.4}/></div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="jsu-problems" id="solutions-depth"><div className="jsu-shell jsu-problems-layout"><div className="jsu-iceberg" role="img" aria-label="An iceberg showing visible business problems above the surface and deeper underlying causes below"/><div className="jsu-problem-labels"><div><h3>VISIBLE PROBLEMS</h3><p>What you can see</p><ul><li>Downtime</li><li>High operational costs</li><li>Inefficient processes</li><li>Slow decision-making</li></ul></div><div><h3>HIDDEN CAUSES</h3><p>What you don’t see</p><ul><li>Disconnected data</li><li>No system integration</li><li>Multiple platforms</li><li>Lack of visibility</li><li>Poor governance</li><li>Scalability issues</li></ul></div></div><div className="jsu-section-heading"><p className="jsu-eyebrow">BEYOND WHAT YOU SEE.</p><h2>Solving the Real Problems<br/>Behind the Surface.</h2><p>Most challenges are just the tip of the iceberg. JSU helps you uncover the hidden causes and deliver integrated solutions that create lasting impact.</p><Action secondary href="#contact">Explore How We Help</Action></div></div></section>
      <section className="jsu-clients jsu-shell" aria-labelledby="client-title"><div><p className="jsu-eyebrow">EXPERIENCE THAT BUILDS TRUST</p><h2 id="client-title">Proud to Work with <br/>Amazing Organizations</h2></div><div className="jsu-logo-slider" data-paused={logosPaused}><div className="jsu-logo-window" role="region" aria-label="Customer logos" tabIndex={0}><div className="jsu-logo-track">{[0,1].map(copy => <div className="jsu-logo-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{["PLN","Samudera","Trans Semarang","Nova Tech","Powerindo","VinFast"].map((name,i) => <div className="jsu-client" key={name}><div role="img" aria-label={name} style={{"--client-index":i}}/></div>)}</div>)}</div></div><Button variant="ghost" size="icon" className="jsu-logo-toggle" onClick={() => setLogosPaused(value => !value)} aria-label={logosPaused ? "Play logo animation" : "Pause logo animation"} aria-pressed={logosPaused}>{logosPaused ? <Play size={15}/> : <Pause size={15}/>}</Button></div></section>
      <section className="jsu-metrics" aria-label="JSU experience"><div className="jsu-shell">{metrics.map(([Icon,value,label]) => <div key={label}><Icon size={29} strokeWidth={1.3}/><p><strong>{value}</strong><span>{label}</span></p></div>)}</div></section>
      <section className="jsu-section jsu-approach" id="approach" tabIndex={-1}><div className="jsu-shell jsu-approach-layout"><div className="jsu-section-heading"><p className="jsu-eyebrow">OUR APPROACH</p><h2>From Insight to <em>Impact.</em><br/>Together.</h2></div><div className="jsu-step-grid">{steps.map(([title,description], i) => <article className="jsu-step" key={title}><div className="jsu-step-number"><b>0{i+1}</b><span/><ArrowRight size={13}/></div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="jsu-contact" id="contact" tabIndex={-1}><div className="jsu-shell"><div><h2>Let’s Keep <em>Impacting Possibilities.</em></h2><p>Connect with JSU and start your transformation journey today.</p></div><Action href={`mailto:${email}`} green>Let’s Talk</Action></div></section>
    </main>
    <footer className="jsu-footer"><div className="jsu-shell"><div className="jsu-footer-top"><a href="#top" aria-label="Back to top"><Brand white/></a><p>PT Jakarta Soerja Utama<br/>Soho Collins Boulevard,<br/>Tangerang, Banten, Indonesia</p><div className="jsu-footer-contact"><a href={`mailto:${email}`}><Mail/>{email}</a><a href={`tel:${phone.replace(/[^+\d]/g, "")}`}><Phone/>{phone}</a></div><div className="jsu-footer-contact"><a href="https://wa.link/5u99yq" target="_blank" rel="noopener noreferrer"><MessageCircle/>Business enquiries</a><a href="https://wa.link/72it3c" target="_blank" rel="noopener noreferrer"><MessageCircle/>Customer support</a></div></div><div className="jsu-footer-bottom">© {new Date().getFullYear()} PT Jakarta Soerja Utama. All rights reserved.</div></div></footer>
  </div>;
}
