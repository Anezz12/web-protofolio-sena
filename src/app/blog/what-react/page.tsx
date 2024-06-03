import Link from "next/link";

export default function Page() {
  return (
    <section className="sm:px-8 mt-16 sm:mt-32">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <Link href="/blog">
            <div className="group mb-8 mt-20 md:ml-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 dark:ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
              >
                <path
                  d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className=" text-zinc-500">Juni 1, 2024</span>
          </Link>
          <main className="text-zinc-400 mx-auto leading-8 mb-20">
            <header className="text-3xl font-bold leading-[3rem] sm:leading-normal sm:text-5xl mt-10 mb-20 text-white dark:text-black">
              {"Apa Itu React? Apakah Dia Itu Library atau Framework?"}
            </header>
            <h1 className="mb-2 text-xl text-white dark:text-black">
              Pengantar
            </h1>
            <p className="text-zinc-400 mx-auto leading-8">
              {
                "Mungkin untuk kamu yang sudah lama berkecimpung dalam dunia pembuatan website sudah tidak asing lagi mendengar kata "
              }
              <Link
                href="https://react.dev/"
                className=" underline text-cyan-400"
              >
                React
              </Link>
              . Apa itu React? Singkatnya, React merupakan sebuah library dari
              JavaScript yang digunakan untuk membuat user interface.
            </p>
            <h1 className="mt-20 mb-5 text-xl text-white dark:text-black">
              Library vs. Framework: Apa Bedanya?
            </h1>
            <p>
              Untuk memahami apakah React adalah library atau framework, penting
              untuk memahami perbedaan antara keduanya:
            </p>
            <ul className="px-12 list-disc mt-5 ">
              <li>
                Library: Sebuah library adalah kumpulan fungsi dan modul yang
                dirancang untuk melakukan tugas-tugas spesifik. Library
                memberikan pengembang kebebasan dan fleksibilitas untuk
                mengintegrasikan fungsi-fungsi tersebut ke dalam aplikasi mereka
                sesuai dengan kebutuhan. Library tidak menentukan arsitektur
                atau alur kerja aplikasi.
              </li>
              <li className="mt-5">
                Framework: Sebuah framework adalah kerangka kerja yang
                memberikan struktur dasar dan aturan-aturan tertentu yang harus
                diikuti oleh pengembang. Framework mengatur alur kerja aplikasi
                dan sering kali mencakup lebih banyak fitur built-in untuk
                menangani berbagai aspek pengembangan aplikasi, seperti
                manajemen state, routing, dan komunikasi dengan server.
              </li>
            </ul>
            <h1 className="mt-20 mb-5 text-xl text-white dark:text-black">
              React: Library atau Framework?
            </h1>
            <p>
              React secara resmi dikategorikan sebagai library. Ini karena React
              hanya menangani lapisan tampilan (view layer) dari aplikasi, yang
              berarti bahwa pengembang masih memiliki kebebasan dan kontrol
              penuh untuk memilih dan mengatur alat dan teknologi lainnya yang
              akan digunakan dalam aplikasi mereka. Dengan kata lain, React
              tidak memaksakan arsitektur atau pola desain tertentu kepada
              pengembang.
            </p>
            <br />
            <p>
              Namun, dengan ekosistem besar yang mendukung React, seperti React
              Router untuk routing dan Redux atau Context API untuk manajemen
              state, banyak pengembang merasakan bahwa menggunakan React bisa
              memberikan pengalaman yang mirip dengan menggunakan framework.
            </p>
          </main>
        </div>
      </div>
    </section>
  );
}
