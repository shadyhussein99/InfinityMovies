import Search from "./components/Search"
import ImageSlider from "./components/ImageSlider"
import NewestMovies from "./components/NewestMovies"
import store from "./redux/store"
import { Provider } from 'react-redux'

function App() {

  return (
    <>
    <Provider store={store}>
      <Search />
      </Provider>
      <ImageSlider />
      <NewestMovies />
    </>
  )
}

export default App
