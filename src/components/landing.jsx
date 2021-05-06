import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ASCIIAnimation from "../components/ascii/ascii";
import iss from "../assets/ascii/iss";

const Landing = () => {
  return (
    <section id="landing" className="w-full lg:h-screen">
      <div className="flex flex-col items-center justify-around h-full px-16 bg-black">
        <div className="flex flex-row mt-3">
          <a
            href="https://github.com/JamesLowther/"
            target="_blank"
            rel="noreferrer"
            className="mx-6 transform hover:scale-103"
            aria-label="Go to my GitHub page"
          >
            <StaticImage
              src="../assets/images/github-light.png"
              className="w-16"
              placeholder="blurred"
              alt="GitHub logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jameselowther/"
            target="_blank"
            rel="noreferrer"
            className="mx-6 transform hover:scale-103"
            aria-label="Go to my LinkedIn page"
          >
            <StaticImage
              src="../assets/images/linkedin.png"
              className="w-16"
              placeholder="blurred"
              alt="LinkedIn logo"
            />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center h-3/4">
          <div className="flex items-center w-full m-4 lg:w-1/3 rounded-lg bg-gray-300">
            <div className="p-10">
              <p className="text-3xl tracking-widest font-header">
                JAMES LOWTHER
              </p>
              <p className="text-xl font-display mt-2">
                Graduate from the Univerity of Calgary with a BSc in Computer
                Science. Interested in cybersecurity, DevOps pipelines, and both
                front-end and back-end development.
              </p>
              <p className="text-xl font-display mt-4">
                Located in Calgary, AB, Canada
              </p>
            </div>
          </div>
          <ASCIIAnimation
            source={iss}
            className="flex items-center w-full h-full mb-3 lg:w-2/3"
            frameDelay={40}
          />
        </div>
        <div className="transform hover:translate-y-1 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            width="60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Landing;
