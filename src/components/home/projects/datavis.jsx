import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const DataVisProject = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-300 rounded-lg p-4 lg:p-12">
      <div className="w-full py-5 md:w-2/3">
        <div className="flex justify-between items-center mb-8">
          <p className="text-black text-4xl font-header">
            Data Visualization
          </p>
          <p className="text-black text-xl">
            Dec 2020
          </p>
        </div>
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
            className="text-sm sm:text-2xl text-white-600 underline shadow-lg text-white px-8 py-2 pb-3 rounded m-5 bg-gray-500 hover:bg-red-700 transition duration-75 ease-out transform hover:-translate-y-1 hover:scale-103"
            to="/data-vis/index.html"
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
