
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SubscriptionWrapper from '../context/SubscriptionContext';
import UserPreferencesWrapper from '../context/UserPreferences';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {


  return (
  <QueryClientProvider client={queryClient}>
    <UserPreferencesWrapper defaultLanguage='es'>
      <SubscriptionWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SubscriptionWrapper>
    </UserPreferencesWrapper>
  </QueryClientProvider>
  )
}

export default MyApp
