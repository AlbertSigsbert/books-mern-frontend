import React, { useState, useEffect } from "react";

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  // Use useEffect hook to update start index and end index when currentPage or totalPages change
  useEffect(() => {
    // Calculate start index based on current page and items per page
    let start = (currentPage - 1) * itemsPerPage;
    // Calculate end index based on start index and items per page
    let end = start + itemsPerPage;
    // Update state variables with new values
    setStartIndex(start);
    setEndIndex(end);
  }, [currentPage, totalPages, itemsPerPage]);

  // console.log(startIndex, endIndex);

  return (
    <div className="my-12 py-4 border-t border-gray-300 flex justify-between items-center">
      <p className="text-sm md:text-base font-nunito">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
