import { ReactNode } from 'react';

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
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
        <Flex direction='column' gap='32px' className={styles.flex}>
          <Flex direction='column' gap='32px'>
            <div>
              <Text
                fontWeight='extrabold'
                fontSize='3xl'
                className={jbmono.className}
              >
                who are we?
              </Text>

              <Text fontSize='lg' className={styles.desktopMaxW}>
                We are a group of cybersecurity enthusiasts with the common goal
                of learning more about the cyberspace every day.
              </Text>

              <br />

              <Link href='/join'>
                <Button
                  w='100%'
                  fontWeight={'normal'}
                  background={'var(--color-accent)'}
                  className={styles.desktopMaxW}
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

              <Text fontSize='lg' className={styles.desktopMaxW}>
                We occasionally host Jeopardy CTFs and explore hands-on labs
                over real cybersecurity incidents. When we don&apos;t do that,
                we&apos;re discussing about almost anything in our Matrix space.
              </Text>
            </div>
            <div>
              <Text
                fontWeight='extrabold'
                fontSize='3xl'
                className={jbmono.className}
              >
                sample text
              </Text>

              <Text fontSize='lg' className={styles.desktopMaxW}>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
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
