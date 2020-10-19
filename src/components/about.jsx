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
      <p class="text-center text-white text-6xl">About</p>
      <div class="flex flex-col md:flex-row items-center">
        <div class="flex-none w-2/3 md:w-1/4">
          <Img
            fluid={data.file.childImageSharp.fluid} 
            className="rounded-full"
          />
        </div>
          <p class="text-white text-2xl mt-6 md:ml-16 md:mr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum, lacus at pulvinar venenatis, ipsum diam egestas enim, nec iaculis nibh orci eu lectus. Mauris sodales tristique lacus, a pharetra quam aliquam ut. Integer rutrum massa nec nisi fringilla venenatis. Ut ac maximus lectus, id elementum nibh. Sed a condimentum purus. Nam sed odio ac ligula dictum vestibulum non non nunc. Vivamus eleifend, magna eu dictum consequat, ligula nunc congue felis, nec vulputate ipsum nisi in risus. Sed suscipit lacus quis eleifend imperdiet. Fusce semper lacus id ipsum tincidunt, sed facilisis sapien finibus. Duis lorem elit, laoreet pulvinar commodo quis, lacinia nec justo. Etiam ultrices suscipit enim, eget tincidunt ante tincidunt et. Integer non lorem varius, euismod ex a, bibendum nunc.</p>
      </div>
      <div class="border bg-blue-700 rounded-full py-2 px-3 m-8 w-6/7 lg:w-1/2 mx-auto text-white text-2xl">
        <Terminal/>
      </div>
    </div>
  </section>
  )

}

export default About;

