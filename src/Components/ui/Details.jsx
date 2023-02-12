import React from "react";
import MovieCardModal from "./MovieCardModal";
import {
  setModalMovie,
  setModalStatus,
  setTarget,
} from "../../store/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import deleteMovie from "../../api/movies/deleteMovie";
import { setMovies, setMetaData } from "../../store/MovieSlice";
import getMovies from "../../api/movies/getMovies";

const Details = ({ handleConfButton, onCancel }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.Modal.movie);
  const token = useSelector((state) => state.Auth.token);
  const { pageLimit, ...rest } = useSelector((state) => state.Movies);

  const handleCancel = () => {
    setTimeout(() => {
      dispatch(setModalStatus(false));
      dispatch(setModalMovie(null));
      dispatch(setTarget(0));
    }, 200);
  };
  const handleConfirm = async () => {
    await deleteMovie(movie.id, token);
    setTimeout(async () => {
      dispatch(setModalStatus(false));
      dispatch(setModalMovie(null));
      dispatch(setTarget(0));
      const {
        data,
        meta: { pagination: pagi },
      } = await getMovies(token, rest.currentPage, pageLimit);
      dispatch(setMetaData(pagi));
      dispatch(setMovies(data));
    }, 200);
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="py-[10px] px-[20px] bg-white max-w-lg w-80 max-h-[80vh]">
        <h1>Are You Sure ?</h1>
        <p className="text-xs text-orange-700">Please Confirm your deletion</p>
        {movie && <MovieCardModal poster={movie.url} title={movie.title} />}
        <div className="flex justify-around my-5">
          <button
            className="px-5 py-2 rounded text-white bg-indigo-900"
            onClick={onCancel ?? handleCancel}
          >
            Cancel
          </button>
          <button
            onClick={handleConfButton ?? handleConfirm}
            className="px-5 py-2 rounded text-white bg-indigo-500 hover:bg-indigo-800 duration-150"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
