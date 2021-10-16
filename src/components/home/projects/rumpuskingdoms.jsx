import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const RumpusKingdomsProject = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-300 rounded-lg p-4 lg:p-12">
      <StaticImage
        src="../../../assets/images/rumpus-kingdoms.png"
        className="w-4/5 md:w-1/3 rounded-full mx-8 mb-6 shadow-xl"
        alt="Rumpus Kingdoms logo"
      />
      <div className="w-full py-5 md:w-2/3">
        <div className="flex justify-between items-center mb-8">
          <p className="text-black text-4xl font-header">Rumpus Kingdoms</p>
          <p className="text-black text-xl">
            Aug 2020
          </p>
        </div>
        <p className="text-black text-2xl mb-10">
          Discord-driven attack-and-defend strategy game based around a medieval
          theme. Players would build a kingdom by settling villages. Attack and
          defence units could be purchased to attack other player's kingdoms.
          Complete with front-end scoreboard to track player status. Written
          with <span className="text-green-600">discord.py</span> for the
          back-end and <span className="text-green-600">Flask</span> for the
          front-end website.
        </p>
        <div className="text-center md:text-right">
          <a
            className="text-sm sm:text-2xl text-white-600 underline shadow-lg text-white px-8 py-2 pb-3 rounded m-5 bg-gray-500 hover:bg-red-700 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="https://github.com/JamesLowther/rumpus-kingdoms"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default RumpusKingdomsProject;
