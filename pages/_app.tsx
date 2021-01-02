// NEXT
import { AppProps } from 'next/dist/next-server/lib/router/router';

// COMPONENTS
import Layout from '@/components/Layout'


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp
