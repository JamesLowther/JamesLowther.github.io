import React from "react";

import InfosecProject from "./projects/infosec";
import MagpieCTFProject from "./projects/magpiectf";
import RumpusKingdomsProject from "./projects/rumpuskingdoms";
import DataVisProject from "./projects/datavis";

class ProjectView extends React.Component {
  constructor(props) {
    super(props);

    this.projects = [
      <InfosecProject />,
      <MagpieCTFProject />,
      <RumpusKingdomsProject />,
      <DataVisProject />,
    ];

    this.state = {
      index: 0,
      infosec: true,
      ctf: false,
      rumpus: false,
      datavis: false,
    };
  }

  render() {
    return (
      <div className="flex flex-col items-center lg:items-start lg:flex-row w-full">
        <div className="flex flex-col items-center justify-around h-72 mb-3 text-xl lg:text-2xl w-1/2 lg:w-1/5 pl-1 lg:px-12">
          <button
            className={
              this.state.index === 0
                ? "bg-gray-300 bg-pink-700 text-white w-full py-1 px-2 rounded-lg transform hover:scale-103"
                : "bg-gray-300 hover:bg-pink-700 hover:text-white w-full py-1 px-2 rounded-lg transform hover:scale-103"
            }
            onClick={() => {
              this.setState({ index: 0 });
            }}
          >
            InfoSec Club UCalgary
          </button>
          <button
            className={[
              this.state.index === 1
                ? "bg-gray-300 bg-pink-700 text-white w-full py-1 px-2 rounded-lg transform hover:scale-103"
                : "bg-gray-300 hover:bg-pink-700 hover:text-white w-full py-1 px-2 rounded-lg transform hover:scale-103",
              !this.state.ctf ? "animate-slowpulse" : "",
            ].join(" ")}
            onClick={() => {
              this.setState({ index: 1, ctf: true });
            }}
          >
            magpieCTF
          </button>
          <button
            className={[
              this.state.index === 2
                ? "bg-gray-300 bg-pink-700 text-white w-full py-1 px-2 rounded-lg transform hover:scale-103"
                : "bg-gray-300 hover:bg-pink-700 hover:text-white w-full py-1 px-2 rounded-lg transform hover:scale-103",
              !this.state.rumpus ? "animate-slowpulse" : "",
            ].join(" ")}
            onClick={() => {
              this.setState({ index: 2, rumpus: true });
            }}
          >
            Rumpus Kingdoms
          </button>
          <button
            className={[
              this.state.index === 3
                ? "bg-gray-300 bg-pink-700 text-white w-full py-1 px-2 rounded-lg transform hover:scale-103"
                : "bg-gray-300 hover:bg-pink-700 hover:text-white w-full py-1 px-2 rounded-lg transform hover:scale-103",
              !this.state.datavis ? "animate-slowpulse" : "",
            ].join(" ")}
            onClick={() => {
              this.setState({ index: 3, datavis: true });
            }}
          >
            Data Visualization
          </button>
        </div>
        <div className="px-4 mx-auto lg:pr-32 lg:pr-10 text-white">
          {this.projects[this.state.index]}
        </div>
      </div>
    );
  }
}

export default ProjectView;
