"use client";
import { useEffect, useState } from "react";

export default function Resume() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIframeLoaded(true), 300); // slight delay for smooth fade-in
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      style={{
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          borderBottom: "2px solid var(--text)",
        }}
      >
        Resume
      </h1>

      <iframe
        title="Miles Swarner Resume"
        src="https://docs.google.com/document/d/e/2PACX-1vTEr9-Nk_fBakTntU5KjjHf6hZy1wl2U0QSRReBgq9UotJi4n39sOx_ny7SFE_WtwdIqI1JEaPTwLih/pub?embedded=true"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "1000px",
          border: "none",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          opacity: iframeLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          backgroundColor: "white",
        }}
      ></iframe>

      <a
        href="https://docs.google.com/document/d/e/2PACX-1vTEr9-Nk_fBakTntU5KjjHf6hZy1wl2U0QSRReBgq9UotJi4n39sOx_ny7SFE_WtwdIqI1JEaPTwLih/pub"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "2rem",
          fontSize: "1rem",
          backgroundColor: "#646cff",
          color: "#fff",
          padding: "0.6rem 1.2rem",
          borderRadius: "8px",
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        View Full Document
      </a>
    </section>
  );
}
