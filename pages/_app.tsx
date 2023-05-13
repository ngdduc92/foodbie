import { HttpClient } from '@/services/http-client';
import { AUTH_PROFILE } from '@/share/constants';
import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const httpClient = new HttpClient();
  useEffect(() => {
    const apiToken = localStorage.getItem('API_TOKEN');
    httpClient
      .get(AUTH_PROFILE)
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
