import React from "react"
import { Link } from "gatsby"

import SiteMetadata from "../components/SEO"

const NotFoundPage = () => {
  return (
    <section id="404">
      <SiteMetadata title="404: Not found" />
      <div className="w-full h-screen bg-black bg-opacity-50 text-white text-center flex items-center justify-center">
        <div>
          <p className="text-6xl font-header">404: Page not found</p>
          <p className="text-5xl">
            Go back to{" "}
            <Link to="/" className="underline">
              Home
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
