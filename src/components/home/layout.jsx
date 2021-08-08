import React from "react";
import PropTypes from "prop-types";
import { useScrollIndicator } from 'react-use-scroll-indicator';

const Layout = ({ children }) => {
  const [state] = useScrollIndicator();

  return (
    <>
      <main className="bg-black">
        <div className="fixed inset-x-0 top-0 z-50">
          <div className="h-1 bg-red-600" style={{"width": `${state.value}%`}}></div>
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
