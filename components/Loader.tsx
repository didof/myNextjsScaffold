import React from 'react'

import styles, { keyframes } from 'styled-components'


interface LoaderProps {}

function Loader(props: LoaderProps) {
    return (
        <Backdrop>
            <Spinner />
        </Backdrop>
    )
}

const Backdrop = styles.div`
    /* - positioning - */
    position: absolute;
    top: 0;
    left: 0;

    /* - extension - */
    width: 100vw;
    height: 100vh;

    /* - appearance - */
    filter: blur(8);

    /* - children mgmt - */
    display: flex;
    justify-content: center;
    align-items: center;
`

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
`

const Spinner = styles.div`
    border: 8px solid #f3f3f3;
    border-top: 9px solid #3498db;
    border-radius: 50%;
    width: 10vh;
    height: 10vh;
    animation: ${rotate} 2s linear infinite;
`

export default Loader
