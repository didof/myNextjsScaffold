import { createSlice } from '@reduxjs/toolkit'

const topItemsSlice = createSlice({
    name: 'topItems',
    initialState: {
        hamburger: true,
        icon: true,
        title: true,
        settings: true,
    },
    reducers: {
        toggle: (state, action) => {
            state[action.payload.which] = !state[action.payload.which]
        }
    }
})

export const selectTopItems = (state) => state.topItems

export const { toggle } = topItemsSlice.actions

export default topItemsSlice.reducer