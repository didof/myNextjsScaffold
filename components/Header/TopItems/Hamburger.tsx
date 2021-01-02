// REACT
import { Fragment } from 'react'

// REDUX
import { useDispatch } from 'react-redux'
import { toggle } from '@/lib/slices/sideDrawSlice'

// COMPONENTS
import TopItemContract from './TopItemContract'

// ANIMATION
import { motion } from 'framer-motion'

// STYLE
import styles from 'styled-components'

function Hamburger(props: TopItemContract) {
    if(!props.display) return <Fragment />

    const dispatch = useDispatch()
    function handleToggleSideDraw() {
        dispatch(toggle())
    }

    return (
        <Button
            onClick={handleToggleSideDraw}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
        >
        
        </Button>
    )
}

const Button = styles(motion.button)`
    border-radius: 50%;
    outline: none;
    width: 30px;
    height: 30px;

    cursor: pointer;
`

export default Hamburger
