import React from "react";
import Header from "./COMPONENTS/Header";
import Home from "./COMPONENTS/Home";
import Footer from "./COMPONENTS/Footer";
import Projects from "./COMPONENTS/Projects";
import About from "./COMPONENTS/About";
import Skills from "./COMPONENTS/Skills";
import Contact from "./COMPONENTS/Contact";

export default function App() {
  return (
    <div>
      <Header />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  );
}
