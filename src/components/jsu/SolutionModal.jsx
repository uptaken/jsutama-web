import { useState } from "react";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, Check, FileCheck2, X } from "lucide-react";
import {
  AI, DEVICES, FLEET, IOT, IOT_PRODUCTS, ISO,
} from "./data";

/* An <img> that degrades to a text wordmark when the logo file is not uploaded yet. */
function LogoImage({ src, name, className }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <span className={`jsu-wordmark ${className}`}>{name}</span>;
  return <img className={className} src={src} alt={name} onError={() => setFailed(true)} />;
}
export function Logo({ src, name, className = "" }) {
  return <LogoImage key={src} src={src} name={name} className={className} />;
}

/* Hub-and-spoke diagram: logo in the middle, capabilities around it. */
export function Hub({ hub, tone }) {
  const n = hub.nodes.length;
  const pos = (i) => {
    const angle = (-90 + (i * 360) / n) * (Math.PI / 180);
    return [50 + 38 * Math.cos(angle), 50 + 38 * Math.sin(angle)];
  };
  return (
    <div className={`jsu-hub tone-${tone}`} role="img" aria-label={`${hub.center} ecosystem: ${hub.nodes.map((x) => x.label).join(", ")}`}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="38" className="jsu-hub-ring" />
        {hub.nodes.map((_, i) => {
          const [x, y] = pos(i);
          return <line key={i} x1="50" y1="50" x2={x} y2={y} />;
        })}
      </svg>
      {hub.nodes.map(({ icon: Icon, label, sub }, i) => {
        const [x, y] = pos(i);
        return (
          <div className="jsu-hub-node" key={label} style={{ left: `${x}%`, top: `${y}%` }}>
            <span><Icon size={20} strokeWidth={1.6} /></span>
            <b>{label}</b>
            {sub && <small>{sub}</small>}
          </div>
        );
      })}
      <div className="jsu-hub-center"><Logo src={hub.logo} name={hub.center} /></div>
    </div>
  );
}

function Features({ title = "Key Features", items, ideal, IdealIcon }) {
  return (
    <>
      <h3 className="jsu-modal-h">{title}</h3>
      <ul className="jsu-feature-list">
        {items.map((item) => <li key={item}><Check size={13} strokeWidth={3} />{item}</li>)}
      </ul>
      <h3 className="jsu-modal-h">Ideal For</h3>
      <p className="jsu-ideal"><IdealIcon size={22} strokeWidth={1.5} />{ideal}</p>
    </>
  );
}

/* Product / solution detail with copy on the left and the diagram on the right. */
function Detail({ product, badge, tone, cta, onConsult }) {
  return (
    <div className={`jsu-detail tone-${tone}`}>
      <div className="jsu-detail-copy">
        <Logo className="jsu-detail-logo" src={product.logo} name={product.name} />
        <div className="jsu-badges">
          {(badge || []).map((b) => <span className="jsu-badge" key={b}>{b}</span>)}
        </div>
        <p className="jsu-tagline">{product.tagline}</p>
        <p className="jsu-headline">{product.headline}</p>
        <Features title={product.featuresTitle} items={product.features} ideal={product.ideal} IdealIcon={product.idealIcon} />
      </div>
      <Hub hub={product.hub} tone={tone} />
      {product.collabPartners && (
        <div className="jsu-collab">
          <b>{product.collabTitle}</b>
          <span className="jsu-collab-logos">
            {product.collabPartners.map((p, i) => (
              <span key={p.name} className="jsu-collab-item">
                {i > 0 && <em>&amp;</em>}
                <Logo src={p.logo} name={p.name} className="jsu-collab-logo" />
              </span>
            ))}
          </span>
          <p>{product.collabText}</p>
        </div>
      )}
      {product.panels && (
        <div className="jsu-panels">
          {product.panels.map(({ icon: Icon, title, tone: t, items }) => (
            <div key={title} className={`jsu-panel tone-${t}`}>
              <h4><Icon size={18} strokeWidth={1.7} />{title}</h4>
              <ul>{items.map((i) => <li key={i}><Check size={12} strokeWidth={3} />{i}</li>)}</ul>
            </div>
          ))}
        </div>
      )}
      {product.stripTitle && (
        <div className="jsu-strip"><b>{product.stripTitle}</b><span>{product.stripText}</span></div>
      )}
      <button type="button" className="jsu-btn jsu-btn-primary jsu-btn-block jsu-detail-cta" onClick={onConsult}>
        {cta || "Schedule a Consultation"} <ArrowRight size={16} />
      </button>
    </div>
  );
}

