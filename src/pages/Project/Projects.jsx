import React from "react";
import bImgOne from "../../assets/project-img/best-buy/img1.jpg";
import bImgTwo from "../../assets/project-img/best-buy/img2.png";
import bImgThree from "../../assets/project-img/best-buy/img3.png";
import bImgFour from "../../assets/project-img/best-buy/img4.png";
import rImgOne from "../../assets/project-img/Rakib-consultancy/img1.png";
import rImgTwo from "../../assets/project-img/Rakib-consultancy/img2.png";
import rImgThree from "../../assets/project-img/Rakib-consultancy/img3.png";
import rImgFour from "../../assets/project-img/Rakib-consultancy/img4.png";
import iImgOne from "../../assets/project-img/Instruct-course/img1.png";
import iImgTwo from "../../assets/project-img/Instruct-course/img2.png";
import iImgThree from "../../assets/project-img/Instruct-course/img3.png";
import iImgFour from "../../assets/project-img/Instruct-course/img4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const projects = [
  {
    id: "01",
    name: "Best-Buy",
    details:
      "A completely responsive used laptop buy and sale website where a seller can add a product and a buyer can buy products.",
    imgOne: bImgOne,
    imgTwo: bImgTwo,
    imgThree: bImgThree,
    imgFour: bImgFour,
    bgColor: "#EDFAFF",
    technology: [
      {
        name: "React",
        bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      },
      {
        name: "React Router",
        bgColor: "bg-gradient-to-r from-indigo-500 to-purple-400",
      },
      {
        name: "Context API",
        bgColor: "bg-gradient-to-r from-emerald-500 to-emerald-400",
      },
      {
        name: "Stripe",
        bgColor: "bg-gradient-to-r from-indigo-500 to-purple-400",
      },
      {
        name: "Tailwind CSS",
        bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-400",
      },
      {
        name: "Express JS",
        bgColor: "bg-gradient-to-r from-orange-600 to-orange-400",
      },
      {
        name: "MongoDB",
        bgColor: "bg-gradient-to-r from-pink-500 via-pink-500 to-pink-400",
      },
    ],
    projectDetails: [
      {
        text: "Live Link",
        link: "https://best-buy-be3c4.web.app",
      },
      {
        text: "GitHub Client",
        link: "https://github.com/RakibMojumder/Best-buy-client",
      },
      {
        text: "GitHub Server",
        link: "https://github.com/RakibMojumder/Best-buy-server",
      },
    ],
  },
  {
    id: "02",
    name: "Rakib-Consultancy",
    details:
      "A service-related website where a tax and law specialist provides services. Also, users can give their reviews but for that, they have to log in to the website.",
    imgOne: rImgOne,
    imgTwo: rImgTwo,
    imgThree: rImgThree,
    imgFour: rImgFour,
    bgColor: "#F0FFED",
    technology: [
      {
        name: "React",
        bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      },
      {
        name: "React Router",
        bgColor: "bg-gradient-to-r from-indigo-500 to-purple-400",
      },
      {
        name: "Context API",
        bgColor: "bg-gradient-to-r from-emerald-500 to-emerald-400",
      },
      {
        name: "Tailwind CSS",
        bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-400",
      },
      {
        name: "Express JS",
        bgColor: "bg-gradient-to-r from-orange-600 to-orange-400",
      },
      {
        name: "MongoDB",
        bgColor: "bg-gradient-to-r from-pink-500 via-pink-500 to-pink-400",
      },
    ],
    projectDetails: [
      {
        text: "Live Link",
        link: "https://rakib-consultancy.web.app/",
      },
      {
        text: "GitHub Client",
        link: "https://github.com/RakibMojumder/Rakib-consultancy-client",
      },
      {
        text: "GitHub Server",
        link: "https://github.com/RakibMojumder/Rakib-consultancy-server",
      },
    ],
  },
  {
    id: "03",
    name: "Instruct-course",
    details:
      "A complete responsive education course website where a user can find subject wise multiple courses and enroll in the courses",
    imgOne: iImgOne,
    imgTwo: iImgTwo,
    imgThree: iImgThree,
    imgFour: iImgFour,
    bgColor: "#FFFAED",
    technology: [
      {
        name: "React",
        bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      },
      {
        name: "React Router",
        bgColor: "bg-gradient-to-r from-indigo-500 to-purple-400",
      },
      {
        name: "Context API",
        bgColor: "bg-gradient-to-r from-emerald-500 to-emerald-400",
      },
      {
        name: "Firebase",
        bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-400",
      },
      {
        name: "Express JS",
        bgColor: "bg-gradient-to-r from-orange-600 to-orange-400",
      },
      {
        name: "MongoDB",
        bgColor: "bg-gradient-to-r from-pink-500 via-pink-500 to-pink-400",
      },
    ],
    projectDetails: [
      {
        text: "Live Link",
        link: "https://instruct-course.web.app/",
      },
      {
        text: "GitHub Client",
        link: "https://github.com/RakibMojumder/Instruct-course-client",
      },
      {
        text: "GitHub Server",
        link: "https://github.com/RakibMojumder/Instruct-course-server",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="my-20 md:my-30 py-20">
      <h1 className="text-white text-3xl md:text-4xl text-center mt-12 mb-10 md:mb-20 uppercase font-robotoMono font-bold">
        My All <span className="text-cyan-400">Projects</span>
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={project.id}
            id="swipper-project"
            style={{
              backgroundColor: project.bgColor,
            }}
          >
            <div className="h-56 md:h-[270px] mx-auto grid grid-cols-12 grid-rows-6 gap-2 text-white">
              <div className="col-span-4 row-span-full">
                <img src={project.imgOne} className="w-full h-full" alt="" />
              </div>
              <div className="col-start-5 col-end-9 row-span-3">
                <img src={project.imgThree} className="h-full w-full" alt="" />
              </div>
              <div className="col-start-9 col-end-13 row-start-1 row-span-3">
                <img src={project.imgFour} className="h-full w-full" alt="" />
              </div>
              <div className="col-start-5 col-span-full row-start-4 row-span-full">
                <img src={project.imgTwo} className="w-full h-full" alt="" />
              </div>
            </div>

            <div className="mt-5 mb-3 flex flex-wrap gap-2">
              {project?.technology?.map((tech, index) => (
                <span
                  key={index}
                  className={`${tech.bgColor} px-4 py-0 md:py-0.5 text-sm rounded-full text-white mb-1`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="my-2 flex justify-between bg-blue-500 rounded-full">
              {project?.projectDetails?.map((pro, index) => (
                <a
                  key={index}
                  className="w-full text-sm text-center md:px-4 py-0.5 text-white border-r last:border-r-0"
                  href={pro.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {pro.text}
                </a>
              ))}
            </div>

            <div className="font-robotoMono">
              <h1 className="uppercase font-bold text-slate-800">
                {project.name}
              </h1>
              <p className="text-sm">{project.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
