import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <main className="bg-black">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
