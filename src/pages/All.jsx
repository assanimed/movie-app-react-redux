import { useEffect } from "react";
import MovieGrid from "../Components/MovieGrid/MovieGrid";
import Filter from "../Components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import getPublicMovies from "../api/movies/getPublicMovies";
import {
  setPublicMovies,
  setPublicMetaData,
} from "../features/movie/PublicMoviesSlice";
import getFilteredMovies from "../api/movies/getFilteredMovies";

const All = () => {
  const dispatch = useDispatch();
  const { movies, pageLimit, currentPage, filterMode } = useSelector(
    (state) => state.PublicMovies
  );
  const query = useSelector((state) => state.filter.query);

  const loaAllovies = async (currentPage, pageLimit) => {
    const { data, meta } = await getPublicMovies(currentPage, pageLimit);
    dispatch(setPublicMovies(data));
    dispatch(setPublicMetaData(meta.pagination));
  };

  const loadFiltered = async (query, currentPage, pageLimit) => {
    const { data, meta } = await getFilteredMovies(
      query,
      currentPage,
      pageLimit
    );
    dispatch(setPublicMovies(data));
    dispatch(setPublicMetaData(meta.pagination));
  };

  useEffect(() => {
    if (filterMode) loadFiltered(query, currentPage, pageLimit);
    else loaAllovies(currentPage, pageLimit);
    return () => {
      dispatch(setPublicMovies([]));
    };
  }, [filterMode, currentPage]);
  return (
    <div className="p-[20px]">
      <Filter />
      {movies.length ? (
        <div>
          <MovieGrid />
        </div>
      ) : (
        <div>No Movies To Show!</div>
      )}
    </div>
  );
};

export default All;
