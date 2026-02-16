import { ExternalLink, Github, Code } from "lucide-react";

const projectsData = [
  {
    id: "mystore",
    title: "MyStore",
    description:
      "Frontend e-commerce app built with React and Tailwind. Fully responsive with a polished store UI.",
    tech: ["React", "Tailwind", "Zustand", "Shadcn UI"],
    link: "https://my-store-five-lyart.vercel.app/",
    github: "https://github.com/mnoNoor/Store",
  },
  {
    id: "admin-bot",
    title: "Admin Bot",
    description:
      "Telegram moderation bot that detects and blocks inappropriate messages — even when obfuscated.",
    tech: ["Node.js", "Telegraf.js", "Regex"],
    link: "https://github.com/mnoNoor/UPM-Admin-Bot",
  },
  {
    id: "hall-of-fame",
    title: "Hall of Fame",
    description:
      "Frontend site for adding and exploring favorite characters from a curated collection.",
    tech: ["React", "Tailwind", "Shadcn UI"],
    link: "https://hall-of-fame-vert.vercel.app/",
    github: "https://github.com/mnoNoor/Hall-of-Fame",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {project.title}
      </h3>

      <p className="text-gray-700 grow mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="inline-flex items-center gap-2 text-blue-600 font-medium transition-colors hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md group"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        ) : (
          <div className="flex items-center gap-2 text-gray-400">
            <Code className="w-4 h-4" />
            <span className="text-sm">In Development</span>
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="inline-flex items-center gap-2 text-gray-500 text-sm transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md group"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
