import React from "react";
import { FaPaperPlane } from "react-icons/fa6";

export default function Button({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mt-4 text-white">
        <button
          className="group flex items-center py-2 px-3 gap-2 text-sm md:text-sm h-[2rem] w-[10rem] bg-zinc-800 rounded-lg outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105"
          type="submit"
        >
          {text}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  );
}
