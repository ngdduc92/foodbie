import authService from '@/services/auth';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const apiToken = authService.getToken();
    if (!apiToken) {
      router.push('/login');
    }
  }, []);
  return <Component {...pageProps} />;
}
