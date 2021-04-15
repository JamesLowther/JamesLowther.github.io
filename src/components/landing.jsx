import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Landing = () => {
  return (
    <section
      id="landing"
      class="w-full lg:h-screen"
      style={{ display: "grid" }}
    >
      <StaticImage
        src="../assets/images/landing-background.jpg"
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
      />
      <div
        class="flex flex-col justify-center items-center h-full overflow-auto"
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        <div class="flex flex-row mt-6 mb-6">
          <a
            href="https://github.com/JamesLowther/"
            target="_blank"
            rel="noreferrer"
            class="mx-6 transform hover:scale-103"
            aria-label="Go to my GitHub page"
          >
            <StaticImage
              src="../assets/images/github-light.png"
              className="w-16"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jameselowther/"
            target="_blank"
            rel="noreferrer"
            class="mx-6 transform hover:scale-103"
            aria-label="Go to my LinkedIn page"
          >
            <StaticImage src="../assets/images/linkedin.png" className="w-16" />
          </a>
        </div>
        <div class="my-auto w-3/4 md:w-1/2 p-3 sm:p-10 rounded-lg bg-white bg-opacity-65">
          <p class="text-3xl sm:text-5xl tracking-widest font-header">
            JAMES LOWTHER
          </p>
          <p class="text-xl font-display mt-2">
            Currently attending my fourth year of schooling at the Univerity of
            Calgary pursuing a degree in computing science. Interested in
            cybersecurity and both front-end and back-end development.
          </p>
          <p class="text-xl font-display mt-4">Located in Calgary, Alberta</p>
        </div>
        <div class="my-20 transform hover:translate-y-1">
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
