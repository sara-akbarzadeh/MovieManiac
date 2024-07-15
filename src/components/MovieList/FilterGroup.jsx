import React from "react";

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rate) => (
        <li
          key={rate}
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          onClick={() => onRatingClick(rate)} // Passing the rate value directly
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
