import React, { useState, useEffect, } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { toast } from "sonner";
import moment from 'moment'
import { useAuth } from "@/contexts/AuthContext";

import Base from '@/utils/base'

export default function AdminLogin() {
	var base = new Base()

  // const { user, login, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  {/* if (loading) return <div className="p-12">Loading…</div>;
  if (user) return <Navigate to="/admin" replace />; */}

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    var response = await base.request(base.url_api + '/auth/login', 'post', {
			email: email,
			password: password,
		})

    setBusy(false);
		if(response != null){
			if(response.status == "success"){
				localStorage.setItem("token", response.token);
				localStorage.setItem("token_expired", moment().add(1, 'd').format('YYYY-MM-DD HH:mm:ss'));

				toast.success("Welcome back");
				navigate("/admin");
			}
			else
				base.show_error(response.message)
		}
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #1c2a52 100%)" }}
    >
      <form
        onSubmit={onSubmit}
        data-testid="admin-login-form"
        className="bg-white rounded-2xl p-9 w-full max-w-[420px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]"
      >
        <div className="flex items-center gap-2.5 mb-[18px]">
          <span className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white">
              <rect x="2" y="2" width="7" height="7" rx="1.5" /><rect x="11" y="2" width="7" height="7" rx="1.5" />
              <rect x="2" y="11" width="7" height="7" rx="1.5" /><rect x="11" y="11" width="7" height="7" rx="1.5" />
            </svg>
          </span>
          <span className="font-extrabold text-[18px] text-ink">JSU Admin</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-[-0.4px] mb-1.5 text-ink">Sign in</h1>
        <p className="text-sm text-ink-muted mb-[26px]">Manage site content, blog posts, and contact details.</p>

        <div className="flex flex-col gap-1.5 mb-[18px]">
          <label htmlFor="login-email" className="text-[13px] font-bold text-ink">Email</label>
          <input
            id="login-email" type="email" autoComplete="username" required
            value={email} onChange={(e) => setEmail(e.target.value)}
            data-testid="login-email"
            className="w-full text-[14.5px] border border-hairline rounded-lg px-3 py-2.5 text-ink bg-white outline-none transition-colors focus:border-brand focus:ring-[3px] focus:ring-brand/[0.12]"
          />
        </div>
        <div className="flex flex-col gap-1.5 mb-[18px]">
          <label htmlFor="login-password" className="text-[13px] font-bold text-ink">Password</label>
          <input
            id="login-password" type="password" autoComplete="current-password" required
            value={password} onChange={(e) => setPassword(e.target.value)}
            data-testid="login-password"
            className="w-full text-[14.5px] border border-hairline rounded-lg px-3 py-2.5 text-ink bg-white outline-none transition-colors focus:border-brand focus:ring-[3px] focus:ring-brand/[0.12]"
          />
        </div>

        <button
          type="submit" disabled={busy} data-testid="login-submit"
          className="w-full bg-brand text-white border-none px-7 py-3.5 rounded-lg font-bold text-sm cursor-pointer transition-all hover:bg-brand-dark hover:-translate-y-px disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>

        <div className="text-center mt-[18px]">
          <Link to="/" data-testid="login-back-home" className="text-ink-muted text-[13px] no-underline">
            ← Back to site
          </Link>
        </div>
      </form>
    </div>
  );
}
