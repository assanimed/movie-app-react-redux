import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination/Pagination";
import { setCurrentPublicPage } from "../../store/PublicMovies";

import MovieItem from "./MovieItem";
import { BASEURL } from "../../api/BASEURL";

function MovieGrid() {
  const dispatch = useDispatch();
  const { movies, currentPage, totalPages } = useSelector(
    (state) => state.PublicMovies
  );

  const onpagiClick = (page) => {
    dispatch(setCurrentPublicPage(page));
  };
  const handleNext = () => {
    if (totalPages > currentPage)
      dispatch(setCurrentPublicPage(currentPage + 1));
  };
  const handlePrev = () => {
    if (currentPage > 1) dispatch(setCurrentPublicPage(currentPage - 1));
  };

  const pagiAttr = {
    currentPage,
    totalPages,
    handleNext,
    handlePrev,
    onpagiClick,
  };
  return (
    <>
      <div className="mt-5 grid gap-2 grid-cols-autofill justify-center justify-items-center">
        {movies.map(({ id, attributes: movie }) => (
          <MovieItem
            key={id}
            poster={`${BASEURL}${movie?.poster?.data?.attributes?.url}`}
            rating={movie?.rating}
            title={movie?.title}
            genre={movie?.genre}
            duration={movie?.duration}
            id={id}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination {...pagiAttr} />
        </div>
      )}
    </>
  );
}

export default MovieGrid;
