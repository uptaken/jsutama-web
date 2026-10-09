import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { api, apiErrorMessage, absUploadUrl } from "@/lib/api";
import Base from "@/utils/base";

import { TextField,	TextArea,	ImageUpload,	ObjectEditor,	ArrayEditor, } from '@/components/adminSections/PrimitiveComponent'


/* Reusable styles */
const FIELD = "flex flex-col gap-1.5 mb-[18px]";
const LABEL = "text-[13px] font-bold text-ink";
const INPUT = "w-full text-[14.5px] border border-hairline rounded-lg px-3 py-2.5 text-ink bg-white outline-none transition-colors focus:border-brand focus:ring-[3px] focus:ring-brand/[0.12]";
const TEXTAREA = INPUT + " min-h-[100px] resize-y leading-[1.55]";
const HINT = "text-xs text-ink-muted";
const BTN_SAVE = "bg-brand text-white border-none px-[26px] py-[11px] rounded-lg font-bold text-sm cursor-pointer transition-all hover:bg-brand-dark hover:-translate-y-px disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none";
const BTN_SECONDARY = "bg-transparent text-ink border border-hairline px-[18px] py-[9px] rounded-lg font-semibold text-[13.5px] cursor-pointer";
const BTN_DANGER = "bg-[#DC2626] text-white border-none px-[18px] py-[9px] rounded-lg font-bold text-[13.5px] cursor-pointer";

