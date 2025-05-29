"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ title, summary, image, link }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles.projectCard}
      onClick={() => navigate(link)}
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.02 },
      }}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <motion.div
          className={styles.overlay}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          {summary}
        </motion.div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </motion.div>
  );
}
