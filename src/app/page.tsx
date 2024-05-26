import Header from "@/components/header";
import ActiveSectionContextProvider from "@/ui/active-section-context";
import React from "react";

export default function Page() {
  return (
    <main className="text-satart pt-32 px-5 pl-16 max-w-2xl lg:max-w-5xl">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Harsena Argretya
        </h1>
        <p className="mt-6 text-base text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          accusamus sit, consectetur aut error quia eligendi ut ipsum quod earum
          nobis quam unde temporibus exercitationem voluptatum accusantium eos.
          Dolores, iure?
        </p>
      </div>
    </main>
  );
}
