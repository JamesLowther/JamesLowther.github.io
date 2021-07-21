import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <main className="bg-black">
        <div x-data="scrollProgress" class="fixed inset-x-0 top-0 z-50">
          <div class="h-1 bg-blue-500" style={{}}width: ${percent}%`"></div>
        </div>
        {children}
        </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
