import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#1a2845] to-[#0a1628] text-white py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 md:w-72 md:h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-400">
            Let's work together on your next project
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              {/* Contact Details */}
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:raghul.m2.2002@gmail.com"
                      className="text-sm md:text-base text-white hover:text-cyan-400 transition-colors duration-300 break-all"
                    >
                      raghul.m2.2002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+917539951358"
                      className="text-sm md:text-base text-white hover:text-cyan-400 transition-colors duration-300"
                    >
                      +91 7539951358
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Location</p>
                    <p className="text-sm md:text-base text-white">
                      Erode, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Connect With Me
              </h3>
              <div className="flex gap-3 md:gap-4 flex-wrap">
                <a
                  href="https://linkedin.com/in/raghul-m-792982245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/50"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/raghul202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg shadow-gray-700/50"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href="mailto:raghul.m2.2002@gmail.com"
                  className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg shadow-red-500/50"
                  aria-label="Email"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>

                <a
                  href="https://wa.me/917539951358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg shadow-green-500/50"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base bg-[#0a1628]/80 border border-blue-500/30 rounded-lg 
                           text-white placeholder-gray-500 
                           focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20
                           transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base bg-[#0a1628]/80 border border-blue-500/30 rounded-lg 
                           text-white placeholder-gray-500 
                           focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20
                           transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base bg-[#0a1628]/80 border border-blue-500/30 rounded-lg 
                           text-white placeholder-gray-500 
                           focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20
                           transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-blue-500 to-cyan-500 
                         text-white font-semibold rounded-lg
                         hover:from-blue-600 hover:to-cyan-600 
                         transform hover:scale-105 
                         transition-all duration-300 
                         shadow-lg shadow-blue-500/50 hover:shadow-cyan-500/80
                         flex items-center justify-center gap-2"
              >
                Send Message
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
