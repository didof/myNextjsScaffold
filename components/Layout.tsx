// COMPONENTS
import Footer from './Footer/Footer'
import Header from './Header/Header'
import SideDraw from './SideDraw/SideDraw'

// STYLE
import styles from 'styled-components'
import GlobalStyle from '@/styles/GlobalStyle'

function Layout(props) {
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
