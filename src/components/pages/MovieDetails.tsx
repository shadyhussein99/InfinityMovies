import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMovie } from "../../redux/selectSlice";

function MovieDetails() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const movie = useSelector((state: any) => state.search.value);

    useEffect(() => {
        dispatch(searchMovie({   // To clear the user's selection after navigating to the Movie details page with the required movie
            name: "",
            year: "",
        }))
    }, [movie])


    return (movie.Response === "True" ?
        <main>
            <img className="poster" src={movie?.Poster} alt="movie-poster" />
            <i className="fa-solid fa-arrow-left back-arrow" onClick={() => navigate("/")}></i>

            <section className="details-section">
                <span className="ratingValue-span">IMDB {movie?.imdbRating}/10</span>
                <span className="ratingNumber-span">({movie?.imdbVotes} reviews)</span>

                <h1 className="title">{movie?.Title}</h1>
                <span className="genre">{movie?.Genre}</span>
                <p className="plot">{movie?.Plot}</p>
                <hr />
                <p>Main Actors <span>{movie?.Actors}</span></p>
                <hr />
                <p>Director <span>{movie?.Director}</span></p>
                <hr />
                <p>Writer <span>{movie?.Writer}</span></p>
                <hr />
                <p>Runtime <span>{movie?.Runtime}</span></p>
                <hr />
                <p>Release Date <span>{movie?.Released}</span></p>
                <hr />
                <p>Country <span>{movie?.Country}</span></p>
                <hr />
                <p>Box Office <span>{movie?.BoxOffice}</span></p>
                <hr />
                <p>Awards <span>{movie?.Awards}</span></p>
            </section>
        </main> :
        <h1 className="unmatching-movies">No matching Movie or Series!</h1>
    );
}

export default MovieDetails;