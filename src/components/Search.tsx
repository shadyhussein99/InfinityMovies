import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { resultMovie } from "../redux/searchSlice";
import { searchMovie } from "../redux/selectSlice";
import { useNavigate } from "react-router-dom";

function Search() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const selectedMovie = useSelector((state: any) => state.select.value);

    interface SearchedMovie {
        name: string;
        year: string;
    }

    const [searchingMovie, setSearchingMovie] = useState<SearchedMovie>({   // Tracks user input of Movie's name and year
        name: "",
        year: ""
    })

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_API_KEY_OMDB}&t=${selectedMovie.name}&y=${selectedMovie.year}&plot=full`)
            .then(res => res.json())
            .then(res => { dispatch(resultMovie(res)) })
            .then(() => selectedMovie.name && navigate("/movieDetails"))   // To navigate to the Movie Details page after the state is updated
            .catch(err => console.log(err))
    }, [selectedMovie.name, selectedMovie.year])

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setSearchingMovie({ ...searchingMovie, [name]: value })
    }

    const handleClick = () => {
        dispatch(searchMovie({
            name: searchingMovie.name,
            year: searchingMovie.year,
        }))
    }

    return <section className="search-section">

        <div className="search-container">
            <div className="search-div">
                <label>Title</label>
                <input type="text" name="name" value={searchingMovie.name} placeholder="Search" onChange={handleChange} />
            </div>

            <div className="search-div">
                <label>Year (optional)</label>
                <input type="text" name="year" value={searchingMovie.year} onChange={handleChange} />
            </div>
        </div>

        <div className="button-div">
            <button onClick={handleClick}>SEARCH</button>
        </div>

    </section>
}

export default Search