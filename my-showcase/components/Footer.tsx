"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-100 py-6 mt-auto flex flex-col md:flex-row justify-between items-center text-orange-700 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="container mx-auto px-4 text-center md:text-left">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
        <Link
          href="/rules"
          className="mt-3 md:mt-0 px-4 text-center bg-orange-200 text-orange-800 font-semibold rounded-full py-1 hover:bg-orange-300 transition-all duration-200 shadow-md"
        >
          Rules
        </Link>
      </div>
    </footer>
  );
}
