import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Globe,
  Brain,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Zustand",
      "TanStack Query",
      "i18next",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Zod / Joi"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Mongoose", "Drizzle ORM", "Redis"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git/GitHub",
      "Docker",
      "Postman",
      "Cloudinary",
      "Swagger",
      "Helmet/CSP",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 flex flex-col items-center bg-gray-50/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-400 text-lg leading-none">
                        •
                      </span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
