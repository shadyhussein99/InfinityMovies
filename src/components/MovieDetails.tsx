import { useState, useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMovie } from "../redux/selectSlice";

function MovieDetails() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const movie = useSelector((state: any) => state.search.value);
    const [rottenTomatoesRating, setRottenTomatoesRating] = useState<any>("")

    useEffect(() => {
        if (movie.Response === "True") {              // To avoid errors if the user searched for an invalid movie
            const [, rottenTomatoes] = movie.Ratings;
            setRottenTomatoesRating(rottenTomatoes.Value)
        }

        dispatch(searchMovie({   // To clear the user's selection after navigating to the Movie details page with the required movie
            name: "",
            year: "",
        }))
    }, [movie])


    return (movie.Response === "True" ?
        <main>
            <img src={movie?.Poster} alt="movie-poster" />
            <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>

            <div>
                <span>IMDB {movie?.imdbRating}/10</span>
                <span>Rotten Tomatoes {rottenTomatoesRating}</span>
                <span>({movie?.imdbVotes} reviews)</span>
            </div>

            <h1>{movie?.Title}</h1>

            <div>
                <span>{movie?.Genre}</span>
                <span>{movie?.Runtime}</span>
            </div>

            <p>{movie?.Plot}</p>
            <hr />
            <p>Main Actors <span>{movie?.Actors}</span></p>
            <hr />
            <p>Director <span>{movie?.Director}</span></p>
            <hr />
            <p>Writer <span>{movie?.Writer}</span></p>
            <hr />
            <p>Release Date <span>{movie?.Released}</span></p>
            <hr />
            <p>Country <span>{movie?.Country}</span></p>
            <hr />
            <p>Box Office <span>{movie?.BoxOffice}</span></p>
            <hr />
            <p>Awards <span>{movie?.Awards}</span></p>
        </main> :
        <h1>No matching Movie or Series!</h1>
    );
}

export default MovieDetails;