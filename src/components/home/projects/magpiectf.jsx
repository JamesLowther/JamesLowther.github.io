import React from "react";

import magpieCTFwebm from "../../../assets/images/ctf-logo-v3.webm";

const MagpieCTFProject = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-300 rounded-lg p-4 lg:p-12">
      <div className="w-full py-5 md:w-2/3">
        <p className="text-black text-4xl font-header mb-8">magpieCTF 2021</p>
        <p className="text-black text-2xl mb-10">
          Headed the planning and implementation of server infrastructure for
          all CTF challenges for the 2021-edition of the competition. Developed an infrastructure
          stack that used tools such as
          <span className="text-pink-600"> Docker</span>,{" "}
          <span className="text-pink-600">Watchtower</span>,{" "}
          <span className="text-pink-600">Terraform</span>,{" "}
          <span className="text-pink-600">DigitalOcean</span>,{" "}
          <span className="text-pink-600">Cloudflare</span>, and{" "}
          <span className="text-pink-600">Google Cloud</span>. Created
          challenges with pre-defined vulnerabilities for the categories of web
          exploitation, forensics, and networks. Created art and assets to help
          market the event.
        </p>
        <div className=" text-center md:text-left">
          <a
            className="text-sm sm:text-2xl text-white-600 underline shadow-lg text-white px-8 py-2 pb-3 rounded m-5 bg-gray-500 hover:bg-red-700 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="https://magpiectf.ca/"
            target="_blank"
            rel="noreferrer"
          >
            https://magpiectf.ca/
          </a>
        </div>
      </div>
      <video
        className="w-4/5 md:w-1/3 rounded-full mx-4 mt-6 shadow-xl"
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src={magpieCTFwebm} type="video/webm" />
      </video>
    </div>
  );
};

export default MagpieCTFProject;
