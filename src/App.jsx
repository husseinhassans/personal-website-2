import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <div>
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
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Academics">
        <Parallax />
      </section>
      <section>Interests</section>
      <section id="About">Parallax</section>
      <section>About</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
