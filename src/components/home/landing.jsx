import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ASCIIAnimation from "./ascii";
import iss from "../../assets/ascii/iss";
import Terminal from "./terminal";

const Landing = () => {
  return (
    <section id="home" className="h-full">
      <div className="">
        <div className="flex items-center justify-center w-full py-5">
          <div className="flex flex-row">
            <a
              href="https://github.com/JamesLowther/"
              target="_blank"
              rel="noreferrer"
              className="mx-6 transform hover:scale-103 transition duration-100 ease-out"
              aria-label="Go to my GitHub page"
            >
              <StaticImage
                src="../../assets/images/github.png"
                className="w-16"
                placeholder="blurred"
                alt="GitHub logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jameselowther/"
              target="_blank"
              rel="noreferrer"
              className="mx-6 transform hover:scale-103 transition duration-100 ease-out"
              aria-label="Go to my LinkedIn page"
            >
              <StaticImage
                src="../../assets/images/linkedin.png"
                className="w-16"
                placeholder="blurred"
                alt="LinkedIn logo"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-4">
          <a
            href="https://blog.jameslowther.com"
            className="font-header text-rose-700 font-bold text-2xl transform hover:scale-103 transition duration-75 ease-out animate-pulse "
          >
            🚀 Check out my blog
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:ml-24 h-4/6">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div className="flex items-center w-5/6 lg:w-2/5 mb-8 rounded-lg bg-gray-300">
            <div className="p-10">
              <p className="text-4xl tracking-widest font-header">
                JAMES LOWTHER
              </p>
              <p className="text-xl font-display mt-4">
                Graduate from the Univerity of Calgary with a BSc in Computer
                Science. Interested in cybersecurity, cloud infrastructure, DevOps
                principles, and front-end and back-end software development.
              </p>
              <p className="flex flex-wrap items-center text-xl font-display mt-4 ">
                <span className="mr-1">Calgary, AB, Canada</span>
                <StaticImage
                  src="../../assets/images/canadian-flag.png"
                  className="shadow rounded-sm w-9 ml-1 inline"
                  placeholder="blurred"
                  alt="Canadian flag"
                />
              </p>
              <div className="text-lg mt-8">
                <Terminal />
              </div>
            </div>
          </div>
          <ASCIIAnimation
            source={iss}
            className="hidden sm:flex items-center h-96 mt-16 lg:mt-0 xl:h-[32rem] 2xl:h-[52rem] 3xl:h-[64rem] w-full"
            frameDelay={40}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
