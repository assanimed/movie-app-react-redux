import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineArrowLeftOnRectangle,
  RxDashboard,
  AiOutlineRise,
  AiOutlineWindows,
  AiOutlineHome,
  GiNewBorn,
} from "../../utils/icons";

const LinkClasses = `flex items-center gap-2 block py-3 px-4 text-white hover:bg-indigo-400 duration-150 rounded bg-[#a74bdd]`; /* bg-[#a74bdd] */
const linkParentClasses = `"block w-full`;

const MobileNavMenu = ({ handleClose }) => {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const prevPathName = useSelector((state) => state.Modal.pathname);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== prevPathName) {
      handleClose();
    }
  }, [location]);

  return (
    <div className="px-4 flex gap-2 mt-5 flex-col items-center">
      <div className={linkParentClasses}>
        <Link to="/" className={`${LinkClasses}`}>
          <AiOutlineHome />
          Home
        </Link>
      </div>
      <div className={linkParentClasses}>
        <Link to="/new" className={LinkClasses}>
          <GiNewBorn />
          New Releases
        </Link>
      </div>
      <div className={linkParentClasses}>
        <Link to="/top" className={LinkClasses}>
          <AiOutlineRise />
          Top Rated
        </Link>
      </div>
      <div className={linkParentClasses}>
        <Link to="/all" className={LinkClasses}>
          <AiOutlineWindows />
          Show All
        </Link>
      </div>

      <div className="m-4 h-2 w-full rounded bg-cyan-400 block"></div>

      {isAuth ? (
        <>
          <div className={linkParentClasses}>
            <Link to="/dashboard" className={`${LinkClasses}`}>
              <RxDashboard />
              Dashboard
            </Link>
          </div>
          <div className={linkParentClasses}>
            <Link to="/dashboard/movies" className={`${LinkClasses}`}>
              <RxDashboard />
              Movies
            </Link>
          </div>
          <div className={linkParentClasses}>
            <Link to="/dashboard/users" className={`${LinkClasses}`}>
              <RxDashboard />
              Users
            </Link>
          </div>
          <div className={linkParentClasses}>
            <Link to="/logout" className={`${LinkClasses}`}>
              <HiOutlineArrowLeftOnRectangle className="text-xl" />
              Logout
            </Link>
          </div>
        </>
      ) : (
        <div className={linkParentClasses}>
          <Link to="/login" className={`${LinkClasses}`}>
            <RxDashboard />
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavMenu;
