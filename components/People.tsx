import styles from '@/styles/People.module.scss';
import { Flex, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import { Red } from './Text';
import { jbmono } from '@/lib/fonts';

export default function People() {
  let team = [
    ['Alex', 'Co-President'],
    ['Joey', 'Co-President'],
    ['Grace', 'Marketing Officer'],
  ];
  let members = [
    'Amanda',
    'Bernardo',
    'Billy',
    'Taniel',
    'Max',
    'Lakshay',
    'Kevin',
    'Rohan',
    'Jacob',
    'Jeydin',
    'Andrew',
    'John',
  ].sort();

  return (
    // wrapper
    <Flex className={styles.wrapper} justify='end'>
      {/* card styles */}
      <Flex className={`${styles.main} ${styles.card}`} gap='16px'>
        <div>
          <Text
            fontWeight='extrabold'
            fontSize='3xl'
            className={jbmono.className}
          >
            the team
          </Text>

          {team.map(([name, position]) => (
            <Text className={styles.name} key={uuidv4()}>
              {name} <Red>({position})</Red>
            </Text>
          ))}
        </div>
        <div>
          <Text
            fontWeight='extrabold'
            fontSize='3xl'
            className={jbmono.className}
          >
            our members
          </Text>
          {members.map((m) => (
            <Text key={uuidv4()}>{m}</Text>
          ))}
        </div>
      </Flex>
    </Flex>
  );
}
