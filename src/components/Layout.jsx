"use client";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DarkModeSwitch from "./DarkModeSwitch";
import BannerAlert from "./BannerAlert"; // ✅ Import here

export default function Layout() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true; // Default to dark
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <BannerAlert /> {/* ✅ Add the banner just inside the wrapper */}
      <DarkModeSwitch dark={dark} setDark={setDark} />
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <main
          style={{
            flexGrow: 1,
            backgroundColor: "var(--bg)",
            color: "var(--text)",
            transition: "background-color 0.3s, color 0.3s",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
