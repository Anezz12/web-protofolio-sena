import LinkA from "@/components/link-article";

export default function Page() {
  return (
    <section className="sm:px-8 mt-16 sm:mt-32">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="text-4xl font-bold leading-[3rem] sm:leading-normal sm:text-5xl mt-20 dark:text-black">
              {"Proof that I have learned."}
            </header>
            <p className="text-zinc-400 mx-auto leading-8 mt-10">
              {
                "because sometimes I have to write things down so I remember what I learned."
              }
            </p>
            <LinkA />
          </div>
        </div>
      </div>
    </section>
  );
}
