import { ReactNode } from "react";

import {
  Text,
  Flex,
  Spacer,
  ButtonGroup,
  textDecoration,
} from "@chakra-ui/react";

import Link from "next/link";

import styles from "@/styles/Contact.module.scss";
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
          Contact
        </Text>
        <Spacer />
      </Flex>
      <Spacer />
      <Text fontSize="lg">
        You can email us at{" "}
        <Link href="mailto:sudoers@cyber5.club">
          <RedUnderline>
            <Red>sudoers@cyber5.club</Red>
          </RedUnderline>
        </Link>
        <br />
        <br />
        Encrypt your email using our{" "}
        <Link href="/pubkey.asc">
          <RedUnderline>
            <Red>PGP key</Red>
          </RedUnderline>
        </Link>
        <br />
        <br />
        Contact us in our <Link href="https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt"><RedUnderline><Red>Matrix space</Red></RedUnderline></Link> for a faster response.
      </Text>
    </header>
  );
}

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
      </div>
      <Footer />
    </main>
  );
}
