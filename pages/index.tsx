import Head from 'next/head'

import { H1 } from '@/styles/Typography'

import styles from 'styled-components'

 function Home() {

  return (
    <Wrapper>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>

      <H1>Home</H1>

    </Wrapper>
  )
}

const Wrapper = styles.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default Home

