import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import whatsapp from "../ASSETS/whatsapp.png";
import linkedin from "../ASSETS/linkedin.png";
import github from "../ASSETS/github.png";
import mail from "../ASSETS/mail.png"
import location from "../ASSETS/location.png"
import phone from "../ASSETS/telephone.png"





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

  emailjs
    .send(
      'service_b8gbqql',
      'template_dzstpef',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      {
        publicKey: '0dN5cVvFyzmUpIZs1',
      }
    )
    .then(
      () => {
        alert("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send message ❌");
      }
    );
};
 

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#1a2845] to-[#0a1628] text-white py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
   
      <div className="absolute top-10 right-10 w-72 h-72 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 md:w-72 md:h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Contact{"  "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-400">
            Let's work together on your next project
          </p>
          <div className="w-15 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
    
          <div className="space-y-6 md:space-y-8 hover:shadow-md shadow-blue-500">
            <div className="bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
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
                  <div className="w-12 h-12 md:w-14 md:h-14  rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-white text-2xl md:text-3xl"><img src={mail} /></span>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:raghul.m2.2002@gmail.com"
                      className="text-sm md:text-base text-white hover:text-cyan-400 transition-colors duration-300 break-all"
                    >
                      ABC@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14  rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-white text-2xl md:text-3xl"><img src={phone} /></span>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+123456789"
                      className="text-sm md:text-base text-white hover:text-cyan-400 transition-colors duration-300"
                    >

                      +91 7539951358
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14  rounded-xl flex items-center justify-center shadow-lg  group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-white text-2xl md:text-3xl"><img src={location} /></span>
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

         
            <div className="bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Connect With Me
              </h3>
              <div className="flex gap-3 md:gap-4 flex-wrap">
                <a
                  href="https://linkedin.com/in/raghul-m-792982245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12  rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg text-white text-xl md:text-2xl"
                  aria-label="LinkedIn"
                >
                  <img src={linkedin}/>
                </a>

                <a
                  href="https://github.com/raghul202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12  rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg text-white text-xl md:text-2xl"
                  aria-label="GitHub"
                >
                  <img src={github}/>
                </a>

                <a
                  href="mailto:raghul.m2.2002@gmail.com"
                  className="w-11 h-11 md:w-12 md:h-12  rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg text-white text-xl md:text-2xl"
                  aria-label="Email"
                >
                  <img src={mail}/>
                </a>

                <a
                  href="https://wa.me/917539951358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12  rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg text-white text-xl md:text-2xl"
                  aria-label="WhatsApp"
                >
                  <img src={whatsapp} />
                </a>
              </div>
            </div>
          </div>


          <div className="bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
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
                         shadow-lg shadow-blue-500/50 hover:shadow-cyan-500/80">Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}