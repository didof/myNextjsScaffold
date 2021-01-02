import { createSlice } from '@reduxjs/toolkit'

export interface Tab {
    disabled: boolean,
    external: boolean,
    label: string,
    url: string
}

export interface NavbarInitialState {
    activeIndex: number,
    activeUrl: string,
    tabList: Tab[]
}

const initialState: NavbarInitialState = {
    activeIndex: 0,
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
        {
            label: 'settings',
            url: '/profile/settings',
            disabled: true,
            external: false
        },
    ],
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: initialState,
    reducers: {
        pushByIndex: (state, action) => {
            let { index } = action.payload
            let url = state.tabList[index].url
            state.activeIndex = index
            state.activeUrl = url
        },
        pushByUrl: (state, action) => {
            let { url } = action.payload
            let index = state.tabList.findIndex(function(element) {
                return element.url === url
            })
            if(state.tabList[index].disabled) {
                state.activeIndex = -1
            }
            state.activeUrl = url
        }
    }
})

export const selectNavbar = (state) => state.navbar

export const { pushByIndex, pushByUrl } = navbarSlice.actions

export default navbarSlice.reducer