import React from "react";
import "./QuizButton.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function QuizButton() {
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
        <div className="modal-button">
            <Button className="modal-button__button" onClick={handleOpen}>
                Movie Picker!
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Quiz Title
                    </Typography>
                    <div className="movie-cards-container">
                        {movies &&
                            movies.slice(0, 4).map((movie) => (
                                <>
                                    <div className="movie-card-container__col">
                                        <div className="movie-card__button-div">
                                            <button className="movie-card__button">
                                                Watch Now!
                                            </button>
                                        </div>
                                        <div key={movie.id} className="movie-card">
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Click on the movie you would be most interested in watching!
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
