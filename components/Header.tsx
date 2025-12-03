"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-t border-b border-accent-cyan/30 ${
        isScrolled ? "bg-gradient-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container px-6 py-4 mx-auto sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/2.png"
              alt="Fund Rise Capital Logo"
              width={220}
              height={70}
              className="object-contain w-auto h-10 md:h-16"
            />
            <div className="w-px h-10 md:h-16 bg-accent-cyan"></div>
            <div className="flex flex-col">
              <span className="text-xs leading-tight text-text-secondary">
                powered by
              </span>
              <span className="text-base font-bold leading-tight text-white">
                uplyft capital
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
