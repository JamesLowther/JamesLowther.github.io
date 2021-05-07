import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-center mt-10 pb-10">
      <p className="bg-gray-300 w-2/3 md:w-1/3 lg:w-1/6 mx-auto rounded-lg text-black text-lg p-1">
        James Lowther - © {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
