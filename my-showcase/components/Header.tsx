"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-orange-100 border-b-4 border-orange-300 shadow-lg fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-orange-800 drop-shadow-md">
          My Portfolio
        </Link>
        
        {/* Основне меню для великих екранів */}
        <nav className="hidden md:flex space-x-4">
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

        {/* Кнопка-бургер для мобільних екранів */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-orange-800 focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                // Іконка закриття (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                // Іконка бургера (три лінії)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Мобільне меню, яке відображається/ховається в залежності від стану */}
      <nav
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-orange-100 border-t-2 border-orange-300 p-4`}
      >
        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            onClick={toggleMobileMenu} // Закриваємо меню після натискання
            className="block text-center bg-orange-200 text-orange-800 font-semibold px-4 py-1.5 rounded-full hover:bg-orange-300 transition-all duration-200 shadow-md"
          >
            Home
          </Link>
          <Link
            href="/works"
            onClick={toggleMobileMenu}
            className="block text-center bg-orange-200 text-orange-800 font-semibold px-4 py-1.5 rounded-full hover:bg-orange-300 transition-all duration-200 shadow-md"
          >
            Works
          </Link>
          <Link
            href="/contact"
            onClick={toggleMobileMenu}
            className="block text-center bg-orange-200 text-orange-800 font-semibold px-4 py-1.5 rounded-full hover:bg-orange-300 transition-all duration-200 shadow-md"
          >
            Contact
          </Link>
          <Link
            href="/cv"
            onClick={toggleMobileMenu}
            className="block text-center bg-orange-200 text-orange-800 font-semibold px-4 py-1.5 rounded-full hover:bg-orange-300 transition-all duration-200 shadow-md"
          >
            My CV
          </Link>
        </div>
      </nav>
    </header>
  );
}