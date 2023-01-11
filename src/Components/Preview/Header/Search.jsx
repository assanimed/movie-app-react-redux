import React from "react";
import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <div className="h-[50px] relative w-full ml-6">
      <div className="absolute w-1/2">
        <div className="w-full flex items-center gap-2">
          <div>
            <BiSearch className="text-2xl text-[#2c8eff]" />
          </div>
          <input
            className="focus:border-b-2 focus:border-solid focus:border-[#2c8eff] grow p-2 border-b-2 border-[#00000000] outline-none font-roboto font-semibold text-[#3d3a3a] italic"
            type="text"
            placeholder="Search Movies, actors, series..."
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
