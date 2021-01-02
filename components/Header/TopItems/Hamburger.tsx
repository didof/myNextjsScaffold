// REACT
import { Fragment } from 'react'

// REDUX
import { useDispatch } from 'react-redux'
import { toggle } from '@/lib/slices/sideDrawSlice'

// COMPONENTS
import TopItemContract from './TopItemContract'

// STYLE
import styles from 'styled-components'

function Hamburger(props: TopItemContract) {
    if(!props.display) return <Fragment />

    const dispatch = useDispatch()
    function handleToggleSideDraw() {
        dispatch(toggle())
    }

    return (
        <Element onClick={handleToggleSideDraw}>
            hamburger
        </Element>
    )
}

const Element = styles.div`

    cursor: pointer;
`

export default Hamburger
