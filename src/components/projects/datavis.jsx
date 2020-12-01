import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const DataVisProject = () => {

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "datavis.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div class="flex flex-col md:flex-row items-center bg-gray-800 bg-opacity-45 rounded-lg p-12">
      <div class="w-full md:w-2/3">
        <p class="text-white text-4xl font-header mb-8">Data Visualization</p>
        <p class="text-white text-2xl mb-8">Data visualization created for CPSC 583: Introduction to Information Visualization at the University of Calgary. Visualizations are created from a data set that contains responses to an online survey asking participants to answer questions related to Edward Snowden and information released about the NSA. Some questions asked include information about a person's technical proficiency, nationality, and change in opinion about a variety of topics. Created using <span class="text-indigo-400">d3.js</span> and <span class="text-indigo-400">TailwindCSS</span>.</p>
        <div class="text-center md:text-left">
          <a class="text-2xl text-white underline" href="/data-vis">View Visualizations</a>
        </div>
      </div>
      <Img 
        fluid={data.logo.childImageSharp.fluid} 
        className="w-4/5 md:w-1/3 rounded-full mx-4 mt-6" 
      />
    </div>
  )

}

export default DataVisProject;