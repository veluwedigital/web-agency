// Header.tsx
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "./ContactButton";

export default function Header() {
  return (
    <div className="shadow p-3 flex items-center justify-between gap-4 text-white">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex gap-3 items-center w-max">
          {/* <Image src={logo} alt="logo" width={60} height={60} /> */}
          <p className="cursor-pointer flex speech-bubble font-bold text-[18px] items-center px-3">
            <span className="text-blue-700">V</span>
            eluweDigital
            <span className="text-blue-700 text-4xl relative -top-2">.</span>
          </p>
        </Link>

        {/* MID-section */}
        <nav className="hidden sm:flex gap-6 text-white">
          <Link href='/posts'>Projecten</Link>
          <Link href='/about'>Over ons</Link>
        </nav>
      </div>

      {/* Contact */}
      <ContactButton />
    </div>
  );
}