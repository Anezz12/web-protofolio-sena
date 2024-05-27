export default function Page() {
  return (
    <section className="flex flex-col items-center pt-56 max-w-[900px]">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-2xl">
            <h1 className="text-4xl font-bold leading-[3rem] sm:leading-normal sm:text-5xl">
              {"Things I’ve made trying to put my dent in the universe."}
            </h1>
            <p className="text-zinc-500 mx-auto leading-8">
              {
                "As a junior Web Development, I love creating simple web projects, but these are the projects I'm most proud of. Many of them are open source, so if you see something that interests you, take a look at the code and contribute if you have ideas to improve it."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
