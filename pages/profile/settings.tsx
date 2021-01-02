import Head from 'next/head'

import { H1 } from '@/styles/Typography'
import { IButton } from '@/styles/Button'

import styles from 'styled-components'

import { useDispatch } from 'react-redux'
import { toggleTheme } from '@/lib/slices/themeSlice'

function handleToggleTheme(dispatch) {
  dispatch(toggleTheme())
}

function Settings() {
  const dispatch = useDispatch()

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

      <IButton onClick={handleToggleTheme.bind(null, dispatch)} />
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
