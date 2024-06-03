import LinkA from "@/components/link-article";

export default function Page() {
  return (
    <section className="sm:px-8 mt-16 sm:mt-32">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <header className="text-4xl font-bold leading-[3rem] sm:leading-normal sm:text-5xl mt-20 dark:text-black">
            {
              "Proof that I have learned, sometimes I have to write to understand something."
            }
          </header>
          <LinkA />
        </div>
      </div>
    </section>
  );
}
