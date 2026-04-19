const Skills = () => {
  const skills = {
    frontend: ["React 19", "Vite", "Tailwind CSS", "React Router"],
    programming: ["JavaScript (ES6+)", "Node.js", "Express", "Python"],
    tools: ["MongoDB", "JWT Auth", "Git", "VS Code", "Postman"],
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">
                  {category === "frontend"
                    ? "🎨"
                    : category === "programming"
                      ? "💻"
                      : "⚙️"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="bg-white dark:bg-gray-700 px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-600"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
