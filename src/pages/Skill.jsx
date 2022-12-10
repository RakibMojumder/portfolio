import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Lottie from "lottie-react";
import skillLottie from "../assets/lottie/developer-skills.json";

const Skill = () => {
  return (
    <div
      id="skill"
      className="text-white bg-black h-full py-14 md:my-40 font-robotoMono font-bold"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div>
          <Lottie animationData={skillLottie} />
        </div>
        <div className="">
          <h1 className="mb-10 text-2xl text-center my-9 uppercase">
            My <span className="text-cyan-400">Skill</span> & Technologies
          </h1>
          <div className="mb-4">
            <h1>HTML</h1>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              completed={90}
              maxCompleted={100}
              bgColor="rgb(59 130 246)"
              labelColor="#fff"
              height="16px"
              width="100%"
              customLabel="90%"
              labelAlignment="right"
            />
          </div>
          <div className="mb-4">
            <h1>CSS</h1>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              completed={85}
              maxCompleted={100}
              bgColor="rgb(16 185 129)"
              labelColor="#fff"
              height="16px"
              width="100%"
              customLabel="85%"
              labelAlignment="right"
            />
          </div>
          <div className="mb-4">
            <h1>JavaScript</h1>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              completed={75}
              maxCompleted={100}
              bgColor="rgb(234 179 8)"
              labelColor="#fff"
              height="16px"
              width="100%"
              customLabel="75%"
              labelAlignment="right"
            />
          </div>
          <div className="mb-4">
            <h1>React</h1>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              completed={75}
              maxCompleted={100}
              bgColor="rgb(14 165 233)"
              labelColor="#fff"
              height="16px"
              width="100%"
              customLabel="75%"
              labelAlignment="right"
            />
          </div>
          <div className="mb-4">
            <h1>Tailwind CSS</h1>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              completed={85}
              maxCompleted={100}
              bgColor="rgb(126 34 206)"
              labelColor="#fff"
              height="16px"
              width="100%"
              customLabel="85%"
              labelAlignment="right"
            />
          </div>
          <div className="mb-4">
            <h1>Express JS</h1>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              completed={50}
              maxCompleted={100}
              bgColor="rgb(234 88 12)"
              labelColor="#fff"
              height="16px"
              width="100%"
              customLabel="50%"
              labelAlignment="right"
            />
          </div>
          <div className="mb-4">
            <h1>MongoDB</h1>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              completed={50}
              maxCompleted={100}
              bgColor="rgb(34 197 94)"
              labelColor="#fff"
              height="16px"
              width="100%"
              customLabel="50%"
              labelAlignment="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
