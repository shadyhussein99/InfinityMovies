import { useSelector } from "react-redux";

function MovieDetails() {
    const movie = useSelector((state: any) => state.search.value);
    const [ , rottenTomatoes] = movie.Ratings

    return (
        <main>{movie.Title}</main>
    );
}

export default MovieDetails;