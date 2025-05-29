"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      style={{
        textAlign: "center",
        padding: "6rem 2rem",
        color: "var(--text)",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ marginBottom: "2rem" }}>
        Page not found. Try heading back home - only a quarter mile left.
      </p>
      <Link
        to="/"
        style={{
          padding: "0.6rem 1.2rem",
          backgroundColor: "#ff0088",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        ← Return to Home
      </Link>
    </motion.section>
  );
}
