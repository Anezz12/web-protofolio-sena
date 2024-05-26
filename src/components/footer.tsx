"use client";
import Link from "next/link";
import { navLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-auto text-center text-zinc-400 py-5 px-24 border-t border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-5 mb-5 text-white">
          {navLink.map((link, index) => {
            return (
              <Link
                className="hover:text-cyan-400"
                href={link.href}
                key={index}
                aria-label={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <small className="flex flex-col md:flex-row items-end gap-5 mb-5 text-white">
          &copy; 2023 Harsena Argretya All right reserved.
        </small>
      </div>
    </footer>
  );
}
