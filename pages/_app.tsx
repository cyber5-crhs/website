import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import { poppins } from '@/lib/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <title>cyber5 — The Cybersecurity Club of CRHS</title>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
