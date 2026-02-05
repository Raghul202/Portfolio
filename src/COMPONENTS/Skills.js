import React, { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        {
          name: "HTML5",
          icon: "🌐",
          color: "from-orange-500 to-red-500",
          level: 90,
        },
        {
          name: "CSS3",
          icon: "🎨",
          color: "from-blue-500 to-cyan-500",
          level: 85,
        },
        {
          name: "JavaScript",
          icon: "⚡",
          color: "from-yellow-500 to-orange-500",
          level: 80,
        },
      ],
    },
    {
      category: "Framework/Library",
      items: [
        {
          name: "React.js",
          icon: "⚛️",
          color: "from-cyan-500 to-blue-500",
          level: 75,
        },
      ],
    },
    {
      category: "Styling & UI",
      items: [
        {
          name: "Responsive Design",
          icon: "📱",
          color: "from-purple-500 to-pink-500",
          level: 88,
        },
        {
          name: "Flexbox",
          icon: "📐",
          color: "from-green-500 to-emerald-500",
          level: 90,
        },
        {
          name: "CSS Grid",
          icon: "⚡",
          color: "from-indigo-500 to-purple-500",
          level: 85,
        },
        {
          name: "Bootstrap",
          icon: "🅱️",
          color: "from-purple-600 to-indigo-600",
          level: 80,
        },
        {
          name: "Tailwind CSS",
          icon: "🎯",
          color: "from-cyan-500 to-teal-500",
          level: 85,
        },
      ],
    },
    {
      category: "Tools",
      items: [
        {
          name: "Git",
          icon: "📦",
          color: "from-orange-600 to-red-600",
          level: 75,
        },
        {
          name: "GitHub",
          icon: "🐙",
          color: "from-gray-700 to-gray-900",
          level: 80,
        },
        {
          name: "VS Code",
          icon: "💻",
          color: "from-blue-600 to-cyan-600",
          level: 90,
        },
        {
          name: "Vercel",
          icon: "▲",
          color: "from-gray-800 to-black",
          level: 75,
        },
      ],
    },
  ];

  // State to animate bars on mount
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

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

        {/* Skills Grid */}
        <div className="space-y-12">
          {skills.map((group, i) => (
            <div key={i}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {group.category}
                </span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-[#1a2845]/80 to-[#0f1f3a]/80 
                               border border-blue-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl 
                               shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg 
                                   bg-gradient-to-br ${skill.color} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
                      >
                        {skill.icon}
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: loaded ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
