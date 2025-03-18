// src/App.jsx
import Navbar from "./components/Navbar";
import HeroAndIntro from "./components/HeroAndIntro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <HeroAndIntro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
