import React, { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { setModalStatus, setTarget } from "../store/ModalSlice";
import { useLoaderData, useParams, defer, Await } from "react-router";
import { getMovie } from "../api/movies/getMovie";

import TitlePreviewSke from "../Skeletons/TitlePreviewSke";
import MoviePage from "../Components/MoviePage/MoviePage";

function TitlePreview() {
  const dispatch = useDispatch();
  const { data } = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    dispatch(setTarget(0));
    dispatch(setModalStatus(false));
  }, [id]);
  return (
    <Suspense fallback={<TitlePreviewSke />}>
      <Await resolve={data}>
        {({ data: movie }) => {
          return (
            <div style={{ minHeight: "calc(100vh - 134px)" }}>
              <MoviePage movie={movie} />
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default TitlePreview;

export const loader = async ({ params }) => {
  const { id } = params;
  return defer({ data: getMovie(id) });
};
