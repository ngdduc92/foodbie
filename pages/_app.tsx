import authService from '@/services/auth';
import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import '@/components/i18n';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const apiToken = localStorage.getItem('API_TOKEN');
    authService
      .profile()
      .then((res) => {
        console.log('res', res);
      })
      .catch((errors) => { });
    // if (!apiToken) {
    //   router.push('/login');
    // }
  }, []);
  return <Component {...pageProps} />;
}
