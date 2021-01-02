import { createSlice } from '@reduxjs/toolkit'

export interface Tab {
    disabled: boolean,
    external: boolean,
    label: string,
    url: string
}

export interface NavbarInitialState {
    activeTab: number,
    tabList: Tab[]
}

const initialState: NavbarInitialState = {
    activeTab: 0,
    tabList: [
        {
            label: 'home',
            url: '/',
            disabled: false,
            external: false
        },
        {
            label: 'info',
            url: '/info',
            disabled: false,
            external: false
        },
        {
            label: 'contact',
            url: '/contact',
            disabled: false,
            external: false
        },
    ],
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: initialState,
    reducers: {
        push: (state, action) => {
            state[action.payload.which] = !state[action.payload.which]
        }
    }
})

export const selectNavbar = (state) => state.navbar

export const { push } = navbarSlice.actions

export default navbarSlice.reducer