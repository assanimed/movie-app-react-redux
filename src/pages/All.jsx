import { useEffect, useState } from "react";
import MovieGrid from "../Components/MovieGrid/MovieGrid";
import Filter from "../Components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { setPublicMetaData } from "../features/movie/PublicMoviesSlice";

import { useGetPublicMoviesQuery } from "../features/movie/publicMovieApiSlice";

const All = () => {
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);

  const { pageLimit, currentPage, filterMode } = useSelector(
    (state) => state.PublicMovies
  );
  const query = useSelector((state) => state.filter.query);

  const {
    data: moviesData,
    isLoading,
    isSuccess,
    isError,
  } = useGetPublicMoviesQuery({
    currentPage,
    pageLimit,
    filter: query,
  });

  useEffect(() => {
    if (isSuccess) {
      setMovies(moviesData?.data);
      dispatch(setPublicMetaData(moviesData?.meta.pagination));
    }
  }, [isSuccess, moviesData]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="p-[20px]">
      <Filter />
      {isError && <h2>Failed to Load the Movies!</h2>}
      {!isError && movies.length ? (
        <div>
          <MovieGrid movies={movies} />
        </div>
      ) : (
        <div>No Movies To Show!</div>
      )}
    </div>
  );
};

export default All;
