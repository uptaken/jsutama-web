import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { api, formatApiErrorDetail, absUploadUrl } from "@/lib/api";

import Base from '@/utils/base'


/* Reusable styles */
const FIELD = "flex flex-col gap-1.5 mb-[18px]";
const LABEL = "text-[13px] font-bold text-ink";
const INPUT = "w-full text-[14.5px] border border-hairline rounded-lg px-3 py-2.5 text-ink bg-white outline-none transition-colors focus:border-brand focus:ring-[3px] focus:ring-brand/[0.12]";
const TEXTAREA = INPUT + " min-h-[100px] resize-y leading-[1.55]";
const HINT = "text-xs text-ink-muted";
const BTN_SAVE = "bg-brand text-white border-none px-[26px] py-[11px] rounded-lg font-bold text-sm cursor-pointer transition-all hover:bg-brand-dark hover:-translate-y-px disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none";
const BTN_SECONDARY = "bg-transparent text-ink border border-hairline px-[18px] py-[9px] rounded-lg font-semibold text-[13.5px] cursor-pointer";
const BTN_DANGER = "bg-[#DC2626] text-white border-none px-[18px] py-[9px] rounded-lg font-bold text-[13.5px] cursor-pointer";

/* ─── Generic field components ─── */
function TextField({ label, value, onChange, hint, type = "text", testId }) {
	return (
		<div className={FIELD}>
			<label className={LABEL}>{label}</label>
			<input type={type} value={value ?? ""} onChange={(e) => onChange(e.target.value)} data-testid={testId} className={INPUT} />
			{hint && <span className={HINT}>{hint}</span>}
		</div>
	);
}
function TextArea({ label, value, onChange, hint, rows = 4, testId }) {
	const [value1, setValue1] = useState("")

	useEffect(() => {
		setValue1(value != null ? value.replace(/<br\/>/g, "\n") : "")
	}, [value,])

	const onTextareaChanged = (val) => {
		setValue1(val)
		onChange(val.replace(/\n/g, "<br/>"))
	}

	return (
		<div className={FIELD}>
			<label className={LABEL}>{label}</label>
			<textarea rows={rows} value={value1} onChange={(e) => onTextareaChanged(e.target.value)} data-testid={testId} className={TEXTAREA} />
			{hint && <span className={HINT}>{hint}</span>}
		</div>
	);
}

function ImageUpload({ label, value, onChange, onChangeImageData, hint, recommended, testId }) {
	var base = new Base()

	const onFile = async (e) => {
		const f = e.target.files?.[0]; if (!f) return;
		onChange(URL.createObjectURL(f), f.name, await base.toDataURLPromise(URL.createObjectURL(f)));

		// try { const url = await uploadImage(f); onChange(url); toast.success("Image uploaded"); }
		// catch (err) { toast.error(formatApiErrorDetail(err.response?.data?.detail) || err.message); }
	};

	return (
		<div className={FIELD}>
			<label className={LABEL}>{label}</label>
			<div className="flex items-center gap-3 justify-between">
				<div className="flex items-center gap-3">
					<div className="w-[72px] h-[72px] rounded-lg bg-[#F5F7FB] border border-hairline overflow-hidden shrink-0">
						{value && <img src={value} alt="" className="w-full h-full object-contain" />}
					</div>
					<input type="file" accept="image/*" onChange={onFile} data-testid={`${testId}-file`} />
				</div>
				{value && (
					<button type="button" className={BTN_DANGER} onClick={() => onChange("")} data-testid={`${testId}-remove`}>
						Remove
					</button>
				)}
			</div>
			{recommended && <span className={HINT}>Recommended: {recommended}</span>}
			{hint && <span className={HINT}>{hint}</span>}
		</div>
	);
}

/* ─── Section editors ─── */
function ObjectEditor({ obj, setObj, fields }) {
	return (
		<>
			{fields.map((f) => {
				const val = obj?.[f.key] ?? "";
				const setVal = (v) => setObj({ ...(obj || {}), [f.key]: v });
				if (f.type === "textarea") return <TextArea key={f.key} label={f.label} value={val} onChange={setVal} hint={f.hint} rows={f.rows || 3} testId={`field-${f.key}`} />;
				return <TextField key={f.key} label={f.label} value={val} onChange={setVal} hint={f.hint} testId={`field-${f.key}`} />;
			})}
		</>
	);
}

function ArrayEditor({ items, setItems, fields, addLabel = "Add item", min = 0, max = 99 }) {
	const update = (i, key, value, fileName = null, imageData = null) => {
		const next = [...items];
		var obj = { ...next[i] }

		if(fileName){
			obj[key + "_url"] = value
			obj[key] = {
				url: value,
				file: imageData,
				file_name: fileName,
			}
		}
		else
			obj[key] = value
		next[i] = obj
		setItems(next);
	 };
	const remove = (i) => { if (items.length <= min) return; const next = [...items]; next.splice(i, 1); setItems(next); };
	const add = () => { if (items.length >= max) return; const blank = Object.fromEntries(fields.map((f) => [f.key, ""])); setItems([...items, blank]); };
	return (
		<div className="flex flex-col gap-3.5 mb-6">
			{items.map((it, i) => (
				<div className="border border-hairline rounded-xl p-[18px] bg-[#FAFBFD] flex flex-col" key={i}>
					<div className="flex justify-between items-center mb-2">
						<h4 className="text-sm font-bold text-ink">#{i + 1}</h4>

						{items.length > min && (
							<button type="button" className={BTN_DANGER} onClick={() => remove(i)} data-testid={`arr-remove-${i}`}>Remove Card</button>
						)}
					</div>

					{fields.map((f) => {
						if (f.type === "textarea") return <TextArea key={f.key} label={f.label} value={it[f.key]} onChange={(v) => update(i, f.key, v)} rows={f.rows || 2} testId={`arr-${f.key}-${i}`} />;
						if (f.type === "checkbox") return (
							<div className={FIELD} key={f.key}>
								<label className="flex items-center gap-2">
									<input type="checkbox" checked={!!it[f.key]} onChange={(e) => update(i, f.key, e.target.checked)} data-testid={`arr-${f.key}-${i}`} />
									{f.label}
								</label>
							</div>
						);
						if (f.type == 'imagePicker') return (
							<ImageUpload label={f.label} value={it[f.key + "_url"]}
								onChange={(v, fileName, imageData) => update(i, f.key, v, fileName, imageData)}
								recommended="1200×900 JPG/PNG" hint="If set, replaces the 3-portrait illustration." testId="about-image" />
						)
						return <TextField key={f.key} label={f.label} value={it[f.key]} onChange={(v) => update(i, f.key, v)} testId={`arr-${f.key}-${i}`} />;
					})}

				</div>
			))}
			{items.length < max && (
				<button type="button" className={BTN_SECONDARY} onClick={add} data-testid="arr-add">+ {addLabel}</button>
			)}
		</div>
	);
}

export { TextField,	TextArea,	ImageUpload,	ObjectEditor,	ArrayEditor, };