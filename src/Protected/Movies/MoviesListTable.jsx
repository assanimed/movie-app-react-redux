import React from "react";
import styles from "./MoviesListTable.module.scss";
import { useSelector, useDispatch } from "react-redux";

import MovieItemPreview from "./MovieItemPreview";
import Pagination from "../../Components/Pagination/Pagination";
import { setCurrentPage } from "../../store/MovieSlice";

const headFootStyles = `border text-white p-5`;

function MoviesListTable({ moviesList }) {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.Movies);

  const onpagiClick = (page) => {
    dispatch(setCurrentPage(page));
  };
  const handleNext = () => {
    if (totalPages > currentPage) dispatch(setCurrentPage(currentPage + 1));
  };
  const handlePrev = () => {
    if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
  };

  const pagiAttr = {
    currentPage,
    totalPages,
    handleNext,
    handlePrev,
    onpagiClick,
  };
  return (
    <table className={`w-full border ${styles.Moviestable}`}>
      <thead className={headFootStyles}>
        <tr>
          <th>Title</th>
          <th>Directory</th>
          <th>Duration</th>
          <th>Genre</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {moviesList.map((movie, index) => (
          <MovieItemPreview movie={movie} key={movie.id} index={index} />
        ))}
      </tbody>
      {totalPages > 1 && (
        <tfoot className={headFootStyles}>
          <tr>
            <td colSpan={6} style={{ padding: "unset" }}>
              <Pagination {...pagiAttr} />
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}

export default MoviesListTable;
