import NavBar from './sections/NavBar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx'; 
import Contact from './sections/Contact.jsx';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      
      <Hero />
     
      <section id="about">
        <About />
      </section>
       
      <section id="experience">
        <Experience />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App
