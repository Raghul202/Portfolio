import html from "../ASSETS/html.png";
import vscode from "../ASSETS/vscode.svg";
import git from "../ASSETS/git.png";
import css from "../ASSETS/css.png";
import js from "../ASSETS/js.png";
import react from "../ASSETS/react.png"; 
import bootstrap from "../ASSETS/bootstrap.png";
import github from "../ASSETS/github.png";



export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#1a2845] via-[#0a1628] to-[#1a2845] text-white py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-400">
            Technologies and tools I work with
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Languages
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* HTML5 */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg  group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <img src={html} alt="HTML5 logo" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  HTML5
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-[99%] animate-pulse"></div>
              </div>      
            </div>

            {/* CSS3 */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg  group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <img src={css} alt="CSS3 logo" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  CSS3
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-[95%] animate-pulse"></div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg  group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <img src={js} alt="JavaScript logo" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  JavaScript
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-[80%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Framework/Library */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Framework/Library
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* React.js */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg  group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <img src={react} alt="React logo" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  React.js
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[75%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Styling & UI */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Styling & UI
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Responsive Design */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  📱
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Responsive Design
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[90%] animate-pulse"></div>
              </div>
            </div>

            {/* Flexbox */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  📐
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Flexbox
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-[90%] animate-pulse"></div>
              </div>
            </div>

            {/* CSS Grid */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg bg-gradient-to-br from-indigo-500 to-purple-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  ⚡
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  CSS Grid
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[85%] animate-pulse"></div>
              </div>
            </div>

            {/* Bootstrap */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg  group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <img src={bootstrap} alt="Bootstrap" className="w-6 h-6" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Bootstrap
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-[88%] animate-pulse"></div>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg bg-gradient-to-br from-cyan-500 to-teal-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  🎯
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Tailwind CSS
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-[85%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Tools
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Git */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg  group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <img src={git} alt="Git logo" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Git
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-full w-[100%] animate-pulse"></div>
              </div>
            </div>

            {/* GitHub */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <img src={github} alt="GitHub" className="w-6 h-6" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  GitHub
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full w-[100%] animate-pulse"></div>
              </div>
            </div>

            {/* VS Code */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg  group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <img src={vscode} alt="VS Code logo" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  VS Code
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-[100%] animate-pulse"></div>
              </div>
            </div>

            {/* Vercel */}
            <div className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg bg-gradient-to-br from-gray-800 to-black group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  ▲
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Vercel
                </h4>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gray-800 to-black rounded-full w-[100%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
