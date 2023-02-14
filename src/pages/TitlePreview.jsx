import React, { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
// import { setModalStatus, setTarget } from "../store/ModalSlice";
import { setModalStatus, setTarget } from "../features/modal/modalSlice";
import { useParams, Await } from "react-router";
import { useGetMovieQuery } from "../features/movie/movieApiSlice";

import TitlePreviewSke from "../Skeletons/TitlePreviewSke";
import MoviePage from "../Components/MoviePage/MoviePage";

function TitlePreview() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMovieQuery(id);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    dispatch(setTarget(0));
    dispatch(setModalStatus(false));
  }, [id]);

  let content;

  if (isLoading) content = <TitlePreviewSke />;
  else if (isError) content = <h2>Failed to load the movie</h2>;
  else if (isSuccess)
    content = (
      <div style={{ minHeight: "calc(100vh - 134px)" }}>
        <MoviePage movie={movie?.data} />
      </div>
    );

  return content;
  /* return (
    <Suspense fallback={<TitlePreviewSke />}>
      <Await resolve={data}>
        {({ data: movie }) => {
          return (
            
          );
        }}
      </Await>
    </Suspense>
  ); */
}

export default TitlePreview;
