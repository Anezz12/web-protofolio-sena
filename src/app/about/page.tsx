import Social from "@/components/social-media";
import Image from "next/image";
export default function Page() {
  return (
    <section className="pt-32 px-1 max-w-[1100px]">
      <div className="flex lg:flex-row flex-col-reverse  justify-between">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <h1 className="text-4xl font-bold leading-[3rem] sm:leading-normal sm:text-5xl">
              {
                "I'm Harsena Argretya, an indonesia Developer Living in Yogyakarta ID."
              }
            </h1>
            <div className="mx-auto text-zinc-400 leading-8 mt-10 mb-20">
              <p>
                {
                  "Hello I am Sena. a self-taught Indonesian programmer. since 2022, I've been learning programming. Now a software engineering student with more web development experience."
                }
              </p>
              <br />
              <p>
                {
                  "I'am a 4th semester student majoring in Informatics👨🏻‍💻, I decided to pursue my passion for programming. I studied full-stack web development. My favorite part of programming is the problem-solving aspect🔥"
                }
              </p>
              <br />
              <p>
                {
                  "I love the feeling of finally figuring out a solution to a problem. My core stack is React, Next.js, Node.js, MYSQL and MongoDB . I'am also familiar with Javascript and I'am starting to learn Typescript as well. I'am always looking to learn new technologies. I'am currently studying to develop my potential."
                }
              </p>
              <br />
              <p>
                {
                  "When I'm not coding, I enjoy playing video games⚔️, watching movies🍿. I also enjoy learning new things. I am currently learning about history I'm also learning how to use LInux OS."
                }
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center relative">
          <div className=" w-72 h-80 space-y-3 relative">
            <Image
              width={300}
              height={1000}
              src="/avatar.jpeg"
              alt="Gambar"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
          <Social />
        </div>
      </div>
    </section>
  );
}
