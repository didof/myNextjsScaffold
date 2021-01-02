import { Fragment } from 'react'
import Head from 'next/head'

import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { increment, selectPageTransition } from '@/lib/slices/pageTransitionSlice'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  const dispatch = useDispatch();
  const { value } = useSelector(selectPageTransition)
  console.log(value)

  function testing() {
    console.log('index/testing')
    dispatch(increment())
  }


  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>

      <Title>Home</Title>

      <button onClick={testing}>test</button>

    </Fragment>
  )
}
