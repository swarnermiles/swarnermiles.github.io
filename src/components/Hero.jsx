"use client";
/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
/* eslint-enable no-unused-vars */

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.05]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        height: "100vh",
        position: "relative",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/photos/site/hero-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          y: bgY,
          scale,
          zIndex: 0,
        }}
      />

      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
          color: "#fff",
          padding: "0 2rem",
        }}
      >
        <motion.img
          src="/photos/site/headshot.webp"
          alt="Miles Swarner"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
            marginBottom: "1.5rem",
            maxWidth: "90vw",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{ fontSize: "2.6rem", fontWeight: 700 }}
        >
          Hi, I’m Miles Swarner
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            fontSize: "1.1rem",
            marginTop: "0.5rem",
            color: "#f0f0f0",
            maxWidth: "500px",
          }}
        >
          Current Mechanical Engineering Student
        </motion.p>

        {/* Mouse scroll icon */}
        <motion.div
          onClick={() => {
            const about = document.getElementById("about");
            if (about) {
              about.scrollIntoView({ behavior: "smooth" });
            }
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            marginTop: "3rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "30px",
            height: "50px",
            border: "2px solid #ddd",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <motion.div
            animate={{ y: [5, 15, 5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{
              width: "4px",
              height: "8px",
              backgroundColor: "#ddd",
              borderRadius: "2px",
              position: "absolute",
              top: "8px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
