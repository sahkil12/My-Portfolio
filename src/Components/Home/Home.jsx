import About from "../../Section/About/About";
import Contact from "../../Section/Contact/Contact";
import Hero from "../../Section/Hero/Hero";
import Projects from "../../Section/Projects/Projects";
import Skills from "../../Section/Skills/Skills";

const Home = () => {
     return (
          <div>
               <section id="home">
                    <Hero />
               </section>

               <section id="about">
                    <About />
               </section>

               <section id="skills">
                    <Skills />
               </section>

               <section id="projects">
                    <Projects />
               </section>

               <section id="contact">
                    <Contact />
               </section>
          </div>
     );
};

export default Home;