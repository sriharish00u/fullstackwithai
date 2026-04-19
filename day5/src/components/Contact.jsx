const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700">
            <div className="w-20 h-20 bg-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              arishexim011@gmail.com
            </p>
            <a
              href="mailto:arishexim011@gmail.com"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
            >
              Send Message
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
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700">
            <div className="w-20 h-20 bg-gray-800 dark:bg-gray-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white dark:text-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">@sriharish00u</p>
            <a
              href="https://github.com/sriharish00u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
            >
              View Profile
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
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              LinkedIn
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Jay Harish P
            </p>
            <a
              href="https://www.linkedin.com/in/jay-harish-p-0935b2309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
            >
              Connect
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
      </div>
    </section>
  );
};

export default Contact;
