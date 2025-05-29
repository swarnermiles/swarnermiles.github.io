"use client";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";

const navItems = [
  { path: "/", label: "Home" },
  { path: "#about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/resume", label: "Resume" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const theme = document.body.getAttribute("data-theme");
    setIsDark(theme === "dark");
  }, []);

  const handleClick = async (e, path) => {
    if (path === "#about") {
      e.preventDefault();
      if (location.pathname !== "/") {
        await navigate("/");
        setTimeout(() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const aboutSection = document.getElementById("about");
        if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (path === "/") {
      e.preventDefault();
      if (location.pathname !== "/") {
        await navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <aside className={`${styles.sidebarNav} ${isDark ? styles.dark : ""}`}>
      {navItems.map(({ path, label }) => {
        const isActive =
          (path === "/" && location.pathname === "/") ||
          (path.startsWith("/") && location.pathname === path);

        const isHovered = hovered === label || isActive;
        const hoverClass = isDark
          ? styles.linkHoverDark
          : styles.linkHoverLight;

        return (
          <NavLink
            key={label}
            to={path === "#about" ? "/" : path}
            onClick={(e) => handleClick(e, path)}
            className={`${styles.link} ${isHovered ? hoverClass : ""}`}
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
            end={path === "/"}
          >
            {label}
          </NavLink>
        );
      })}
    </aside>
  );
}
