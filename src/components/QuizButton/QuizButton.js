import React from "react";
import "./QuizButton.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Footer from "../Footer/Footer";
import Watch from '../Watch/Watch.js';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "#193058",
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
};

export default function QuizButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [movieRefinementCount, setMovieRefinementCount] = useState(0);
    const [genres, setGenres]= useState([]);

    const fetchNewMovies = async (movieId) => {
        try {
            const url = `https://api.themoviedb.org/3/movie/${movieId}/similar`;
            const options = {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2Q5ZGNhNzg1NGU5YjkyNWU1OThhNWEwNGYxZGU1NCIsInN1YiI6IjY1Mzk2OTUzNjc4MjU5MDEwMTA5Nzg3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WoLIcLWvRhPLmOsxC6_l3eMlU1sHH7c44g9uyAKhXk0",
                    accept: "application/json",
                },
            };

            const response = await axios.get(url, options);
            let data = response.data;
            const results = data.results.slice(0, 3);
            return results;
        } catch (error) {
            setError(error);
        }
    };

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
                const results = data.results.slice(0, 4);
                setMovies(results);
                const fetchGenres = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
        console.log(fetchGenres.data.genres);
                setGenres(fetchGenres.data.genres);
            } catch (error) {
                setError(error);
            }
        };

        fetchMovies();
    }, []);

    const handleMovieClick = async (movieId) => {
        if (movieRefinementCount === 3) {
            console.log("3 refinement stages finsished, display the new component");
            return;
        }
        setMovieRefinementCount(movieRefinementCount + 1);

        const moviesArray = movies;
        const clickedMovieIndex = moviesArray.findIndex((movie) => movie.id === movieId);
        const clickedMovie = moviesArray.find((movie) => movie.id === movieId);
    console.log(clickedMovie);
        const newMovies = await fetchNewMovies(movieId);
        newMovies.splice(clickedMovieIndex, 0, clickedMovie);
    console.log('genres');
    console.log(genres);
        setMovies(newMovies);
    };

    return (
        <div className="modal-button">
            <Button className="modal-button__button" onClick={handleOpen}>
                FIND A MOVIE TO WATCH!
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {(movieRefinementCount === 3 && <Watch />) || (
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Explore the perfect match for your current mood! Which option aligns
                            with your vibe?
                        </Typography>
                        <Typography id="modal-modal-subtitle" variant="h6" component="h2">
                            (Select One)
                        </Typography>
                        <div className="movie-cards-container">
                            {movies &&
                                movies.map((movie) => (
                                    <>
                                        <div className="movie-card-container__col">
                                            <div className="movie-card__button-div">
                                                <div className="movie-card__button">{genres && genres.find(genre => genre.id === movie.genre_ids[0])?.name || 'action'}</div>
                                            </div>
                                            <div
                                                onClick={() => {
                                                    handleMovieClick(movie.id);
                                                }}
                                                key={movie.id}
                                                className="movie-card"
                                            >
                                                <img
                                                    className="movie-card__poster"
                                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                    alt={movie.title}
                                                />
                                                <p className="movie-card__title">{movie.title}</p>
                                            </div>
                                        </div>
                                    </>
                                ))}
                        </div>
                    </Box>
                )}
            </Modal>
        </div>
    );
}
