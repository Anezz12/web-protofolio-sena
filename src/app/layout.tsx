import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider, {
  ActiveSectionContext,
} from "@/ui/active-section-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Harsena Argretya",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ActiveSectionContextProvider>
        <body
          className={`${inter.className} md:bg-gray-950 bg-zinc-900 text-white min-h-screen`}
        >
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </body>
      </ActiveSectionContextProvider>
    </html>
  );
}
