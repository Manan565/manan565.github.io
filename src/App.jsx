import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import About from "./components/About.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/Contact.jsx";
const App = () => {
  return (
    <div>
      <div>
        <Header />
        <main className="px-20">
          <Card />

          <section id="about">
            <About />
          </section>

          <section id="project">
            <Projects />
          </section>

          <section id="contacts">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
