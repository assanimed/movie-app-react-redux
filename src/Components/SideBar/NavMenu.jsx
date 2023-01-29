import React from "react";
import arrow from "./arrow.svg";
import { NavLink, Link } from "react-router-dom";

import classes from "./NavMenu.module.css";

function NavMenu() {
  const activeClass = `bg-[#4945ff] text-[#c3fd13]`;
  const LinkClasses =
    "flex justify-center gap-3 py-3 text-white hover:cursor-pointer hover:bg-[#563de3]";

  const activeState = ({ isActive }) => {
    return isActive
      ? `${LinkClasses} ${activeClass} ${classes["bg-img"]} ${classes.rotate}`
      : LinkClasses;
  };

  return (
    <nav className={`flex flex-col text-center ${classes.nav}`}>
      <ul>
        <li>
          <NavLink to="new" className={activeState}>
            New Releases
          </NavLink>
        </li>

        <li>
          <NavLink to="top" className={activeState}>
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink to="all" className={activeState}>
            Show All
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
