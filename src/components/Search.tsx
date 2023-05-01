import { useState, useEffect } from "react"

function Search() {

    interface SearchedMovie {
        name: string;
        year: string;
    }

    const [searchingMovie, setSearchingMovie] = useState<SearchedMovie>({   // Tracks user input of Movie's name and year
        name: "",
        year: ""
    })

    const [selectedMovie, setSelectedMovie] = useState<SearchedMovie>({     // Movie's name and year on clicking the search button
        name: "",
        year: ""
    })

    const [resultMovie, setResultMovie] = useState<any>("")        // The Movie returned from API

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=ecd7e7dc&t=${selectedMovie.name}&y=${selectedMovie.year}&plot=full`)
            .then(res => res.json())
            .then(res => setResultMovie(res))
            .catch(err => console.log(err))
    }, [selectedMovie.name, selectedMovie.year])

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setSearchingMovie({ ...searchingMovie, [name]: value })
    }

    const handleClick = () => {
        setSelectedMovie({ ...selectedMovie, name: searchingMovie.name, year: searchingMovie.year })
    }

    return <section>
        <h1>MovieHive</h1>

        <label>Title</label>
        <input type="text" name="name" value={searchingMovie.name} placeholder="Search" onChange={handleChange} />

        <label>Year (optional)</label>
        <input type="text" name="year" value={searchingMovie.year} onChange={handleChange} />

        <button onClick={handleClick}>SEARCH</button>

    </section>
}

export default Search