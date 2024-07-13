import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MiV3m0qowAgPVRVFCAviorM0y3scOj66ug&s"
        alt="movie poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="movie_date_rate">
          <p>10-20-2020</p>
          <p>
            8.0 <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil
          officia, nisi, eos sunt temporibus enim accusamus vitae eligendi
          deserunt quisquam est iste laborum error voluptate autem pariatur,
          dignissimos expedita.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
