import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setMetaData } from "../../store/MovieSlice";

import MoviesListTable from "./MoviesListTable";
import getMovies from "../../api/movies/getMovies";

function MoviesList() {
  const dispatch = useDispatch();
  const { pageLimit, movies, currentPage } = useSelector(
    (state) => state.Movies
  );
  const token = useSelector((state) => state.Auth.token);

  useEffect(() => {
    const loadMovies = async () => {
      const res = await getMovies(token, currentPage, pageLimit);
      dispatch(setMovies(res?.data));
      dispatch(setMetaData(res?.meta?.pagination));
    };
    loadMovies();
    return () => dispatch(setMovies([]));
  }, [currentPage]);

  return (
    <div className="p-2">
      {movies?.length ? (
        <div className="max-w-4xl mx-auto">
          <MoviesListTable moviesList={movies} />
        </div>
      ) : (
        <h1 className="text-center"> No Movies To View</h1>
      )}
    </div>
  );
}

export default MoviesList;
