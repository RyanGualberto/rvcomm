import "./index.scss";
import { useState, useEffect } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

interface ICarouselProps {
  children: any;
  per_page: number;
  item_width: number;
}

const CarouselContainer = ({
  children,
  per_page,
  item_width,
}: ICarouselProps) => {
  const [current_page, set_current_page] = useState(0);
  const total_pages = Math.ceil(children.length / per_page);

  function handlePageChange(page: any) {
    if (page === -1) {
      page = children.length;
    }

    if (page > children.length - 1) {
      page = 0;
    }

    return set_current_page(page);
  }

  useEffect(() => {
    if (current_page > total_pages - 1) {
      set_current_page(0);
    }
  }, [current_page]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-container-content"
        style={{
          transform: `translateX(-${current_page * per_page * 275}px)`,
          width: `${children.length * item_width}px`,
        }}
      >
        {children}
      </div>
      <div className="carousel-container-pagination">
        <button
          disabled={current_page === 0}
          className={`carousel-container-pagination-button ${
            current_page === 0 ? "disabled" : ""
          }`}
          onClick={() => handlePageChange(current_page - 1)}
        >
          <MdOutlineNavigateBefore size={24} />
        </button>
        <button
          className="carousel-container-pagination-button"
          onClick={() => handlePageChange(current_page + 1)}
        >
          <MdOutlineNavigateNext size={24} />
        </button>
      </div>
      <div className="carousel-container-dots">
        {Array(total_pages)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${
                current_page === index ? "active" : ""
              }`}
              onClick={() => handlePageChange(index)}
            ></button>
          ))}
      </div>
    </div>
  );
};

export { CarouselContainer };
