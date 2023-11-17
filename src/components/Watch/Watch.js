import "./Watch.scss";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Watch() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
                const options = {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2Q5ZGNhNzg1NGU5YjkyNWU1OThhNWEwNGYxZGU1NCIsInN1YiI6IjY1Mzk2OTUzNjc4MjU5MDEwMTA5Nzg3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WoLIcLWvRhPLmOsxC6_l3eMlU1sHH7c44g9uyAKhXk0",
                        accept: "application/json",
                    },
                };

                const response = await axios.get(url, options);
                let data = response.data;
                setMovies(data.results);
                const updatedMovies = data.map((movie) => ({
                    ...movie,
                    posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }));
            } catch (error) {
                setError(error);
            }
        };

        fetchMovies();
    }, []);


  return (
    <div className="watch">
      <div className="watch__container">
        <div className="watch__box">
          <p className="watch__show">Enjoy the show!</p>
          <p className="watch__genre">GENRE</p>
          <p className="watch__content">Content Name</p>
          <p></p>
          <p className="watch__rating">Rating &#9734; &#9734; &#9734; &#9734; &#9734;</p>
        </div>
        <button className="watch__button">WATCH NOW</button>
      </div>
    </div>
  );
}
