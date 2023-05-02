import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: "",
    },
    reducers: {
        resultMovie: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { resultMovie } = searchSlice.actions

export default searchSlice.reducer

