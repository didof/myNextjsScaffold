import Head from 'next/head'

import { H1 } from '@/styles/Typography'

import styles from 'styled-components'

 function Settings() {

  return (
    <Wrapper>
      <Head>
        <title>Settings</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>

      <H1>Settings</H1>

    </Wrapper>
  )
}

const Wrapper = styles.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default Settings
