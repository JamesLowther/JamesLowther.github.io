import React from "react"
import { useStaticQuery, graphql} from 'gatsby'

import StyledProjectsBackground from "./projectsbackground"
import InfosecProject from "./projects/infosec"
import MagpieCTFProject from "./projects/magpiectf"
import RumpusKingdomsProject from "./projects/rumpuskingdoms"

const Projects = () => {

  return (
    <StyledProjectsBackground>
      <section id="projects" class="w-5/6 mx-auto pb-16 pt-8 bg-black bg-opacity-50">
        <div class="mb-12">
          <p class="text-center text-white text-6xl">Projects</p>
        </div>
        <div class="flex flex-col justify-center">
          <div class="mb-16">
            <InfosecProject/>
          </div>
          <div class="mb-16">
            <MagpieCTFProject />
          </div>
          <div>
            <RumpusKingdomsProject />
          </div>
        </div>
      </section>
    </StyledProjectsBackground>
  )

}

export default Projects;