import React from "react";
import Header from "./Header";
import Projects from "./Project/Projects";
import Skill from "./Skill";
import AboutMe from "../pages/AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Skill />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
