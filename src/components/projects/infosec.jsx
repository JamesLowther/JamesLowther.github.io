import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Lightbox from "../lightbox"

import InfosecIcon from "../../assets/svg/magpie-vector-v02-white.svg"

const InfosecProject = () => {

  const data = useStaticQuery(graphql`
    query {
      gallery: allFile(filter: { absolutePath: { regex: "/infosec-gallery/" } }) {
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
    <div class="flex flex-col md:flex-row items-center bg-blue-900 bg-opacity-45 rounded-lg p-12">
      <InfosecIcon className="w-4/5 md:w-1/3 h-auto" />
      <div class="w-full md:w-2/3">
        <p class="text-white text-4xl mb-8 font-header">InfoSec Club UCalgary</p>
        <p class="text-white text-2xl mb-8">Technical Director for the Information Security Club at the University of Calgary. Prepared and taught beginner and advanced workshops at weekly club meetings. Administrated server infrastructure and managed front-end development the for club website. Managed junior executives who were interested in the server infrastructure side of the the club's operations.</p>
        <div class="flex flex-wrap justify-center">
          <iframe 
            title="Beginner: Intro to SQL Injection"
            class="mx-auto p-2"
            width="400" 
            height="300" 
            src="https://www.youtube.com/embed/0_9Jp8jCUTM"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
          <iframe 
            title="Beginner: Intro to Forensics"
            class="mx-auto p-2"
            width="400" 
            height="300" 
            src="https://www.youtube.com/embed/KQSlSHGt9g8"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
          <iframe 
            title="Advanced: Linux Privilege Escalation"
            class="mx-auto p-2"
            width="400" 
            height="300" 
            src="https://www.youtube.com/embed/UtWZ0dNIslE"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
          <iframe 
            title="Beginner: Intro to Web Exploitation"
            class="mx-auto p-2"
            width="400" 
            height="300" 
            src="https://www.youtube.com/embed/yqSC6unNcus"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
        <div class="text-center md:text-left mt-10">
          <div class="mb-6">
            <Lightbox 
              text="View Gallery"
              textClass="px-6 py-2 text-white text-xl bg-blue-500 hover:bg-blue-700 rounded-md"
              images={data.gallery.edges}
            />
          </div>
          <a class="text-2xl text-white underline" href="https://infosecucalgary.ca/" target="_blank" rel="noreferrer">https://infosecucalgary.ca/</a>
        </div>
      </div>
    </div>
  )

}

export default InfosecProject;