// Slice of the selected movie that is required to see details about

import { createSlice } from '@reduxjs/toolkit'

export const selectSlice = createSlice({
    name: 'select',
    initialState: {
        value: {
            name: "",
            year: "",
        },
    },
    reducers: {
        searchMovie: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { searchMovie } = selectSlice.actions

export default selectSlice.reducer