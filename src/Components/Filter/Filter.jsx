import React from "react";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatus } from "../../features/filter/filterSlice";
import FilterForm from "./FilterForm";

import {
  setFilterMode,
  setPublicMetaData,
} from "../../features/movie/PublicMoviesSlice";

function Filter() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.filter.isOpen);
  const filterMode = useSelector((state) => state.PublicMovies.filterMode);
  const clearFilter = () => {
    dispatch(setFilterMode(false));
    dispatch(setPublicMetaData({ page: 1 }));
  };

  return (
    <div>
      <div className="flex mb-6 justify-between">
        <button
          className="flex items-center gap-1 cursor-pointer hover:text-indigo-500 duration-150"
          onClick={() => dispatch(toggleStatus())}
        >
          <MdOutlineSettingsInputComponent /> Filters
        </button>
        {filterMode && (
          <button
            className="flex items-center gap-2  text-xs px-3 py-2 bg-yellow-600 text-white rounded"
            onClick={clearFilter}
          >
            <AiOutlineClear className="text-xl" /> Filter
          </button>
        )}
      </div>
      {isOpen && (
        <div>
          <div>
            <FilterForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
