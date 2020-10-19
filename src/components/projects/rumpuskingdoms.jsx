import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const RumpusKingdomsProject = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "rumpus-kingdoms.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div class="flex flex-col md:flex-row items-center bg-teal-900 bg-opacity-35 rounded-lg p-12">
      <Img 
        fluid={data.file.childImageSharp.fluid} 
        className="w-4/5 md:w-1/3 rounded-full mx-8" 
      />
      <div class="w-2/3">
        <p class="text-white text-4xl font-bold mb-8">Rumpus Kingdoms</p>
        <p class="text-white text-2xl mb-8">Planned and implemented server infrastructure for all CTF challenges in our event.</p>
      </div>
    </div>
  )

}

export default RumpusKingdomsProject;