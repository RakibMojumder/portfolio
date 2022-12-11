import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import ReactImg from "../../assets/blog-img/react-js.jpg";

const Blogs = () => {
  return (
    <div id="blog" className="my-20 md:my-30 py-20 font-robotoMono">
      <h1 className="text-white text-3xl md:text-4xl text-center mt-12 mb-10 md:mb-14 uppercase font-bold">
        My All <span className="text-cyan-400">Blogs</span>
      </h1>
      <div className="grid grid-cols-12 gap-2">
        <div className="hidden md:flex justify-center items-center">
          <button className="image-swiper-button-prev">
            <HiArrowNarrowLeft className="text-3xl text-cyan-400" />
          </button>
        </div>
        <div className="col-span-12 md:col-span-10">
          <Swiper
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper relative"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              530: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {[...Array(9).keys()].map((index) => (
              <SwiperSlide>
                <div
                  className="h-60 w-full bg-[#ECF9FC] rounded-xl"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-easing="linear"
                >
                  <img
                    className="h-32 w-full rounded-t-xl cursor-grab"
                    src={ReactImg}
                    alt=""
                  />
                  <div className="p-3 text-slate-800 cursor-pointer">
                    <h1 className="font-bold text-lg">How React Js works?</h1>
                    <p className="text-sm text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <button className="image-swiper-button-next">
            <HiArrowNarrowRight className="text-3xl text-cyan-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
