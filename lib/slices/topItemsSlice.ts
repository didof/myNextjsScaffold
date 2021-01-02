import { createSlice } from '@reduxjs/toolkit'

import topItemsConfig from '@/configuration/topItems.json'

const topItemsSlice = createSlice({
    name: 'topItems',
    initialState: topItemsConfig,
    reducers: {
        toggle: (state, action) => {
            state[action.payload.which] = !state[action.payload.which]
        }
    }
})

export const selectTopItems = (state) => state.topItems

export const { toggle } = topItemsSlice.actions

export default topItemsSlice.reducer