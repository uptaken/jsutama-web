import { useEffect, useRef } from "react";

// Progressive enhancement: content remains visible without motion support.
export function useReveal() {
  const root = useRef(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root.current || !("IntersectionObserver" in window)) return;
    const animations = new Set();
    const selector = [
      ".jsu-trust > div", ".jsu-section-heading", ".jsu-solution",
      ".jsu-dna-grid > article", ".jsu-iceberg", ".jsu-problem-labels > div",
      ".jsu-clients > div:first-child", ".jsu-logo-slider",
      ".jsu-metrics .jsu-shell > div", ".jsu-step",
      ".jsu-contact .jsu-shell > div", ".jsu-contact .jsu-button",
      ".jsu-footer-top > *", ".jsu-footer-bottom",
    ].join(",");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        if (media.matches || typeof target.animate !== "function") return;
        const siblings = [...target.parentElement.children].filter(node => node.matches(selector));
        const delay = Math.max(0, siblings.indexOf(target)) % 6 * 75;
        const animation = target.animate([
          { opacity: 0, transform: "translateY(22px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 700, delay, fill: "backwards", easing: "cubic-bezier(.22,1,.36,1)" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.12 });
    root.current.querySelectorAll(selector).forEach(node => observer.observe(node));
    const cancelMotion = () => { if (media.matches) animations.forEach(animation => animation.cancel()); };
    media.addEventListener("change", cancelMotion);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); media.removeEventListener("change", cancelMotion); };
  }, []);
  return root;
}
