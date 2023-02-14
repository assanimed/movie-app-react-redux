import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMetaData } from "../../features/movie/movieSlice";

import MoviesListTable from "./MoviesListTable";

import { useGetMoviesQuery } from "../../features/movie/movieApiSlice";

function MoviesList() {
  const dispatch = useDispatch();
  const { pageLimit, currentPage } = useSelector((state) => state.movies);

  const { data, isLoading, isSuccess } = useGetMoviesQuery({
    currentPage,
    pageLimit,
  });

  let movies;

  if (isSuccess) {
    movies = data?.data;
    dispatch(setMetaData(data?.meta?.pagination));
  } else if (isLoading) return <h1>Loading .... </h1>;

  return (
    <div className="p-2">
      {movies?.length && (
        <div className="max-w-4xl mx-auto">
          <MoviesListTable moviesList={movies} />
        </div>
      )}
    </div>
  );
}

export default MoviesList;
