// REACT
import { useEffect } from 'react'

// COMPONENTS
import Navbar from './Navbar/Navbar'
import TopItems from './TopItems/TopItems'


// STYLE
import styles from 'styled-components'

interface HeaderProps {}
function Header(props: HeaderProps) {

    return (
        <Flexer>
            <TopItems />
            <Navbar />
        </Flexer>
    )
}

const Flexer = styles.header`
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export default Header
