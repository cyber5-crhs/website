import { ReactNode } from "react";

import {
  Text,
  Flex, Spacer,
  ButtonGroup
} from '@chakra-ui/react';

import styles from '@/styles/Home.module.scss';
import People from '@/components/People';

interface Props {
  children: ReactNode;
}

function Red(props: Props) {
  return <span style={{color: 'red'}}>
    {props.children}
  </span>;
}

function Header() {
  return (
    <header className={styles.header}>
      <Flex minWidth='100%'>
        <Text as='b' fontSize='4xl'>cyber<Red>5</Red></Text>
        <Spacer />
        <ButtonGroup>
          <a href="#">Mastodon</a>
          <a href="#">Matrix</a>
        </ButtonGroup>
      </Flex>
      <Text>The <Red>Cybersecurity</Red> Club of Cinco Ranch High School</Text>
      <Spacer />
      <Text>
        We a group of cybersecurity enthusiasts that practice <Red>ethical hacking</Red>,
        host <Red>CTFs</Red>, and have fun together.
      </Text>
    </header>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <People />
    </main>
  );
}
