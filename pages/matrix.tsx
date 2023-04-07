import { ReactNode } from "react";

import {
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import Link from "next/link";

import styles from "@/styles/Matrix.module.scss";
import Footer from "@/components/Footer";

interface Props {
  children: ReactNode;
}

function Red(props: Props) {
  return <span style={{ color: "#FF002A" }}>{props.children}</span>;
}

function RedUnderline(props: Props) {
  return <u style={{ textDecorationColor: "#FF002A" }}><Red>{props.children}</Red></u>;
}

function Header() {
  return (
    <header className={styles.header}>
      <Flex minWidth="100%">
        <Text as="b" fontSize="4xl">
          matrix
        </Text>
        <Spacer />
      </Flex>
      <Spacer />
      <Text fontSize="lg">
        Matrix is a secure, decentralized network for communications, used by cyber<Red>5</Red><br /><br />
        <Red>Account creation guide: </Red><br/>
      </Text>
      <Text fontSize="md">
          Making an account on the Matrix protocol is very easy. <br/><br/> You first need to download a client. There are many clients compatible with the Matrix Protocol, for mobile, desktop(Linux, MacOS, Windows), web, and even Nintendo 3ds. <br /><br/>
          We recommend these clients, but you can use any client you wish. <br/><br/>
          Generally good: <RedUnderline><Link href="https://element.io/download"><Red>Element</Red></Link></RedUnderline> <br/>
          For mobile: <RedUnderline><Red><Link href="https://fluffychat.im/">FluffyChat</Link></Red></RedUnderline> <br/><br/>
          After you download your client, all is left is registering your account.<br/><br/>
          Matrix is decentralized, meaning there are multiple homeservers to make your account on, these homeservers exchange messages with each other, so you can talk to people on different homeservers. <br/><br/>
          <RedUnderline>Matrix.org</RedUnderline> is a decent homeserver, but there are others we recommend such as <RedUnderline>projectsegfau.lt</RedUnderline><br /> <br />
          Finally, <Link href="https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt"><RedUnderline>join our matrix space</RedUnderline></Link>. Clicking the link should simply work.
          </Text>
    </header>
  );
}

export default function Matrix() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
      </div>
      <Footer />
    </main>
  );
}
