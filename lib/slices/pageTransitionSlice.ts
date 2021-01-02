import { createSlice } from '@reduxjs/toolkit'

const pageTransitionSlice = createSlice({
    name: "pageTransition",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    }
})

export const selectPageTransition = (state) => state.pageTransition

export const { increment } = pageTransitionSlice.actions

export default pageTransitionSlice.reducer