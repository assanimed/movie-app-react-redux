import React from "react";
import SearchResultItem from "./SearchResultItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASEURL } from "../../utils/BASEURL";

import { useSearchMovieQuery } from "../../features/movie/publicMovieApiSlice";

const SearchResult = () => {
  const { onSearch, keyword } = useSelector((state) => state.Search);

  const { data: MovieData, isError } = useSearchMovieQuery(keyword);
  if (isError)
    return (
      <div className="px-4 py-5 text-sm font-light text-blue-500 italic">
        Failed to load Movies
      </div>
    );

  if (!MovieData?.data?.length)
    return (
      <div className="px-4 py-5 text-sm font-light text-gray-500 italic">
        {onSearch
          ? "No Result Found!"
          : "Start Looking Up for your Favorite Movies"}
      </div>
    );

  return (
    <div className="px-2 my-4">
      {MovieData?.data?.map(({ id, attributes }) => {
        return (
          <Link key={id} to={`/title/${id}`}>
            <SearchResultItem
              title={attributes?.title}
              poster={`${BASEURL}${attributes?.poster?.data?.attributes?.url}`}
              duration={attributes?.duration}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResult;
