import { ExternalLink, Github, Code } from "lucide-react";

const projectsData = [
  {
    id: "ishara",
    title: "Ishara",
    description:
      "Full-stack platform for recording and translating Arabic Sign Language across various regional dialects. Hand landmarks are tracked client-side with MediaPipe.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "Drizzle ORM",
      "PostgreSQL",
      "MediaPipe",
    ],
    link: "",
    github: "https://github.com/mnoNoor/Ishara",
  },
  {
    id: "uni-store",
    title: "Uni Store",
    description:
      "Full-stack marketplace where students list, browse, and sell used textbooks. Built JWT authentication with HTTP-only cookies, role-based access.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Cloudinary",
      "JWT",
      "Tailwind",
      "i18next",
      "Swagger",
    ],
    link: "https://book-store-ftd7.onrender.com/",
    github: "https://github.com/mnoNoor/Uni-Store",
  },
  {
    id: "telegram-bot",
    title: "Telegram Moderation Bot",
    description:
      "Regex-based spam and obfuscated-content detection, running live in a 10,000+ member community, with a MongoDB-backed admin dashboard.",
    tech: ["Node.js", "Telegraf.js", "MongoDB", "Regex"],
    link: "https://github.com/mnoNoor/UPM-Admin-Bot",
    github: "https://github.com/mnoNoor/UPM-Admin-Bot",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-3 sm:p-6 flex flex-col h-full">
      <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 min-h-8 sm:min-h-14 flex items-start">
        {project.title}
      </h3>

      <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-4 line-clamp-3 sm:line-clamp-none min-h-12 sm:min-h-18">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4 min-h-10 sm:min-h-12 items-start">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-[10px] sm:text-xs font-medium bg-blue-100 text-blue-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 sm:pt-4 border-t border-gray-100">
        {project.link && project.link !== project.github ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-blue-600 font-medium transition-colors hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md group h-6 sm:h-8"
          >
            <span>Demo</span>
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </a>
        ) : project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-blue-600 font-medium transition-colors hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md group h-6 sm:h-8"
          >
            <span>View Project</span>
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </a>
        ) : (
          <div className="flex items-center gap-1 sm:gap-2 text-gray-400 h-6 sm:h-8">
            <Code className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs">In Development</span>
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="inline-flex items-center gap-1 sm:gap-2 text-gray-500 text-xs sm:text-sm transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md group h-6 sm:h-8"
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Code</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const projectCount = projectsData.length;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div
          className={`
          grid gap-6 max-w-7xl mx-auto
          ${projectCount === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""}
          ${projectCount === 2 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2" : ""}
          ${projectCount === 1 ? "grid-cols-1" : ""}
        `}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projectCount === 3 && (
          <div className="hidden md:block lg:hidden"></div>
        )}
      </div>
    </section>
  );
}
