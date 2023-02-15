import React from "react";

import MovieDetailsModal from "./MovieDetailsModal";

import {
  setModalMovie,
  setModalStatus,
  setTarget,
} from "../../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import UserDetailsModal from "./UserDetailsModal";

const Details = () => {
  const dispatch = useDispatch();
  const { user, movie } = useSelector((state) => state.modal);
  const { pageLimit, ...rest } = useSelector((state) => state.movies);

  const handleCancel = () => {
    setTimeout(() => {
      dispatch(setModalStatus(false));
      dispatch(setModalMovie(null));
      dispatch(setTarget(0));
    }, 200);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="py-[10px] px-[20px] bg-white max-w-lg w-80 max-h-[80vh]">
        <h1>Are You Sure ?</h1>
        <p className="text-xs text-orange-700">Please Confirm your deletion</p>
        {user && (
          <UserDetailsModal
            handleCancel={handleCancel}
            id={user.id}
            username={user.username}
          />
        )}
        {movie && <MovieDetailsModal handleCancel={handleCancel} id={movie} />}
      </div>
    </div>
  );
};

export default Details;
