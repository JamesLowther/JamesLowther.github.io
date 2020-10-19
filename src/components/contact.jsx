import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Contact = () => {

  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: {eq: "map.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      github: file(relativePath: {eq: "github-light.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      linkedin: file(relativePath: {eq: "linkedin.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <section id="contact" class="w-full bg-blue-900 pb-20">
      <div class="pt-8 text-center w-5/6 mx-auto">
        <p class="text-white text-6xl mb-8">Contact</p>
        <div class="flex flex-col md:flex-row justify-center items-center">
          <Img
            fluid={data.map.childImageSharp.fluid} 
            className="rounded w-3/4 md:w-1/5 mx-6 mb-6"
          />
          <div class = "flex flex-col items-center">
            <div class="rounded bg-blue-500 mx-6 p-6 mb-4">
              <p class="text-white text-4xl">Send me an email at:</p>
              <p class="text-gray-800 text-3xl">jamesevlowther@gmail.com</p>
            </div>
            <a href="/static/james-lowther-resume.pdf" target="_blank" rel="noreferrer">
              <div class="rounded-lg bg-gray-600 hover:bg-gray-700 mx-6 p-3 mt-6">
                <p class="text-white text-3xl">Download Resume</p>
              </div>
            </a>
          </div>
        </div>
        <div class="mt-12">
          <a href="https://github.com/JamesLowther/" target="_blank" rel="noreferrer" class="mx-6 transform hover:scale-103">
            <Img
              fluid={data.github.childImageSharp.fluid} 
              className="w-16 inline-block"
            />
          </a>
          <a href="https://www.linkedin.com/in/jameselowther/" target="_blank" rel="noreferrer" class="mx-6 transform hover:scale-103">
            <Img
              fluid={data.linkedin.childImageSharp.fluid} 
              className="w-16 inline-block"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact;