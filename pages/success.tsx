import { ReactNode } from 'react';

import { Text, Flex, Spacer } from '@chakra-ui/react';

import Link from 'next/link';

import styles from '@/styles/Success.module.scss';
import Footer from '@/components/Footer';
import { Red, RedUnderline } from '@/components/Text';
import { jbmono, poppins } from '@/lib/fonts';

function Header() {
  return (
    <header className={styles.header}>
      <Text
        fontWeight='extrabold'
        fontSize='4xl'
        className={jbmono.className}
      >
        welcome aboard
      </Text>
      <Text fontSize='lg' className={jbmono.className} color='var(--color-text)'>
        {'{'} success: <Red>true</Red> {'}'}
        <br />
      </Text>
      <Text
        fontWeight='extrabold'
        fontSize='3xl'
        className={`${jbmono.className} ${styles.desktopVisible}`}
      >
        todo:
      </Text>
      <ol className={styles.todo}>
        <li className={jbmono.className}>
          <Text fontSize='lg' color='var(--color-text)' className={poppins.className}>
            Join the{' '}
            <Link href='https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt'>
              <RedUnderline>
                <Red>Matrix space</Red>
              </RedUnderline>
            </Link>.
          </Text>
        </li>
        <li className={jbmono.className}>
          <Text fontSize='lg' color='var(--color-text)' className={poppins.className}>
            Attend your first meeting (will be next August or September)
          </Text>
        </li></ol>
    </header>
  );
}

export default function Success() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
      </div>
      <Footer />
    </main>
  );
}
