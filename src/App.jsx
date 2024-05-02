import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Experience">
        <Parallax type="experience" />
      </section>
      <Experience />
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Projects />
      {/* <section id="Academics">
        <Parallax />
      </section> */}
      {/* <section>Interests</section> */}
      <section id="About">
        <About />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
