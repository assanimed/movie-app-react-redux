import { renderPagination } from "../../utils/helpers/renderPaginationPages";

const PaginationPages = ({ totalPages, currentPage, handleClick }) => {
  const pageObj = renderPagination(totalPages, currentPage);

  return (
    <>
      {pageObj.map((el, index) => (
        <button
          disabled={!el.isPage || el.value === currentPage}
          key={`${el.value}${index}`}
          className={`hover:text-indigo-400 disabled:text-black ${
            el.value === currentPage ? "text-2xl disabled:text-blue-400" : ""
          }`}
          onClick={() => handleClick(el.value)}
        >
          {el.value}
        </button>
      ))}
    </>
  );
};

export default PaginationPages;
