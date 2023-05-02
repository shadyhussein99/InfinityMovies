import { useSelector } from "react-redux";

function MovieDetails() {
    const movie = useSelector((state: any) => state.search.value);
    const [, rottenTomatoes] = movie.Ratings

    return (
        <main>
            <img src={movie?.Poster} alt="movie-poster" />
            <i className="fa-solid fa-arrow-left"></i>

            <div>
                <span>IMDB {movie?.imdbRating}</span>
                <span>({movie?.imdbVotes}) reviews</span>
            </div>
            <h1>{movie?.Title}</h1>
            <p>{movie?.Genre}</p>
            <p>{movie?.Plot}</p>
            <hr />
            <p>Main Actors <span>{movie?.Actors}</span></p>
            <hr />
            <p>Director <span>{movie?.Director}</span></p>
            <hr />
            <p>Writer <span>{movie?.Writer}</span></p>
            <hr />
            <p>Country <span>{movie?.Country}</span></p>
        </main>
    );
}

export default MovieDetails;