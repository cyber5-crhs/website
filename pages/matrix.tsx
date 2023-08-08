import { ReactNode } from 'react';

import { Text, Flex, Spacer } from '@chakra-ui/react';

import Link from 'next/link';

import Image from 'next/image';

import styles from '@/styles/Matrix.module.scss';
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
  return (
    <u style={{ textDecorationColor: '#FF002A' }}>
      <Red>{props.children}</Red>
    </u>
  );
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
          matrix
        </Text>
        <Spacer />
      </Flex>
      <Spacer />
      <Text fontSize='lg' color='var(--color-text)'>
        There are several reasons why we avoid Discord, including several privacy
        issues, and the requirement of a proprietary client.
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        You can read an{' '}
        <RedTextUnderline>
          <a href='https://cadence.moe/blog/2020-06-06-why-you-shouldnt-trust-discord'>
            article
          </a>
        </RedTextUnderline>{' '}
        that explains some of Discord&apos;s issues.
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        That is why we opted to use Matrix, a secure, decentralized, and open-source messaging protocol.
      </Text>
      <Image
        width='88'
        height='31'
        alt='A gif saying Discord, NO WAY!'
        src='/assets/discord-no-way.gif'
      />
      <Text
        fontWeight='extrabold'
        fontSize='3xl'
        className={jbmono.className}
        mt='32px'
      >
        getting a client
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        The first thing you need to is download a client. There are many clients
        compatible with the Matrix Protocol, for mobile, desktop (e.g. Linux,
        FreeBSD, MacOS, Windows), web, and even Nintendo 3DS.
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        <RedUnderline>
          <Link href='https://element.io'>
            <Red>Element</Red>
          </Link>
        </RedUnderline>{' '}
        is a widely-used cross-platform client. Do you use Discord?{' '}
        <Link href='https://matrix.org/ecosystem/clients/cinny'>
          <RedTextUnderline>Cinny</RedTextUnderline>
        </Link>{' '}
        will feel like home. Other clients we recommend include{' '}
        <RedUnderline>
          <Link href='https://schildi.chat'>
            <Red>SchildiChat</Red>
          </Link>
        </RedUnderline>{' '}
        and{' '}
        <RedUnderline>
          <Red>
            <Link href='https://fluffychat.im/'>FluffyChat (mobile)</Link>
          </Red>
        </RedUnderline>
        .
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        There exist a wide assortment of clients that you can pick from. You can
        find a list of clients on the{' '}
        <Link href='https://matrix.org/ecosystem/clients'>
          <RedTextUnderline>matrix.org website</RedTextUnderline>
        </Link>
        .
      </Text>
      <Text
        fontWeight='extrabold'
        fontSize='3xl'
        className={jbmono.className}
        mt='32px'
      >
        registering an account
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        Once you download your client, all that&apos;s left do is to register an
        account.
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        Matrix is decentralized, meaning that there are multiple homeservers you
        can choose from to create your account. These homeservers exchange
        messages with each other, so you can talk to people on different
        homeservers.
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        <Link href='https://matrix.org'>
          <RedUnderline>Matrix.org</RedUnderline>
        </Link>{' '}
        is a decent homeserver, but there are others we recommend such as{' '}
        <Link href='https://envs.net'>
          <RedUnderline>envs.net</RedUnderline>
        </Link>
        .
      </Text>
      <Text
        fontWeight='extrabold'
        fontSize='3xl'
        className={jbmono.className}
        mt='32px'
      >
        joining our space
      </Text>
      <Text fontSize='lg' color='var(--color-text)'>
        Your last step: join our{' '}
        <Link href='https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt'>
          <RedUnderline>Matrix space</RedUnderline>
        </Link>
        , which is the Matrix equivalent of a Discord server. Make sure to say
        hi!
      </Text>
    </header>
  );
}

export default function Matrix() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
      </div>
      <Footer />
    </main>
  );
}
