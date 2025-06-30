import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState("dark");

  useEffect(() => {
    localStorage.setItem("theme", "dark");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }, []);
  
  return (
    <button    >
    </button>
  );
};
