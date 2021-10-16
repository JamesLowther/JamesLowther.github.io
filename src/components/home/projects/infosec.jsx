import React from "react";

import InfosecIcon from "../../../assets/svg/magpie-vector-v02.svg";

const InfosecProject = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-300 rounded-lg p-4 lg:p-12">
      <InfosecIcon className="w-4/5 md:w-1/3 h-auto" />
      <div className="w-full md:w-2/3 py-5">
        <div className="flex justify-between items-center mb-8">
          <p className="text-black text-4xl font-header">
            InfoSec Club UCalgary
          </p>
          <p className="text-black text-xl">
            Feb 2020 - May 2021
          </p>
        </div>
        <p className="text-black text-2xl mb-8">
          Technical Director for the Information Security Club at the University
          of Calgary. Prepared and taught beginner and advanced workshops at
          weekly club meetings. Administrated server infrastructure and managed
          front-end development the for the club website. Managed junior executives
          who were interested in the server infrastructure side of the the
          club's operations.
        </p>
        <div className="flex flex-wrap justify-center">
          <iframe
            title="Beginner: Intro to SQL Injection"
            className="w-2/5 h-52 p-2"
            src="https://www.youtube.com/embed/0_9Jp8jCUTM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Beginner: Intro to Forensics"
            className="w-2/5 h-52 p-2"
            src="https://www.youtube.com/embed/KQSlSHGt9g8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Advanced: Linux Privilege Escalation"
            className="w-2/5 h-52 p-2"
            src="https://www.youtube.com/embed/UtWZ0dNIslE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Beginner: Intro to Web Exploitation"
            className="w-2/5 h-52 p-2"
            src="https://www.youtube.com/embed/yqSC6unNcus"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-5 text-center md:text-right">
          <a
            className="text-sm sm:text-2xl text-white-600 underline shadow-lg text-white px-8 py-2 pb-3 rounded m-5 bg-gray-500 hover:bg-red-700 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="https://infosecucalgary.ca/"
            target="_blank"
            rel="noreferrer"
          >
            https://infosecucalgary.ca/
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfosecProject;
