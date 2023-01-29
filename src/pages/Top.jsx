import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getSortedPublicMovies from "../api/movies/getSortedPublicMovies";

import { setPublicMovies, setPublicMetaData } from "../store/PublicMovies";

import MovieGrid from "../Components/MovieGrid/MovieGrid";

const Top = () => {
  const movies = useSelector((state) => state.PublicMovies.movies);
  const dispatch = useDispatch();
  const CustomLoad = async (entry) => {
    const { data } = await getSortedPublicMovies(entry);
    dispatch(setPublicMovies(data));
    dispatch(setPublicMetaData({ pageCount: 1, page: 1 }));
  };

  useEffect(() => {
    CustomLoad("rating");
    return () => dispatch(setPublicMovies([]));
  }, []);
  return (
    <div className="p-[20px]">
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

export default Top;
