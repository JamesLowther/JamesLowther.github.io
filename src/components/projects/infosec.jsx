import React from "react";

import InfosecIcon from "../../assets/svg/magpie-vector-v02-white.svg"

const InfosecProject = () => {

  return (
    <div class="flex flex-col md:flex-row items-center bg-blue-900 bg-opacity-35 rounded-lg p-12">
      <InfosecIcon className="w-4/5 md:w-1/3 h-auto" />
      <div class="w-2/3">
        <p class="text-white text-4xl font-bold mb-8">InfoSec Club UCalgary</p>
        <p class="text-white text-2xl mb-8">Technical director for the Information Security Club at the University of Calgary. Prepared and taught beginnier and advanced workshops at weekly club meetings. Administrated server infrastructure and managed front-end development for club website.</p>
        <a class="text-2xl text-white underline" href="https://infosecucalgary.ca/">https://infosecucalgary.ca/</a>
      </div>
    </div>
  )

}

export default InfosecProject;