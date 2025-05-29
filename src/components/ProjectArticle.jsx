"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProjectArticle({
  title,
  content,
  image,
  images = [],
  video,
  authorBlock,
}) {
  const sections = splitContent(content);
  const bg1 = images[images.length - 2] || image;
  const bg2 = images[images.length - 1] || image;

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <article style={{ color: "var(--text)", backgroundColor: "var(--bg)" }}>
      {/* Hero Header */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.6 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "6rem 2rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textShadow: "0 0 12px rgba(0,0,0,0.4)",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {title}
        </h1>
      </motion.section>

      <ParallaxImage src={bg1} />

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
      >
        {sections.map((text, i) => (
          <motion.p
            key={i}
            ref={i === 0 ? sectionRef : null}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
            }}
          >
            {text}
          </motion.p>
        ))}
      </motion.section>

      {/* Optional Image Gallery */}
      {images.length > 2 && (
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            padding: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {images.slice(0, 3).map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          ))}
        </motion.section>
      )}

      {/* Embedded Video */}
      {video && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ padding: "2rem", display: "flex", justifyContent: "center" }}
        >
          <iframe
            width="100%"
            height="450"
            src={video}
            title="Project video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ maxWidth: "800px", borderRadius: "12px", border: "none" }}
          ></iframe>
        </motion.section>
      )}

      <ParallaxImage src={bg2} />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          padding: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "0.95rem",
          color: "var(--text-secondary)",
          borderTop: "1px solid var(--border)",
          marginTop: "2rem",
        }}
      >
        {authorBlock}
      </motion.footer>
    </article>
  );
}

function ParallaxImage({ src }) {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "100%",
        filter: "brightness(0.7)",
      }}
    />
  );
}

function splitContent(text = "") {
  return text.split(/[\r\n]+/).filter((p) => p.trim() !== "");
}
