// REACT
import React from 'react'

// REDUX
import { useSelector } from 'react-redux'
import { Tab, selectNavbar } from '@/lib/slices/navbarSlice'

// COMPONENTS
import NavbarItem from './NavbarItem'

// STYLE
import styles from 'styled-components'

function filterOutDisabledTabs(list: Tab[]): Tab[] {
    return list.filter(function ({ disabled }) {
        return !disabled
    })
}

function mapTabs(list: Tab[], active: number): JSX.Element[] {
    return list.map(function ({ label }, index) {
        return (
            <NavbarItem
                key={index}
                label={label}
                index={index}
                isActive={index === active}
            />
        )
    })
}

interface NavbarProps { }
function Navbar(props: NavbarProps) {

    const { activeTab, tabList } = useSelector(selectNavbar)

    // TODO memoization
    const filteredTabs = filterOutDisabledTabs(tabList)
    const tabs = mapTabs(filteredTabs, activeTab)

    return (
        <Nav>
            <List>
                {tabs}
            </List>
        </Nav>
    )
}

const Nav = styles.nav`
    width: 100vw;
    background-color: red;
`

const List = styles.ul`
    list-style-type: none;
    padding: 10px 50px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center
`

export default Navbar
