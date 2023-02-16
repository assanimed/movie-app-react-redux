import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { CgSearchLoading } from "react-icons/cg";
import { setModalStatus, setTarget } from "../../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchMovies,
  setOnSearch,
} from "../../features/search/SearchSlice";

import SearchResult from "./SearchResult";

import { setSearchKeyword } from "../../features/search/SearchSlice";

function Search() {
  const dispatch = useDispatch();
  const onSearch = useSelector((state) => state.Search.onSearch);
  const [key, setKey] = useState(null);

  const closeModal = () => {
    dispatch(setSearchMovies([]));
    dispatch(setModalStatus(false));
    dispatch(setTarget(0));
  };

  const handleKeyDown = (e) => setKey(e.key);
  document.addEventListener("keydown", handleKeyDown);

  const handleSearchChange = (e) => {
    dispatch(setOnSearch(true));
    const val = e.target.value;
    if (val.length >= 2) {
      dispatch(setSearchKeyword(val));
    } else {
      dispatch(setSearchKeyword(""));
      dispatch(setOnSearch(false));
    }
  };

  useEffect(() => {
    if (key === "Escape") {
      dispatch(setModalStatus(false));
      dispatch(setTarget(0));
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      dispatch(setOnSearch(false));
      dispatch(setSearchKeyword(""));
    };
  }, [key]);

  return (
    <div className="w-full h-full bg-[#ffffff0a] p-10">
      <div
        className="bg-white w-full max-w-2xl mx-auto px-2 py-2 rounded overflow-y-auto"
        style={{
          maxHeight: "calc(100vh - 60px)",
        }}
      >
        <div className="flex items-center">
          <div className="px-2">
            <label htmlFor="search">
              {onSearch ? (
                <CgSearchLoading className="text-2xl text-[#a29ee3]" />
              ) : (
                <BiSearch className="text-2xl text-[#a29ee3]" />
              )}
            </label>
          </div>
          <div className="flex-grow">
            <input
              placeholder="Search Movies"
              type="text"
              name="search"
              id="search"
              autoFocus={true}
              onChange={handleSearchChange}
              className="w-full text-xs md:text-sm placeholder:text-[#b3b8c2] outline-none rounded px-4 py-2 border-indigo-200 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              onClick={closeModal}
              className=" border-2 text-[10px] border-indigo-200 px-2 rounded"
            >
              ESC
            </button>
          </div>
        </div>
        <div className="mt-2 h-[2px] bg-purple-100"></div>
        <div>
          <SearchResult />
        </div>
      </div>
      {/* <div className="absolute w-1/2">
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
      </div> */}
    </div>
  );
}

export default Search;
