import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ASCIIAnimation from "./ascii";
import iss from "../../assets/ascii/iss";
import Terminal from "./terminal";

const Landing = () => {
  return (
    <section id="landing" className="h-full">
      <div className="flex items-center justify-center w-full py-4">
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
      <div className="lg:flex h-5/6">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div className="flex items-center w-5/6 my-16 lg:m-4 lg:w-1/3 rounded-lg bg-gray-300">
            <div className="px-10 py-10">
              <p className="text-4xl tracking-widest font-header">
                JAMES LOWTHER
              </p>
              <p className="text-xl font-display mt-2">
                Graduate from the Univerity of Calgary with a BSc in Computer
                Science. Interested in cybersecurity, cloud infrastructure,
                DevOps principles, and front-end and back-end software
                development.
              </p>
              <p className="flex flex-wrap items-center text-xl font-display mt-4">
                <span className="mr-1">Calgary, AB, Canada</span>
                <StaticImage
                  src="../../assets/images/canadian-flag.png"
                  className="shadow rounded-sm w-9 inline"
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
            className="flex items-center w-full h-full lg:w-7/12 mb-10"
            frameDelay={40}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
