import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#0a1628] to-[#1a2845] text-white py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 md:w-72 md:h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          {/* Left: Avatar/Image */}
          <div className="flex justify-center order-1 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl shadow-blue-500/50">
                {/* Avatar illustration */}
                <div className="w-full h-full bg-gradient-to-br from-[#1a2845] to-[#0f1f3a] flex items-center justify-center">
                  <div className="text-7xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    R
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="space-y-6 order-2 md:order-2">
            <div className="bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Frontend developer experienced in HTML, CSS, JavaScript (ES6),
                and React.js, focused on building responsive, efficient, and
                user-friendly web interfaces.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                What I Do
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Creating user-friendly and dynamic websites</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Building responsive interfaces with modern design</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Optimizing for performance and user experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
