import React from "react";
import imgOne from "../assets/img/img1.png";
import imgTwo from "../assets/img/img2.png";
import imgThree from "../assets/img/img3.png";
import { Typewriter } from "react-simple-typewriter";
import { IoMdDownload } from "react-icons/io";
import { saveAs } from "file-saver";
import { HashLink } from "react-router-hash-link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css";

const Header = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1Mg8g6woxuh8fjkAcU2kdtSH0652g7C7d/view",
      "resume.pdf"
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center mt-20">
      <div className="flex justify-center items-center">
        <Swiper
          id="swipper-card-effect"
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-48 md:w-60 h-72 md:h-80 bg-cyan-300 rounded-2xl">
              <img className="h-full w-full" src={imgOne} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-48 md:w-60 h-72 md:h-80 bg-purple-300 rounded-2xl">
              <img className="h-full w-full" src={imgTwo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-48 md:w-60 h-72 md:h-80 bg-green-400 rounded-2xl">
              <img className="h-full w-full" src={imgThree} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-10 md:mt-0">
        <h3 className="text-white">Hi !, I am</h3>
        <h1 className="text-5xl uppercase font-robotoMono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
          Rakib Ahmed
        </h1>
        <h1 className="text-xl text-white uppercase mt-4 md:[word-spacing:5px]">
          I am a{" "}
          <span className="text-white font-robotoMono font-semibold">
            <Typewriter
              words={[
                "Web Developer",
                "React Developer",
                "Web Designer",
                "Front End Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div className="mt-10 md:mt-20 font-robotoMono space-y-5 md:space-y-0">
          <button className="block md:inline-block border border-cyan-400 px-4 py-1 text-white md:mr-5 transition-all duration-300 ease-in hover:rounded-full hover:bg-cyan-400">
            <HashLink to="#about" smooth>
              About Me
            </HashLink>
          </button>
          <button
            onClick={saveFile}
            className="block md:inline-block bg-cyan-500 border border-cyan-400 px-5 py-1 text-white transition-all duration-300 ease-in hover:bg-transparent hover:rounded-full"
          >
            <IoMdDownload className="inline-block" /> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
