import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Background from "@/assets/background.png";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Veluwedigital",
    template: "%s - Veluwedigital",
  },
  description: "Come and view my websites!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10">
          <Image
            src={Background}
            alt="background image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}