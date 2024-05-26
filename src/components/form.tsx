import Image from "next/image";
import Button from "./buttom";

interface Experience {
  alt: string;
  company: string;
  // role: string;
  startYear: number;
  endYear: number | "Present";
}

const experiences: Experience[] = [
  {
    alt: "Universitas Amikom Yogyakarta",
    company: "Universitas Amikom Yogyakarta",
    // role: "Senior Front-End Engineer",
    startYear: 2022,
    endYear: "Present",
  },
  {
    alt: "Sma 1 Mojotengah",
    company: "SMA 1 Mojotengah",
    // role: "Senior Software Engineer 2",
    startYear: 2018,
    endYear: 2024,
  },
  {
    alt: "SMP 1 MOJOTENGAH",
    company: "SMP 1 MOJOTENGAH",
    // role: "Software Engineer",
    startYear: 2017,
    endYear: 2018,
  },
];
export default function Form() {
  return (
    <section className="sm:px-0 sm:pb-20 pb-20 mt-24 md:mt-28">
      <div className="mx-auto max-w-xl grid md:gap-y-20 gap-y-10 lg:max-w-none md:grid-cols-2 gap-10">
        <div className="space-y-10 md:space-y-0">
          <div className=" rounded-2xl border p-6 border-zinc-700/40">
            <div className="flex flex-row md:flex-row gap-2 ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="h-6 w-6 flex-none"
              >
                <path
                  d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                ></path>
                <path
                  d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                  className="stroke-zinc-400 dark:stroke-zinc-500"
                ></path>
              </svg>
              <p>{"Ask me anything"}</p>
            </div>
            <div className="mt-4">
              <span className=" text-zinc-500 text-sm">
                {
                  "Anonymously ask me any questions you might have, and I'll try my best to answer them publicly."
                }
              </span>
              <Button text="Ask me anything" />
            </div>
            <div className="mt-4">
              <span className="text-zinc-500 text-sm">
                {
                  "I used to share my answers in Twitter/X. But now I publish them as podcast episodes."
                }
              </span>
              <Button text="Listen My answer" />
            </div>
          </div>
        </div>
        <div className="space-y-10 md:space-y-0">
          <div className="rounded-2xl border p-6 border-zinc-700/40">
            <div className="flex flex-col md:flex-col  gap-2">
              <div className="mb-5 flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none"
                >
                  <path
                    d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                    className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                  />
                  <path
                    d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                    className="stroke-zinc-400 dark:stroke-zinc-500"
                  />
                </svg>
                <p>Study</p>
              </div>
              <div>
                <ol className="space-y-5">
                  {experiences.map((experience, index) => (
                    <li key={index} className="">
                      <dl className="flex-wrap space-y-3">
                        <dt className="sr-only">Company</dt>
                        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {experience.company}
                        </dd>
                        <dt className="sr-only">Role</dt>
                        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                          {/* {experience.role} */}
                        </dd>
                        <dt className="sr-only">Date</dt>
                        <dd
                          className="ml-auto text-xs text-zinc-500 dark:text-zinc-400"
                          aria-label={`${experience.startYear} until ${
                            experience.endYear === "Present"
                              ? "Present"
                              : experience.endYear
                          }`}
                        >
                          <time dateTime={experience.startYear.toString()}>
                            {experience.startYear}
                          </time>
                          <span aria-hidden="true">—</span>
                          {experience.endYear === "Present" ? (
                            <time dateTime={experience.endYear.toString()}>
                              {experience.endYear}
                            </time>
                          ) : (
                            <time dateTime={experience.endYear.toString()}>
                              {experience.endYear}
                            </time>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
