import { createSlice } from '@reduxjs/toolkit'

import themes from '@/configuration/theme.json'

function getTheme() {
    const defaultThemeLabel = 'light'

    // TODO [*] read from local storage if another theme already used,
    // otherwise use default
    return defaultThemeLabel
}

const bootTimeTheme = getTheme()

const initialThemeState = {
    activeTheme: bootTimeTheme,
    themeInstructions: themes[bootTimeTheme],
    themesLabels: Object.keys(themes)
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        toggleTheme: (state) => {
            let newTheme = state.activeTheme === 'light' ? 'dark' : 'light'
            state.activeTheme = newTheme
            state.themeInstructions = themes[newTheme]
        }
    }
})

export const selectCurrentTheme = (state) => [
    state.theme.activeTheme,
    state.theme.themeInstructions
]

export const selectThemesLabels = (state) => state.theme.themesLabels

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer