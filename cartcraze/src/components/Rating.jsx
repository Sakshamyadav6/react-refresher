import React from "react";

const Rating = ({ value }) => {
  return (
    <>
      <div>
        <span style={{ color: "#f09322" }}>
          <i
            className={
              value >= 1
                ? "fa-solid fa-star"
                : value >= 0.5
                ? "fa-solid fa-star-half"
                : "none"
            }
          ></i>
          <i
            className={
              value >= 2
                ? "fa-solid fa-star"
                : value >= 1.5
                ? "fa-solid fa-star-half"
                : "none"
            }
          ></i>
          <i
            className={
              value >= 3
                ? "fa fa-solid fa-star"
                : value >= 2.5
                ? "fa-solid fa-star-half"
                : "none"
            }
          ></i>
          <i
            className={
              value >= 4
                ? "fa-solid fa-star"
                : value >= 3.5
                ? "fa-solid fa-star-half"
                : "none"
            }
          ></i>
          <i
            className={
              value >= 5
                ? "fa-solif fa-star-half"
                : value >= 4.5
                ? "fa-solid fa-stat-half"
                : "none"
            }
          ></i>
        </span>
      </div>
    </>
  );
};

export default Rating;
