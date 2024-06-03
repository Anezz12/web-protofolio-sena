"use client";

import { useTheme } from "@/ui/theme-context";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 1) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-5 md:right-72 right-2 right z-50  dark:bg-white transition-opacity duration-300 dark:text-black w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 bg-gray-950 text-white ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