function IotMain({ onOpen }) {
  return (
    <div className="jsu-iot">
      <div className="jsu-modal-head">
        <h2>{IOT.title}</h2>
        <p>{IOT.subtitle}</p>
      </div>
      <section className="jsu-iso">
        <h3><FileCheck2 size={18} strokeWidth={1.6} />{IOT.isoTitle}</h3>
        <p>{IOT.isoText}</p>
        <ul>{ISO.map(([code, name]) => <li key={code}><FileCheck2 size={15} strokeWidth={1.6} /><span><b>{code}</b>{name}</span></li>)}</ul>
      </section>
      <div className="jsu-product-grid">
        {Object.values(IOT_PRODUCTS).map((p) => (
          <article key={p.id} className={`jsu-product tone-${p.tone}`}>
            <button type="button" className="jsu-product-logo" onClick={() => onOpen(p.id)} aria-label={`Open ${p.name}`}>
              <Logo src={p.logo} name={p.name} />
            </button>
            <span className="jsu-badge">{p.badge}</span>
            <h3>{p.kind}</h3>
            <p>{p.blurb}</p>
            <button type="button" className="jsu-link" onClick={() => onOpen(p.id)}>{p.cta} <ArrowRight size={14} /></button>
          </article>
        ))}
      </div>
      <section className="jsu-iot-collab">
        <h3>{IOT.collabTitle}</h3>
        <ul>{IOT.collab.map((c) => <li key={c}><Check size={13} strokeWidth={3} />{c}</li>)}</ul>
      </section>
    </div>
  );
}

function DevicesDetail({ onConsult }) {
  return (
    <div className="jsu-devices">
      <div className="jsu-devices-head">
        <h2>{DEVICES.title}</h2>
        <p className="jsu-tagline">{DEVICES.tagline}</p>
        <p className="jsu-headline">{DEVICES.headline}</p>
      </div>
      <h3 className="jsu-modal-h">{DEVICES.groupsTitle}</h3>
      <div className="jsu-device-grid">
        {DEVICES.groups.map(({ icon: Icon, tone, title, text, items }) => (
          <article key={title} className={`jsu-device tone-${tone}`}>
            <h4><Icon size={18} strokeWidth={1.7} />{title}</h4>
            <p>{text}</p>
            <ul>{items.map((i) => <li key={i}><Check size={12} strokeWidth={3} />{i}</li>)}</ul>
          </article>
        ))}
      </div>
      <h3 className="jsu-modal-h">{DEVICES.whyTitle}</h3>
      <div className="jsu-why-grid">
        {DEVICES.why.map(({ icon: Icon, title, text }) => (
          <div key={title}><span><Icon size={20} strokeWidth={1.7} /></span><b>{title}</b><p>{text}</p></div>
        ))}
      </div>
      <div className="jsu-strip"><b>{DEVICES.stripTitle}</b><span>{DEVICES.stripText}</span></div>
      <button type="button" className="jsu-btn jsu-btn-primary jsu-btn-block" onClick={onConsult}>
        Schedule a Consultation <ArrowRight size={16} />
      </button>
    </div>
  );
}

const TITLES = { iot: "IoT Connectivity", fleet: "Fleet Intelligence", ai: "AI & Automation", devices: "Smart Devices" };

/**
 * `solution` is one of iot | fleet | ai | devices (or null when closed).
 * IoT Connectivity has a second level: the ED&T Connect and N-Link product pages.
 */
function SolutionBody({ solution, onClose, onConsult }) {
  const [view, setView] = useState("main");
  const product = solution === "iot" && view !== "main" ? IOT_PRODUCTS[view] : null;
  const consult = (topic, source) => onConsult({ topics: topic ? [topic] : [], source });

  let body = null;
  if (solution === "iot" && !product) body = <IotMain onOpen={setView} />;
  else if (product) body = <Detail product={product} badge={[product.kind]} tone={product.tone} onConsult={() => consult(product.topic, `IoT Connectivity / ${product.name}`)} />;
  else if (solution === "fleet") body = <Detail product={FLEET} badge={[FLEET.badge]} tone={FLEET.tone} onConsult={() => consult(FLEET.topic, "Fleet Intelligence")} cta="Schedule a Consultation" />;
  else if (solution === "ai") body = <Detail product={AI} badge={AI.badges} tone={AI.tone} onConsult={() => consult(AI.topic, "AI & Automation")} cta={AI.ctaLabel} />;
  else if (solution === "devices") body = <DevicesDetail onConsult={() => consult(DEVICES.topic, "Smart Devices")} />;

  return (
    <Dialog.Content className={`jsu-site jsu-modal jsu-solution-modal tone-${product ? product.tone : "blue"}`} aria-describedby={undefined}>
      <div className="jsu-modal-bar">
        <button type="button" className="jsu-back" onClick={() => (product ? setView("main") : onClose())}>
          <ArrowLeft size={16} /> {product ? "Back to IoT Connectivity" : "Back to Our Solutions"}
        </button>
        <div className="jsu-modal-bar-right">
          <Link className="jsu-fullpage" to={`/solutions/${solution}`} onClick={onClose}>View full page <ArrowRight size={14} /></Link>
          <Dialog.Close className="jsu-modal-close-inline" aria-label="Close"><X size={18} /></Dialog.Close>
        </div>
      </div>
      <Dialog.Title className="jsu-sr">{product ? product.name : TITLES[solution] || "Solution"}</Dialog.Title>
      <div className="jsu-modal-body">{body}</div>
    </Dialog.Content>
  );
}

/**
 * `solution` is one of iot | fleet | ai | devices (or null when closed).
 * IoT Connectivity has a second level: the ED&T Connect and N-Link product pages.
 * The body is mounted only while open, so it always starts on the first page.
 */
export default function SolutionModal({ solution, onClose, onConsult }) {
  return (
    <Dialog.Root open={!!solution} onOpenChange={(next) => { if (!next) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="jsu-overlay" />
        <SolutionBody solution={solution} onClose={onClose} onConsult={onConsult} />
      </Dialog.Portal>
    </Dialog.Root>
  );
}
