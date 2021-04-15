import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Landing = () => {
  return (
    <section
      id="landing"
      className="w-full lg:h-screen"
      style={{ display: "grid" }}
    >
      <StaticImage
        src="../assets/images/space-bg.jpg"
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
        placeholder="blurred"
      />
      <div
        className="flex flex-col justify-center items-center h-full overflow-auto"
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <div className="flex flex-row mt-6 mb-6">
          <a
            href="https://github.com/JamesLowther/"
            target="_blank"
            rel="noreferrer"
            className="mx-6 transform hover:scale-103"
            aria-label="Go to my GitHub page"
          >
            <StaticImage
              src="../assets/images/github-light.png"
              className="w-16"
              placeholder="blurred"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jameselowther/"
            target="_blank"
            rel="noreferrer"
            className="mx-6 transform hover:scale-103"
            aria-label="Go to my LinkedIn page"
          >
            <StaticImage
              src="../assets/images/linkedin.png"
              className="w-16"
              placeholder="blurred"
            />
          </a>
        </div>
        <div className="my-auto w-3/4 md:w-1/2 p-3 sm:p-10 rounded-lg bg-white bg-opacity-65">
          <p className="text-3xl sm:text-5xl tracking-widest font-header">
            JAMES LOWTHER
          </p>
          <p className="text-xl font-display mt-2">
            Currently attending my fourth year of schooling at the Univerity of
            Calgary pursuing a degree in computing science. Interested in
            cybersecurity and both front-end and back-end development.
          </p>
          <p className="text-xl font-display mt-4">
            Located in Calgary, Alberta
          </p>
        </div>
        <div className="my-20 transform hover:translate-y-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            width="60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Landing
