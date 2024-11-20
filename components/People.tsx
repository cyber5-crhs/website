import styles from '@/styles/People.module.scss';
import { Flex, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import { Red } from './Text';
import { jbmono } from '@/lib/fonts';

export default function People() {
  let team = [
    ['Alex P', 'Co-President'],
    ['Joey L', 'Co-President'],
    ['Bernardo G', 'Community Manager'],
    ['Taniel L', 'Marketing Officer'],
    ['Max W', 'Establishment Officer'],
  ];
  let members = [
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
            <Text
              className={styles.name}
              key={uuidv4()}
              color='var(--color-text)'
            >
              {name} <Red>({position})</Red>
            </Text>
          ))}
        </div>
        {/* <div> */}
        {/*   <Text */}
        {/*     fontWeight='extrabold' */}
        {/*     fontSize='3xl' */}
        {/*     className={jbmono.className} */}
        {/*   > */}
        {/*     members */}
        {/*   </Text> */}
        {/*   {members.map((m) => ( */}
        {/*     <Text key={uuidv4()} color='var(--color-text)'> */}
        {/*       {m} */}
        {/*     </Text> */}
        {/*   ))} */}
        {/* </div> */}
      </Flex>
    </Flex>
  );
}
