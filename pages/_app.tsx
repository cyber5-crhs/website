import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { JetBrains_Mono } from 'next/font/google';

const jbmono = JetBrains_Mono({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return <main className={jbmono.className}><ChakraProvider><Component {...pageProps} /></ChakraProvider></main>;
}
