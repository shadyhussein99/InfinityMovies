import { useState, useEffect } from "react";

function ChildrenMovies() {

    const [childrenMovies, setChildrenMovies] = useState<string[]>([])          // State that holds the response
    const [numberOfMovies, setNumberOfMovies] = useState<number>(8)             // Number of children movies displayed
    const displayedMovies: string[] = childrenMovies.slice(0, numberOfMovies)   // Array of movies displayed

    const [loadButton, setLoadButton] = useState<boolean>(true)    // To hide the Load More button if there is no more data

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_API_KEY_IMDB}&language=en-US&certification_country=US&certification.lte=G&sort_by=popularity.desc`)
            .then(res => res.json())
            .then(res => { setChildrenMovies(res.results) })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {        // Handles the display of the Load More button
        displayedMovies.length === childrenMovies.length ? setLoadButton(false) : setLoadButton(true)
    }, [displayedMovies, childrenMovies])


    return <section id="children-movies">
        <h2>Children Movies</h2>

        {displayedMovies.map((value: any) => {
            return <section key={value?.id}>
                <img src={`https://image.tmdb.org/t/p/w300/${value?.poster_path}`} alt="movie-img" />
                <h3>{value?.title || value?.name}</h3>
            </section>
        })}

        {loadButton && <button onClick={() => { setNumberOfMovies(numberOfMovies + 4) }}>Load More</button>}

    </section>
}

export default ChildrenMovies
