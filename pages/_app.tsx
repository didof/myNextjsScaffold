// NEXT
import { AppProps } from 'next/dist/next-server/lib/router/router';

// REDUX
import { Provider } from 'react-redux'
import store from '@/lib/store'

// COMPONENTS
import Layout from '@/components/Layout'


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default CustomApp
