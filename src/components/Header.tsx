import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "./ContactButton";

export default function Header() {
  return (
    <div className="shadow p-3 flex items-center gap-4">

     

      <Link href="/" className="flex gap-3 items-center w-max">
        {/* <Image src={logo} alt="logo" width={60} height={60} /> */}
        <p className="cursor-pointer flex speech-bubble font-bold text-[18px] items-center px-3">
          <span className="text-blue-700">V</span>
          eluweDigital
          <span className="text-blue-700 text-4xl relative -top-2">.</span>
        </p>
      </Link>

       <div className="hidden sm:flex justify-between w-full px-6">

      {/* MID-section */}
      <nav className="flex gap-6">
        <p>Projecten</p>
        <p>Prijzen</p>
        <p>Informatie</p>
        <p>FAQ</p>
      </nav>

      {/* Contact */}
      <ContactButton/>

          </div>
    </div>
  );
}