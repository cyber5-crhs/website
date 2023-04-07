import { ReactNode } from "react";

import { Text, Flex, Spacer } from "@chakra-ui/react";

import Link from "next/link";

import styles from "@/styles/Success.module.scss";
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
          welcome
        </Text>
        <Spacer />
      </Flex>
      <Spacer />
      <Text fontSize="lg">
        {"{"} success: <Red>true</Red> {"}"}
        <br />
      </Text>
      {/* <Text fontSize="18px">We have received your application for cyber<Red>5</Red></Text> */}
      <Text fontSize="lg">
        <Red>Next steps:</Red></Text>
        <Text fontSize="md">
        1. Join the <Link href="https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt"><RedUnderline><Red>matrix space</Red></RedUnderline><br/></Link>
        2. Attend your first meeting (will be next August or September)
        <br />
      </Text>
    </header>
  );
}

export default function Success() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
      </div>
      <Footer />
    </main>
  );
}
