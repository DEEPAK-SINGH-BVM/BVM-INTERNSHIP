// Pagination.js

import React, { useState } from "react";
import "./pagination.css";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage, "CURRENT-PAGE");

  const itemsPerPage = 10;

  const totalItems = 50;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(totalPages, "TOTAL-PAGE");

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    console.log(i, "I");
    pages.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex justify-center items-center space-x-2 mt-4 gap-1 bg-gray-100">
      <button
        // className={`px-4 py-2 rounded bg-blue-500 text-white`}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white "
        }`}
        onClick={handlePrevious}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded ${
            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        /*
      <button
  onClick={() => handleDelete(item.id)}
  disabled={edit !== null}
  className={`px-4 py-2 rounded ${
    edit !== null
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-red-600 hover:bg-red-700 text-white"
  }`}
>
  Delete
</button>


<button onClick={() => handleDelete(item.id)} disabled={edit}>
  Delete
</button>
      */
        // className="px-4 py-2 rounded bg-blue-500 text-white"
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;