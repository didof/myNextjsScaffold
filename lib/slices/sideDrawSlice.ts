import { createSlice } from '@reduxjs/toolkit'

import sideDrawConfig from '@/configuration/sideDraw.json'

const initialSideDrawState = {
    ...sideDrawConfig,
    isOpen: false,
}

const sideDrawSlice = createSlice({
    name: 'sideDraw',
    initialState: initialSideDrawState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen
        },
        ensureIsClose: (state) => {
            state.isOpen = false
        }
    }
})

export const selectSideDraw = (state) => state.sideDraw

export const { toggle, ensureIsClose } = sideDrawSlice.actions

export default sideDrawSlice.reducer