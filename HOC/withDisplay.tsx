import { Fragment } from 'react'

function withDisplay(WrapperComponent) {
    return (props) => {
        const { display } = props
        if(display == undefined || !display) return Fragment
        return <WrapperComponent {...props}/>
    }
}

export default withDisplay
