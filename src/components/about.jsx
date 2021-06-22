import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

import Terminal from "../components/terminal";

const About = () => {
  return (
    <Parallax y={["0px", "-250px"]} className="px-4 md:px-16">
      <section id="about" className="w-full bg-gray-300 px-16 rounded-xl">
        <div className="p-8 sm:px-16">
          <div className="flex flex-col md:flex-row items-center">
            <Parallax
              disabled={isMobile}
              x={[-10, 0]}
              className="flex-none w-full sm:w-2/3 md:w-1/4 my-10"
            >
              <StaticImage
                src="../assets/images/head.jpg"
                className="rounded-full shadow-xl"
                placeholder="blurred"
                alt="Personal picture of James Lowther"
              />
            </Parallax>
            <div className="flex flex-col ">
              <Parallax disabled={isMobile} x={[10, 0]}>
                <div className="text-black">
                  <p className="text-2xl md:mx-16">Hello!</p>
                  <p className="text-2xl mt-8 md:mx-16">
                    My name is James Lowther and I'm a graduate from the
                    University of Calgary with a degree in Computer Science.
                    Some of my interests include participating in CTF
                    (Capture-the-Flag) hacking competitions and creating
                    educational material related to information security. I have
                    a passion for cybersecurity and enjoy learning about proper
                    methods for deployment of server infrastructure.
                  </p>
                  <p className="text-2xl mt-6 md:mx-16">
                    Take a look below at some of the projects I've been working
                    on and check out my{" "}
                    <a
                      href="https://github.com/JamesLowther/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-red-600"
                    >
                      GitHub
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.linkedin.com/in/jameselowther/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-red-600"
                    >
                      LinkedIn
                    </a>
                    !
                  </p>
                </div>
              </Parallax>
              <div className="border-2 bg-pink-700 rounded-lg py-2 px-3 mx-8 mt-16 w-6/7 lg:w-1/2 mx-auto text-white text-2xl shadow-xl">
                <Terminal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default About;
