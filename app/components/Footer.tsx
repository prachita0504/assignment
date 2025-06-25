"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-30 px-4 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left text */}
        <p className="text-center md:text-left mb-4 md:mb-0">
          Copyright © 2022 Productions CulturArtistLy Inc. - All Rights Reserved.
        </p>

        {/* Centered icons in 3x3 grid */}
        <div className="grid grid-cols-3 gap-3 text-xl mb-4 md:mb-0">
          <a href="#" className="text-blue-600 hover:opacity-75">
            <FaFacebookF />
          </a>
          <a href="#" className="text-green-600 hover:opacity-75">
            <FaHome />
          </a>
          <a href="#" className="text-pink-600 hover:opacity-75">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-700 hover:opacity-75">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-red-600 hover:opacity-75">
            <FaPinterestP />
          </a>
          <a href="#" className="text-sky-500 hover:opacity-75">
            <FaTwitter />
          </a>
          <a href="#" className="col-span-3 flex justify-center text-red-600 hover:opacity-75 text-2xl mt-1">
            <FaYoutube />
          </a>
        </div>

        {/* Right text */}
        <p className="text-center md:text-right">
          Powered by{" "}
          <a
            href="https://www.godaddy.com"
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GoDaddy
          </a>{" "}
          Website Builder
        </p>
      </div>
    </footer>
  );
};

export default Footer;
