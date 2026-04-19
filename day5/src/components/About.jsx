const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Passionate full stack developer currently enhancing skills in
              modern web technologies. Building responsive, scalable
              applications with React, Node.js, and MongoDB. Committed to clean
              code, best practices, and continuous learning.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Projects
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  3+
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">⭐</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Stars
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium">
                  50+
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl shadow-2xl">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <img
                  src="/src/assets/hero.png"
                  alt="Jay Harish P"
                  className="w-64 h-64 object-cover rounded-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
