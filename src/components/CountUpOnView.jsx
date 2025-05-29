"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUpOnView({ end = 100, duration = 2 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = (time - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      style={{
        fontSize: "1.2rem",
        fontWeight: "bold",
        marginTop: "1.5rem",
        color: "var(--text)",
      }}
    >
      Total Estimated Hours: {value}
    </div>
  );
}
