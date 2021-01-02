import { Fragment } from 'react'

import TopItemContract from './TopItemContract'

function Hamburger(props: TopItemContract) {
    if(!props.display) return <Fragment />

    return (
        <div>
            hamburger
        </div>
    )
}

export default Hamburger
