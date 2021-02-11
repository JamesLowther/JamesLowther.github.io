import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Lightbox from "../lightbox"
import magpieCTFwebm from "../../assets/images/ctf-logo-v3.webm"

const MagpieCTFProject = () => {

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "ctf-logo-v3.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gallery: allFile(filter: { absolutePath: { regex: "/magpiectf-gallery/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 1000) {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div class="flex flex-col md:flex-row items-center bg-indigo-900 bg-opacity-45 rounded-lg p-12">
      <div class="w-full md:w-2/3">
        <p class="text-white text-4xl font-header mb-8">magpieCTF</p>
        <p class="text-white text-2xl mb-8">Headed the planning and implementation of server infrastructure for all CTF challenges for the competition. Developed an infrastructure stack that used tools such as 
        <span class="text-pink-400"> Docker</span>, <span class="text-pink-400">Watchtower</span>, <span class="text-pink-400">Terraform</span>, <span class="text-pink-400">DigitalOcean</span>, <span class="text-pink-400">Cloudflare</span>, and <span class="text-pink-400">Google Cloud</span>. 
        Created challenges with pre-defined vulnerabilities for the categories of web exploitation, forensics, and networks. Created art and assets to help market the event.</p>
        <div class="text-center md:text-left">
          <div class="mb-6">
            <Lightbox 
              text="View Gallery"
              textClass="px-6 py-2 text-white text-xl bg-purple-600 hover:bg-purple-700 rounded-md"
              images={data.gallery.edges}
            />
          </div>
          <a class="text-2xl text-white underline" href="https://magpiectf.ca/" target="_blank" rel="noreferrer">https://magpiectf.ca/</a>
        </div>
      </div>
      {/* <Img 
        fluid={data.logo.childImageSharp.fluid} 
        className="w-4/5 md:w-1/3 rounded-full mx-4 mt-6" 
      /> */}
      <video class="w-4/5 md:w-1/3 rounded-full mx-4 mt-6"  autoPlay={true} loop={true} muted={true}>
        <source src={magpieCTFwebm} type="video/webm" />
      </video>
    </div>
  )

}

export default MagpieCTFProject;