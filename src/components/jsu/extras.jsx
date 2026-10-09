import { Link } from "react-router-dom";
import { ArrowRight, Check, FileCheck2, Mail, MapPin, Phone } from "lucide-react";
import {
  COMPANY_PROFILE, COMPARE, CONTACT, telLink, DELIVERY_STEPS, ECOSYSTEM, INDUSTRIES, ISO, PARTNER_MODEL, SOLUTION_ORDER, SOLUTION_PAGES, STACK,
} from "./data";
import { Btn } from "./shared";
import { useJsu } from "./context";
import { Logo } from "./SolutionModal";

/* Shared heading: pill eyebrow + title + optional lead (about / solutions pages) */
function Head({ eyebrow, title, text, center = false }) {
  return (
    <div className={`jsu-x-head jsu-reveal ${center ? "is-center" : ""}`}>
      <span className="jsu-pill">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

/* Double-bezel card: machined outer tray + inner plate */
function Bezel({ children, className = "", style }) {
  return <div className={`jsu-bezel jsu-reveal ${className}`} style={style}><div className="jsu-bezel-in">{children}</div></div>;
}

/* ───────── About Us ───────── */
export function CompanyProfile() {
  const { openForm } = useJsu();
  return (
    <section className="jsu-x jsu-x-profile">
      <div className="jsu-shell jsu-x-profile-grid">
        <Head eyebrow={COMPANY_PROFILE.eyebrow} title={COMPANY_PROFILE.title} text="The essentials about who we are, what we do and how to reach us." />
        <Bezel>
          <dl className="jsu-x-dl">
            {COMPANY_PROFILE.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <div className="jsu-x-dl-cta">
            <Btn variant="primary" onClick={() => openForm("consultation", { source: "About Us / Company profile" })}>Schedule a Consultation</Btn>
          </div>
        </Bezel>
      </div>
    </section>
  );
}

export function PartnershipModel() {
  return (
    <section className="jsu-x jsu-x-soft">
      <div className="jsu-shell">
        <Head eyebrow={PARTNER_MODEL.eyebrow} title={PARTNER_MODEL.title} text={PARTNER_MODEL.text} />
        <div className="jsu-x-flow">
          {PARTNER_MODEL.nodes.map(({ icon: Icon, title, text, main }, i) => (
            <Bezel key={title} className={main ? "is-main" : ""} style={{ "--i": i }}>
              <span className="jsu-x-icon"><Icon size={24} strokeWidth={1.4} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Bezel>
          ))}
        </div>
        <ul className="jsu-x-points jsu-reveal">
          {PARTNER_MODEL.points.map((p) => <li key={p}><Check size={14} strokeWidth={3} />{p}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="jsu-x">
      <div className="jsu-shell">
        <Head eyebrow="WHO WE SERVE" title="Industries we work with" text="The same connected stack, applied to the realities of each sector." />
        <div className="jsu-x-industries">
          {INDUSTRIES.map(({ id, icon: Icon, title, text, solutions }, i) => (
            <Bezel key={id} style={{ "--i": i }}>
              <span className="jsu-x-icon"><Icon size={24} strokeWidth={1.4} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="jsu-x-tags">
                {solutions.map((s) => <Link key={s} to={`/solutions/${s}`}>{SOLUTION_PAGES[s].title}</Link>)}
              </div>
            </Bezel>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EcosystemSection() {
  return (
    <section className="jsu-x jsu-x-soft">
      <div className="jsu-shell">
        <Head eyebrow={ECOSYSTEM.eyebrow} title={ECOSYSTEM.title} />
        <div className="jsu-x-brands">
          {ECOSYSTEM.items.map(({ name, logo, role, to }, i) => (
            <Link key={name} to={to} className="jsu-x-brand jsu-reveal" style={{ "--i": i }}>
              <div><Logo src={logo} name={name} /></div>
              <b>{name}</b>
              <span>{role}</span>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
        <p className="jsu-x-collab-title jsu-reveal">In collaboration with</p>
        <div className="jsu-x-collab jsu-reveal">
          {ECOSYSTEM.collaborations.map(({ name, logo, role }) => (
            <div key={name}><Logo src={logo} name={name} /><span>{role}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StandardsSection() {
  return (
    <section className="jsu-x">
      <div className="jsu-shell jsu-x-standards">
        <Head eyebrow="TRUSTED STANDARDS" title="International standards & certifications" text="Our commitment to quality, security, sustainability and operational resilience." />
        <ul className="jsu-x-iso">
          {ISO.map(([code, name], i) => (
            <li key={code} className="jsu-reveal" style={{ "--i": i }}><FileCheck2 size={22} strokeWidth={1.4} /><b>{code}</b><span>{name}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function VisitSection() {
  const { openForm } = useJsu();
  return (
    <section className="jsu-x jsu-x-soft">
      <div className="jsu-shell jsu-x-visit">
        <Head eyebrow="LET'S MEET" title="Talk to the JSU team" text="Tell us about your operation and we will propose the right starting point." />
        <Bezel>
          <ul className="jsu-x-contact">
            <li><MapPin size={20} strokeWidth={1.5} /><span>{CONTACT.address.map((l) => <span key={l}>{l}<br /></span>)}</span></li>
            <li><Mail size={20} strokeWidth={1.5} /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><Phone size={20} strokeWidth={1.5} /><a href={telLink(CONTACT.phone)}>{CONTACT.phone}</a></li>
          </ul>
          <div className="jsu-x-dl-cta">
            <Btn variant="primary" onClick={() => openForm("consultation", { source: "About Us / Visit" })}>Schedule a Consultation</Btn>
          </div>
        </Bezel>
      </div>
    </section>
  );
}

/* ───────── Solutions ───────── */
export function StackSection() {
  return (
    <section className="jsu-x">
      <div className="jsu-shell">
        <Head eyebrow={STACK.eyebrow} title={STACK.title} text={STACK.text} />
        <ol className="jsu-x-stack">
          {STACK.layers.map(({ id, icon: Icon, tone, title, tag, text, to }, i) => (
            <li key={id} className={`jsu-reveal tone-${tone}`} style={{ "--i": i }}>
              <Link to={to}>
                <span className="jsu-x-step">{String(i + 1).padStart(2, "0")}</span>
                <span className="jsu-x-icon"><Icon size={24} strokeWidth={1.4} /></span>
                <div><small>{tag}</small><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight size={18} />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CompareSection() {
  return (
    <section className="jsu-x jsu-x-soft">
      <div className="jsu-shell">
        <Head eyebrow={COMPARE.eyebrow} title={COMPARE.title} />
        <Bezel className="jsu-x-table-wrap">
          <table className="jsu-x-table">
            <thead><tr>{COMPARE.columns.map((c) => <th key={c} scope="col">{c}</th>)}<th scope="col"><span className="jsu-sr">Details</span></th></tr></thead>
            <tbody>
              {COMPARE.rows.map(({ id, title, does, with: w, users }) => (
                <tr key={id}>
                  <th scope="row">{title}</th>
                  <td>{does}</td>
                  <td>{w}</td>
                  <td>{users}</td>
                  <td><Link className="jsu-link" to={`/solutions/${id}`}>Details <ArrowRight size={14} /></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Bezel>
      </div>
    </section>
  );
}

export function IndustryMatrix() {
  return (
    <section className="jsu-x">
      <div className="jsu-shell">
        <Head eyebrow="BY INDUSTRY" title="Which solutions fit your sector" text="A dot marks the solutions most often used in each industry." />
        <Bezel className="jsu-x-table-wrap">
          <table className="jsu-x-table jsu-x-matrix">
            <thead>
              <tr>
                <th scope="col">Industry</th>
                {SOLUTION_ORDER.map((id) => <th key={id} scope="col">{SOLUTION_PAGES[id].title}</th>)}
              </tr>
            </thead>
            <tbody>
              {INDUSTRIES.map(({ id, title, solutions }) => (
                <tr key={id}>
                  <th scope="row">{title}</th>
                  {SOLUTION_ORDER.map((s) => (
                    <td key={s}>{solutions.includes(s) ? <span className="jsu-x-dot"><span className="jsu-sr">Yes</span></span> : <span className="jsu-sr">No</span>}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Bezel>
      </div>
    </section>
  );
}

export function EngageSection() {
  const { openForm } = useJsu();
  return (
    <section className="jsu-x jsu-x-soft">
      <div className="jsu-shell">
        <Head eyebrow="HOW WE ENGAGE" title="From first conversation to long-term partnership" />
        <ol className="jsu-x-engage">
          {DELIVERY_STEPS.map(([title, text], i) => (
            <li key={title} className="jsu-reveal" style={{ "--i": i }}><b>{i + 1}</b><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
        <div className="jsu-x-engage-cta jsu-reveal">
          <Btn variant="primary" onClick={() => openForm("consultation", { source: "Solutions / How we engage" })}>Schedule a Consultation</Btn>
        </div>
      </div>
    </section>
  );
}
