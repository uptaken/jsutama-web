import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api, formatApiErrorDetail } from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // All callbacks below have empty deps because: setUser/setLoading from
  // useState are referentially stable, and `api` / `formatApiErrorDetail`
  // are module-level imports — none of them need to be in the dep array.
  const refresh = useCallback(async () => {
    try {
      const { data } = await api.get("/auth/me");
      setUser(data);
    } catch (err) {
      // 401 here is the normal "no session" path on public pages —
      // log at debug level only, never spam the console on production.
      if (err?.response?.status && err.response.status !== 401) {
        // eslint-disable-next-line no-console
        console.warn("Auth refresh failed:", err);
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = useCallback(async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      if (data?.access_token) localStorage.setItem("digix_token", data.access_token);
      setUser(data);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: formatApiErrorDetail(e.response?.data?.detail) || e.message };
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      // Logout should be best-effort — clear local state regardless.
      // eslint-disable-next-line no-console
      console.warn("Logout request failed (clearing local state anyway):", err?.message || err);
    }
    localStorage.removeItem("digix_token");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
