import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useReveal() {
  const location = useLocation();
  useEffect(() => {
    const items = document.querySelectorAll(".reveal:not(.in)");
    if (!items.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);
}
