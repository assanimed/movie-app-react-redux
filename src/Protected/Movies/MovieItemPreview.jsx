import React, { useState } from "react";
import { AiFillThunderbolt, AiFillDelete, FaEdit } from "../../utils/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setModalMovie,
  setModalStatus,
  setTarget,
} from "../../features/modal/modalSlice";
import styled from "styled-components";
import { BASEURL } from "../../api/BASEURL";

const TbodyTr = styled.tr`
  padding: 10px;
  font-size: 0.8rem;
  margin: 0 10px;
  td {
    padding: 5px 10px;
  }
`;

const iconStyle = `hover:text-[#6c7adc] hover:scale-150 duration-200`;
const inputClasses = `border-2 p-1 outline-none focus:border-indigo-700 text-xs dark:bg-transparent`;

function MovieItemPreview({ movie, index }) {
  const [editMode, setEditMode] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(movie);
  const [editData, setEditData] = useState(movie);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const switchEditMode = () => setEditMode((old) => !old);
  const handleCancel = () => {
    setEditData(currentMovie);
    setEditMode(false);
  };
  const handleChange = (e) =>
    setEditData((prev) => ({
      ...prev,
      attributes: {
        ...prev.attributes,
        [e.target.dataset.type]: e.target.value,
      },
    }));

  const DeleteItem = async (id) => {
    const { data: movie } = 56466;

    dispatch(setModalStatus(true));
    dispatch(setTarget(2));
    dispatch(
      setModalMovie({
        id: movie.id,
        title: movie?.attributes?.title ?? "No Title Provided!",
        url: `${BASEURL}${movie?.attributes?.poster?.data?.attributes?.url}`,
      })
    );
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    const updateItem = async () => {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjczOTc5MjQyLCJleHAiOjE2NzY1NzEyNDJ9.oTKoqHDBBewGY4ptIfrtZF8X_ndrbj1q1AdOhmbAOHY",
        },
        body: JSON.stringify({
          data: editData.attributes,
        }),
      };
      const res = await fetch(
        `http://localhost:1337/api/movies/${movie.id}`, /// ?populate=*
        options
      );
      const data = await res.json();
      if ("error" in data) throw new Error(data.error.message);
    };
    try {
      await updateItem();
      await setCurrentMovie(editData);
      await setEditMode(false);
    } catch (e) {
      // JUST FOR NOW
    }

    setIsSubmitting(false);
  };

  return editMode ? (
    <TbodyTr className=" dark:bg-indigo-500">
      <td>
        <input
          type="text"
          className={inputClasses}
          value={editData.attributes?.title ?? ""}
          data-type="title"
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          className={inputClasses}
          data-type="director"
          value={editData.attributes?.director ?? ""}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          min="0"
          step="0.01"
          className={inputClasses}
          data-type="duration"
          value={editData.attributes?.duration ?? ""}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          className={inputClasses}
          data-type="genre"
          value={editData.attributes?.genre ?? ""}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          className={inputClasses}
          data-type="Country"
          value={editData.attributes?.country ?? ""}
          onChange={handleChange}
        />
      </td>
      <td>
        <div className="flex flex-col justify-center gap-2">
          <button
            className="border-2 bg-indigo-500 dark:bg-amber-600 outline-1 outline-orange-200 text-white  px-3 py-1 border-none rounded"
            onClick={handleConfirm}
          >
            {isSubmitting ? "Submitting..." : "Confirm"}
          </button>
          <button
            className="border-2 bg-indigo-900 text-white px-3 py-1 outline-orange-200 border-none rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </td>
    </TbodyTr>
  ) : (
    <TbodyTr
      className={`${
        index % 2 === 0 ? "bg-indigo-50 text-zinc-900" : "dark:bg-[#5B4B8A]"
      }`}
    >
      <td>
        <Link
          className={`text-indigo-500 ${
            index % 2 === 0 ? "dark:text-indigo-900" : "dark:text-indigo-100"
          } hover:underline hover:text-indigo-700`}
          to={`/title/${movie.id}`}
        >
          {currentMovie.attributes?.title}
        </Link>
      </td>
      <td>{currentMovie.attributes?.director}</td>
      <td>{currentMovie.attributes?.duration}</td>
      <td>{currentMovie.attributes?.genre}</td>
      <td>{currentMovie.attributes?.country}</td>
      <td>
        <div className="flex justify-center gap-2">
          <button onClick={switchEditMode}>
            <AiFillThunderbolt className={iconStyle} />
          </button>
          <Link to={`/dashboard/movies/update/${currentMovie.id}`}>
            <FaEdit className={iconStyle} />
          </Link>
          <button onClick={() => DeleteItem(currentMovie.id)}>
            <AiFillDelete className={iconStyle} />
          </button>
        </div>
      </td>
    </TbodyTr>
  );
}

export default MovieItemPreview;
