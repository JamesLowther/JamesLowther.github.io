import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { isMobile } from "react-device-detect";

import { Parallax } from "react-scroll-parallax";

const Contact = () => {
  return (
    <Parallax y={["0px", "-600px"]} className="px-4 md:px-16">
      <section id="contact" className="w-full bg-gray-300 pb-20 rounded-xl">
        <div className="pt-8 text-center w-5/6 mx-auto">
          <p className="text-black text-5xl md:text-6xl mb-8 font-header">
            Contact
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <Parallax disabled={isMobile} x={[-20, 0]} className="w-3/4 md:w-1/5 mx-6 mb-6">
              <StaticImage
                src="../assets/images/map.png"
                className="rounded shadow-xl"
                placeholder="blurred"
                alt="Map of Calgary"
              />
              <p className="text-black text-2xl mt-2 font-header">
                Calgary, AB, Canada
              </p>
            </Parallax>
            <Parallax disabled={isMobile} x={[20, 0]}>
              <div className="flex flex-col items-center">
                <div className="rounded bg-pink-700 mx-6 p-1 sm:p-6 mb-4 shadow-xl">
                  <p className="text-gray-300 text-xl sm:text-3xl md:text-4xl font-display mb-2">
                    Send me an email at:
                  </p>
                  <p className="text-gray-800 text-xl sm:text-3xl font-display">
                    <a
                      className="text-white"
                      href="mailto:jamesevlowther@gmail.com"
                    >
                      jamesevlowther@gmail.com
                    </a>
                  </p>
                </div>
                <a
                  href="/static/james-lowther-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-lg bg-gray-800 hover:bg-gray-900 mx-6 p-3 mt-6 shadow-xl transform hover:scale-103">
                    <p className="text-white text-2xl md:text-3xl font-display">
                      Download Resume
                    </p>
                  </div>
                </a>
              </div>
            </Parallax>
          </div>
          <div className="mt-12">
            <a
              href="https://github.com/JamesLowther/"
              target="_blank"
              rel="noreferrer"
              className="mx-6"
              aria-label="Go to my GitHub page"
            >
              <StaticImage
                src="../assets/images/github.png"
                className="w-16 inline-block transform hover:scale-103"
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
                src="../assets/images/linkedin-dark.png"
                className="w-16 inline-block transform hover:scale-103"
                placeholder="blurred"
                alt="LinkedIn logo"
              />
            </a>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Contact;
