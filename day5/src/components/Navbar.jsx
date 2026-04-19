import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 z-50 border-b border-gray-200/50 dark:border-gray-700/50 supports-[backdrop-filter:blur()]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Jay Harish P
          </div>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50">
          <ul className="px-4 py-2 space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
