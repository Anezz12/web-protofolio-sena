import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <div>
      <Link href="/">
        <div className="w-16 h-16 flex justify-center rounded-full mb-7">
          <Image
            width={100}
            height={100}
            src="/avatar.jpeg"
            alt="Gambar"
            className="rounded-full"
          />
        </div>
      </Link>
    </div>
  );
}
