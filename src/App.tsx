import SideBar from "./components/SideBar"
import Search from "./components/Search"
import ImageSlider from "./components/ImageSlider"
import NewestMovies from "./components/NewestMovies"
import PopularMovies from "./components/PopularMovies"
import MaxEarningsMovies from "./components/MaxEarningsMovies"
import ChildrenMovies from "./components/ChildrenMovies"
import BackToTopButton from "./components/BackToTopButton"

function App() {

  return (
    <>
      <ImageSlider />
      <Search />
      <SideBar />
      <NewestMovies />
      <PopularMovies />
      <MaxEarningsMovies />
      <ChildrenMovies />
      <BackToTopButton />
    </>
  )
}

export default App
