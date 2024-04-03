import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Experience">Parallax</section>
      <section>Services</section>
      <section id="Projects">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Interests">Parallax</section>
      <section>Interests</section>
      <section id="About">Parallax</section>
      <section>About</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
