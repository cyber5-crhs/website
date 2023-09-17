import { Text, Flex, Spacer, ButtonGroup, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import Link from 'next/link';

import styles from '@/styles/Home.module.scss';
import People from '@/components/People';

import { SiMatrix } from '@icons-pack/react-simple-icons';
import Footer from '@/components/Footer';
import { jbmono } from '@/lib/fonts';
import { Red } from '@/components/Text';

function Header() {
  return (
    <header className={styles.header}>
      <Flex alignItems='center' minWidth='100%'>
        <Text
          fontWeight='extrabold'
          fontSize='4xl'
          className={jbmono.className}
        >
          cyber<Red>5</Red>
        </Text>
        <Spacer />
        <ButtonGroup>
          <Link href='https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt'>
            <SiMatrix width='30px' height='30px' />
          </Link>
        </ButtonGroup>
      </Flex>
    </header>
  );
}

export default function Home() {
  // Change this to set banner
  const announcement = true; // enable the banner 
  const number = 1; // meeting number 
  const date = 'sept 20'; // meeting date
  const time = '14:50'; // meeting time

  return (
    <div className={styles.wrapper}>
      {announcement && (
        <div className={styles.banner}>
          meeting{number} - {date} T{time} CST @ room 1625
        </div>
      )}
      <div className={styles.main}>
        <Header />
        <Flex direction='column' gap='32px' className={styles.flex}>
          <Flex direction='column' gap='32px'>
            <div>
              <Text
                fontWeight='extrabold'
                fontSize='3xl'
                className={`${jbmono.className} ${styles.desktopVisible}`}
              >
                who are we?
              </Text>

              <Text
                fontSize='lg'
                className={styles.desktopMaxW}
                color='var(--color-text)'
              >
                We are a group of cybersecurity enthusiasts at{' '}
                <Red>Cinco Ranch High School</Red> with the common goal of
                learning more about the cyberspace every day.
              </Text>

              <br />

              <Link href='/join' className={styles.buttonLink}>
                <Button
                  fontWeight={'normal'}
                  color={'black'}
                  background={'var(--color-accent)'}
                  className={`${styles.desktopMaxW} ${styles.button}`}
                >
                  Join now&nbsp;
                  <ArrowForwardIcon background={'none'} />
                </Button>
              </Link>
            </div>
            <div>
              <Text
                fontWeight='extrabold'
                fontSize='3xl'
                className={jbmono.className}
              >
                what do we do?
              </Text>

              <Text
                fontSize='lg'
                className={styles.desktopMaxW}
                color='var(--color-text)'
              >
                We occasionally host <Red>Jeopardy CTFs</Red> and explore{' '}
                <Red>hands-on labs</Red> over real cybersecurity incidents. When
                we aren&apos;t doing that, we&apos;re discussing about almost
                anything in our Matrix space.
              </Text>
            </div>
            <div>
              <Text
                fontWeight='extrabold'
                fontSize='3xl'
                className={jbmono.className}
              >
                what do we not do?
              </Text>

              <Text
                fontSize='lg'
                className={styles.desktopMaxW}
                color='var(--color-text)'
              >
                We won&apos;t teach you how hack into <Red>the government</Red>,
                how to
                <Red> break into</Red> Facebook accounts, or change your{' '}
                <Red>grades</Red>. We especially don&apos;t wear{' '}
                <Red>Anonymous masks</Red> (maybe).
              </Text>
            </div>
          </Flex>
          <People />
        </Flex>
      </div>
      <Footer />
    </div>
  );
}
