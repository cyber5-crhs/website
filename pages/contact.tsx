import { ReactNode } from 'react';

import { Text, Flex, Spacer } from '@chakra-ui/react';

import Link from 'next/link';

import styles from '@/styles/Contact.module.scss';
import Footer from '@/components/Footer';
import { jbmono } from '@/lib/fonts';
import { RedTextUnderline } from '@/components/Text';

interface Props {
  children: ReactNode;
}

function Red(props: Props) {
  return <span style={{ color: '#FF002A' }}>{props.children}</span>;
}

function RedUnderline(props: Props) {
  return <u style={{ textDecorationColor: '#FF002A' }}>{props.children}</u>;
}

function Header() {
  return (
    <header className={styles.header}>
      <Flex minWidth='100%'>
        <Text
          fontWeight='extrabold'
          fontSize='4xl'
          className={jbmono.className}
        >
          contact
        </Text>
        <Spacer />
      </Flex>

      <Spacer />

      <Text fontWeight='extrabold' fontSize='3xl' className={jbmono.className}>
        matrix
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        The{' '}
        <Link href='https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt'>
          <RedTextUnderline>Matrix space</RedTextUnderline>
        </Link>{' '}
        is our preferred method of communication. We're basically always active
        here so you can expect a quick response.
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        If you don't already have a Matrix account, you should check our{' '}
        <Link href='/matrix'>
          <RedTextUnderline>guide</RedTextUnderline>
        </Link>{' '}
        on how to make one.
      </Text>

      <Text fontWeight='extrabold' fontSize='3xl' className={jbmono.className}>
        email
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        You can also send us an email at{' '}
        <Link href='mailto:sudoers@cyber5.club'>
          <RedUnderline>
            <Red>sudoers@cyber5.club</Red>
          </RedUnderline>
        </Link>
        . Since this is not our primary means of communication, replies may be
        delayed.
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        If privacy is a concern, you can encrypt your email using our{' '}
        <Link href='/pubkey.asc'>
          <RedUnderline>
            <Red>PGP key</Red>
          </RedUnderline>
        </Link>
        .
      </Text>
    </header>
  );
}

export default function Contact() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
      </div>
      <Footer />
    </main>
  );
}
