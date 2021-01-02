import { createSlice } from '@reduxjs/toolkit'

export interface Tab {
    disabled: boolean,
    external: boolean,
    label: string,
    url: string
}

export interface NavbarInitialState {
    activeTab: number,
    activeUrl: string,
    tabList: Tab[]
}

const initialState: NavbarInitialState = {
    activeTab: 0,
    activeUrl: '/',
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
            let { newActiveTab } = action.payload
            let newActiveUrl = state.tabList[newActiveTab].url
            state.activeTab = newActiveTab
            state.activeUrl = newActiveUrl
        }
    }
})

export const selectNavbar = (state) => state.navbar

export const { push } = navbarSlice.actions

export default navbarSlice.reducer