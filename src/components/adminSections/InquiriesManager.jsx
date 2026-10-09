import { Fragment, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { api, apiErrorMessage } from "@/lib/api";

const TYPES = [
  { id: "", label: "All" },
  { id: "consultation", label: "Consultation" },
  { id: "partnership", label: "Partnership" },
  { id: "career", label: "Career" },
];

const PARTNERSHIP = {
  reseller_channel: "Reseller & Channel",
  technology: "Technology",
  strategic: "Strategic",
  referral: "Referral",
};

function detail(row) {
  const parts = [];
  if (row.partnership_interest) parts.push(PARTNERSHIP[row.partnership_interest] || row.partnership_interest);
  if (row.position) parts.push(row.position);
  if (row.topics?.length) parts.push(row.topics.join(", "));
  if (row.other_topic) parts.push(`Other: ${row.other_topic}`);
  return parts.join(" · ");
}

export default function InquiriesManager() {
  const [type, setType] = useState("");
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(null);

  const load = useCallback(() => {
    api.get("/inquiry", { params: { type: type || undefined } })
      .then(({ data }) => { setRows(data?.data || []); setTotal(data?.total || 0); })
      .catch((e) => toast.error(apiErrorMessage(e)));
  }, [type]);

  useEffect(() => { load(); }, [load]);

  const mark = async (row) => {
    const status = row.status === "handled" ? "new" : "handled";
    try {
      await api.post("/inquiry/status", { id: row.id, status });
      setRows((list) => list.map((r) => (r.id === row.id ? { ...r, status } : r)));
    } catch (e) {
      toast.error(apiErrorMessage(e));
    }
  };

  return (
    <>
      <h2 className="text-2xl font-extrabold tracking-[-0.4px] text-ink mb-1.5">Inquiries</h2>
      <p className="text-ink-muted text-sm mb-5">
        Consultation, partnership and career forms from the website. Each one is also e-mailed to the company inbox. {total} total.
      </p>
      <div className="flex gap-2 mb-5 flex-wrap">
        {TYPES.map((t) => (
          <button
            key={t.id}
            onClick={() => setType(t.id)}
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold border ${type === t.id ? "bg-brand text-white border-brand" : "bg-white text-ink border-hairline"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {["Received", "Type", "Name / Company", "Contact", "Details", "Status"].map((h) => (
                <th key={h} className="text-left text-xs font-bold text-ink-muted uppercase tracking-[0.5px] py-3 px-3 border-b border-hairline">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <Fragment key={row.id}>
                <tr className="hover:bg-[#FAFBFD] cursor-pointer align-top" onClick={() => setOpen(open === row.id ? null : row.id)}>
                  <td className="py-3 px-3 border-b border-[#F0F2F8] whitespace-nowrap">{row.created_at ? new Date(row.created_at).toLocaleString() : ""}</td>
                  <td className="py-3 px-3 border-b border-[#F0F2F8] capitalize">{row.type}</td>
                  <td className="py-3 px-3 border-b border-[#F0F2F8]"><strong>{row.name}</strong><div className="text-xs text-ink-muted">{row.company}</div></td>
                  <td className="py-3 px-3 border-b border-[#F0F2F8]"><a className="text-brand" href={`mailto:${row.email}`} onClick={(e) => e.stopPropagation()}>{row.email}</a><div className="text-xs text-ink-muted">{row.phone}</div></td>
                  <td className="py-3 px-3 border-b border-[#F0F2F8] max-w-[280px]">{detail(row)}</td>
                  <td className="py-3 px-3 border-b border-[#F0F2F8]">
                    <button
                      onClick={(e) => { e.stopPropagation(); mark(row); }}
                      className={`px-3 py-1 rounded-full text-xs font-bold ${row.status === "handled" ? "bg-[#DCFCE7] text-[#15803D]" : "bg-[#FEF3C7] text-[#B45309]"}`}
                    >
                      {row.status === "handled" ? "Handled" : "New"}
                    </button>
                  </td>
                </tr>
                {open === row.id && (
                  <tr>
                    <td colSpan="6" className="px-3 py-3 border-b border-[#F0F2F8] bg-[#FAFBFD] text-sm">
                      {row.message && <p className="whitespace-pre-wrap mb-2">{row.message}</p>}
                      {row.profile_url && <p className="mb-1">Profile: <a className="text-brand" href={row.profile_url} target="_blank" rel="noopener noreferrer">{row.profile_url}</a></p>}
                      {row.source && <p className="text-xs text-ink-muted">Opened from: {row.source}</p>}
                      {!row.message && !row.profile_url && !row.source && <p className="text-xs text-ink-muted">No additional details.</p>}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan="6" className="text-center text-[#9aa0b8] py-9">No inquiries yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
