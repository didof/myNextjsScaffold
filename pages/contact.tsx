import { Fragment } from 'react'
import Head from 'next/head'

import { H1 } from '@/styles/Typography'

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

      <H1>Contact</H1>

    </Fragment>
  )
}
