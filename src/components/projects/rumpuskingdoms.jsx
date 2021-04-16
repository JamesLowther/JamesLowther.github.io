import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const RumpusKingdomsProject = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-green-800 bg-opacity-45 rounded-lg p-12">
      <StaticImage
        src="../../assets/images/rumpus-kingdoms.png"
        className="w-4/5 md:w-1/3 rounded-full mx-8 mb-6"
      />
      <div className="w-full md:w-2/3">
        <p className="text-white text-4xl font-header mb-8">Rumpus Kingdoms</p>
        <p className="text-white text-2xl mb-8">
          Discord-driven attack-and-defend strategy game based around a medieval
          theme. Players would build a kingdom by settling villages. Attack and
          defence units could be purchased to attack other player's kingdoms.
          Complete with front-end scoreboard to track player status. Written
          with <span className="text-green-400">discord.py</span> for the
          back-end and <span className="text-green-400">flask</span> for the
          front-end website.
        </p>
        <div className="text-center md:text-left">
          <a
            className="text-2xl text-white underline"
            href="https://github.com/JamesLowther/rumpus-kingdoms"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo
          </a>
        </div>
      </div>
    </div>
  )
}

export default RumpusKingdomsProject
