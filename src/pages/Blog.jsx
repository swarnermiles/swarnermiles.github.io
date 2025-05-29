"use client";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "4rem 2rem 2rem 6rem",
        maxWidth: "800px",
        margin: "0 auto",
        color: "var(--text)",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
        Articles & Blog
      </h1>
      <p style={{ fontSize: "1rem" }}>
        I write about engineering, design, biking, music, and the lessons I
        learn from building things in the real world. Posts coming soon!
      </p>
    </motion.section>
  );
}
