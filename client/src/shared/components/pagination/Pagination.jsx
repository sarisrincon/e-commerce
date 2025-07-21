import React from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      {currentPage >= totalPages && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="pagination__button"
        >
          ‹ Anterior
        </button>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={currentPage === i + 1 ? 'pagination__button active' : 'pagination__button'}
        >
          {i + 1}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="pagination__button"
        >
          Siguiente ›
        </button>
      )}

    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;