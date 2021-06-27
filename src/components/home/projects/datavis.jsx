import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const DataVisProject = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-300 rounded-lg p-8 lg:p-12">
      <div className="w-full md:w-2/3">
        <p className="text-black text-4xl font-header mb-8">
          Data Visualization
        </p>
        <p className="text-black text-2xl mb-10">
          Data visualization created for CPSC 583: Introduction to Information
          Visualization at the University of Calgary. Visualizations are created
          from a data set that contains responses to an online survey asking
          participants to answer questions related to Edward Snowden and
          information released about the NSA. Some questions asked include
          information about a person's technical proficiency, nationality, and
          change in opinion about a variety of topics. Created using{" "}
          <span className="text-indigo-600">d3.js</span> and{" "}
          <span className="text-indigo-600">TailwindCSS</span>.
        </p>
        <div className="text-center md:text-left">
          <Link
            className="text-md sm:text-2xl text-red-600 underline"
            to="/data-vis"
          >
            View Visualizations
          </Link>
        </div>
      </div>
      <StaticImage
        src="../../../assets/images/data-vis.png"
        className="w-4/5 md:w-1/3 rounded-full mx-4 mt-6 shadow-xl"
        alt="Example data visualization"
      />
    </div>
  );
};

export default DataVisProject;
