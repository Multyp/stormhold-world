"use client";

import { useState, useEffect } from "react";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { themesList, type Theme } from "@/constants/themesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

/**
 * Layout component that wraps the entire application.
 * It manages the theme state and provides a theme toggle button.
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  // State to manage the current theme
  const [theme, setTheme] = useState<Theme>("light");

  // Effect to initialize the theme from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run this code on the client side - Fix for build error "localstorage is not defined"
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (themesList.includes(savedTheme)) {
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
      } else {
        setTheme("light");
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  // Effect to update localStorage when the theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only access localStorage on the client side - same issue
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  /**
   * Handles the theme change when the toggle button is clicked.
   * Cycles through the available themes in the themesList.
   */
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
      {/* Theme toggle button */}
      <button
        onClick={handleThemeChange}
        className={`fixed bottom-4 left-4 z-50 p-2 rounded-full bg-primary text-primary border ${
          theme === "light" ? "border-gray-900 " : "border-primary"
        } shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary`}
        aria-label="Toggle theme"
      >
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          className="rounded w-6"
        />
      </button>
      {/* Main content area */}
      <main className="min-h-screen min-w-full bg-primary text-primary">
        {children}
      </main>
      <Footer />
    </div>
  );
}
