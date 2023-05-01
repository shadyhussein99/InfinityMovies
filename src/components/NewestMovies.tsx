import { useState, useEffect } from "react"

function NewestMovies() {

    const [newestMovies, setNewestMovies] = useState<string[]>([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9642c68d4c399a387d2f64c0680f0bc7&language=en-US&sort_by=popularity.desc&page=1")
            .then(res => res.json())
            .then(res => setNewestMovies(res))
            .catch(err => console.log(err))
    }, [])

    return <section>
        <h2>What's New</h2>
    </section>
}

export default NewestMovies
