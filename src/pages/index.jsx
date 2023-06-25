import React from "react";

import Landing from "../components/home/landing";
import SiteMetadata from "../components/seo";

const Home = () => {
  return (
    <>
      <Landing />
    </>
  );
};

export function Head() {
  return <SiteMetadata title="James Lowther" />;
}

export default Home;
