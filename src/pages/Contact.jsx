"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "4rem 2rem 2rem 6rem",
        maxWidth: "700px",
        margin: "0 auto",
        color: "var(--text)",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Contact Me</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        Feel free to reach out for collaboration, freelance, or just to say hi!
      </p>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2rem" }}>
        <li>
          📧 Email:{" "}
          <a href="mailto:swarner.miles@gmail.com">swarner.miles@gmail.com</a>
        </li>
        <li>📍 Location: Windsor, CA</li>
        <li>
          🛠️ GitHub:{" "}
          <a
            href="https://github.com/swarnermiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/swarnermiles
          </a>
        </li>
      </ul>
    </motion.section>
  );
}
