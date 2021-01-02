// REACT
import { useState, useEffect } from 'react'

// REDUX
import { useSelector } from 'react-redux'
import { selectSideDraw } from '@/lib/slices/sideDrawSlice'

// STYLE
import styles from 'styled-components'

// ANIMATION
import { motion } from 'framer-motion'

function SideDraw() {
    const { width, isOpen, ease, duration } = useSelector(selectSideDraw)

    let [position, setPosition] = useState(0)

    useEffect(() => {
        setPosition(isOpen ? 0 : -width)
    }, [isOpen])

    return (
        <Section
            w={width}
            animate={{ x: position }}
            transition={{ ease, duration }}
        >
            sidedraw
        </Section>
    )
}

const Section = styles(motion.section)`
    position: absolute;

    width: ${props => props.w}px;
    background-color: orange;
    padding: 10px;
`

export default SideDraw
