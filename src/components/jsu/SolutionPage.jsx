import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, FileCheck2 } from "lucide-react";
import {
  DELIVERY_STEPS, FEATURE_NOTES, IOT, IOT_PRODUCTS, ISO, SOLUTION_ORDER, SOLUTION_PAGES, faqFor,
} from "./data";
import { Btn } from "./shared";
import { useJsu } from "./context";
import { Hub, Logo } from "./SolutionModal";

const jump = (id) => (event) => {
  event.preventDefault();
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 150, behavior: "smooth" });
};

function CapabilityCards({ items, note = true }) {
  return (
    <div className="jsu-sp-cards">
      {items.map((item, i) => (
        <article key={item}>
          <span className="jsu-sp-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{item}</h3>
          {note && FEATURE_NOTES[item] && <p>{FEATURE_NOTES[item]}</p>}
        </article>
      ))}
    </div>
  );
}

function Chips({ items }) {
  return <ul className="jsu-sp-chips">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

/* IoT Connectivity: two products, each with its own full section */
function IotProducts({ onConsult }) {
  return (
    <>
      <section className="jsu-sp-section" id="certifications">
        <div className="jsu-shell">
          <div className="jsu-sp-head">
            <p className="jsu-eyebrow">TRUSTED STANDARDS</p>
            <h2>{IOT.isoTitle}</h2>
            <p>{IOT.isoText}</p>
          </div>
          <ul className="jsu-sp-iso">
            {ISO.map(([code, name]) => <li key={code}><FileCheck2 size={22} strokeWidth={1.5} /><b>{code}</b><span>{name}</span></li>)}
          </ul>
        </div>
      </section>

      {["edt", "nlink"].map((key, index) => {
        const p = IOT_PRODUCTS[key];
        return (
          <section className={`jsu-sp-section jsu-sp-product tone-${p.tone} ${index % 2 ? "is-alt" : ""}`} id={key} key={key}>
            <div className="jsu-shell jsu-sp-product-grid">
              <div className="jsu-sp-product-copy">
                <Logo className="jsu-sp-product-logo" src={p.logo} name={p.name} />
                <span className="jsu-badge">{p.badge}</span>
                <h2>{p.kind}</h2>
                <p className="jsu-sp-tagline">{p.tagline}</p>
                <p>{p.headline}</p>
                <ul className="jsu-sp-ticks">
                  {p.features.map((f) => <li key={f}><Check size={14} strokeWidth={3} /><span><b>{f}</b>{FEATURE_NOTES[f] && <small>{FEATURE_NOTES[f]}</small>}</span></li>)}
                </ul>
                <p className="jsu-sp-ideal"><b>Ideal for</b> {p.ideal}</p>
                <Btn variant="primary" onClick={() => onConsult(`IoT Connectivity / ${p.name}`, p.topic)}>Schedule Consultation</Btn>
              </div>
              <div className="jsu-sp-product-visual"><Hub hub={p.hub} tone={p.tone} /></div>
            </div>
          </section>
        );
      })}

      <section className="jsu-sp-section jsu-sp-soft">
        <div className="jsu-shell jsu-sp-collab">
          <h2>{IOT.collabTitle}</h2>
          <ul className="jsu-sp-ticks jsu-sp-ticks-cols">
            {IOT.collab.map((c) => <li key={c}><Check size={14} strokeWidth={3} /><span><b>{c}</b></span></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}

export default function SolutionPage({ id }) {
  const { openForm } = useJsu();
  const page = SOLUTION_PAGES[id];
  const Icon = page.icon;
  const consult = (source = page.title, topic = page.topic) => openForm("consultation", { topics: [topic], source: `${source} (page)` });
  const isIot = id === "iot";
  const nav = [
    isIot ? ["Standards", "certifications"] : page.groups ? ["Devices", "capabilities"] : ["Capabilities", "capabilities"],
    ...(isIot ? [["ED&T Connect", "edt"], ["N-Link", "nlink"]] : []),
    ["Ideal for", "ideal"], ["How we deliver", "process"], ["FAQ", "faq"],
  ];
  const others = SOLUTION_ORDER.filter((k) => k !== id).map((k) => SOLUTION_PAGES[k]);

  return (
    <div className={`jsu-sp theme-${page.theme}`}>
      {/* ─── Hero ─── */}
      <section className="jsu-sp-hero">
        <div className="jsu-shell jsu-sp-hero-grid">
          <div className="jsu-sp-hero-copy">
            <nav className="jsu-sp-crumbs" aria-label="Breadcrumb"><Link to="/solutions">Solutions</Link><span aria-hidden="true">/</span><span>{page.title}</span></nav>
            <p className="jsu-sp-eyebrow"><Icon size={16} strokeWidth={1.8} />{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="jsu-sp-tagline">{page.tagline}</p>
            <p className="jsu-sp-headline">{page.headline}</p>
            <div className="jsu-actions">
              <Btn variant="white" onClick={() => consult()}>{page.ctaLabel || "Schedule a Consultation"}</Btn>
              <Btn variant="ghost" to="/solutions">All Solutions</Btn>
            </div>
          </div>
          <div className="jsu-sp-hero-visual"><Hub hub={page.hub} tone="blue" /></div>
        </div>
      </section>

      {/* ─── Sub navigation ─── */}
      <nav className="jsu-sp-subnav" aria-label="On this page">
        <div className="jsu-shell">{nav.map(([label, target]) => <a key={target} href={`#${target}`} onClick={jump(target)}>{label}</a>)}</div>
      </nav>

      {/* ─── Main body ─── */}
      {isIot ? <IotProducts onConsult={consult} /> : (
        <section className="jsu-sp-section" id="capabilities">
          <div className="jsu-shell">
            {page.groups ? (
              <>
                <div className="jsu-sp-head"><p className="jsu-eyebrow">OUR DEVICE SOLUTIONS</p><h2>Connected hardware for real-world operations</h2></div>
                <div className="jsu-sp-groups">
                  {page.groups.map(({ icon: GIcon, tone, title, text, items }) => (
                    <article key={title} className={`tone-${tone}`}>
                      <span className="jsu-sp-group-icon"><GIcon size={26} strokeWidth={1.5} /></span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <ul>{items.map((i) => <li key={i}><Check size={13} strokeWidth={3} /><span><b>{i}</b>{FEATURE_NOTES[i] && <small>{FEATURE_NOTES[i]}</small>}</span></li>)}</ul>
                    </article>
                  ))}
                </div>
                <div className="jsu-sp-why">
                  <h3>Why Choose JSU</h3>
                  <div>{page.why.map(({ icon: WIcon, title, text }) => (
                    <article key={title}><span><WIcon size={22} strokeWidth={1.6} /></span><b>{title}</b><p>{text}</p></article>
                  ))}</div>
                </div>
              </>
            ) : (
              <>
                <div className="jsu-sp-head"><p className="jsu-eyebrow">{page.name ? `${page.name.toUpperCase()} CAPABILITIES` : "CAPABILITIES"}</p><h2>Key capabilities</h2></div>
                <CapabilityCards items={page.capabilities} />
              </>
            )}

            {page.panels && (
              <div className="jsu-sp-panels">
                {page.panels.map(({ icon: PIcon, title, tone, items }) => (
                  <div key={title} className={`tone-${tone}`}>
                    <h3><PIcon size={22} strokeWidth={1.6} />{title}</h3>
                    <ul>{items.map((i) => <li key={i}><Check size={13} strokeWidth={3} />{i}</li>)}</ul>
                  </div>
                ))}
              </div>
            )}

            {page.collab && (
              <div className="jsu-sp-partners">
                <b>{page.collab.title}</b>
                <span>{page.collab.partners.map((p, i) => (
                  <span key={p.name} className="jsu-collab-item">{i > 0 && <em>&amp;</em>}<Logo src={p.logo} name={p.name} className="jsu-collab-logo" /></span>
                ))}</span>
                <p>{page.collab.text}</p>
              </div>
            )}

            {page.strip && <div className="jsu-sp-strip"><b>{page.strip.title}</b><span>{page.strip.text}</span></div>}
          </div>
        </section>
      )}

      {/* ─── Ideal for ─── */}
      <section className="jsu-sp-section jsu-sp-soft" id="ideal">
        <div className="jsu-shell">
          <div className="jsu-sp-head"><p className="jsu-eyebrow">WHO IT IS FOR</p><h2>Ideal for</h2></div>
          <Chips items={page.ideal} />
        </div>
      </section>

      {/* ─── Delivery ─── */}
      <section className="jsu-sp-section" id="process">
        <div className="jsu-shell">
          <div className="jsu-sp-head"><p className="jsu-eyebrow">HOW WE DELIVER</p><h2>From first conversation to long-term partnership</h2></div>
          <ol className="jsu-sp-steps">
            {DELIVERY_STEPS.map(([title, text], i) => <li key={title}><b>{i + 1}</b><h3>{title}</h3><p>{text}</p></li>)}
          </ol>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="jsu-sp-section jsu-sp-soft" id="faq">
        <div className="jsu-shell jsu-sp-faq">
          <div className="jsu-sp-head"><p className="jsu-eyebrow">QUESTIONS</p><h2>Frequently asked</h2></div>
          <div>
            {faqFor(page.title).map(([q, a]) => (
              <details key={q}><summary>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Other solutions ─── */}
      <section className="jsu-sp-section" id="more">
        <div className="jsu-shell">
          <div className="jsu-sp-head"><p className="jsu-eyebrow">EXPLORE MORE</p><h2>Other JSU solutions</h2></div>
          <div className="jsu-sp-related">
            {others.map(({ id: oid, icon: OIcon, title, tagline }) => (
              <Link to={`/solutions/${oid}`} key={oid} className="jsu-sp-related-card">
                <OIcon size={28} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{tagline}</p>
                <span className="jsu-card-cta">Learn more <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
