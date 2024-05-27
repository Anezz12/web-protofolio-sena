import Form from "@/components/form";
import Avatar from "@/components/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Page({ className }: { className?: string }) {
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
    <main className="text-satart pt-32 px-1 max-w-[900px] ">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-4xl">
            <Avatar />
            <h1 className="text-4xl font-bold leading-[3rem] sm:leading-normal sm:text-5xl">
              {
                "<Harsena /> man with enthusiasm for JavaScript, React, and NextJs."
              }
            </h1>

            <p className="mt-6 text-base text-zinc-600 leading-loose">
              {
                "a self-taught Indonesian programmer. since 2022, I've been learning programming. Now a software engineering student with more web development experience."
              }
            </p>
          </div>
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
          <Form />
        </div>
      </div>
    </main>
  );
}
