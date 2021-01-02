// COMPONENTS
import Footer from './Footer/Footer'
import Header from './Header/Header'
import SideDraw from './SideDraw/SideDraw'

// STYLE
import styles, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    font-family: Open-sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }
`

interface LayoutProps {
    children: any
}

function Layout(props: LayoutProps) {
    return (
        <Screen>
            <GlobalStyle />
            <Header />
            <Page>
                <SideDraw />
                <Main>
                    {props.children}
                </Main>
            </Page>
            <Footer />
        </Screen>
    )
}

const Screen = styles.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Page = styles.div`
    background-color: purple;
    width: 100vw;

    display: flex;
    flex-direction: row;
    flex-grow: 1;
`

const Main = styles.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`

export default Layout
