// REACT
import React from 'react'

// REDUX
import { useDispatch } from 'react-redux'
import { push } from '@/lib/slices/navbarSlice'

// NEXT
import { useRouter } from 'next/router'

// STYLE
import styles from 'styled-components'

function handleClick(router, dispatch, index: number) {
    dispatch(push({ newActiveTab: index }))
}

interface NavBarItemProps {
    label: string,
    index: number,
    isActive: boolean
}
function NavbarItem(props: NavBarItemProps) {
    const { label, index, isActive } = props

    const Component = isActive ? ActiveItem : Item

    const dispatch = useDispatch()
    const router = useRouter()

    return (
        <Component onClick={handleClick.bind(null, router, dispatch, index)}>
            {label}
        </Component>
    )
}

const Item = styles.li`
    background-color: white;
    padding: 10px;

    cursor: pointer;
`

const ActiveItem = styles(Item)`
    background-color: yellow;
`

export default NavbarItem