import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
