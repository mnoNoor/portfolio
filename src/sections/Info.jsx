import { useState, useEffect } from "react";
import { Bot, Sparkles, Target } from "lucide-react";

export default function Info() {
  const roles = ["Software Engineer", "Web Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const highlights = [
    {
      icon: <Bot className="w-5 h-5" />,
      text: "Building useful telegram Bots",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "Always learning, always growing",
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "User-focused problem solver",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-20"></div>
        <div className="bg-white rounded-lg p-6 md:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <span className="flex h-2 w-2">
              <span className="h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mohammed Noor
            </span>
          </h1>

          <div className="h-16 mb-6">
            <div className="text-2xl sm:text-3xl md:text-4xl text-gray-700">
              I'm a{" "}
              <span className="font-bold text-blue-600 transition-all duration-500 border-b-4 border-blue-200 pb-1">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>
                Software engineering student with an insatiable curiosity for
                technology and innovation.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>
                Crafting digital solutions that have a purpose and a positive
                impact.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>
                Design well-structured frontend and backend applications
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="group bg-white p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
