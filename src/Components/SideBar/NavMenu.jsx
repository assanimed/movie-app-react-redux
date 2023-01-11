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
    <nav className={`mt-[100px] flex flex-col text-center ${classes.nav}`}>
      <ul>
        <li>
          <NavLink to="new" className={activeState}>
            New Releases
          </NavLink>
        </li>

        <li>
          <NavLink to="trending" className={activeState}>
            Trending
          </NavLink>
        </li>

        <hr className="bg-[#306f9960] h-[2px] border-none" />

        <li>
          <NavLink to="movies" className={activeState}>
            Movies
          </NavLink>
        </li>

        <li>
          <NavLink to="series" className={activeState}>
            Series
          </NavLink>
        </li>

        <li>
          <NavLink to="tv-shows" className={activeState}>
            TV Shows
          </NavLink>
        </li>

        <li>
          <NavLink to="animations" className={activeState}>
            Animations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
