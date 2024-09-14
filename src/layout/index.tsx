"use client";

import { useState, useEffect } from "react";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { themesList, type Theme } from "@/constants/themesList";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (themesList.includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as Theme;
    setTheme(selectedTheme);
    document.documentElement.classList.remove(...themesList);
    document.documentElement.classList.add(selectedTheme);
  };

  return (
    <div>
      <Navbar />
      {/*<select
        value={theme}
        onChange={handleThemeChange}
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded"
      >
        {themesList.map(themeOption => (
          <option
            key={themeOption}
            value={themeOption}
          >
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </option>
        ))}
      </select>*/}
      <main className="min-h-screen min-w-full bg-primary text-primary">
        {children}
      </main>
      <Footer />
    </div>
  );
}
