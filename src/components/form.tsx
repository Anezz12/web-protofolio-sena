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
    startYear: 2019,
    endYear: 2022,
  },
  {
    alt: "SMP 1 MOJOTENGAH",
    company: "SMP 1 MOJOTENGAH",
    // role: "Software Engineer",
    startYear: 2016,
    endYear: 2019,
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                  "Ask me any questions anonymously, and I will try my best to answer them."
                }
              </span>
              <Button text="Ask me anything" />
            </div>
            <div className="mt-4">
              <span className="text-zinc-500 text-sm">
                {
                  "sometimes I like to write blogs to help me learn to memorize easily."
                }
              </span>
              <Button text="Visit my blog" />
            </div>
          </div>
        </div>
        <div className="space-y-10 md:space-y-0">
          <div className="rounded-2xl border p-6 border-zinc-700/40">
            <div className="flex flex-col md:flex-col  gap-2">
              <div className="mb-5 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap opacity-20"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
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
