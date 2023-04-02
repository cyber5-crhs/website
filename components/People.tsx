import styles from "@/styles/People.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function People() {
  let team = [
    "Joey    - Co-President",
    "Alex    - Co-President",
    "Grace   - Marketing Officer",
  ];
  let members = [
    "Amanda",
    "Bernardo",
    "Billy",
    "Taniel",
    "Max",
    "Lakshay",
  ].sort();

  return (
    <Flex className={styles.main}>
      <Text className={styles.sectionText}>Our team:</Text>
      {team.map((m) => (
        <Text key={m}>{m}</Text>
      ))}
      <Box height="16px"></Box>
      <Text className={styles.sectionText}>Our members:</Text>
      {members.map((m) => (
        <Text key={m}>{m}</Text>
      ))}
    </Flex>
  );
}
