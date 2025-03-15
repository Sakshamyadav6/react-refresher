const Rating = ({ value }) => {
  return (
    <>
      <div>
        <span>
          <i
            style={{ color: "#FF9529" }}
            className={
              value >= 1
                ? "fa-solid fa-star"
                : value >= 0.5
                ? "fa-solid fa-star-half"
                : "none"
            }
          ></i>
          <i
            style={{ color: "#FF9529" }}
            className={
              value >= 2
                ? "fa-solid fa-star"
                : value >= 1.5
                ? "fa-solid fa-star-half"
                : "none"
            }
          ></i>
          <i
            style={{ color: "#FF9529" }}
            className={
              value >= 3
                ? "fa-solid fa-star"
                : value >= 2.5
                ? "fa-solid fa-star-half"
                : "none"
            }
          ></i>
          <i
            style={{ color: "#FF9529" }}
            className={
              value >= 4
                ? "fa-solid fa-star"
                : value >= 3.5
                ? "fa-solid fa-star-half"
                : "none"
            }
          ></i>
          <i
            style={{ color: "#FF9529" }}
            className={
              value >= 5
                ? "fa-solid fa-star"
                : value >= 4.5
                ? "fa-solid fa-star-half"
                : "none"
            }
          ></i>
        </span>
      </div>
    </>
  );
};
export default Rating;
