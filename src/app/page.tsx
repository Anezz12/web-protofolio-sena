import Form from "@/components/form";
import Header from "@/components/header";
import Avatar from "@/components/image";
import Social from "@/components/social-media";

import React from "react";

export default function Page() {
  return (
    <main className="text-satart pt-32 px-1 max-w-[800px] ">
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
          <Social />
          <Form />
        </div>
      </div>
    </main>
  );
}
