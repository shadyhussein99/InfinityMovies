import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"

function NewestMovies() {

    const [newestMovies, setNewestMovies] = useState<string[]>([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_API_KEY_IMDB}&language=en-US&sort_by=popularity.desc&page=1`)
            .then(res => res.json())
            .then(res => { setNewestMovies(res.results) })
            .catch(err => console.log(err))
    }, [])

    return <section>
        <h2>What's New</h2>

        <MovieCard
            movies={newestMovies}
        />
    </section>
}

export default NewestMovies
