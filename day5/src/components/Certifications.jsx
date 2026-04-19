const Certifications = () => {
  const certs = [
    {
      title: "AI-Powered A/B Testing",
      issuer: "Certification",
      image: "/cert-ab-testing.jpg",
    },
    {
      title: "Data Analytics with AI",
      issuer: "Certification",
      image: "/cert-data-analytics.jpg",
    },
    {
      title: "Prompt Engineering",
      issuer: "Certification",
      image: "/cert-prompt-engineering.jpg",
    },
    {
      title: "Python Developer",
      issuer: "Certification",
      image: "/cert-python.jpg",
    },
    {
      title: "Web Development",
      issuer: "Certification",
      image: "/cert-webdev.jpg",
    },
    {
      title: "Chakravyuha Hackathon",
      issuer: "Participation",
      image: "/cert-hackathon.jpg",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden border border-purple-200/50 dark:border-purple-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
