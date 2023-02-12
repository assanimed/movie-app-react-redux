import PaginationPages from "./PaginationPages";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalPages,
  handleNext,
  handlePrev,
  onpagiClick,
}) => {
  return (
    <div className="flex justify-center h-full bg-slate-200 gap-3 text-black rounded-b-lg">
      <div className="h-full flex gap-2 p-3">
        <button
          className="flex flex-col items-center disabled:cursor-not-allowed"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <FaLongArrowAltLeft className="text-indigo-700" />
          <span className="text-xs">Previous</span>
        </button>
        <PaginationPages
          handleClick={onpagiClick}
          currentPage={currentPage}
          totalPages={totalPages}
        />
        <button
          className="flex flex-col items-center disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          <FaLongArrowAltRight className="text-indigo-700" />
          <span className="text-xs">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
