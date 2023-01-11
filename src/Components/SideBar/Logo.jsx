import React from "react";
import { FcFilmReel } from "react-icons/fc";

function Logo() {
  return (
    <div className="bg-[#315ce9] h-[70px] w-full flex justify-center py-5 gap-2 items-center">
      <FcFilmReel className="text-4xl" />
      <span className="text-[#fff] text-xl">MoviesApp</span>
    </div>
  );
}

export default Logo;
