import { Fragment } from 'react'
import Head from 'next/head'

import { Title } from '@/styles/Typography'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>

      <Title>Contact</Title>

    </Fragment>
  )
}
