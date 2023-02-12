import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-indigo-200 dark:bg-[#36061f] p-2 text-center">
      Made with <span className="text-red-700">❤</span> Using &nbsp;
      <span className="text-indigo-500 dark:text-indigo-300">
        <a
          className="hover:underline"
          href="https://reactjs.org/"
          target="_blank"
        >
          &nbsp;React
        </a>
        &nbsp;&&nbsp;
        <a
          className="hover:underline"
          href="https://redux-toolkit.js.org/"
          target="_blank"
        >
          Redux
        </a>
      </span>
    </div>
  );
};

export default Footer;
