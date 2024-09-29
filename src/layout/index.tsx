"use client";

import { useState, useEffect } from "react";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { themesList, type Theme } from "@/constants/themesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem("theme") as Theme,
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (themesList.includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    const currentIndex = themesList.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themesList.length;
    const newTheme = themesList[nextIndex];
    setTheme(newTheme);
    document.documentElement.classList.remove(...themesList);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div>
      <Navbar />
      <button
        onClick={handleThemeChange}
        className={`fixed bottom-4 left-4 z-50 p-2 rounded-full bg-primary text-primary border ${theme === "light" ? "border-gray-900 " : "border-primary"} shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary`}
        aria-label="Toggle theme"
      >
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          className="rounded w-6"
        />
      </button>
      <main className="min-h-screen min-w-full bg-primary text-primary">
        {children}
      </main>
      <Footer />
    </div>
  );
}
