import Image from "next/image";

export default function Page() {
  return (
    <section className="sm:px-8 mt-16 sm:mt-32">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <header className="text-4xl font-bold leading-[3rem] sm:leading-normal sm:text-5xl mt-20">
            {"No programmer who doesn't have a dream computer setup."}
          </header>
          <p className="text-zinc-500 mx-auto leading-8">
            {
              "When I was in high school, I really wanted to have a pc setup until I had to buy prints of pc images and then put them in my wallet, alhamduliilah when I was in college I started to be able to set up a pc, even though it took 4 semesters to collect one item."
            }
          </p>
          <div className="mt-16 text-zinc-500">
            <h1 className="mb-5 text-white">{"The beginning"}</h1>
            <p className="text-zinc-500 mb-5">
              {
                "When I was in high school I wanted to have my pc / leptop setup to print, so that I could be motivated to save money."
              }
            </p>
            <Image
              width={300}
              height={300}
              alt="gambar"
              src="/fb.jpg"
              className="rounded-lg"
            />
            <p className="mt-5">
              {
                "The photo above is where 4 years ago I wanted to have a pc setup"
              }
            </p>
            <p className="text-white mt-10">{"And the time comes"}</p>
            <p className="mt-5">
              {
                "this is my new computer setup where I usually learn coding, solve bugs, play games with friends, watch Netflix basically I am very comfortable when in this room, this is my most comfortable place "
              }
            </p>
            <div className="flex md:flex-row gap-4 mt-10 mb-20 flex-col">
              <Image
                width={300}
                height={300}
                alt="gambar"
                src="/pc1.jpeg"
                className="rounded-lg"
              />
              <Image
                width={500}
                height={500}
                alt="gambar"
                src="/pc2.jpeg"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
