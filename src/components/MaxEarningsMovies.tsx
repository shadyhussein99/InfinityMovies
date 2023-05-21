import { useState, useEffect } from "react";
import MovieCard from "./MovieCard"

function MaxEarningsMovies() {

    const [maxEarningsMovies, setMaxEarningsMovies] = useState<string[]>([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_API_KEY_IMDB}&language=en-US&sort_by=revenue.desc&page=1`)
            .then(res => res.json())
            .then(res => setMaxEarningsMovies(res.results))
            .catch(err => console.log(err))
    }, [])

    return <section className="maxEarnings-movies-section" id="max-earnings-movies">
        <h2>Max Earnings</h2>

        {maxEarningsMovies ?
            <MovieCard
                movies={maxEarningsMovies}
            /> :
            <p>Loading..</p>}
    </section>
}

export default MaxEarningsMovies