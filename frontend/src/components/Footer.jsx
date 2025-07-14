import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Email Contact Section */}
      <div className="bg-white pb-8 px-4 text-center border-t border-gray-200">
        <p className="text-gray-600 pt-5 font-semibold  text-center text-sm mb-2">Or Email Us On</p>
        <a
          href="mailto:Info@DgtlInnovation.Com"
          className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200"
        >
          Info@DgtlInnovation.Com
        </a>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-900 py-4 px-4 text-center">
        <p className="text-white text-sm">
          Copyright © 2025 All Rights Reserved by{" "}
          <span className="font-medium">DIGITAL INNOVATION</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
