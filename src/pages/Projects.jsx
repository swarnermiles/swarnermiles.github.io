"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import TypewriterHeading from "../components/TypewriterHeading";
import CountUpOnView from "../components/CountUpOnView";

const allTags = [
  "PLTW 12th Grade",
  "PLTW 11th Grade",
  "chemistry",
  "manual machining",
  "rocketry",
  "education",
  "engineering",
  "outreach",
  "fun",
  "CAD",
  "physics",
  "design-for-manufacture",
  "recently uploaded",
];

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    return selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.every((tag) => project.tags?.includes(tag))
        );
  }, [selectedTags]);

  const totalHours = useMemo(
    () =>
      filteredProjects.reduce((sum, project) => sum + (project.hours || 0), 0),
    [filteredProjects]
  );

  return (
    <section style={{ paddingLeft: "6rem", paddingRight: "2rem" }}>
      <TypewriterHeading />

      {/* Tag Filter Buttons */}
      <div
        style={{
          margin: "2rem 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
        }}
      >
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            style={{
              padding: "0.4rem 0.9rem",
              borderRadius: "999px",
              fontSize: "0.85rem",
              cursor: "pointer",
              backgroundColor: selectedTags.includes(tag)
                ? "#9911ff"
                : "transparent",
              border: `1px solid var(--text)`,
              color: "var(--text)",
              transition: "all 0.2s ease",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.15,
            },
          },
        }}
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          maxWidth: "1200px",
          margin: "4rem auto",
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              summary={project.summary}
              link={`/projects/${project.slug}`}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Hours Counter */}
      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <CountUpOnView end={totalHours} />
      </div>
    </section>
  );
}
