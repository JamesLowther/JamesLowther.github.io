import React from "react";

import InfosecIcon from "../../assets/svg/magpie-vector-v02-white.svg"

const InfosecProject = () => {

  return (
    <div class="flex flex-col md:flex-row items-center bg-blue-900 bg-opacity-45 rounded-lg p-12">
      <InfosecIcon className="w-4/5 md:w-1/3 h-auto" />
      <div class="w-full md:w-2/3">
        <p class="text-white text-4xl mb-8 font-header">InfoSec Club UCalgary</p>
        <p class="text-white text-2xl mb-8">Technical director for the Information Security Club at the University of Calgary. Prepared and taught beginner and advanced workshops at weekly club meetings. Administrated server infrastructure and managed front-end development the for club website.</p>
        <div class="text-center md:text-left">
          <a class="text-2xl text-white underline" href="https://infosecucalgary.ca/" target="_blank" rel="noreferrer">https://infosecucalgary.ca/</a>
        </div>
      </div>
    </div>
  )

}

export default InfosecProject;