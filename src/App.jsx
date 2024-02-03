import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Portofolio from "./pages/Portofolio";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen snap-y snap-mandatory overflow-scroll no-scrollbar">
        <Hero />
        <About />
        <Portofolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
