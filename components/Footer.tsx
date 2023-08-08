import { ReactNode } from 'react';

import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import styles from '@/styles/Footer.module.scss';

interface Props {
  children: ReactNode;
}

function RedTextUnderline(props: Props) {
  return (
    <u
      style={{
        color: 'var(--color-accent)',
        textDecorationColor: 'var(--color-accent)',
      }}
    >
      {props.children}
    </u>
  );
}

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Text fontSize='sm'>
          cyber5 © 2023 |{' '}
          <Link href='/contact'>
            <RedTextUnderline>
              <span style={{ color: 'var(--color-accent)' }}>contact</span>
            </RedTextUnderline>
          </Link>
        </Text>
        <Text fontSize='sm'>
          We are a 501(c)(3) nonprofit, fiscally sponsored by{' '}
          <Link href='https://hackclub.com/bank'>
            <RedTextUnderline>Hack Club</RedTextUnderline>
          </Link>
          .
        </Text>
        <Text fontSize='sm'>
          We are{' '}
          <Link href='https://bank.hackclub.com/cyber5'>
            <RedTextUnderline>transparent</RedTextUnderline>
          </Link>{' '}
          about our funds.
        </Text>
      </div>
    </div>
  );
}
