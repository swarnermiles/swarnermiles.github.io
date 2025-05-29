"use client";

import { useState } from "react";

export default function BannerAlert() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#cc0000",
        color: "white",
        textAlign: "center",
        padding: "0.75rem 1.25rem",
        fontSize: "0.9rem",
        fontWeight: 500,
        borderRadius: "12px",
        zIndex: 2000,
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        maxWidth: "90%",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <span>
        ⚠️ This website is still under construction. Some features may be
        unavailable or missing.
      </span>
      <button
        onClick={() => setDismissed(true)}
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          marginLeft: "auto",
        }}
        aria-label="Dismiss alert"
      >
        ×
      </button>
    </div>
  );
}
