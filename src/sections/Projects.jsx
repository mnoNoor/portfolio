const projects = [
  {
    title: "MyStore",
    description:
      "A Frontend e-commerce application built with React and Tailwind CSS, a fully responsive and visually appealing online store interface.",
    tech: ["React", "Tailwind", "Zustand", "Shadcn UI"],
    link: "https://github.com/mnoNoor/Store",
  },
  {
    title: "Admin Bot",
    description:
      "A Telegram bot monitors messages and blocks any inappropriate messages, even if they’re coded.",
    tech: ["Node.js", "Telegraf.js", "Regex"],
    link: "https://github.com/mnoNoor/UPM-Admin-Bot",
  },
  {
    title: "Hall of Fame",
    description:
      "A frontend website that lets you add your favorite character to a wide selection of amazing ones.",
    tech: ["React", "Tailwind", "Shadcn UI"],
    link: "https://github.com/mnoNoor/Hall-of-Fame",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-700 grow mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-blue-600 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
