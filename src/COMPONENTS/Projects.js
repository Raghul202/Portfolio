import React from "react";
import js from "../ASSETS/js.png";
import react from "../ASSETS/react.png";
import html from "../ASSETS/html.png";
import css from "../ASSETS/css.png";
import bootstrap from "../ASSETS/bootstrap.png";
import tailwind from "../ASSETS/tailwing.png";

import creamlab from "../ASSETS/creamlab.png";
import pawprints from "../ASSETS/pawprints.png";
import streamflix from "../ASSETS/streamflix.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#0a1628] via-[#1a2845] to-[#0a1628] text-white py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-400">
            Some of the things I've built recently
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* ================= CARD 1 ================= */}
          <div
            className="group rounded-2xl bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 
                       border border-blue-500/20 backdrop-blur-xl
                       shadow-2xl hover:shadow-cyan-500/30
                       hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500
                       overflow-hidden"
          >
            {/* Image + Overlay */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={creamlab}
                alt="Cream Lab"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75"
              />

              {/* Overlay with gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent
                           flex items-center justify-center gap-3 sm:gap-4
                           opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <a
                  href="https://cream-lab-chi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
                           text-white font-semibold
                           hover:from-cyan-400 hover:to-blue-400 
                           shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80
                           transform hover:scale-110 transition-all duration-300
                           flex items-center gap-2"
                >
                  Live
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                <a
                  href="https://github.com/Raghul202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full border-2 border-white/40
                           text-white font-semibold
                           hover:bg-white/10 hover:border-white/70
                           transform hover:scale-110 transition-all duration-300
                           flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Cream Lab
              </h3>

              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <img
                  src={html}
                  alt="HTML"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(255,165,0,0.7)] 
                           hover:drop-shadow-[0_0_15px_rgba(255,165,0,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={css}
                  alt="CSS"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(0,150,255,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(0,150,255,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={js}
                  alt="JavaScript"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(255,220,0,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(255,220,0,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={tailwind}
                  alt="Tailwind"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(0,255,255,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={react}
                  alt="React"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(0,200,255,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(0,200,255,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="group rounded-2xl bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 
                       border border-blue-500/20 backdrop-blur-xl
                       shadow-2xl hover:shadow-cyan-500/30
                       hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500
                       overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={pawprints}
                alt="Paw Prints"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent
                           flex items-center justify-center gap-3 sm:gap-4
                           opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <a
                  href="https://paw-prints-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
                           text-white font-semibold
                           hover:from-cyan-400 hover:to-blue-400 
                           shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80
                           transform hover:scale-110 transition-all duration-300
                           flex items-center gap-2"
                >
                  Live
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                <a
                  href="https://github.com/Raghul202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full border-2 border-white/40
                           text-white font-semibold
                           hover:bg-white/10 hover:border-white/70
                           transform hover:scale-110 transition-all duration-300
                           flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Paw Prints
              </h3>

              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <img
                  src={html}
                  alt="HTML"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(255,165,0,0.7)] 
                           hover:drop-shadow-[0_0_15px_rgba(255,165,0,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={css}
                  alt="CSS"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(0,150,255,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(0,150,255,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={js}
                  alt="JavaScript"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(255,220,0,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(255,220,0,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={tailwind}
                  alt="Tailwind"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(0,255,255,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={react}
                  alt="React"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(0,200,255,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(0,200,255,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* ================= CARD 3 ================= */}
          <div
            className="group rounded-2xl bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 
                       border border-blue-500/20 backdrop-blur-xl
                       shadow-2xl hover:shadow-red-500/30
                       hover:-translate-y-3 hover:border-red-400/50 transition-all duration-500
                       overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={streamflix}
                alt="Streamflix"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent
                           flex items-center justify-center gap-3 sm:gap-4
                           opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <a
                  href="https://raghul202.github.io/Streamflix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full bg-gradient-to-r from-red-500 to-red-600 
                           text-white font-semibold
                           hover:from-red-400 hover:to-red-500 
                           shadow-lg shadow-red-500/50 hover:shadow-red-500/80
                           transform hover:scale-110 transition-all duration-300
                           flex items-center gap-2"
                >
                  Live
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                <a
                  href="https://github.com/Raghul202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full border-2 border-white/40
                           text-white font-semibold
                           hover:bg-white/10 hover:border-white/70
                           transform hover:scale-110 transition-all duration-300
                           flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Streamflix
              </h3>

              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <img
                  src={html}
                  alt="HTML"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(255,165,0,0.7)] 
                           hover:drop-shadow-[0_0_15px_rgba(255,165,0,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={css}
                  alt="CSS"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(0,150,255,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(0,150,255,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
                <img
                  src={bootstrap}
                  alt="Bootstrap"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 drop-shadow-[0_0_10px_rgba(160,100,255,0.7)]
                           hover:drop-shadow-[0_0_15px_rgba(160,100,255,1)]
                           transform hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
