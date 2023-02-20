import React from "react";
import "./pagination.css";
const Pagination = ({ page, setPage, newsLength }) => {
  return (
    <div className="pagination-buttons">
      <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>
        Prev
      </button>
      {page}
      <button
        disabled={newsLength < (page + 1) * 10}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
