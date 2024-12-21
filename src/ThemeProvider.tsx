"use client";
import { useState, useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    // On initial load, check the user's saved theme
    const savedTheme = localStorage.getItem("theme") || "default";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Function to cycle through themes: default -> light -> dark
  const toggleTheme = () => {
    const newTheme = theme === "default" ? "light" : theme === "light" ? "dark" : "default";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <button onClick={toggleTheme} style={{display: "none"}}>
        Switch to {theme === "default" ? "Light" : theme === "light" ? "Dark" : "Default"} Theme
      </button>
      {children}
    </div>
  );
}
