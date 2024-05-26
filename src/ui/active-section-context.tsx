"use client";
import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext, useEffect } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName | ""; // Mengizinkan string kosong sebagai nilai
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName | "">>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName | "">("");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  useEffect(() => {
    // Mendapatkan URL saat ini dari objek window.history
    const currentPath = window.location.pathname;

    // Memetakan URL ke nama seksi yang sesuai
    if (currentPath === "/about") {
      setActiveSection("About");
    } else if (currentPath === "/projects") {
      setActiveSection("Projects");
    } else if (currentPath === "/talks") {
      setActiveSection("Talks");
    } else if (currentPath === "/uses") {
      setActiveSection("Uses");
    } else {
      setActiveSection(""); // Jika tidak ada rute yang cocok, set activeSection ke string kosong
    }
  }, []); // Efek ini hanya akan dijalankan satu kali saat komponen dimuat

  // we need to keep track of this to disable the observer temporarily when user clicks on a link
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
