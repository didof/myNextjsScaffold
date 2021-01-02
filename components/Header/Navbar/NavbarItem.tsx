import React from 'react'

import Link from 'next/link'

import styles from 'styled-components'

interface NavBarItemProps {
    label: string,
    url: string
}

function NavbarItem(props: NavBarItemProps) {
    return (
    <Item>
        <Link href={props.url}>
            {props.label}
        </Link>
    </Item>
    )
}

const Item = styles.li`
    background-color: white;
    padding: 10px;
`

export default NavbarItem