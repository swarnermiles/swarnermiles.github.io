import { useEffect, useState } from "react";

export default function ScrollBackground({ images }) {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const i = Math.floor(y / 800) % images.length;
      setBgIndex(i);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [images]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        zIndex: -1,
        background: `url(${images[bgIndex]}) center/cover no-repeat`,
        opacity: 0.05,
        transition: "background-image 1s ease",
      }}
    />
  );
}
