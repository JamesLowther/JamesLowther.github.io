import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const MagpieCTFProject = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "ctf-logo-v3.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div class="flex flex-col md:flex-row items-center bg-indigo-900 bg-opacity-35 rounded-lg p-12">
      <div class="w-2/3">
        <p class="text-white text-4xl font-bold mb-8">magpieCTF</p>
        <p class="text-white text-2xl mb-8">Headed the planning and implementation of server infrastructure for all CTF challenges for the competition. Created challenges for the categories of web exploitation, forensics, and networks. Created art and assets to help market the event.</p>
        <a class="text-2xl text-white underline" href="https://magpiectf.ca/" target="_blank" rel="noreferrer">https://magpiectf.ca/</a>
      </div>
      <Img 
        fluid={data.file.childImageSharp.fluid} 
        className="w-4/5 md:w-1/3 rounded-full mx-4 mt-6" 
      />
    </div>
  )

}

export default MagpieCTFProject;