import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import selectReducer from './selectSlice'

export default configureStore({
    reducer: {
        search: searchReducer,
        select: selectReducer,
    },
})