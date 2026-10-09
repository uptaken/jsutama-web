import { useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import {
  ABOUT_INTRO, APPROACH, CHALLENGE, CLIENTS, DNA, HERO, PHILOSOPHY, SOLUTIONS, TRUST, WHO_WE_ARE,
} from "./data";
import JsuLayout from "./JsuLayout";
import { Btn } from "./shared";
import { useJsu } from "./context";
import { Logo } from "./SolutionModal";

function Sections() {
  const { go, hrefFor, openForm, openSolution } = useJsu();
  const [logosPaused, setLogosPaused] = useState(false);
  return (
    <>
        {/* ─── Hero ─── */}
        <section className="jsu-hero" aria-labelledby="hero-title">
          <div className="jsu-shell jsu-hero-inner">
            <div className="jsu-hero-copy">
              <h1 id="hero-title">{HERO.titleLines.map((line, i) => <span key={line}>{line}{i < 2 ? <br /> : " "}</span>)}<em>{HERO.accent}</em></h1>
              <p className="jsu-lead">{HERO.lead}</p>
              <div className="jsu-actions">
                <Btn variant="primary" href={hrefFor("about")} onClick={go("about")}>About Us</Btn>
                <Btn variant="outline" href={hrefFor("services")} onClick={go("services")}>Explore Our Solutions</Btn>
              </div>
            </div>
            <div className="jsu-hero-visual">
              <img src="/brand/jsu-hero.jpg" width="1470" height="730" alt="JSU platform dashboard connecting IoT connectivity, AI automation, payment integration, fleet intelligence and real-time monitoring" fetchPriority="high" />
            </div>
          </div>
        </section>

        <div className="jsu-trust jsu-shell">
          {TRUST.map(({ icon: Icon, value, label }) => (
            <div key={value}><Icon strokeWidth={1.3} /><p><strong>{value}</strong><span>{label}</span></p></div>
          ))}
        </div>

        {/* ─── About Us: who we are → philosophy → DNA → challenge → approach ─── */}
        <section className="jsu-about" id="about" tabIndex={-1}>
          <div className="jsu-shell">
            <div className="jsu-about-hero">
              <div>
                <span className="jsu-rule" />
                <h2 className="jsu-about-title">{ABOUT_INTRO.title[0]} <em>{ABOUT_INTRO.title[1]}</em></h2>
                {ABOUT_INTRO.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
              <ul className="jsu-pillars">
                {ABOUT_INTRO.pillars.map(({ icon: Icon, lines }) => (
                  <li key={lines[0]}><span><Icon size={24} strokeWidth={1.4} /></span><b>{lines.map((l, i) => <span key={l} className={i === lines.length - 1 ? "is-green" : ""}>{l}</span>)}</b></li>
                ))}
              </ul>
            </div>

            <div className="jsu-who">
              {WHO_WE_ARE.map(({ icon: Icon, title, text }) => (
                <article key={title}><span><Icon size={22} strokeWidth={1.4} /></span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>

            <div className="jsu-about-actions">
              <Btn variant="outline" href={hrefFor("services")} onClick={go("services")}>Explore Our Solutions</Btn>
              <Btn variant="outline" onClick={() => openForm("consultation", { source: "About Us" })}>Schedule a Consultation</Btn>
            </div>
          </div>

          <div className="jsu-philosophy">
            <div className="jsu-shell">
              <h3>{PHILOSOPHY.title}</h3>
              <p>{PHILOSOPHY.intro}</p>
              <div className="jsu-equation">
                {PHILOSOPHY.equation.map(({ icon: Icon, label }, i) => (
                  <div className="jsu-equation-item" key={label[0]}>
                    {i > 0 && <b aria-hidden="true">{i === 1 ? "+" : "="}</b>}
                    <span className="jsu-eq-icon"><Icon size={30} strokeWidth={1.3} /></span>
                    <span className="jsu-eq-label">{label[0]}<br /><em>{label[1]}</em></span>
                  </div>
                ))}
              </div>
              <p className="jsu-philosophy-outro">{PHILOSOPHY.outro}</p>
            </div>
          </div>

          <div className="jsu-dna" id="dna">
            <div className="jsu-shell jsu-dna-layout">
              <div className="jsu-dna-intro">
                <p className="jsu-eyebrow">{DNA.eyebrow}</p>
                <h2>{DNA.title[0]}<br />{DNA.title[1]}</h2>
                <p>{DNA.text}</p>
              </div>
              <div className="jsu-dna-grid">
                {DNA.items.map(({ icon: Icon, title, text }) => (
                  <article key={title}><div className="jsu-dna-icon"><Icon size={30} strokeWidth={1.4} /></div><h3>{title}</h3><p>{text}</p></article>
                ))}
              </div>
            </div>
          </div>

          <div className="jsu-challenge">
            <div className="jsu-shell jsu-challenge-layout">
              <div className="jsu-challenge-copy">
                <p className="jsu-eyebrow">{CHALLENGE.eyebrow}</p>
                <h2>{CHALLENGE.title[0]}<br /><em>{CHALLENGE.title[1]}</em></h2>
                <h3>{CHALLENGE.subtitle}</h3>
                <div className="jsu-challenge-text">
                  <p>{CHALLENGE.left}</p>
                  <p>{CHALLENGE.right}</p>
                </div>
                <blockquote>
                  <span aria-hidden="true">“</span>
                  <p>{CHALLENGE.quote[0]}<b className="is-red">{CHALLENGE.quote[1]}</b>{CHALLENGE.quote[2]}</p>
                  <p>{CHALLENGE.quote2[0]}<b className="is-sky">{CHALLENGE.quote2[1]}</b>{CHALLENGE.quote2[2]}</p>
                </blockquote>
              </div>
              <div className="jsu-iceberg-board">
                <div className="jsu-causes jsu-causes-visible">
                  <h4>Visible Problems</h4>
                  <ul>{CHALLENGE.visible.map(({ title, text }) => <li key={title}><b>{title}</b><span>{text}</span></li>)}</ul>
                </div>
                <svg className="jsu-iceberg-art" viewBox="0 0 320 300" aria-hidden="true" focusable="false">
                  <defs>
                    <linearGradient id="ice-top" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#bfe3ff" /></linearGradient>
                    <linearGradient id="ice-deep" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8fd0ff" /><stop offset="1" stopColor="#0a3d91" /></linearGradient>
                  </defs>
                  <rect y="110" width="320" height="190" fill="#0b2a6b" opacity=".35" />
                  <path d="M110 112 L148 46 L168 70 L196 18 L234 112 Z" fill="url(#ice-top)" />
                  <path d="M70 112 L250 112 L226 176 L206 262 L160 292 L118 250 L96 170 Z" fill="url(#ice-deep)" />
                  <path d="M0 112 H320" stroke="#7fb9ee" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
                <div className="jsu-causes jsu-causes-hidden">
                  <h4>Hidden Causes</h4>
                  <ul>{CHALLENGE.hidden.map(({ title, text }) => <li key={title}><b>{title}</b><span>{text}</span></li>)}</ul>
                </div>
              </div>
            </div>
          </div>

          <div className="jsu-approach" id="approach" tabIndex={-1}>
            <div className="jsu-shell jsu-approach-layout">
              <div className="jsu-approach-heading">
                <p className="jsu-eyebrow">{APPROACH.eyebrow}</p>
                <h2>From Insight to <em>Impact.</em><br />Together.</h2>
              </div>
              <ol className="jsu-steps">
                {APPROACH.steps.map(([title, text], i) => (
                  <li key={title}><div className="jsu-step-number"><b>0{i + 1}</b><span /><ArrowRight size={13} /></div><h3>{title}</h3><p>{text}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Solutions ─── */}
        <section className="jsu-solutions" id="services" tabIndex={-1}>
          <div className="jsu-shell jsu-solutions-layout">
            <div className="jsu-solutions-intro">
              <p className="jsu-eyebrow">WHAT WE DO</p>
              <h2>One Partner.<br />Complete <em>Solutions.</em></h2>
              <p>We deliver end-to-end digital transformation with integrated solutions tailored to your needs.</p>
              <Btn variant="outline" onClick={() => openForm("consultation", { source: "Solutions" })}>Schedule a Consultation</Btn>
            </div>
            <div className="jsu-solution-grid">
              {SOLUTIONS.map(({ id, icon: Icon, title, text, cta }) => (
                <button type="button" className="jsu-solution" key={id} onClick={() => openSolution(id)} aria-haspopup="dialog">
                  <Icon size={34} strokeWidth={1.5} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="jsu-card-cta">{cta} <ArrowRight size={14} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Clients ─── */}
        <section className="jsu-clients jsu-shell" aria-labelledby="client-title">
          <div>
            <p className="jsu-eyebrow">EXPERIENCE THAT BUILDS TRUST</p>
            <h2 id="client-title">Proud to Work with <br />Amazing Organizations</h2>
          </div>
          <div className="jsu-logo-slider" data-paused={logosPaused}>
            <div className="jsu-logo-window" role="region" aria-label="Customer logos" tabIndex={0}>
              <div className="jsu-logo-track">
                {[0, 1].map((copy) => (
                  <div className="jsu-logo-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                    {CLIENTS.map(({ name, logo }) => <div className="jsu-client" key={name}><Logo src={logo} name={name} /></div>)}
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="jsu-logo-toggle" onClick={() => setLogosPaused((v) => !v)} aria-label={logosPaused ? "Play logo animation" : "Pause logo animation"} aria-pressed={logosPaused}>
              {logosPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </div>
        </section>

        {/* ─── Contact call-to-action ─── */}
        <section className="jsu-contact" id="contact" tabIndex={-1}>
          <div className="jsu-shell">
            <div>
              <h2>Let’s Keep <em>Impacting Possibilities.</em></h2>
              <p>Connect with JSU and start your transformation journey today.</p>
            </div>
            <Btn variant="green" onClick={() => openForm("consultation", { source: "Contact" })}>Let’s Talk</Btn>
          </div>
        </section>
    </>
  );
}

export default function JsuLanding({ c = {} }) {
  return <JsuLayout home c={c}><Sections /></JsuLayout>;
}
