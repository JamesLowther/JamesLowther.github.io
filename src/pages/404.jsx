import React from "react"
import { Link } from "gatsby"

import StyledProjectsBackground from "../components/projectsbackground"
import SiteMetadata from "../components/SEO"

const NotFoundPage = () => {
  
  return (
    <StyledProjectsBackground>
      <SiteMetadata title="404: Not found" />
      <div class="w-full h-screen bg-black bg-opacity-50 text-white text-center flex items-center justify-center">
        <div>
          <p class="text-6xl font-header">404: Page not found</p>
          <p class="text-5xl">Go back to <Link to="/" className="underline">Home</Link></p>
        </div>
      </div>
    </StyledProjectsBackground>
  )

}

export default NotFoundPage