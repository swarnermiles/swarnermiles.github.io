"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TypewriterHeading() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Project Page";
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = indexRef.current;
      if (currentIndex < fullText.length) {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 900,
        backgroundColor: "var(--bg)",
        padding: "1rem 0",
        margin: 0,
        textAlign: "center",
        fontSize: "2.2rem",
        fontWeight: 700,
        fontFamily: "monospace",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        color: "var(--text)",
      }}
    >
      {displayText}
      <span className="blinking-cursor">|</span>
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </motion.h1>
  );
}
