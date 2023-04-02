import { ChakraProvider } from '@chakra-ui/react';
import { JetBrains_Mono } from 'next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

const jbmono = JetBrains_Mono({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jbmono.className}>
      <Head>
        {/* Primary meta tags */}
        <title>cyber5 — The  Cybersecurity Club of CRHS</title>
        <meta name="title" content="cyber5 — The Cybersecurity Club of CRHS" />
        <meta name="description" content="We are a student-led club at Cinco Ranch High School made up of cybersecurity enthusiasts. We practice ethical hacking, host CTFs, and learn together." />

        {/* Open Graph / Facebook*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyber5.club/" />
        <meta property="og:title" content="cyber5 — The Cybersecurity Club of CRHS" />
        <meta property="og:description" content="We are a student-led club at Cinco Ranch High School made up of cybersecurity enthusiasts. We practice ethical hacking, host CTFs, and learn together." />
        <meta property="og:image" content="/assets/banner.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cyber5.club/" />
        <meta property="twitter:title" content="cyber5 — The Cybersecurity Club of CRHS" />
        <meta property="twitter:description" content="We are a student-led club at Cinco Ranch High School made up of cybersecurity enthusiasts. We practice ethical hacking, host CTFs, and learn together." />
        <meta property="twitter:image" content="/assets/banner.png" />
      </Head>
      <ChakraProvider><Component {...pageProps} /></ChakraProvider>
    </main>
  );
}
