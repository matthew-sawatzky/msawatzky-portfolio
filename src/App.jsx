import { useLayoutEffect } from "react";
import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills"
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer"
import emailjs from "emailjs-com";

emailjs.init("4llMy19sim247RR1u");


function App() {
  useLayoutEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const sections = document.querySelectorAll("#root > section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top >= window.innerHeight) {
        section.setAttribute("data-reveal", "");
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

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
