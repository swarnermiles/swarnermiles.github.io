"use client";

import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={1}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={2}
      >
        <FeaturedProjects />
      </motion.div>
    </>
  );
}
