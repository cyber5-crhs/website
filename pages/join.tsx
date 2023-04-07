import { ReactNode } from "react";

import {
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import Link from "next/link";

import styles from "@/styles/Join.module.scss";
import Footer from "@/components/Footer";

interface Props {
  children: ReactNode;
}

function Red(props: Props) {
  return <span style={{ color: "#FF002A" }}>{props.children}</span>;
}

function RedUnderline(props: Props) {
  return <u style={{ textDecorationColor: "#FF002A" }}>{props.children}</u>;
}

function Header() {
  return (
    <header className={styles.header}>
      <Flex minWidth="100%">
        <Text as="b" fontSize="4xl">
          Join us
        </Text>
        <Spacer />
      </Flex>
      <Spacer />
    </header>
  );
}

export default function Join() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
      </div>
      <Footer />
    </main>
  );
}
