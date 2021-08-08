import React from "react";

import scrollTo from "gatsby-plugin-smoothscroll";

const Navbar = () => {
  return (
    <div className="invisible lg:visible fixed z-50 h-screen w-full flex pointer-events-none">
      <div className="flex flex-col items-center justify-center pointer-events-auto rounded bg-white w-16 p-4 ml-auto mr-6 my-auto">
        <button
          onClick={() => scrollTo("#landing")}
          className="mb-8 w-10 h-10 transform hover:-translate-y-1"
          aria-label="top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
        </button>
        <button onClick={() => scrollTo("#about")} aria-label="about">
          <div className="w-16 h-16 flex justify-center items-center hover:bg-red-600 hover:text-white">
            <p className="">About</p>
          </div>
        </button>
        <button onClick={() => scrollTo("#projects")} aria-label="projects">
          <div className="w-16 h-16 flex justify-center items-center hover:bg-red-600 hover:text-white">
            <p>Projects</p>
          </div>
        </button>
        <button onClick={() => scrollTo("#skills")} aria-label="skills">
          <div className="w-16 h-16 flex justify-center items-center hover:bg-red-600 hover:text-white">
            <p>Skills</p>
          </div>
        </button>
        <button onClick={() => scrollTo("#contact")} aria-label="contact">
          <div className="w-16 h-16 flex justify-center items-center hover:bg-red-600 hover:text-white">
            <p>Contact</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
