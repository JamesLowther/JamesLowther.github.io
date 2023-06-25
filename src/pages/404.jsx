import React from "react";
import { Link } from "gatsby";

import SiteMetadata from "../components/seo";

const NotFoundPage = () => {
  return (
    <section id="404">
      <div className="w-full h-screen bg-black text-white text-center flex items-center justify-center">
        <div>
          <p className="text-6xl mb-8">404: Page not found</p>
          <p className="text-5xl">
            Go back to{" "}
            <Link to="/" className="underline">
              Home
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export function Head() {
  return <SiteMetadata title="James Lowther - 404" />;
}

export default NotFoundPage;
