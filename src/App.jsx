import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills"
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer"
import emailjs from "emailjs-com";

emailjs.init("4llMy19sim247RR1u");


function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
