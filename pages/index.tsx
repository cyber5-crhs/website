import { ReactNode } from "react";

import {
  Text,
  Flex, Spacer,
  ButtonGroup,
} from '@chakra-ui/react';

import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Home.module.scss';
import People from '@/components/People';

import { SiMatrix } from '@icons-pack/react-simple-icons'
import Footer from "@/components/Footer";

interface Props {
  children: ReactNode;
}

function Red(props: Props) {
  return <span style={{color: '#FF002A'}}>
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
          <Link href=""><SiMatrix width="30px" height="30px" /></Link>
        </ButtonGroup>
      </Flex>
      <Text fontSize='lg'>The <Red>Cybersecurity</Red> Club of Cinco Ranch High School</Text>
      <Spacer />
      <Text fontSize='lg'>
        We a group of cybersecurity enthusiasts that practice <Red>ethical hacking</Red>,
        host <Red>CTFs</Red>, and have fun together.
      </Text>
      <Text fontSize="18px" fontWeight="bold"><u>{">>> Sign-Up Opens Soon <<<"}</u></Text>
    </header>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <People />
      <Footer />
    </main>
  );
}
