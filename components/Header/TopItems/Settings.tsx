import { Fragment } from 'react'

import TopItemContract from './TopItemContract'

function Settings(props: TopItemContract) {
    if(!props.display) return <Fragment />

    return (
        <div>
            settings
        </div>
    )
}

export default Settings
