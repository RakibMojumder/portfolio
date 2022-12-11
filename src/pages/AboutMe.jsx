import React from "react";
import myImg from "../assets/img/about-img.png";

const AboutMe = () => {
  return (
    <div id="about" className="py-10 md:py-28">
      <h1 className="text-white text-3xl md:text-4xl text-center mt-2 mb-8 md:my-8 uppercase font-robotoMono font-bold">
        <span className="border-b-4 border-b-cyan-400">
          About <span className="text-cyan-400">Me</span>
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <div
          className="w-full md:w-2/5"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img className="lg:h-[430px] mx-auto" src={myImg} alt="" />
        </div>
        <div
          className="flex-1 md:ml-5 font-robotoMono text-white text-center"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <p className="text-justify">
            Hello! I'm Rakib, a self-motivated and enthusiastic web developer. I
            have been learning web development for 1.5 years. I have learned
            JavaScript, React js, Node js, MongoDB, and Express js during this
            period. Also, I am trying to explore new things every day and look
            for an opportunity to make an impact in the web development field
            with my acquired skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
