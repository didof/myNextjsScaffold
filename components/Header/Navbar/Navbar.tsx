import React from 'react'

import NavbarItem from './NavbarItem'

import { NavbarItemConfig } from '@/appConfigs/navbar'

import styles from 'styled-components'

interface NavbarProps {
    config: NavbarItemConfig[]
}

function Navbar(props: NavbarProps) {

    // TODO memoization

    return (
        <Nav>
            <List>
                {props.config.filter(function(item) {
                    return !item.disabled
                }).map(function(item, index) {
                    return <NavbarItem key={index} label={item.label} url={item.url} />
                })}
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
