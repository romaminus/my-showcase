"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          My Portfolio
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/works" className="hover:text-blue-600">Works</Link>
          <Link href="/rules" className="hover:text-blue-600">Rules</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/error" className="hover:text-blue-600">Error Page</Link>
        </nav>

      </div>
    </header>
  );
}
