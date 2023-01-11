import React, { useState } from "react";
import { MdOutlineSettingsInputComponent } from "react-icons/md";

function Filter() {
  const [filterVisible, setFilterVisible] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-[#626862] text-2xl">New Releases</div>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setFilterVisible((prev) => !prev)}
        >
          <MdOutlineSettingsInputComponent /> Filter
        </div>
      </div>
      {filterVisible && (
        <div>
          DO FILTERING{" "}
          <button className="bg-[red] p-2 rounded text-white">ZOOOZ</button>
        </div>
      )}
    </div>
  );
}

export default Filter;
