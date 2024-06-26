import Link from "next/link";
import React from "react";

export default function LinkA() {
  return (
    <div>
      <article className="md:grid md:grid-cols-4 md:items-baseline mt-20  py-5 border-zinc-800 dark:border-zinc-100">
        <div className="md:col-span-3 group relative flex flex-col items-start">
          <h2 className="text-base font-semibold tracking-tight dark:text-zinc-800 text-zinc-100">
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 dark:bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
            <Link href="/blog/what-react">
              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">
                Apa Itu React? Apakah Dia Itu Library atau Framework?
              </span>
            </Link>
          </h2>
          <time
            dateTime="2018-12-28T00:00:00.000Z"
            className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-400 text-zinc-500 pl-3.5"
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full dark:bg-zinc-200 bg-zinc-500"></span>
            </span>
            Juni 1, 2024
          </time>
          <p className="relative z-10 mt-2 text-sm dark:text-zinc-600 text-zinc-400">
            React adalah salah satu teknologi yang sangat populer di kalangan
            pengembang web saat ini. Tapi, apa sebenarnya React itu? Apakah dia
            sebuah library atau framework? Mari kita bahas lebih dalam.
          </p>
          <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-600 dark:text-teal-400"
          >
            Read article
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <time
          dateTime="2018-12-28T00:00:00.000Z"
          className="mt-1 hidden md:block relative z-10 order-first mb-3  items-center text-sm text-zinc-400 dark:text-zinc-500"
        >
          Juni 1, 2024
        </time>
      </article>
      {/* 2 */}
      <article className="md:grid md:grid-cols-4 md:items-baseline mt-5  py-5 border-zinc-800 dark:border-zinc-100">
        <div className="md:col-span-3 group relative flex flex-col items-start">
          <h2 className="text-base font-semibold tracking-tight dark:text-zinc-800 text-zinc-100">
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 dark:bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
            <Link href="/blog/what-react">
              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">
                Apa Itu React? Apakah Dia Itu Library atau Framework?
              </span>
            </Link>
          </h2>
          <time
            dateTime="2018-12-28T00:00:00.000Z"
            className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-400 text-zinc-500 pl-3.5"
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full dark:bg-zinc-200 bg-zinc-500"></span>
            </span>
            Juni 1, 2024
          </time>
          <p className="relative z-10 mt-2 text-sm dark:text-zinc-600 text-zinc-400">
            React adalah salah satu teknologi yang sangat populer di kalangan
            pengembang web saat ini. Tapi, apa sebenarnya React itu? Apakah dia
            sebuah library atau framework? Mari kita bahas lebih dalam.
          </p>
          <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-600 dark:text-teal-400"
          >
            Read article
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <time
          dateTime="2018-12-28T00:00:00.000Z"
          className="mt-1 hidden md:block relative z-10 order-first mb-3  items-center text-sm text-zinc-400 dark:text-zinc-500"
        >
          Juni 1, 2024
        </time>
      </article>
      {/* 3 */}
      <article className="md:grid md:grid-cols-4 md:items-baseline mt-5  py-5 border-zinc-800 dark:border-zinc-100">
        <div className="md:col-span-3 group relative flex flex-col items-start">
          <h2 className="text-base font-semibold tracking-tight dark:text-zinc-800 text-zinc-100">
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 dark:bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
            <Link href="/blog/what-react">
              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">
                Apa Itu React? Apakah Dia Itu Library atau Framework?
              </span>
            </Link>
          </h2>
          <time
            dateTime="2018-12-28T00:00:00.000Z"
            className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-400 text-zinc-500 pl-3.5"
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full dark:bg-zinc-200 bg-zinc-500"></span>
            </span>
            Juni 1, 2024
          </time>
          <p className="relative z-10 mt-2 text-sm dark:text-zinc-600 text-zinc-400">
            React adalah salah satu teknologi yang sangat populer di kalangan
            pengembang web saat ini. Tapi, apa sebenarnya React itu? Apakah dia
            sebuah library atau framework? Mari kita bahas lebih dalam.
          </p>
          <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-600 dark:text-teal-400"
          >
            Read article
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <time
          dateTime="2018-12-28T00:00:00.000Z"
          className="mt-1 hidden md:block relative z-10 order-first mb-3  items-center text-sm text-zinc-400 dark:text-zinc-500"
        >
          Juni 1, 2024
        </time>
      </article>
    </div>
  );
}
