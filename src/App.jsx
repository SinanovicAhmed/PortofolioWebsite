import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen snap-y snap-mandatory overflow-scroll no-scrollbar">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
