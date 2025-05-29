"use client";

import { useEffect } from "react";
import styles from "./FeaturedProjects.module.css";
import projects from "../data/projects.json";

export default function FeaturedProjects() {
  useEffect(() => {
    const initMotion = async () => {
      const { scroll, animate } = await import("motion");
      const items = document.querySelectorAll(`.${styles.imgContainer}`);

      scroll(
        animate(`.${styles.imgGroup}`, {
          transform: ["none", `translateX(-${(items.length - 1) * 100}vw)`],
        }),
        { target: document.querySelector(`.${styles.imgGroupContainer}`) }
      );

      scroll(animate(`.${styles.progress}`, { scaleX: [0, 1] }), {
        target: document.querySelector(`.${styles.imgGroupContainer}`),
      });
    };

    initMotion();
  }, []);

  const featured = projects.slice(0, 3);

  return (
    <>
      <article id="gallery" className={styles.gallery}>
        <header className={styles.featuredHeader}>
          <h2 className={styles.featuredTitle}>Featured Projects</h2>
        </header>

        <section className={styles.imgGroupContainer}>
          <div className={styles.stickyWrapper}>
            <ul className={styles.imgGroup}>
              {featured.map((project) => (
                <li
                  key={project.slug}
                  className={styles.imgContainer}
                  onClick={() =>
                    (window.location.href = `/projects/${project.slug}`)
                  }
                >
                  <div className={styles.projectCardFrame}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                    <h3>{project.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className={styles.footer}>
          <button
            onClick={() => (window.location.href = "/projects")}
            className={styles.viewAllBtn}
          >
            View All Projects →
          </button>
        </footer>
      </article>

      <div className={styles.progress}></div>
    </>
  );
}
