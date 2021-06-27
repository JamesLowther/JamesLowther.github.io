import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const RumpusKingdomsProject = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-300 rounded-lg p-8 lg:p-12">
      <StaticImage
        src="../../../assets/images/rumpus-kingdoms.png"
        className="w-4/5 md:w-1/3 rounded-full mx-8 mb-6 shadow-xl"
        alt="Rumpus Kingdoms logo"
      />
      <div className="w-full md:w-2/3">
        <p className="text-black text-4xl font-header mb-8">Rumpus Kingdoms</p>
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
            className="text-md sm:text-2xl text-red-600 underline"
            href="https://github.com/JamesLowther/rumpus-kingdoms"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default RumpusKingdomsProject;
