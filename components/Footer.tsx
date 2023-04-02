import styles from "@/styles/Footer.module.scss";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Flex className={styles.main}>
      <Text>cyber5 © 2023 | <Link href="/contact"><span style={{color: '#1766FF'}}>contact</span></Link></Text>
      <Text>23440 Cinco Ranch Blvd, Katy, TX 77494</Text>
    </Flex>
  );
}
