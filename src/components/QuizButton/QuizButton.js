import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function QuizButton() {
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
        <div className="outmost">
            <div className="movie-cards-container">
                {movies &&
                    movies.slice(0, 4).map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <img
                                className="movie-card__poster"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <p className="movie-card__title">{movie.title}</p>
                            <button className="movie-card__button">Watch Now!</button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default QuizButton;
