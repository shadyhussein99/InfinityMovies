import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import movieReducer from './movieSlice'

export default configureStore({
    reducer: {
        search: searchReducer,
        movie: movieReducer
    },
})