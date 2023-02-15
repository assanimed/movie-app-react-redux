import React from "react";
import styled from "styled-components";
import { BASEURL } from "../../api/BASEURL";

import {
  useGetMovieQuery,
  useDeleteMovieMutation,
} from "../../features/movie/movieApiSlice";

import {
  setModalMovie,
  setModalStatus,
  setTarget,
} from "../../features/modal/modalSlice";
import { useDispatch } from "react-redux";

const NoPhoto = styled.div`
  color: red;
  font-size: 2rem;
  border: 2px solid red;
  padding: 10px 20px;
`;

const MovieDetailsModal = ({ handleCancel, id }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError, error } = useGetMovieQuery(id);

  const [
    deleteMovie,
    {
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
      error: deleteError,
    },
  ] = useDeleteMovieMutation(id);

  const noPhoto = data?.data?.attributes?.poster?.data === null;
  const movie = {};

  if (isSuccess) {
    movie.title = data?.data?.attributes?.title;
    movie.poster = data?.data?.attributes?.poster?.data?.attributes?.url;
  }

  const handleConfirm = async () => {
    await deleteMovie(id);
    setTimeout(() => {
      dispatch(setModalStatus(false));
      dispatch(setModalMovie(null));
      dispatch(setTarget(0));
    }, 200);
  };

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <>
      <div className="p-2 mt-5 flex flex-col items-center gap-8">
        <div>
          {noPhoto ? (
            <NoPhoto> No Poster ⛔</NoPhoto>
          ) : (
            <img
              style={{ width: "10rem" }}
              src={`${BASEURL}${movie?.poster}`}
              alt={`title ${movie?.title}`}
            />
          )}
        </div>
        <div>
          <p className="text-xs text-indigo-700">{movie?.title}</p>
        </div>
      </div>
      <div className="flex justify-around my-5">
        <button
          className="px-5 py-2 rounded text-white bg-indigo-900"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="px-5 py-2 rounded text-white bg-indigo-500 hover:bg-indigo-800 duration-150"
        >
          {isDeleteLoading ? "..." : "Confirm"}
        </button>
      </div>
    </>
  );
};

export default MovieDetailsModal;
