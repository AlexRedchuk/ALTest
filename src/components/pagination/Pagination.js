import React from "react";
import { ReactComponent as ArrowLeft } from "../../svg/Arrow left.svg";
import { ReactComponent as ArrowRight } from "../../svg/Arrow right.svg";

import "./Pagination.css";

const createArray = (start, end) => {
  return Array.from({ length: end }, (_, i) => i + start);
};

const Pagination = ({ currentPage, setCurrentPage, maxSize }) => {
  const renderPagination = () => {
    if (currentPage <= 3) {
      return createArray(1, maxSize < 5 ? maxSize : 5).map((el, i) => {
        return (
          <button
            key={el}
            onClick={() => setCurrentPage(el)}
            className={`pagination_pages_button${
              el === currentPage ? " active" : ""
            }`}
          >
            <span className="pagination_pages__button_text">{el}</span>
          </button>
        );
      });
    } else if (currentPage + 2 <= maxSize) {
      return createArray(currentPage - 2, 5).map((el, i) => {
        return (
          <button
            key={el}
            onClick={() => setCurrentPage(el)}
            className={`pagination_pages_button${
              el === currentPage ? " active" : ""
            }`}
          >
            <span className="pagination_pages__button_text">{el}</span>
          </button>
        );
      });
    } else {
      return createArray(
        maxSize < 5 ? 1 : maxSize - 4,
        maxSize < 5 ? maxSize : 5
      ).map((el, i) => {
        return (
          <button
            key={el}
            onClick={() => setCurrentPage(el)}
            className={`pagination_pages_button${
              el === currentPage ? " active" : ""
            }`}
          >
            <span className="pagination_pages__button_text">{el}</span>
          </button>
        );
      });
    }
  };

  return (
    <div className="pagination">
      <div className="pagination_container">
        <button
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1))}
          className="pagination_navButton left"
        >
          <ArrowLeft />
        </button>
        <div className="pagination_pages">
          <div className="pagination__pages_container">
            {currentPage - 3 > 0 && maxSize > 5 ? (
              <>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`pagination_pages_button${
                    currentPage === 1 ? " active" : ""
                  }`}
                >
                  <span className="pagination_pages__button_text">{1}</span>
                </button>
                <div className="pagination_pages_dots">
                  <span className="pagination_pages__button_text">...</span>
                </div>
              </>
            ) : (
              <></>
            )}
            {renderPagination()}
            {currentPage + 3 < maxSize ? (
              <>
                <div className="pagination_pages_dots">
                  <span className="pagination_pages__button_text">...</span>
                </div>
                <div
                  onClick={() => setCurrentPage(maxSize)}
                  className={`pagination_pages_button${
                    currentPage === maxSize ? " active" : ""
                  }`}
                >
                  <span className="pagination_pages__button_text">
                    {maxSize}
                  </span>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => (prev < maxSize ? prev + 1 : prev))
          }
          className="pagination_navButton right"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
