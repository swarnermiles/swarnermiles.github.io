import { motion } from "framer-motion";

export default function ProjectGallery({ images }) {
  return (
    <div style={{ display: "grid", gap: "1rem", padding: "2rem" }}>
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt=""
          style={{ width: "100%", borderRadius: "12px" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          loading="lazy"
        />
      ))}
    </div>
  );
}
