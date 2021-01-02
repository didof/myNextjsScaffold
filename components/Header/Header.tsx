import React from 'react'
import Navbar from './Navbar/Navbar'
import navbarConfig from '@/appConfigs/navbar'
import { HeaderShowProps } from '@/appConfigs/header'

interface HeaderProps {
    show: HeaderShowProps
}

function Header(props: HeaderProps) {
    return (
        <header>
            {props.show.icon ? "icon" : null}
            header
            {props.show.nav ? <Navbar config={navbarConfig} /> : null}

        </header>
    )
}

export default Header
