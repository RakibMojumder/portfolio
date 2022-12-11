import React from "react";
import Header from "./Header";
import Projects from "./Project/Projects";
import Skill from "./Skill";
import AboutMe from "../pages/AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Blogs from "./Blog/Blogs";

const Home = () => {
  return (
    <>
      <Header />
      <Skill />
      <Projects />
      <AboutMe />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
