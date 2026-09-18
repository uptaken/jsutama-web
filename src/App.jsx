import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import Landing from "@/pages/Landing";
const BlogPost = lazy(() => Promise.all([import("@/pages/BlogPost"), import("@/legacy-icons")]).then(([page]) => page));
const BlogIndex = lazy(() => Promise.all([import("@/pages/BlogIndex"), import("@/legacy-icons")]).then(([page]) => page));
const AdminLogin = lazy(() => Promise.all([import("@/pages/AdminLogin"), import("@/legacy-icons")]).then(([page]) => page));
const AdminDashboard = lazy(() => Promise.all([import("@/pages/AdminDashboard"), import("@/legacy-icons")]).then(([page]) => page));



export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster richColors position="top-center" />
          <Suspense fallback={<div role="status" style={{ padding: 48 }}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>


    </HelmetProvider>
  );
}
