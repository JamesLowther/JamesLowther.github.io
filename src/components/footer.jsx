import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-300 text-center pb-3">
      <p className="bg-black w-2/3 md:w-1/3 lg:w-1/6 mx-auto rounded-lg text-white text-lg p-1">
        James Lowther - © {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
