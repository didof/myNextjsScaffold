// NEXT
import { AppProps } from 'next/dist/next-server/lib/router/router';

// REDUX
import { Provider } from 'react-redux'
import store from '@/lib/store'

// HOC
import Router from '@/HOC/Router'

// COMPONENTS
import Layout from '@/components/Layout'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Router>
    </Provider>
  );
}

export default CustomApp
