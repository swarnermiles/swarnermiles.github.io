"use client";

import { motion } from "framer-motion";
import * as Switch from "@radix-ui/react-switch";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useEffect } from "react";

function IconThumb({ dark }) {
  return (
    <motion.div
      key={dark ? "moon" : "sun"}
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      style={{
        width: 22,
        height: 22,
        borderRadius: "9999px",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
      }}
    >
      {dark ? "🌙" : "☀️"}
    </motion.div>
  );
}

export default function DarkModeSwitch({ dark, setDark }) {
  useEffect(() => {
    document.body.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            style={{
              position: "fixed",
              top: "1rem",
              right: "1rem",
              zIndex: 1000,
            }}
          >
            <Switch.Root
              checked={dark}
              onCheckedChange={setDark}
              style={{
                all: "unset",
                width: 52,
                height: 30,
                backgroundColor: dark ? "#444" : "#ccc",
                borderRadius: "9999px",
                position: "relative",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "background-color 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: dark ? "flex-end" : "flex-start",
                padding: "0 4px",
              }}
            >
              <IconThumb dark={dark} />
            </Switch.Root>
          </div>
        </Tooltip.Trigger>

        <Tooltip.Content
          side="bottom"
          align="center"
          sideOffset={5}
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            color: "#fff",
            padding: "6px 10px",
            fontSize: "0.75rem",
            borderRadius: "4px",
            userSelect: "none",
          }}
        >
          Toggle {dark ? "light" : "dark"} mode
          <Tooltip.Arrow offset={5} style={{ fill: "rgba(0,0,0,0.75)" }} />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
