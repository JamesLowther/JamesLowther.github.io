import React from "react";

import ProjectView from "./projectview";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full mx-auto bg-black pt-24 pb-4 lg:pb-24"
    >
      <div className="mb-12">
        <p className="text-center text-white text-5xl md:text-6xl tracking-wide font-header">
          Projects
        </p>
      </div>
      <ProjectView />
    </section>
  );
};

export default Projects;
