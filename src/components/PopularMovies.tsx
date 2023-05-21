import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"

function PopularMovies() {

    const [popularMovies, setPopularMovies] = useState<string[]>([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_REACT_API_KEY_IMDB}`)
            .then(res => res.json())
            .then(res => { setPopularMovies(res.results) })
            .catch(err => console.log(err))
    }, [])

    return <section className="popular-movies-section" id="popular-movies">
        <h2>Most Popular</h2>

        <MovieCard
            movies={popularMovies}
        />
    </section>
}

export default PopularMovies