import { ReactNode } from "react";

import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import styles from "@/styles/Footer.module.scss";

interface Props {
  children: ReactNode;
}

function RedUnderline(props: Props) {
  return <u style={{ textDecorationColor: "#FF002A" }}>{props.children}</u>;
}

export default function Footer() {
  return (
    <Flex className={styles.main}>
      <Text fontSize="sm">cyber5 © 2023 | <Link href="/contact"><RedUnderline><span style={{color: '#FF002A'}}>contact</span></RedUnderline></Link></Text>
      <Text fontSize="sm">We are a <Link href="https://bank.hackclub.com/cyber5">501(c)(3) nonprofit</Link>, fiscally sponsored by <Link href="https://hackclub.com/bank">Hack Club</Link>.</Text>
    </Flex>
  );
}
