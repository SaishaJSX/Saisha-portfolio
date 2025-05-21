import React from "react";
import { LuGraduationCap, LuLightbulb, LuTarget } from "react-icons/lu";

const About = () => {
  return (
    <div className="bg-pink-100 w-full py-6 px-6 flex flex-col items-center">
      {/* Section Container */}
      <div className="bg-white rounded-3xl px-8 py-14 w-full max-w-7xl flex flex-col items-center">
        {/* Title */}
        <h1
          className="text-4xl font-bold text-pink-700 border-b border-pink-600 pb-2 mb-14"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          About Me
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {/* Education Card */}
          <div className="bg-white border border-pink-300 rounded-2xl shadow-md p-8 text-center transition-transform hover:-translate-y-2 hover:shadow-lg">
            <div className="bg-pink-200 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <LuGraduationCap className="text-2xl text-pink-600" />
            </div>
            <h2
              className="text-2xl font-semibold text-pink-800 mb-3"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Education
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Currently pursuing a bachelor's degree in computing, focused on software and web development.
            </p>
          </div>

          {/* Passion Card */}
          <div className="bg-white border border-pink-300 rounded-2xl shadow-md p-8 text-center transition-transform hover:-translate-y-2 hover:shadow-lg">
            <div className="bg-pink-200 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <LuLightbulb className="text-2xl text-pink-600" />
            </div>
            <h2
              className="text-2xl font-semibold text-pink-800 mb-3"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Passion
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Passionate about using creativity and technology to build impactful user experiences and solve real-world problems.
            </p>
          </div>

          {/* Goal Card */}
          <div className="bg-white border border-pink-300 rounded-2xl shadow-md p-8 text-center transition-transform hover:-translate-y-2 hover:shadow-lg">
            <div className="bg-pink-200 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <LuTarget className="text-2xl text-pink-600" />
            </div>
            <h2
              className="text-2xl font-semibold text-pink-800 mb-3"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Goal
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Aiming to become a full-stack developer contributing to meaningful, accessible, and inclusive digital solutions.
            </p>
          </div>
        </div>

        {/* My Story Section (Inside the Main Container Below the Cards) */}
        <div className="bg-pink-100 w-full mt-14 rounded-3xl p-8 flex flex-col items-center">
          {/* Title */}
          <h2
            className="text-3xl font-semibold text-pink-700 mb-6"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            My Story
          </h2>

          {/* My Story Paragraph */}
<p className="text-gray-600 text-small leading-7 text-justify">
  I've always been fascinated by how things work and how technology shapes the world around us. While I haven’t always had the easiest path—and I wouldn’t call myself the sharpest tool in the toolbox—I’m proud of the progress I’ve made. Tech wasn’t my first choice, but it’s where I’ve found purpose. Now that I’m here, I’m doing my best to learn, grow, and eventually make meaningful changes through the work I do.
</p>

        </div>
      </div>
    </div>
  );
};

export default About;
