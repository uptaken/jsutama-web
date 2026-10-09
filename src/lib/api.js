import axios from "axios";

const BASE = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "");

export const API_BASE = `${BASE}/api`;

export const api = axios.create({
  baseURL: API_BASE,
});

// The admin login stores the full "Bearer …" value returned by the API under "token".
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export function formatApiErrorDetail(detail) {
  if (detail == null) return "Something went wrong. Please try again.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail))
    return detail
      .map((e) => (e && typeof e.msg === "string" ? e.msg : JSON.stringify(e)))
      .filter(Boolean)
      .join(" ");
  if (detail && typeof detail.msg === "string") return detail.msg;
  return String(detail);
}

// API errors look like { status: "error", message: "…" }
export function apiErrorMessage(error) {
  return error?.response?.data?.message || formatApiErrorDetail(error?.response?.data?.detail) || error?.message;
}

export function absUploadUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//.test(url)) return url;
  return `${BASE}${url}`;
}
