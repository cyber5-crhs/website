import { Text, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import { jbmono } from '@/lib/fonts';
import { Red, RedTextUnderline } from '@/components/Text';

export default function NotFound() {
  return (
    <Flex h='100dvh' justify='center' align='center'>
      <div>
        <Text
          fontWeight='extrabold'
          fontSize='4xl'
          className={jbmono.className}
        >
          cyber<Red>5</Red>
        </Text>
        <hr style={{ width: '4rem', margin: '8px 0' }} />
        <Text>
          You tried visiting a page that doesn’t
          <br />
          exist.&nbsp;
          <Link href='/'>
            <RedTextUnderline>Go back?</RedTextUnderline>
          </Link>
        </Text>
      </div>
    </Flex>
  );
}
