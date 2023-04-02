import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react/dist/chakra-provider';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider><Component {...pageProps} /></ChakraProvider>;
}
