import React from "react";

import scrollTo from 'gatsby-plugin-smoothscroll';


const Navbar = () => {

  return (
    <div class="invisible lg:visible fixed z-50 h-screen w-full flex pointer-events-none">
      <div class="flex flex-col items-center justify-center pointer-events-auto rounded bg-white bg-opacity-95 w-16 p-4 ml-auto mr-6 my-auto">
        <button onClick={() => scrollTo('#landing')} class="mb-8 w-10 h-10 transform hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
        </button>
        <button onClick={() => scrollTo('#about')}>
          <div class="w-16 h-16 flex justify-center items-center hover:bg-gray-500">
            <p class="">About</p>
          </div>
        </button>
        <button onClick={() => scrollTo('#projects')}>
          <div class="w-16 h-16 flex justify-center items-center hover:bg-gray-500">
            <p>Projects</p>
          </div>
        </button>
        <button onClick={() => scrollTo('#skills')}>
          <div class="w-16 h-16 flex justify-center items-center hover:bg-gray-500">
            <p>Skills</p>
          </div>
        </button>
        <button onClick={() => scrollTo('#contact')}>
          <div class="w-16 h-16 flex justify-center items-center hover:bg-gray-500">
            <p>Contact</p>
          </div>
        </button>
    </div>
  </div>

  )
}

export default Navbar;