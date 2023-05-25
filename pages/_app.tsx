import authService from '@/services/auth';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const apiToken = localStorage.getItem('API_TOKEN');
    authService
      .profile()
      .then((res) => {
        console.log('res', res);
      })
      .catch((errors) => {});
    if (!apiToken) {
      router.push('/login');
    }
  }, []);
  return <Component {...pageProps} />;
}
