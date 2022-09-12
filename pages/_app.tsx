
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SubscriptionWrapper from '../context/SubscriptionContext';
import LanguageWrapper from '../context/LanguageContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {


  return (
  <QueryClientProvider client={queryClient}>
    <LanguageWrapper defaultLanguage='es'>
      <SubscriptionWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SubscriptionWrapper>
    </LanguageWrapper>
  </QueryClientProvider>
  )
}

export default MyApp
