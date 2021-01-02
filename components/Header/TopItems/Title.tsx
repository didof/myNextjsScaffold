import { Fragment } from 'react'

import TopItemContract from './TopItemContract'

function Title(props: TopItemContract) {
    if(!props.display) return <Fragment />
    
    return (
        <div>
            title
        </div>
    )
}

export default Title
