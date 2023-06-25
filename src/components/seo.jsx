import React from "react";

const SiteMetadata = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="Personal website for James Lowther" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href="https://www.jameslowther.com" />
      <html lang="en" />
    </>
  );
};

export default SiteMetadata;
