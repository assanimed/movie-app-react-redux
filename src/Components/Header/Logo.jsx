import React from "react";
import { FcFilmReel } from "react-icons/fc";

function Logo() {
  return (
    <div className=" h-[70px] flex justify-center gap-2 items-center">
      <FcFilmReel className="text-4xl dark:contrast-[2.5]	" />
      <span className="text-[#000] md:text lg:text-xl dark:text-[#E5B8F4]">
        MoviesApp
      </span>
    </div>
  );
}

export default Logo;
