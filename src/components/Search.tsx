import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { resultMovie } from "../redux/searchSlice";

function Search() {

    const dispatch = useDispatch()
    const movie = useSelector((state: any) => state.search.value)
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

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=ecd7e7dc&t=${selectedMovie.name}&y=${selectedMovie.year}&plot=full`)
            .then(res => res.json())
            .then(res => dispatch(resultMovie(res)))
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