import { useState } from "react";
import favicon from "../ASSETS/R.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-l from-blue-400 via-blue-600 to-blue-800 text-white    ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
        
          <div className="flex items-center gap-3">
            <img
              src={favicon}
              alt="logo"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-2xl font-bold text-blue-300">Raghul</span>
          </div>

        
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-gray-300">
              <li>
                <a className="hover:text-white transition  text-black" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white transition  text-black" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="hover:text-white transition  text-black" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-white transition  text-black  t" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

       
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

       
        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <a href="#about" onClick={() => setOpen(false)} className="hover:text-white transition block py-2">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setOpen(false)} className="hover:text-white transition block py-2">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setOpen(false)} className="hover:text-white transition block py-2">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white transition block py-2">
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