import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useReveal() {
  const location = useLocation();
  useEffect(() => {
    const items = document.querySelectorAll(".reveal:not(.in)");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(el => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "200px 0px" });

    items.forEach(el => io.observe(el));

    // Fallback: Reveal all remaining elements after 600ms to guarantee no empty gaps on mobile
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach(el => el.classList.add("in"));
    }, 600);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [location.pathname]);
}
