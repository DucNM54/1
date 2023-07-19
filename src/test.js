import React, { useState } from 'react';
import './test.css';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // onPageChange(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= 5; i++) {
        buttons.push(
          <button
            key={i}
            className={currentPage === i ? 'active' : ''}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage >= 1) {
        buttons.push(
          <button
            key={1}
            className={currentPage === 1 ? 'active' : ''}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
        );
      }

      if (currentPage > 3) {
        buttons.push(<div key="ellipsis-start">...</div>);
      }

      for (let i = Math.max(currentPage - 1, 2); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        buttons.push(
          <button
            key={i}
            className={currentPage === i ? 'active' : ''}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        buttons.push(<div key="ellipsis-end">...</div>);
      }

      buttons.push(
        <button
          key={totalPages}
          className={currentPage === totalPages ? 'active' : ''}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination">
      <button
        className="prev"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      {renderPaginationButtons()}
      <button
        className="next"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
