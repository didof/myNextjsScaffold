// NEXT
import { AppProps } from 'next/dist/next-server/lib/router/router';

// REDUX
import { Provider } from 'react-redux'
import store from '@/lib/store'

// HOC
import Router from '@/HOC/Router'
import CustomThemeProvider from '@/HOC/CustomThemeProvider'

// COMPONENTS
import Layout from '@/components/Layout'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Router>
        <CustomThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustomThemeProvider>
      </Router>
    </Provider>
  );
}

export default CustomApp
