import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Solutions from "@/pages/Solutions";
import SolutionDetail from "@/pages/SolutionDetail";
import SiteLayout from "@/components/jsu/SiteLayout";
const BlogPost = lazy(() => Promise.all([import("@/pages/BlogPost"), import("@/legacy-icons")]).then(([page]) => page));
const BlogIndex = lazy(() => Promise.all([import("@/pages/BlogIndex"), import("@/legacy-icons")]).then(([page]) => page));
const AdminLogin = lazy(() => Promise.all([import("@/pages/AdminLogin"), import("@/legacy-icons")]).then(([page]) => page));
const AdminDashboard = lazy(() => Promise.all([import("@/pages/AdminDashboard"), import("@/legacy-icons")]).then(([page]) => page));



export default function App() {
  return (
    <HelmetProvider>
        <BrowserRouter>
          <Toaster richColors position="top-center" />
          <Suspense fallback={<div role="status" style={{ padding: 48 }}>Loading…</div>}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:id" element={<SolutionDetail />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Route>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          </Suspense>
        </BrowserRouter>


    </HelmetProvider>
  );
}
