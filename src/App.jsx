import Header from "./components/Header.jsx"; 
import Card from "./components/Card.jsx"; 
import About from "./components/About.jsx"; 
import Projects from "./components/Projects.jsx"; 
import Contact from "./components/Contact.jsx"; 
import Experience from "./components/ExperienceCard.jsx"; 

const App = () => {   
  return (     
    <div className="bg-black-200 min-h-screen">       
      <div>         
        <Header />         
        <main className="px-20">           
          <Card />            
          <section id="about">             
            <About />           
          </section>           
          <section id ="experiences">             
            <Experience/>             
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