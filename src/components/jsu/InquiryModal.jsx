import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, CheckCircle2, Loader2, X } from "lucide-react";
import { api, apiErrorMessage } from "@/lib/api";
import { CAREER_POSITIONS, FORM_COPY, PARTNERSHIPS, PARTNER_PRODUCTS, TOPICS } from "./data";

const EMPTY = {
  name: "", company: "", email: "", phone: "", topics: [], other_topic: "", message: "",
  partnership_interest: "", position: "", profile_url: "", consent: false, website: "",
};

function Field({ label, required, hint, children }) {
  return (
    <label className="jsu-field">
      <span>{label}{required && <i aria-hidden="true"> *</i>}{hint && <small> ({hint})</small>}</span>
      {children}
    </label>
  );
}

/**
 * One modal for the three public forms (consultation, partnership, career).
 * `preset` pre-fills a topic / partnership type and records which button opened the form.
 */
function FormBody({ type, preset, onClose }) {
  const copy = FORM_COPY[type] || FORM_COPY.consultation;
  const [form, setForm] = useState({ ...EMPTY, topics: preset?.topics || [], partnership_interest: preset?.interest || "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const set = (key) => (event) => setForm((f) => ({ ...f, [key]: event.target.value }));
  const toggle = (key, value) => setForm((f) => ({
    ...f,
    [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value],
  }));

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    if (type === "consultation" && form.topics.length === 0) {
      setError("Please select at least one topic.");
      return;
    }
    if (type === "partnership" && !form.partnership_interest) {
      setError("Please choose a partnership interest.");
      return;
    }
    setBusy(true);
    try {
      await api.post("/inquiry", { ...form, type, source: preset?.source || null });
      setDone(true);
    } catch (e) {
      setError(apiErrorMessage(e));
    }
    setBusy(false);
  };

  return (
    <Dialog.Content className="jsu-site jsu-modal jsu-form-modal" aria-describedby={undefined}>
      <Dialog.Close className="jsu-modal-close" aria-label="Close"><X size={18} /></Dialog.Close>

      {done ? (
        <div className="jsu-success" role="status">
          <CheckCircle2 size={44} strokeWidth={1.6} />
          <Dialog.Title>{copy.successTitle}</Dialog.Title>
          <p>{copy.success}</p>
          <button type="button" className="jsu-btn jsu-btn-primary" onClick={onClose}>Close</button>
        </div>
      ) : (
        <form onSubmit={submit} className="jsu-form" noValidate={false}>
          <header>
            <Dialog.Title>{copy.title}</Dialog.Title>
            <p>{copy.subtitle}</p>
          </header>

          {type === "partnership" && (
            <section aria-label="Partnership opportunities">
              <h3 className="jsu-form-heading">Partnership Opportunities</h3>
              <div className="jsu-partner-grid">
                {PARTNERSHIPS.map(({ id, icon: Icon, title, text }) => (
                  <button
                    type="button"
                    key={id}
                    className={`jsu-partner-card ${form.partnership_interest === id ? "is-on" : ""}`}
                    aria-pressed={form.partnership_interest === id}
                    onClick={() => setForm((f) => ({ ...f, partnership_interest: id }))}
                  >
                    <Icon size={18} strokeWidth={1.6} />
                    <b>{title}</b>
                    <span>{text}</span>
                  </button>
                ))}
              </div>
              <h3 className="jsu-form-heading">Become a Partner</h3>
            </section>
          )}

          <Field label="Full Name" required>
            <input required maxLength={100} value={form.name} onChange={set("name")} placeholder="Your full name" autoComplete="name" />
          </Field>

          {type !== "career" && (
            <Field label="Company Name" required>
              <input required maxLength={150} value={form.company} onChange={set("company")} placeholder="Your company name" autoComplete="organization" />
            </Field>
          )}

          <div className="jsu-field-row">
            <Field label={type === "career" ? "Email" : "Business Email"} required>
              <input required type="email" maxLength={150} value={form.email} onChange={set("email")} placeholder="name@company.com" autoComplete="email" />
            </Field>
            <Field label="WhatsApp Number" required>
              <input required type="tel" maxLength={30} inputMode="tel" value={form.phone} onChange={set("phone")} placeholder="+62 812 xxxx xxxx" autoComplete="tel" />
            </Field>
          </div>

          {type === "consultation" && (
            <>
              <fieldset className="jsu-field">
                <legend>What would you like to discuss? <i aria-hidden="true">*</i></legend>
                <small>Select one or more topics.</small>
                <div className="jsu-checks">
                  {TOPICS.map((topic) => (
                    <label key={topic} className="jsu-check">
                      <input type="checkbox" checked={form.topics.includes(topic)} onChange={() => toggle("topics", topic)} />
                      <span>{topic}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <Field label="Other topic" hint="optional">
                <input maxLength={255} value={form.other_topic} onChange={set("other_topic")} placeholder="Other topic (optional)" />
              </Field>
            </>
          )}

          {type === "partnership" && (
            <>
              <Field label="Partnership Interest" required>
                <select required value={form.partnership_interest} onChange={set("partnership_interest")}>
                  <option value="" disabled>Select a partnership type</option>
                  {PARTNERSHIPS.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
                </select>
              </Field>
              <fieldset className="jsu-field">
                <legend>Products / Solutions of Interest</legend>
                <div className="jsu-checks jsu-checks-inline">
                  {PARTNER_PRODUCTS.map((product) => (
                    <label key={product} className="jsu-check">
                      <input type="checkbox" checked={form.topics.includes(product)} onChange={() => toggle("topics", product)} />
                      <span>{product}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </>
          )}

          {type === "career" && (
            <>
              <Field label="Position of Interest" required>
                <select required value={form.position} onChange={set("position")}>
                  <option value="" disabled>Select a position</option>
                  {CAREER_POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </Field>
              <Field label="LinkedIn / Portfolio / CV link" hint="optional">
                <input type="url" maxLength={500} value={form.profile_url} onChange={set("profile_url")} placeholder="https://" />
              </Field>
            </>
          )}

          <Field label={type === "consultation" ? "Briefly tell us about your needs" : type === "partnership" ? "Brief Introduction" : "Tell us about yourself"} hint="optional">
            <textarea rows={3} maxLength={3000} value={form.message} onChange={set("message")}
              placeholder={type === "consultation" ? "Tell us a little about your project or what you would like to achieve..." : type === "partnership" ? "Tell us about your company and how you would like to collaborate..." : "A short introduction, experience, or anything you would like us to know..."} />
          </Field>

          {/* honeypot: hidden from people, bots tend to fill it */}
          <input className="jsu-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" name="website" value={form.website} onChange={set("website")} />

          <label className="jsu-check jsu-consent">
            <input type="checkbox" required checked={form.consent} onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))} />
            <span>I agree to be contacted by JSU regarding my {type === "consultation" ? "consultation request" : type === "partnership" ? "partnership inquiry" : "application"}.</span>
          </label>

          {error && <p className="jsu-form-error" role="alert">{error}</p>}

          <button type="submit" className="jsu-btn jsu-btn-primary jsu-btn-block" disabled={busy}>
            {busy ? <><Loader2 size={16} className="jsu-spin" /> Sending…</> : <>{copy.submit} <ArrowRight size={16} /></>}
          </button>
          <p className="jsu-form-foot">{copy.foot}</p>
        </form>
      )}
    </Dialog.Content>
  );
}

/**
 * One modal for the three public forms (consultation, partnership, career).
 * `preset` pre-fills a topic / partnership type and records which button opened the form.
 * The form is mounted only while open, so every opening starts empty.
 */
export default function InquiryModal({ type, preset, onClose }) {
  return (
    <Dialog.Root open={!!type} onOpenChange={(next) => { if (!next) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="jsu-overlay" />
        {type && <FormBody key={type} type={type} preset={preset} onClose={onClose} />}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
