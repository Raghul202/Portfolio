import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0a1628] via-[#1a2845] to-[#0a1628] text-white border-b border-blue-500/20 sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/favicon.ico"
              alt="logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg shadow-lg shadow-blue-500/50 ring-2 ring-blue-400/30 hover:scale-110 transition-transform duration-300"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Raghul
            </span>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8 text-sm lg:text-base text-gray-300">
              <li>
                <a
                  className="relative hover:text-white transition-colors duration-300 group"
                  href="#about"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  className="relative hover:text-white transition-colors duration-300 group"
                  href="#skills"
                >
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  className="relative hover:text-white transition-colors duration-300 group"
                  href="#projects"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  className="relative hover:text-white transition-colors duration-300 group"
                  href="#contact"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden text-2xl text-gray-300 hover:text-white transition-all duration-300 hover:rotate-90"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a
                  href="#about"
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition flex items-center gap-2 py-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  About
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a
                  href="#skills"
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition flex items-center gap-2 py-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Skills
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition flex items-center gap-2 py-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Projects
                </a>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition flex items-center gap-2 py-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
