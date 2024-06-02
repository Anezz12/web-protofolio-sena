"use client";
import React, { useEffect, useState } from "react";
import Avatar from "./image";

function Logo() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 5) {
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
    <div
      className={`fixed top-4  z-50 transition-opacity duration-300 ml-16 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
    >
      <Avatar />
    </div>
  );
}

export default Logo;
