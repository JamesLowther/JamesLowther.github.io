import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Terminal from "../components/terminal";

const About = () => {
  return (
    <section id="about" className="w-full bg-gray-300">
      <div className="p-8 px-16">
        <div className="flex flex-col md:flex-row items-center">
          <StaticImage
            src="../assets/images/head.jpg"
            className="flex-none w-2/3 md:w-1/4 my-10 rounded-full shadow-xl"
            placeholder="blurred"
            alt="Personal picture of James Lowther"
          />
          <div className="flex flex-col ">
            <div className="text-black">
              <p className="text-2xl md:mx-16">Hello!</p>
              <p className="text-2xl mt-8 md:mx-16">
                My name is James Lowther and I'm a graduate from the University of
                Calgary with a degree in Computer Science. Some of my interests
                include participating in CTF (Capture-the-Flag) hacking
                competitions and creating educational material related to
                information security. I have a passion for cybersecurity and
                enjoy learning about proper methods for deployment of server
                infrastructure.
              </p>
              <p className="text-2xl mt-6 md:mx-16">
                Take a look below at some of the projects I've been working on
                and check out my{" "}
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
            <div className="border-2 bg-pink-700 rounded-lg py-2 px-3 mx-8 mt-16 w-6/7 lg:w-1/2 mx-auto text-white text-2xl shadow-xl">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
