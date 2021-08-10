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
        <div className="flex flex-col items-center justify-around h-80 mb-3 text-xl lg:text-2xl w-1/2 lg:w-2/12 pl-1 lg:px-6">
          <button
            className={
              this.state.index === 0
                ? "bg-gray-300 bg-red-700 text-white w-full py-2 px-2 rounded-lg transform hover:scale-103 transition duration-200 ease-in-out"
                : "bg-gray-300 hover:bg-red-700 hover:text-white w-full py-2 px-2 rounded-lg transform hover:scale-103 transition duration-200 ease-in-out"
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
                ? "bg-gray-300 bg-red-700 text-white w-full py-2 px-2 rounded-lg transform hover:scale-103 transition duration-200 ease-in-out"
                : "bg-gray-300 hover:bg-red-700 hover:text-white w-full py-2 px-2 rounded-lg transform hover:scale-103 transition duration-200 ease-in-out",
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
                ? "bg-gray-300 bg-red-700 text-white w-full py-2 px-2 rounded-lg transform hover:scale-103 transition duration-200 ease-in-out"
                : "bg-gray-300 hover:bg-red-700 hover:text-white w-full py-2 px-2 rounded-lg transform hover:scale-103 transition duration-200 ease-in-out",
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
                ? "bg-gray-300 bg-red-700 text-white w-full py-2 px-2 rounded-lg transform hover:scale-103 transition duration-200 ease-in-out"
                : "bg-gray-300 hover:bg-red-700 hover:text-white w-full py-2 px-2 rounded-lg transform hover:scale-103 transition duration-200 ease-in-out",
              !this.state.datavis ? "animate-slowpulse" : "",
            ].join(" ")}
            onClick={() => {
              this.setState({ index: 3, datavis: true });
            }}
          >
            Data Visualization
          </button>
        </div>
        <div className="lg:w-10/12 px-4 mx-auto md:px-8 lg:pr-32 text-white">
          {this.projects[this.state.index]}
        </div>
      </div>
    );
  }
}

export default ProjectView;
