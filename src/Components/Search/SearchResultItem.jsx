import React from "react";

const SearchResultItem = ({ poster, title, duration }) => {
  return (
    <div className="p-2 rounded duration-150 flex gap-2 hover:bg-indigo-300">
      <div>
        <img src={poster} alt={`${title} poster`} width="40" />
      </div>
      <div>
        <h3 className=" m-0">{title}</h3>
        <p className="text-xs text-[#4a344e]">{duration}</p>
      </div>
    </div>
  );
};

export default SearchResultItem;
