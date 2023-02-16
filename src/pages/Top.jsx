import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPublicMetaData } from "../features/movie/PublicMoviesSlice";

import MovieGrid from "../Components/MovieGrid/MovieGrid";
import { useGetSortedMoviesQuery } from "../features/movie/publicMovieApiSlice";

const Top = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const {
    data: moviesData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSortedMoviesQuery({ sort: "rating" });

  console.log("SOrted Movies -> ", moviesData);

  useEffect(() => {
    dispatch(setPublicMetaData({ pageCount: 1, page: 1 }));
    if (isSuccess) setMovies(moviesData?.data);
  }, [isSuccess, moviesData]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="p-[20px]">
      {isError && <h2>Failed to load movies</h2>}
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

export default Top;
