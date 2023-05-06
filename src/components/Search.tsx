import { useState } from "react"
import { useDispatch } from "react-redux";
import { selectedMovie } from "../redux/movieSlice";

function Search() {

    const dispatch = useDispatch()

    interface SearchedMovie {
        name: string;
        year: string;
    }

    const [searchingMovie, setSearchingMovie] = useState<SearchedMovie>({   // Tracks user input of Movie's name and year
        name: "",
        year: "",
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setSearchingMovie({ ...searchingMovie, [name]: value })
    }

    const handleClick = () => {
        dispatch(selectedMovie(searchingMovie))
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