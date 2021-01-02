import Footer from './Footer/Footer'
import Header from './Header/Header'

import headerShowConfig from '@/appConfigs/header'

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
        <Page>
            <GlobalStyle />
            <Header show={headerShowConfig} />
            <main>
                {props.children}
            </main>
            <Footer />
        </Page>
    )
}

const Page = styles.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export default Layout
