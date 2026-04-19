const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}
    >
      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">Welcome to my portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Jay Harish P
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Full Stack Developer <span className="text-purple-400">(Learning)</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              View My Projects
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border border-purple-400/50 hover:border-purple-400 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
