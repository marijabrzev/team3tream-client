import "./Watch.scss";
import React from "react";

export default function Watch({currentMovie}) {

  console.log(currentMovie);

  return (
    <div className="watch">
      <div className="watch__container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${currentMovie.backdrop_path})`, 
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="watch__box">
          <p className="watch__show">Enjoy the show!</p>
          <p className="watch__genre">Action</p>
          <p className="watch__content">{currentMovie.original_title}</p>
          <p></p>
          <p className="watch__rating">Rating &#9733; &#9733; &#9733; &#9733; &#9734;</p>
        </div>
        <button className="watch__button">WATCH NOW</button>
      </div>
    </div>
  );
}
