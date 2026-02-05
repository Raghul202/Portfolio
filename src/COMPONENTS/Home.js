import React from "react";
import vid from "../ASSETS/bg.mp4";

export default function Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        src={vid}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#1e3a5f]/80 to-[#0a1628]/90"></div>

      {/* Animated particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[15%] w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div
          className="absolute top-[20%] right-[20%] w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-[60%] left-[25%] w-1 h-1 bg-blue-300 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[70%] right-[30%] w-2 h-2 bg-blue-500 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-[30%] left-[70%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-[80%] left-[60%] w-1 h-1 bg-blue-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <div className="animate-fadeInUp max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Raghul
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
            Frontend Developer
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            I build responsive and interactive web experiences
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-blue-400/50 rounded-lg font-semibold hover:bg-blue-400/10 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
          <div className="w-1 sm:w-1.5 h-2 sm:h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
