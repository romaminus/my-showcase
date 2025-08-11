"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-orange-100 border-b-4 border-orange-300 shadow-lg fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-orange-800 drop-shadow-md">
          My Portfolio
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="bg-orange-200 text-orange-800 font-semibold px-4 py-1.5 rounded-full hover:bg-orange-300 transition-all duration-200 shadow-md">
            Home
          </Link>
          <Link href="/works" className="bg-orange-200 text-orange-800 font-semibold px-4 py-1.5 rounded-full hover:bg-orange-300 transition-all duration-200 shadow-md">
            Works
          </Link>
          <Link href="/contact" className="bg-orange-200 text-orange-800 font-semibold px-4 py-1.5 rounded-full hover:bg-orange-300 transition-all duration-200 shadow-md">
            Contact
          </Link>
          <Link href="/cv" className="bg-orange-200 text-orange-800 font-semibold px-4 py-1.5 rounded-full hover:bg-orange-300 transition-all duration-200 shadow-md">
            My CV
          </Link>
        </nav>
      </div>
    </header>
  );
}
