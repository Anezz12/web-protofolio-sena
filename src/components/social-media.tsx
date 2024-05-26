import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Social({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/harsena-argretya/",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      link: "https://github.com/Anezz12",
      label: "Github",
      Icon: FaGithub,
    },
    {
      link: "https://instagram.com/argretya",
      label: "Instagram",
      Icon: FaInstagram,
    },
  ];
  return (
    <section>
      <div className="flex items-center gap-5 text-white mt-10">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Social;
