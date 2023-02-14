import React, { useRef, useEffect } from "react";
import styles from "./MobileNav.module.scss";
import MobileNavMenu from "./MobileNavMenu";
import { RiMenuFoldLine } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";

import { setTarget } from "../../features/modal/modalSlice";

const MobileNav = () => {
  const dispatch = useDispatch();
  const target = useSelector((state) => state.modal.target);
  const MenuRef = useRef();

  const handleMobileClose = () => {
    MenuRef.current.classList.remove(styles.open);
    setTimeout(() => dispatch(setTarget(0)), 300);
  };

  useEffect(() => {
    if (target === 1) MenuRef.current.classList.add(styles.open);
  }, [target]);

  return (
    <>
      <div
        ref={MenuRef}
        className={` relative w-[100vw] max-w-md overflow-y-auto  h-[100vh] bg-[#fff] ${styles.mobileNav}`}
      >
        <div className=" sticky top-0 max-h-28 px-4 py-2 w-fill flex justify-end">
          <div
            onClick={handleMobileClose}
            className="rounded border-2 border-transparent hover:border-indigo-200 cursor-pointer p-2"
          >
            <RiMenuFoldLine className="text-2xl" />
          </div>
        </div>
        <div className="max-h-[calc(100vh - 112px)] ">
          <MobileNavMenu handleClose={handleMobileClose} />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
