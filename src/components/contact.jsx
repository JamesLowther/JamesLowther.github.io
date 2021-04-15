import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const Contact = () => {
  return (
    <section id="contact" className="w-full bg-blue-900 pb-20">
      <div className="pt-8 text-center w-5/6 mx-auto">
        <p className="text-white text-6xl mb-8 font-header">Contact</p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-3/4 md:w-1/5 mx-6 mb-6">
            <StaticImage src="../assets/images/map.png" className="rounded" />
            <p className="text-white text-2xl mt-2 font-header">Calgary, AB, Canada</p>
          </div>
          <div className = "flex flex-col items-center">
            <div className="rounded bg-blue-500 mx-6 p-1 sm:p-6 mb-4">
              <p className="text-white text-4xl font-display">Send me an email at:</p>
              <p className="text-gray-800 text-2xl sm:text-3xl font-display"><a className="underline" href="mailto:jamesevlowther@gmail.com">jamesevlowther@gmail.com</a></p>
            </div>
            <a href="/static/james-lowther-resume.pdf" target="_blank" rel="noreferrer">
              <div className="rounded-lg bg-gray-600 hover:bg-gray-700 mx-6 p-3 mt-6">
                <p className="text-white text-3xl font-display">Download Resume</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-12">
          <a href="https://github.com/JamesLowther/" target="_blank" rel="noreferrer" className="mx-6" aria-label="Go to my GitHub page">
            <StaticImage
              src="../assets/images/github-light.png"
              className="w-16 inline-block transform hover:scale-103" />
          </a>
          <a href="https://www.linkedin.com/in/jameselowther/" target="_blank" rel="noreferrer" className="mx-6 transform hover:scale-103" aria-label="Go to my LinkedIn page">
            <StaticImage
              src="../assets/images/linkedin.png"
              className="w-16 inline-block transform hover:scale-103" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;