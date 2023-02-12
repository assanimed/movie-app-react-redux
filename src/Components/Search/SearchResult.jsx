import React from "react";
import SearchResultItem from "./SearchResultItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASEURL } from "../../api/BASEURL";

const SearchResult = () => {
  const { movies, onSearch } = useSelector((state) => state.Search);

  if (!movies?.length)
    return (
      <div className="px-4 py-5 text-sm font-light text-gray-500 italic">
        {onSearch
          ? "No Result Found!"
          : "Start Looking Up for your Favorite Movies"}
      </div>
    );

  return (
    <div className="px-2 my-4">
      {movies?.map(({ id, attributes }) => {
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
      {/* <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link>
      <Link>
        <SearchResultItem />
      </Link> */}
    </div>
  );
};

export default SearchResult;
