const Projects = () => {
  const projects = [
    {
      title: "Student Dashboard",
      description:
        "Full-stack student management system with JWT authentication. Features CRUD operations, protected routes, Context API for auth state, and soft deletes.",
      tech: [
        "React 19",
        "Vite 8",
        "Node.js",
        "Express 5",
        "MongoDB",
        "JWT",
        "bcryptjs",
      ],
      link: "#",
      image: "/student.png",
    },
    {
      title: "Humanet Prototype",
      description:
        "AI-powered human network platform (in progress). Building scalable architecture with modern frontend and backend technologies.",
      tech: ["React", "Node.js", "In Progress"],
      link: "https://techlearnersgj.github.io/Humanetx/",
      image: "/humanet.png",
    },
    {
      title: "Traffic Awareness Website",
      description:
        "Interactive road safety platform with quizzes, traffic rules database, pledge system, and awareness campaigns. Mobile-first responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://sriharish00u.github.io/Tac/",
      image: "/tac.png",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:underline"
                >
                  View Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
