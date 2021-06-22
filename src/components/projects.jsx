import React from "react";

import { Parallax } from "react-scroll-parallax";

import ProjectView from "./projectview";

const Projects = () => {
  return (
    <Parallax y={["0px", "-250px"]}>
      <section
        id="projects"
        className="w-full mx-auto bg-black pt-24 pb-4 lg:pb-24"
      >
        <div className="mb-8">
          <Parallax y={["-100px", "0px"]}>
            <p className="text-center text-white text-5xl md:text-6xl tracking-wide font-header">
              Projects
            </p>
          </Parallax>
        </div>

        <ProjectView />
      </section>
    </Parallax>
  );
};

export default Projects;
