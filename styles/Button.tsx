import styles from 'styled-components'

import { motion } from 'framer-motion'

import { buttons as buttonAnimations } from '@/configuration/animations.json'

export const Button = styles(motion.button)`
    border-radius: 50%;
    outline: none;
    width: 30px;
    height: 30px;

    cursor: pointer;
`

import React from 'react'

export function IButton(props) {
    const { children } = props

    return (
        <Button
            {...props}
            {...buttonAnimations}
        >
            {children}
        </Button>
    )
}