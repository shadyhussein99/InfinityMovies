import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { resultMovie } from "./redux/searchSlice";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search"
import ImageSlider from "./components/ImageSlider"
import NewestMovies from "./components/NewestMovies"
import TrendingMovies from "./components/TrendingMovies"
import MaxEarningsMovies from "./components/MaxEarningsMovies"
import ChildrenMovies from "./components/ChildrenMovies"

function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const selectedMovie = useSelector((state: any) => state.movie.value);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_API_KEY_OMDB}&t=${selectedMovie.name}&y=${selectedMovie.year}&plot=full`)
      .then(res => res.json())
      .then(res => dispatch(resultMovie(res)))
      .then(() => selectedMovie.name && navigate("/movieDetails"))   // To navigate to the Movie Details page only when the state is updated
      .catch(err => console.log(err))
  }, [selectedMovie.name, selectedMovie.year])
console.log(selectedMovie.name);

  return (
    <>
      <Search />
      <ImageSlider />
      <NewestMovies />
      <TrendingMovies />
      <MaxEarningsMovies />
      <ChildrenMovies />
    </>
  )
}

export default App
