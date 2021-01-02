import { Fragment } from 'react'

import TopItemContract from './TopItemContract'

function Icon(props: TopItemContract) {
    if(!props.display) return <Fragment />

    return (
        <div>
            icona
        </div>
    )
}

export default Icon
