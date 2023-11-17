import "./MainVideos.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function MainVideos() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
                const options = {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2Q5ZGNhNzg1NGU5YjkyNWU1OThhNWEwNGYxZGU1NCIsInN1YiI6IjY1Mzk2OTUzNjc4MjU5MDEwMTA5Nzg3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WoLIcLWvRhPLmOsxC6_l3eMlU1sHH7c44g9uyAKhXk0",
                        accept: "application/json",
                    },
                };

                const response = await axios.get(url, options);
                let data = response.data;
                const results = data.results.slice(0, 9);
                setMovies(results);
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
        <div className="mainvideos__container">
            <div className="mainvideos__container">
                <div className="mainvideos__container-moviebox">
                    {movies &&
                        movies.map((movie) => (
                            <>
                                <div className="mainvideos__container-imagebox">
                                    <img className="mainvideos__container-images" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                </div>
                            </>
                        ))}
                </div>
                <div className="mainvideos__container-textbox">
                    <h2 className="mainvideos__container-text">People spend an average of 7.4 minutes deciding what to watch. </h2>
                    <h2 className="mainvideos__container-text">We'll make it easier for you.</h2>
                </div>
            </div>
        </div>
    );
}
export default MainVideos;
