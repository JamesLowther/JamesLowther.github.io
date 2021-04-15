import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Terminal from "../components/terminal"

const About = () => {
  return (
    <section id="about" className="w-full bg-gray-900">
      <div className="pt-8 pb-16 px-16">
        <p className="text-center text-white text-6xl font-header">About</p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-none w-2/3 md:w-1/4">
            <StaticImage
              src="../assets/images/head.jpg"
              className="rounded-full"
              placeholder="blurred"
            />
          </div>
          <div>
            <p className="text-white text-2xl mt-6 md:ml-16 md:mr-16">Hello!</p>
            <p className="text-white text-2xl mt-6 md:ml-16 md:mr-16">
              My name is James Lowther and I'm a fourth-year computer science
              student at the University of Calgary. Some of my interests include
              participating in CTF (Capture-the-Flag) hacking competitions and
              creating educational material related to information security. I
              have a passion for cybersecurity and enjoy learning about proper
              methods for deployment of server infrastructure.
            </p>
            <p className="text-white text-2xl mt-6 md:ml-16 md:mr-16">
              Take a look below at some of the projects I've been working on and
              check out my{" "}
              <a
                href="https://github.com/JamesLowther/"
                target="_blank"
                rel="noreferrer"
                className="underline text-purple-400"
              >
                GitHub
              </a>
              !
            </p>
          </div>
        </div>
        <div className="border-2 bg-blue-700 rounded-lg py-2 px-3 m-8 w-6/7 lg:w-1/2 mx-auto text-white text-2xl">
          <Terminal />
        </div>
      </div>
    </section>
  )
}

export default About
