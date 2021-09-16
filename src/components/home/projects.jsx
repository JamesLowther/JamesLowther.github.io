import React from "react";
import { Link } from "gatsby";

import { Parallax } from "react-scroll-parallax";

import ProjectView from "./projectview";

const Projects = () => {
  return (
    <Parallax y={["0px", "-200px"]}>
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
        <div className="text-white flex flex-wrap w-full justify-center items-center text-3xl pt-32">
          <div>Also, check out my</div>
          <Link
            className="shadow-lg text-white px-8 py-2 pb-3 rounded m-5 bg-gray-500 hover:bg-red-700 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            to="/blog"
          >
            <button>blog</button>
          </Link>
        </div>
      </section>
    </Parallax>
  );
};

export default Projects;
