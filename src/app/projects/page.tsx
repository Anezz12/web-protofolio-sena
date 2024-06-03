import Link from "next/link";

export default function Page() {
  const projects = [
    {
      name: "Landing Page ",
      description: "Personal Website",
      url: "https://harsena-argretya.vercel.app",
      // logo: "/logos/pejuang-kode.svg",
    },
    {
      name: "Amikom Connect",
      description: "Full Stack Web App",
      url: "https://amikomconnect.vercel.app",
      // logo: "/logos/rumah-berbagi.svg",
    },
    {
      name: "Mistar FotoCopy",
      description: "business web",
      url: "https://mistarfotocopy.vercel.app",
      // logo: "/logos/wbw.svg",
    },
    {
      name: "Rental Ps",
      description: "Full Stack Desktop App",
      url: "https://github.com/Anezz12/PsRental",
      // logo: "/logos/kawalcovid19.webp",
    },
  ];
  return (
    <section className="sm:px-8 mt-16 sm:mt-32">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <header className="text-4xl font-bold leading-[3rem] sm:leading-normal sm:text-5xl mt-20 dark:text-black">
            {"Things I’ve made trying to put my dent in the universe."}
          </header>
          <p className="text-zinc-400 mx-auto leading-8">
            {
              "As a junior Web Development, I love creating simple web projects, but these are the projects I'm most proud of. Many of them are open source, so if you see something that interests you, take a look at the code and contribute if you have ideas to improve it."
            }
          </p>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 mt-20 mb-40">
            {projects.map((project) => (
              <li
                key={project.name}
                className="group relative flex flex-col items-start"
              >
                {/* <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img src={project.logo} alt="" className="h-8 w-8" />
                  </div> */}
                <h2 className="mt-6 text-base font-semibold dark:text-zinc-800 text-zinc-100">
                  <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 dark:bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">{project.name}</span>
                  </Link>
                </h2>
                <p className="relative z-10 mt-2 text-sm dark:text-zinc-600 text-zinc-400">
                  {project.description}
                </p>
                <p className="relative z-10 mt-6 flex text-sm font-medium dark:text-zinc-500 transition group-hover:text-teal-600 text-zinc-200">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none"
                  >
                    <path
                      d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="ml-2">
                    {project.url.replace(/^https?:\/\//, "")}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
