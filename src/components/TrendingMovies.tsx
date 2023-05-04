import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"

function TrendingMovies() {

    const [trendingMovies, setTrendingMovies] = useState<string[]>([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=9642c68d4c399a387d2f64c0680f0bc7")
            .then(res => res.json())
            .then(res => { setTrendingMovies(res.results) })
            .catch(err => console.log(err))
    }, [])

    return <section>
        <h2>Most Popular</h2>

        <MovieCard
            movies={trendingMovies}
        />
    </section>
}

export default TrendingMovies