export default function BlogPostsManager() {
	const [posts, setPosts] = useState([]);
	const [editing, setEditing] = useState(null);
	const [busy, setBusy] = useState(false);
	const reload = useCallback(() => api.get("/blog?published_only=false&limit=100").then(({ data }) => setPosts(data?.data || [])).catch(() => {}), []);
	useEffect(() => { reload(); }, [reload]);

	const blank = { title: "", slug: "", excerpt: "", content: "", category: "", author_name: "", author_initials: "", featured_image_url: "", image: null, published: true };

	const save = async () => {
		setBusy(true);
		try {
			if (editing?.id) await api.post("/blog/edit", editing);
			else await api.post("/blog", editing);
			toast.success("Post saved");
			setEditing(null);
			reload();
		} catch (e) { toast.error(apiErrorMessage(e)); }
		setBusy(false);
	};

	const remove = async (id) => {
		if (!window.confirm("Delete this post permanently?")) return;
		try { await api.post("/blog/delete", { id }); toast.success("Post deleted"); reload(); }
		catch (e) { toast.error(apiErrorMessage(e)); }
	};

	const onUpload = async (e) => {
		const f = e.target.files?.[0]; if (!f) return;
		// the API converts the data URL to webp and returns the final URL on save
		const preview = URL.createObjectURL(f);
		const dataUrl = await new Base().toDataURLPromise(preview);
		setEditing({ ...editing, featured_image_url: preview, image: { file: dataUrl, file_name: f.name } });
	};

	if (editing) {
		return (
			<>
				<div className="flex items-center justify-between gap-3 mb-[18px] flex-wrap">
					<h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink">{editing.id ? "Edit post" : "New post"}</h2>
					<div className="flex gap-2">
						<button className={BTN_SECONDARY} onClick={() => setEditing(null)} data-testid="post-cancel">Cancel</button>
						<button className={BTN_SAVE} onClick={save} disabled={busy} data-testid="post-save">{busy ? "Saving…" : "Save post"}</button>
					</div>
				</div>
				<TextField label="Title" value={editing.title} onChange={(v) => setEditing({ ...editing, title: v })} testId="post-title" />
				<TextField label="Slug (leave blank to auto-generate)" value={editing.slug} onChange={(v) => setEditing({ ...editing, slug: v })} testId="post-slug" />
				<TextField label="Category (e.g. Cloud, AI & ML, Security)" value={editing.category} onChange={(v) => setEditing({ ...editing, category: v })} testId="post-category" />
				<TextArea label="Excerpt" value={editing.excerpt} onChange={(v) => setEditing({ ...editing, excerpt: v })} rows={2} hint="Shown on cards. Around 25 words." testId="post-excerpt" />
				<TextArea label="Content (HTML allowed)" value={editing.content} onChange={(v) => setEditing({ ...editing, content: v })} rows={10} testId="post-content" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
					<TextField label="Author name" value={editing.author_name} onChange={(v) => setEditing({ ...editing, author_name: v })} testId="post-author" />
					<TextField label="Author initials" value={editing.author_initials} onChange={(v) => setEditing({ ...editing, author_initials: v })} hint="2 letters, e.g. SM" testId="post-initials" />
				</div>
				<div className={FIELD}>
					<label className={LABEL}>Featured image</label>
					<div className="flex items-center gap-3">
						<div className="w-[72px] h-[72px] rounded-lg bg-[#F5F7FB] border border-hairline overflow-hidden shrink-0">
							{editing.featured_image_url && <img src={editing.image ? editing.featured_image_url : absUploadUrl(editing.featured_image_url)} alt="preview" className="w-full h-full object-cover" />}
						</div>
						<input type="file" accept="image/*" onChange={onUpload} data-testid="post-upload" />
					</div>
				</div>
				<div className={FIELD}>
					<label className="flex items-center gap-2">
						<input type="checkbox" checked={!!editing.published} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} data-testid="post-published" />
						Published (visible on the public site)
					</label>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="flex items-center justify-between gap-3 mb-[18px] flex-wrap">
				<h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink">Blog Posts</h2>
				<button className={BTN_SAVE} onClick={() => setEditing(blank)} data-testid="post-new">+ New post</button>
			</div>
			<p className="text-ink-muted text-sm mb-6">{posts.length} post{posts.length === 1 ? "" : "s"} total.</p>
			<table className="w-full border-collapse">
				<thead>
					<tr>
						{["Title", "Category", "Status", "Created", ""].map((h, i) => (
							<th key={i} className="text-left text-xs font-bold text-ink-muted uppercase tracking-[0.5px] py-3 px-3 border-b border-hairline">{h}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{posts.map((p) => (
						<tr key={p.id} data-testid={`post-row-${p.slug}`} className="hover:bg-[#FAFBFD]">
							<td className="text-sm text-ink-mid py-3.5 px-3 border-b border-[#F0F2F8]">
								<strong>{p.title || <em className="text-[#9aa0b8]">(untitled)</em>}</strong>
								<div className="text-xs text-ink-muted">/{p.slug}</div>
							</td>
							<td className="text-sm text-ink-mid py-3.5 px-3 border-b border-[#F0F2F8]">{p.category || "—"}</td>
							<td className="text-sm text-ink-mid py-3.5 px-3 border-b border-[#F0F2F8]">
								{p.published
									? <span className="text-[#15803D] font-bold">Published</span>
									: <span className="text-[#9aa0b8]">Draft</span>}
							</td>
							<td className="text-sm text-ink-mid py-3.5 px-3 border-b border-[#F0F2F8]">
								{p.created_at ? new Date(p.created_at).toLocaleDateString() : ""}
							</td>
							<td className="text-sm py-3.5 px-3 border-b border-[#F0F2F8]">
								<div className="flex gap-2 justify-end">
									<button className={BTN_SECONDARY} onClick={() => setEditing(p)} data-testid={`post-edit-${p.slug}`}>Edit</button>
									<button className={BTN_DANGER} onClick={() => remove(p.id)} data-testid={`post-delete-${p.slug}`}>Delete</button>
								</div>
							</td>
						</tr>
					))}
					{posts.length === 0 && (
						<tr><td colSpan="5" className="text-center text-[#9aa0b8] py-9">No posts yet.</td></tr>
					)}
				</tbody>
			</table>
		</>
	);
}