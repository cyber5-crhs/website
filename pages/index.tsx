import People from '@/components/People';
import styles from '@/styles/Home.module.css';
import {
  Flex, Spacer,
  ButtonGroup
} from '@chakra-ui/react';

export default function Home() {
  return (
    <main className={styles.main}>
      <Flex>
        <Spacer />
        <ButtonGroup>
          <a href="#">Mastodon</a>
          <a href="#">Matrix</a>
        </ButtonGroup>
      </Flex>
      <People />
    </main>
  );
}