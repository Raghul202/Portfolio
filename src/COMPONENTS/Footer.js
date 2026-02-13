import favicon from "../ASSETS/R.png";
import linkedin from "../ASSETS/linkedin.png";
import github from "../ASSETS/github.png";
import mail from "../ASSETS/mail.png";
import whatsapp from "../ASSETS/whatsapp.png";
import location from "../ASSETS/location.png"

export default function Footer() {

  return (
    <footer className="bg-gradient-to-b from-[#0a1628] to-[#050d1a] text-white border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12  rounded-lg flex items-center justify-center shadow-lg ">
                <span className="text-xl md:text-2xl font-bold text-white">
                  <img src={favicon} alt="Raghul's logo" />
                </span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Raghul M
                </h3>
                <p className="text-xs md:text-sm text-gray-400">
                  Frontend Developer
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">
              Building responsive and interactive web experiences with modern
              technologies.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-xs md:text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-xs md:text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></span>
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-xs md:text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></span>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xs md:text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Connect
            </h4>
            <div className="flex gap-2 md:gap-3 flex-wrap mb-4 md:mb-6">
              <a
                href="https://linkedin.com/in/raghul-m-792982245"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10
                         rounded-lg flex items-center justify-center 
                         hover:border-cyan-400 hover:scale-110 hover:-translate-y-1
                         transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
              </a>

              <a
                href="https://github.com/raghul202"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 
                         rounded-lg flex items-center justify-center 
                         hover:border-cyan-400 hover:scale-110 hover:-translate-y-1
                         transition-all duration-300 shadow-lg "
              >
                <img src={github} alt="GitHub" className="w-10 h-10" />
              </a>

              <a
                href="mailto:raghul.m2.2002@gmail.com"
                className="w-9 h-9 md:w-10 md:h-10 
                         rounded-lg flex items-center justify-center 
                         hover:border-cyan-400 hover:scale-110 hover:-translate-y-1
                         transition-all duration-300 shadow-lg"
                aria-label="Email"
              >
                <img src={mail} alt="Email" className="w-10 h-10" />
              </a>

              <a
                href="https://wa.me/917539951358"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 
                         rounded-lg flex items-center justify-center 
                         hover:border-cyan-400 hover:scale-110 hover:-translate-y-1
                         transition-all duration-300 shadow-lg"
                aria-label="WhatsApp"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-10 h-10" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-xs md:text-sm text-gray-400 flex items-center gap-2">
                <span className="text-lg w-9 h-9 md:w-10 md:h-10 
                         rounded-lg flex items-center justify-center 
                         hover:border-cyan-400 hover:scale-110 hover:-translate-y-1
                         transition-all duration-300 shadow-lg "><img src={location} alt="Location icon"/></span>
                Erode, Tamil Nadu
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                <a
                  href="mailto:raghul.m2.2002@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-300 break-all"
                >
                  raghul.m2.2002@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    </footer>
  );
}
