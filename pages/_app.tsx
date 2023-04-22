import { HttpClient } from '@/services/http-client';
import { AUTH_PROFILE } from '@/share/constants';
import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    HttpClient.get(AUTH_PROFILE)
      .then((res) => {
        console.log(res);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);
  return <Component {...pageProps} />;
}
