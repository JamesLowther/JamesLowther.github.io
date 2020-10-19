import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Terminal from "../components/terminal";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "head-2.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
  <section id="about" class="w-full bg-gray-900">
    <div class="pt-8 pb-16 px-16">
      <p class="text-center text-white text-6xl font-header">About</p>
      <div class="flex flex-col md:flex-row items-center">
        <div class="flex-none w-2/3 md:w-1/4">
          <Img
            fluid={data.file.childImageSharp.fluid} 
            className="rounded-full"
          />
        </div>
        <div>
          <p class="text-white text-2xl mt-6 md:ml-16 md:mr-16">Hello!</p>
          <p class="text-white text-2xl mt-6 md:ml-16 md:mr-16">My name is James Lowther and I'm a fourth-year computer science student at the University of Calgary. Some of my interests include participating in CTF (Capture-the-flag) hacking competitions and creating educational material related to information security. I have a passion for cybersecurity and enjoy learning about proper methods for deployment of server infrastructure.</p>
          <p class="text-white text-2xl mt-6 md:ml-16 md:mr-16">Take a look below at some of the projects I've been working on or check out my <a href="https://github.com/JamesLowther/" target="_blank" rel="noreferrer" class="underline text-purple-400">GitHub</a>!</p>
        </div>
      </div>
      <div class="border-2 bg-blue-700 rounded-lg py-2 px-3 m-8 w-6/7 lg:w-1/2 mx-auto text-white text-2xl">
        <Terminal/>
      </div>
    </div>
  </section>
  )

}

export default About;

