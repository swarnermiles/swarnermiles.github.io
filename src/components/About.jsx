"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        color: "#fff",
        overflow: "hidden",
        backgroundImage: "url('/photos/site/about-bg.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#222", // fallback
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 2rem",
      }}
    >
      <div style={{ maxWidth: "600px", zIndex: 1 }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Me</h2>
        <p style={{ fontSize: "1.1rem", color: "#eee" }}>
          I'm a mechanical engineering student with a passion for building
          real-world tools. Whether it's a suspension dynamometer, a DIY
          anodizing station, or a musical performance, I love combining
          creativity and engineering to solve problems and tell stories.
        </p>
      </div>
    </section>
  );
}
