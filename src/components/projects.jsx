import React from "react"

import InfosecProject from "./projects/infosec"
import MagpieCTFProject from "./projects/magpiectf"
import RumpusKingdomsProject from "./projects/rumpuskingdoms"
import DataVisProject from "./projects/datavis"

import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full mx-auto pb-16 bg-black bg-opacity-50"
      style={{ display: "grid" }}
    >
      <StaticImage
        src="../assets/images/projects-bg.jpg"
        style={{ gridArea: "1/1" }}
        layout="constrained"
      />
      <div
        className="w-5/6 mx-auto pt-8"
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <div className="mb-12">
          <p className="text-center text-white text-6xl font-header">
            Projects
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-16">
            <InfosecProject />
          </div>
          <div className="mb-16">
            <MagpieCTFProject />
          </div>
          <div className="mb-16">
            <RumpusKingdomsProject />
          </div>
          <div>
            <DataVisProject />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
