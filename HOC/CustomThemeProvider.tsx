// REDUX
import { useSelector } from 'react-redux'
import { selectCurrentTheme } from '@/lib/slices/themeSlice'

// STYLE
import { ThemeProvider } from 'styled-components'

function CustomThemeProvider({ children }) {
    const [activeTheme, themeInstructions] = useSelector(selectCurrentTheme)

    return (
        <ThemeProvider theme={themeInstructions}>
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider
