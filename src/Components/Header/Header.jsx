import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Search from "../Search/Search";
import {
  BiSun,
  CgSearch,
  GiHamburgerMenu,
  BsMoonStars,
} from "../../utils/icons";

import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

import BackDrop from "../ui/BackDrop";
import { setModalStatus, setTarget, setPathName } from "../../store/ModalSlice";

import { switchDarkMode } from "../../store/ThemeSlice";
import MobileNav from "../MobileNav/MobileNav";

const HeaderWrapper = styled.div`
  height: 70px;
  box-shadow: 0 2px 3px -2px #ddd0d0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  position: sticky;
  top: 0;
  // background: #fff;
  z-index: 100;
`;

function Header() {
  // const MenuRef = useRef();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const { isOpen, target } = useSelector((state) => state.Modal);
  const isDark = useSelector((state) => state.Theme.isDark);
  const location = useLocation();
  const inDashboard =
    location.pathname.split("/")[1].toLocaleLowerCase() === "dashboard";
  const onSearchClick = () => {
    dispatch(setModalStatus(true));
    dispatch(setTarget(3));
  };
  const onMobileNavClick = () => {
    dispatch(setModalStatus(true));
    dispatch(setTarget(1));
    dispatch(setPathName(location.pathname));

    // MenuRef.current.classList.add(styles.open);
  };

  const handleThemeSwitch = () => {
    dispatch(switchDarkMode());
  };

  useEffect(() => {
    if (isDark) window.document.body.classList.add("dark");
    else window.document.body.classList.remove("dark");
    if (target === 1) {
      // MenuRef.current.classList.add(styles.open);
    }
  }, [isDark, target]);

  const width = parseInt(
    window.getComputedStyle(document.body).width.split("px")[0]
  );
  const bg = width <= 450 ? "transparent" : undefined;
  return (
    <>
      {isOpen &&
        target === 3 &&
        createPortal(
          <BackDrop>
            <Search />
          </BackDrop>,
          document.querySelector("#modalPreview")
        )}
      {isOpen &&
        target === 1 &&
        createPortal(
          <BackDrop bg={bg}>
            <>
              <MobileNav />
            </>
          </BackDrop>,
          document.querySelector("#modalPreview")
        )}
      <HeaderWrapper className="bg-white dark:bg-[#36061f] dark:shadow-none ">
        <div className="flex items-center gap-5 md:ml-7">
          <div
            className="cursor-pointer block md:hidden p-2"
            onClick={onMobileNavClick}
          >
            <GiHamburgerMenu className="text-3xl text-indigo-500 dark:text-indigo-200" />
          </div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div></div>
        <div className="mr-5 flex items-center gap-2">
          {/* DARK MODE */}
          <div
            className="text-white p-2 cursor-pointer"
            onClick={handleThemeSwitch}
          >
            {isDark ? (
              <BiSun className="text-2xl" />
            ) : (
              <BsMoonStars className="text-[black] text-xl" />
            )}
          </div>
          {!inDashboard && (
            <button
              onClick={onSearchClick}
              className="flex items-center text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-100 rounded border-2 border-indigo-400 px-3 py-2 hover:bg-indigo-400 hover:text-white duration-150"
            >
              <CgSearch className="text-2xl" />
            </button>
          )}
          {isAuth && !inDashboard && (
            <>
              <Link
                to="/dashboard"
                className="hidden md:block text-indigo-500 border-2 border-indigo-400 px-5 dark:text-indigo-300 dark:hover:text-indigo-100 py-2 hover:bg-indigo-400 hover:text-white duration-150"
              >
                Dashboard
              </Link>
              <Link
                to="/logout"
                className="hidden md:block text-indigo-500 border-2 border-indigo-400 px-5 py-2 dark:text-indigo-300 dark:hover:text-indigo-100  hover:bg-indigo-400 hover:text-white duration-150"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </HeaderWrapper>
    </>
  );
}

export default Header;
