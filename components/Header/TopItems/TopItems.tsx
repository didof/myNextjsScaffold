// REACT
import React from 'react'

// REDUX
import { useSelector } from 'react-redux'
import { selectTopItems } from '@/lib/slices/topItemsSlice'

// COMPONENTS
import Icon from './Icon'
import Hamburger from './Hamburger'
import Title from './Title'
import Settings from './Settings'

// STYLE
import styles from 'styled-components'

function TopItems() {
    const { hamburger, icon, title, settings } = useSelector(selectTopItems)

    return (
        <Flexer>
            <Hamburger display={hamburger} />
            <Icon display={icon} />
            <Title display={title} />
            <Settings display={settings} />
        </Flexer>
    )
}

const Flexer = styles.div`
    background-color: blue;
    width: 100vw;

    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


export default TopItems
