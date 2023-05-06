import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        value: {
            name: "",
            year: "",
        }
    },
    reducers: {
        selectedMovie: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { selectedMovie } = movieSlice.actions

export default movieSlice.reducer
