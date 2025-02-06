import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import About from "./components/About.jsx";
import Projects from "./components/projects.jsx";
const App = () => {
  return (
    <div>
      <div>
        <Header />
        <main className="px-20">
          <Card />
          <About />
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default App;
