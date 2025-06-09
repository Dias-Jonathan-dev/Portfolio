import { useEffect, useRef, useState } from "react";

export default function useScrollProgress(
  maxScroll = Number.POSITIVE_INFINITY,
  disableScroll = false,
) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const target = useRef(0);

  useEffect(() => {
    if (disableScroll) return; // Désactive le scroll personnalisé
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      const nextTarget = target.current + e.deltaY * 0.03;
      target.current = Math.max(Math.min(nextTarget, maxScroll), 0);
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
    document.body.style.overflow = "hidden";

    let frame: number;
    const animate = () => {
      setScrollProgress((prev) => {
        const next = prev + (target.current - prev) * 0.1;
        return Math.max(Math.min(next, maxScroll), 0);
      });
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("wheel", handleScroll);
      document.body.style.overflow = "";
      cancelAnimationFrame(frame);
    };
  }, [maxScroll, disableScroll]);

  return scrollProgress;
}
