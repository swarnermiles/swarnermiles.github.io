"use client";

import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects.json";
import ProjectArticle from "../components/ProjectArticle";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h2 style={{ padding: "2rem", color: "red" }}>Project not found</h2>;
  }

  return (
    <section style={{ background: "var(--bg)", paddingTop: "2rem" }}>
      <button
        onClick={() => navigate("/projects")}
        style={{
          marginLeft: "2rem",
          marginBottom: "2rem",
          padding: "0.5rem 1rem",
          backgroundColor: "transparent",
          color: "var(--text)",
          border: "1px solid var(--text)",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "0.9rem",
        }}
      >
        ← Back to Projects
      </button>

      <ProjectArticle
        title={project.title}
        content={project.content}
        image={project.image}
        images={project.images || []}
        video={project.video}
        authorBlock={
          <>
            <strong>Project Hours:</strong> {project.hours || 10} hrs <br />
            <strong>Tags:</strong> {project.tags?.join(", ") || "N/A"}
          </>
        }
      />
    </section>
  );
}
